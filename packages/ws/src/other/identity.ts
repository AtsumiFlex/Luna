import { Integer } from "@lunajs/core";
import { z } from "zod";
import { PresenceUpdateFields } from "../events/presences";

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#identify-identify-connection-properties}
 */
export const GatewayIdentifyConnectionProperties = z.object({
	/**
	 * Your operating system
	 */
	os: z.string(),
	/**
	 * Your library name
	 */
	browser: z.string(),
	/**
	 * Your library name
	 */
	device: z.string(),
});

export type GatewayIdentifyConnectionPropertiesInfer = z.infer<typeof GatewayIdentifyConnectionProperties>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#identify-identify-structure}
 */
export const GatewayIdentifyStructure = z.object({
	/**
	 * Authentication token
	 */
	token: z.string(),
	/**
	 * Connection properties
	 */
	properties: GatewayIdentifyConnectionProperties,
	/**
	 * Whether this connection supports compression of packets
	 */
	compress: z.boolean().optional(),
	/**
	 * Value between 50 and 250, total number of members where the gateway will stop sending offline members in the guild member list
	 */
	large_threshold: Integer.min(50).max(250).optional(),
	/**
	 * Used for Guild Sharding
	 */
	shard: z.array(Integer).min(2).max(2).optional(),
	/**
	 * Presence structure for initial presence information
	 */
	presence: PresenceUpdateFields.optional(),
	/**
	 * Gateway Intents you wish to receive
	 */
	intents: Integer,
});

export type GatewayIdentifyStructureInfer = z.infer<typeof GatewayIdentifyStructure>;
