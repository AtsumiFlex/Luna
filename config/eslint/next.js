const path = require('node:path');
const process = require('node:process');

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
        project: path.resolve(process.cwd(), "tsconfig.json")
    },
    ignorePatterns: ["**/dist/*"],
    rules: {
        "react/react-in-jsx-scope": 0,
        "react/jsx-filename-extension": [1, {extensions: [".tsx"]}]
    }
}