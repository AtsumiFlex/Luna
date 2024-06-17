import { Integer } from "@lunajs/core";
import { z } from "zod";
import { ActivityStructure } from "../events/presences";

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#update-presence-status-types}
 */
export enum GatewayPresenceUpdateStatusTypes {
	AwayFromKeyboard = "idle",
	DoNotDisturb = "dnd",
	Invisible = "invisible",
	Offline = "offline",
	Online = "online",
}

export const GatewayPresenceUpdateStatusTypesEnum = z.nativeEnum(GatewayPresenceUpdateStatusTypes);

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#update-presence-gateway-presence-update-structure}
 */
export const GatewayPresenceUpdateStructure = z.object({
	/**
	 * Unix time (in milliseconds) of when the client went idle, or null if the client is not idle
	 */
	since: Integer.nullable(),
	/**
	 * User's activities
	 */
	activities: z.array(ActivityStructure),
	/**
	 * User's new status
	 */
	status: GatewayPresenceUpdateStatusTypesEnum,
	/**
	 * Whether or not the client is afk
	 */
	afk: z.boolean(),
});

export type GatewayPresenceUpdateStructureInfer = z.infer<typeof GatewayPresenceUpdateStructure>;
