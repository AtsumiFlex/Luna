/** @type {import("eslint").Linter.Config} */
module.exports = {
	ignorePatterns: ["apps/**", "config/**", "packages/**"],
	extends: ["@lunajs/eslint-config/node.js"],
};
