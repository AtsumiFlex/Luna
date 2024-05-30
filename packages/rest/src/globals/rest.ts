import { URL } from "node:url";
import type { DiscordHeadersInfer } from "@luna/core";
import { API_BASE_URL, ApiVersions, AuthTypes } from "@luna/core";
import EventEmitter from "eventemitter3";
import type { Dispatcher } from "undici";
import { request } from "undici";

export type RestOptions = {
	version: ApiVersions;
};

export type RestMakeRequestOptions = Dispatcher.DispatchOptions & {
	path: string;
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

	public async makeRequest(options: RestMakeRequestOptions) {
		try {
			const response = await request(`${this._url}${options.path}`, {
				headers: {
					...this._headers,
					...options.headers,
				},
				...Object.fromEntries(Object.entries(options).filter(([key]) => key !== "path")),
			});

			if (response.statusCode >= 200 && response.statusCode < 300) {
				return await response.body.json();
			} else {
				const errorBody = await response.body.text();
				new Error(`Request failed with status code ${response.statusCode}: ${errorBody}`);
			}
		} catch (error) {
			this.emit("error", error);
			throw error;
		}
	}
}
