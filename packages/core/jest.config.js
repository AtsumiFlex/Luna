/**
 * @type {import("@jest/types").Config.InitialOptions}
 */
module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	testMatch: ["**/test/**/*.test.ts"],
	moduleFileExtensions: ["ts", "js", "json", "node"],
	transform: { "^.+\\.ts$": "ts-jest" },
	globals: { "ts-jest": { tsconfig: "tsconfig.json" } },
};
