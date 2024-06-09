import type { RestOptions } from "@lunajs/rest";
import { CDN, Rest } from "@lunajs/rest";
import { Gateway, type GatewayConnectURLQueryInfer } from "@lunajs/ws";
import { z } from "zod";

export type ClientOptions = {
	rest?: Partial<RestOptions>;
	ws: GatewayConnectURLQueryInfer;
};

export class Client {
	public cdn = CDN;

	public constructor(public token: string, public options: ClientOptions) {}

	public get rest() {
		return new Rest(this.token, this.options.rest);
	}

	public get ws() {
		return new Gateway(this.token, this.options.ws);
	}
}

export const ClientSchema = z.instanceof(Client);

export { ApplicationRoleConnectionMetadataType, ApplicationRoleConnectionMetadataTypeEnum } from "@lunajs/core";
