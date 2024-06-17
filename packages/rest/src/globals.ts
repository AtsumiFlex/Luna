import type { DiscordHeadersInfer } from "@lunajs/core";
import type { Dispatcher } from "undici";

export type RESTMakeRequestOptions = Omit<Dispatcher.DispatchOptions, "headers"> & {
	headers?: Partial<DiscordHeadersInfer>;
	path: string;
};
