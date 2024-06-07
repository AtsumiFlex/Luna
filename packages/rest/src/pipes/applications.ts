import { ApplicationFlagsEnum, ApplicationIntegrationTypesEnum, InstallParamsStructure } from "@lunajs/core";
import { z } from "zod";

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
