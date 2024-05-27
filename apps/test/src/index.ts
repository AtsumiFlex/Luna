import type { UserStructureInfer } from "@luna/core";
import { Locales, UserStructure } from "@luna/core";

const x: UserStructureInfer = {
	global_name: "undefined",
	id: "123456789012345678",
	username: "example",
	discriminator: "1234",
	avatar: "123456789012345678",
	bot: false,
	system: false,
	mfa_enabled: false,
	locale: Locales.ChineseChina,
	verified: true,
};
const parse = UserStructure.parse(x);
console.log(parse);
