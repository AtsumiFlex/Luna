const {resolve} = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
    root: true,
    extends: [
        "neon/common",
        "neon/browser",
        "neon/node",
        "neon/typescript",
        "neon/react",
        "neon/next",
        "neon/edge"
    ],
    settings: {
        react: {
            version: "detect"
        }
    },
    parserOptions: {
        project: project
    },
    ignorePatterns: ["**/dist/*"],
    rules: {
        "react/react-in-jsx-scope": 0,
        "react/jsx-filename-extension": [1, {extensions: [".tsx"]}]
    }
}