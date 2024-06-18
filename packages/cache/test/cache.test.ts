import { setTimeout } from "node:timers";
import { Cache } from "../src";

describe("Cache", () => {
	let cache: Cache<string, number>;

	beforeEach(() => {
		cache = new Cache<string, number>(3);
		cache.setLogging(false);
	});

	test("should set and get values", () => {
		cache.set("a", 1);
		cache.set("b", 2);
		expect(cache.get("a")).toBe(1);
		expect(cache.get("b")).toBe(2);
	});

	test("should return undefined for missing keys", () => {
		expect(cache.get("missing")).toBeUndefined();
	});

	test("should remove the least recently used item when limit is exceeded", () => {
		cache.set("a", 1);
		cache.set("b", 2);
		cache.set("c", 3);
		cache.set("d", 4);
		expect(cache.get("a")).toBeUndefined();
		expect(cache.get("b")).toBe(2);
		expect(cache.get("c")).toBe(3);
		expect(cache.get("d")).toBe(4);
	});

	test("should update the value of an existing key", () => {
		cache.set("a", 1);
		cache.set("a", 2);
		expect(cache.get("a")).toBe(2);
	});

	test("should delete a key", () => {
		cache.set("a", 1);
		cache.delete("a");
		expect(cache.get("a")).toBeUndefined();
	});

	test("should clear the cache", () => {
		cache.set("a", 1);
		cache.set("b", 2);
		cache.clear();
		expect(cache.get("a")).toBeUndefined();
		expect(cache.get("b")).toBeUndefined();
	});

	test("should get cache stats", () => {
		cache.set("a", 1);
		cache.get("a");
		cache.get("b");
		const stats = cache.getStats();
		expect(stats.hits).toBe(1);
		expect(stats.misses).toBe(1);
		expect(stats.size).toBe(1);
	});

	test("should handle TTL correctly", () => {
		cache.setTTL(100);
		cache.set("a", 1);
		expect(cache.get("a")).toBe(1);
		setTimeout(() => {
			expect(cache.get("a")).toBeUndefined();
		}, 150);
	});

	test("should not expire items if TTL is not set", () => {
		cache.set("a", 1);
		setTimeout(() => {
			expect(cache.get("a")).toBe(1);
		}, 150);
	});

	test("should enable and disable logging", () => {
		console.log = jest.fn();
		cache.setLogging(true);
		cache.set("a", 1);
		expect(console.log).toHaveBeenCalledWith("Added cache for key: a, value: 1");
		cache.setLogging(false);
		cache.set("b", 2);
		expect(console.log).not.toHaveBeenCalledWith("Added cache for key: b, value: 2");
	});

	test("should set and respect the new limit", () => {
		cache.set("a", 1);
		cache.set("b", 2);
		cache.set("c", 3);
		cache.setLimit(2);
		expect(cache.size).toBe(2);
		cache.set("d", 4);
		expect(cache.get("a")).toBeUndefined();
		expect(cache.get("b")).toBeUndefined();
		expect(cache.get("c")).toBe(3);
		expect(cache.get("d")).toBe(4);
	});

	test("should return all keys as an iterator", () => {
		cache.set("a", 1);
		cache.set("b", 2);
		cache.set("c", 3);
		const keys = Array.from(cache.keys());
		expect(keys).toEqual(["a", "b", "c"]);
	});

	test("should return all values as an iterator", () => {
		cache.set("a", 1);
		cache.set("b", 2);
		cache.set("c", 3);
		const values = Array.from(cache.values());
		expect(values).toEqual([1, 2, 3]);
	});

	test("should touch a key and move it to front", () => {
		cache.set("a", 1);
		cache.set("b", 2);
		cache.set("c", 3);
		cache.touch("a");
		cache.set("d", 4);
		expect(cache.get("b")).toBeUndefined();
		expect(cache.get("a")).toBe(1);
		expect(cache.get("c")).toBe(3);
		expect(cache.get("d")).toBe(4);
	});

	test("should find a key based on a predicate", () => {
		cache.set("a", 1);
		cache.set("b", 2);
		cache.set("c", 3);
		const result = cache.find((key, value) => value === 2);
		expect(result).toEqual(["b", expect.any(Object)]);
		if (result) {
			const [key, node] = result;
			expect(key).toBe("b");
			expect(node.value).toBe(2);
		}
	});

	test("should return undefined if no key matches the predicate", () => {
		cache.set("a", 1);
		cache.set("b", 2);
		cache.set("c", 3);
		const result = cache.find((key, value) => value === 4);
		expect(result).toBeUndefined();
	});
});
