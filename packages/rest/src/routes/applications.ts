import type {
	ApplicationRoleConnectionMetadataStructureInfer,
	ApplicationStructureInfer,
	SnowflakeInfer,
} from "@lunajs/core";
import { ApplicationFlagsEnum, ApplicationIntegrationTypesEnum, InstallParamsStructure } from "@lunajs/core";
import { z } from "zod";
import type { RestMakeRequestOptions } from "../globals/rest";

/**
 * @see {@link https://discord.com/developers/docs/resources/application-role-connection-metadata#get-application-role-connection-metadata-records}
 */
export function GetApplicationRoleConnectionMetadataRecords(applicationId: SnowflakeInfer): RestMakeRequestOptions<ApplicationRoleConnectionMetadataStructureInfer> {
	return {
		method: "GET",
		path: `/applications/${applicationId}/role-connections/metadata`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/application-role-connection-metadata#update-application-role-connection-metadata-records}
 */
export function UpdateApplicationRoleConnectionMetadataRecords(applicationId: SnowflakeInfer, json: Record<string, string>): RestMakeRequestOptions<ApplicationRoleConnectionMetadataStructureInfer> {
	return {
		method: "PATCH",
		path: `/applications/${applicationId}/role-connections/metadata`,
		body: JSON.stringify(json),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/application#get-current-application}
 */
export function GetCurrentApplication(): RestMakeRequestOptions<ApplicationStructureInfer> {
	return {
		method: "GET",
		path: "/applications/@me",
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/application#edit-current-application-json-params}
 */
export const EditCurrentApplicationJSON = z.object({
	/**
	 * Default custom authorization URL for the app, if enabled
	 */
	custom_install_url: z.string().optional(),
	/**
	 * Description of the app
	 */
	description: z.string().optional(),
	/**
	 * Role connection verification URL for the app
	 */
	role_connections_verification_url: z.string().optional(),
	/**
	 * Settings for the app's default in-app authorization link, if enabled
	 */
	install_params: InstallParamsStructure.optional(),
	/**
	 * In preview. Default scopes and permissions for each supported installation context. Value for each key is an integration type configuration object
	 */
	integration_types_config: z.record(z.string(), ApplicationIntegrationTypesEnum).optional(),
	/**
	 * App's public flags
	 */
	flags: ApplicationFlagsEnum.optional(),
	/**
	 * Icon for the app
	 */
	icon: z.string().optional().nullable(),
	/**
	 * Default rich presence invite cover image for the app
	 */
	cover_image: z.string().optional().nullable(),
	/**
	 * Interactions endpoint URL for the app
	 */
	interactions_endpoint_url: z.string().optional(),
	/**
	 * List of tags describing the content and functionality of the app (max of 20 characters per tag). Max of 5 tags.
	 */
	tags: z.array(z.string()).max(5).optional(),
});

export type EditCurrentApplicationJSONInfer = z.infer<typeof EditCurrentApplicationJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/application#edit-current-application}
 */
export function EditCurrentApplication(json: EditCurrentApplicationJSONInfer): RestMakeRequestOptions<ApplicationStructureInfer> {
	return {
		method: "PATCH",
		path: "/applications/@me",
		body: JSON.stringify(EditCurrentApplicationJSON.parse(json)),
	};
}
