import { URL } from "node:url";
import type { DiscordHeadersInfer } from "@lunajs/core";
import { API_BASE_URL, ApiVersions, AuthTypes } from "@lunajs/core";
import EventEmitter from "eventemitter3";
import type { Dispatcher } from "undici";
import { request } from "undici";

export type RestMakeRequestOptions = Dispatcher.DispatchOptions & {
	headers?: Record<keyof DiscordHeadersInfer, string>;
	path: string;
};

export class Rest extends EventEmitter {
	public constructor(public readonly token: string, private readonly options?: Partial<{
		version: ApiVersions;
	}>) {
		super();
	}

	public get url() {
		const version = this.options?.version ?? ApiVersions.V10;
		return new URL(`${API_BASE_URL}/v${version}`);
	}

	private get headers(): Pick<DiscordHeadersInfer, "Authorization" | "Content-Type" | "User-Agent"> {
		return {
			Authorization: `${AuthTypes.Bot} ${this.token}`,
			"Content-Type": "application/json",
			"User-Agent": "DiscordBot ()",
		};
	}

	public async makeRequest<T>(options: RestMakeRequestOptions): Promise<T> {
		const url = new URL(options.path, this.url);
		const response = await request(url.toString(), {
			headers: {
				...this.headers,
				...options.headers,
			},
			...Object.fromEntries(Object.entries(options).filter(([key]) => key !== "headers" && key !== "path")),
		});

		return await response.body.json() as T;
	}
}
