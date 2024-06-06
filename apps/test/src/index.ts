import { ApiVersions } from "@lunajs/core";
import { Gateway } from "@lunajs/ws";

const gateway = new Gateway("", {
	v: ApiVersions.V10,
	encoding: "json",
});
gateway.on("message", (data) => {
	console.log("message", data.toString());
});
gateway.on("close", (error, reason) => {
	console.error("disconnect", error, reason);
});
gateway.on("error", (error) => {
	console.log("error", error);
});
gateway.on("debug", (message) => {
	console.log("debug", message);
});

