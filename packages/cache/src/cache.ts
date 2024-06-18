class CacheNode<K, V> {
	public prev: CacheNode<K, V> | null = null;

	public next: CacheNode<K, V> | null = null;

	public timestamp: number = Date.now();

	public constructor(public key: K, public value: V) {}
}

export class Cache<K, V> {
	private map: Map<K, CacheNode<K, V>> = new Map();

	private head: CacheNode<K, V> | null = null;

	private hits: number = 0;

	private misses: number = 0;

	private ttl: number | null = null;

	private tail: CacheNode<K, V> | null = null;

	private logging: boolean = false;

	public constructor(private limit?: number) {}

	public get size(): number {
		return this.map.size;
	}

	public get(key: K): V | undefined {
		const node = this.map.get(key);
		if (!node) {
			this.misses++;
			this.log(`Cache miss for key: ${key}`);
			return undefined;
		}

		if (this.isExpired(node)) {
			this.delete(key);
			this.misses++;
			this.log(`Cache miss for key: ${key}`);
			return undefined;
		}

		this.hits++;
		this.moveToFront(node);
		this.log(`Cache hit for key: ${key}`);
		return node.value;
	}

	public set(key: K, value: V): V {
		const node = this.map.get(key);
		if (node) {
			node.value = value;
			node.timestamp = Date.now();
			this.moveToFront(node);
			this.log(`Updated cache for key: ${key}, value: ${value}`);
			return value;
		}

		const newNode = new CacheNode(key, value);
		this.map.set(key, newNode);
		this.attach(newNode);

		if (this.limit && this.map.size > this.limit && this.tail) {
			this.map.delete(this.tail.key);
			this.detach(this.tail);
		}

		this.log(`Added cache for key: ${key}, value: ${value}`);
		return value;
	}

	public has(key: K): boolean {
		return this.map.has(key);
	}

	public delete(key: K): void {
		const node = this.map.get(key);
		if (!node) {
			return;
		}

		this.map.delete(key);
		this.detach(node);
		this.log(`Deleted cache for key: ${key}`);
	}

	public clear(): void {
		this.map.clear();
		this.head = null;
		this.tail = null;
		this.hits = 0;
		this.misses = 0;
		this.log("Cleared cache");
	}

	public getStats(): { hits: number; limit: number | undefined; misses: number; size: number; ttl: number | null; } {
		return {
			hits: this.hits,
			misses: this.misses,
			size: this.size,
			limit: this.limit,
			ttl: this.ttl,
		};
	}

	public setLogging(enabled: boolean): void {
		this.logging = enabled;
	}

	public setTTL(ttl: number | null): void {
		this.ttl = ttl;
		this.log(`Set TTL to: ${ttl}`);
	}

	public setLimit(limit: number): void {
		this.limit = limit;
		this.log(`Set limit to: ${limit}`);
	}

	public keys(): IterableIterator<K> {
		return this.map.keys();
	}

	public values(): IterableIterator<V> {
		return Array.from(this.map.values()).map((node) => node.value)[Symbol.iterator]();
	}

	public touch(key: K): boolean {
		const node = this.map.get(key);
		if (!node) {
			return false;
		}

		node.timestamp = Date.now();
		this.moveToFront(node);
		this.log(`Touched cache for key: ${key}`);
		return true;
	}

	public find(predicate: (key: K, value: V) => boolean): [K, CacheNode<K, V>] | undefined {
		const results = Array.from(this.map.entries()).find(([key, node]) => predicate(key, node.value));
		if (!results) {
			return undefined;
		}

		return results;
	}

	private isExpired(node: CacheNode<K, V>): boolean {
		if (!this.ttl) {
			return false;
		}

		return Date.now() - node.timestamp > this.ttl;
	}

	private moveToFront(node: CacheNode<K, V>): void {
		if (this.head === node) {
			return;
		}

		this.detach(node);
		this.attach(node);
	}

	private detach(node: CacheNode<K, V>): void {
		if (node.prev) {
			node.prev.next = node.next;
		} else {
			this.head = node.next;
		}

		if (node.next) {
			node.next.prev = node.prev;
		} else {
			this.tail = node.prev;
		}
	}

	private attach(node: CacheNode<K, V>): void {
		if (this.head) {
			this.head.prev = node;
			node.next = this.head;
		}

		this.head = node;
		if (!this.tail) {
			this.tail = node;
		}
	}

	private log(message: string): void {
		if (!this.logging) {
			return;
		}

		console.log(message);
	}
}
