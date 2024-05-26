/** @type {import("eslint").Linter.Config} */
module.exports = {
	ignorePatterns: ["apps/**", "config/**", "packages/**"],
	extends: ["@luna/eslint-config/node.js"],
};
