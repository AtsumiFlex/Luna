import type {
	ApplicationRoleConnectionMetadataStructureInfer,
	ApplicationStructureInfer,
	SnowflakeInfer,
} from "@lunajs/core";
import type { RestMakeRequestOptions } from "../globals/rest";
import type { EditCurrentApplicationJSONInfer } from "../pipes/applications";
import { EditCurrentApplicationJSON } from "../pipes/applications";

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
 * @see {@link https://discord.com/developers/docs/resources/application#edit-current-application}
 */
export function EditCurrentApplication(json: EditCurrentApplicationJSONInfer): RestMakeRequestOptions<ApplicationStructureInfer> {
	return {
		method: "PATCH",
		path: "/applications/@me",
		body: JSON.stringify(EditCurrentApplicationJSON.parse(json)),
	};
}
