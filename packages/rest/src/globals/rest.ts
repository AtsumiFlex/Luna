import { URL } from "node:url";
import type { DiscordHeadersInfer } from "@luna/core";
import { API_BASE_URL, ApiVersions, AuthTypes } from "@luna/core";
import EventEmitter from "eventemitter3";
import type { Dispatcher } from "undici";
import { request } from "undici";

export type RestOptions = {
	version: ApiVersions;
};

export type RestMakeRequestOptions<T> = {
	body?: Dispatcher.DispatchOptions["body"];
	headers?: Record<keyof DiscordHeadersInfer, string>;
	method: Dispatcher.DispatchOptions["method"];
	path: string;
	query?: Dispatcher.DispatchOptions["query"];
	type?: T;
};

export class Rest extends EventEmitter {
	private readonly _baseUrl = API_BASE_URL;

	public constructor(public readonly token: string, public options?: Partial<RestOptions>) {
		super();
	}

	private get _url() {
		const version = this.options?.version ?? ApiVersions.V10;
		return new URL(`${this._baseUrl}/${version}`);
	}

	private get _headers(): Pick<DiscordHeadersInfer, "Authorization" | "Content-Type" | "User-Agent"> {
		return {
			Authorization: `${AuthTypes.Bot} ${this.token}`,
			"Content-Type": "application/json",
			// Remplacez l'URL par l'URL de votre projet si disponible
			"User-Agent": `DiscordBot (https://yourwebsite.com, v${ApiVersions.V10})`,
		};
	}

	public async makeRequest<T>(options: RestMakeRequestOptions<T>): Promise<T> {
		try {
			const response = await request(`${this._url}${options.path}`, {
				headers: {
					...this._headers,
					...options.headers,
				},
				...Object.fromEntries(Object.entries(options).filter(([key]) => key !== "path")),
			});

			return await response.body.json() as T;
		} catch (error) {
			this.emit("error", error);
			throw error;
		}
	}
}
