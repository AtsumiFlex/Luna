const {resolve} = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
    root: true,
    extends: ["neon/common", "neon/node", "neon/typescript"],
    parserOptions: {
        project: project
    },
    ignorePatterns: ["**/dist/*"]
}