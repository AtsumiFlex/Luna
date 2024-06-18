import { ApiVersions } from "@lunajs/core";
import { Gateway } from "@lunajs/ws";

const gateway = new Gateway("", {
	v: ApiVersions.V10,
	encoding: "json",
	intents: 513,
	properties: {
		os: "linux",
		browser: "lunajs",
		device: "lunajs",
	},
});
gateway.on("DEBUG", console.log);
gateway.on("ERROR", console.error);

gateway.connect();
