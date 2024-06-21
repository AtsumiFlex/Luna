const path = require('node:path');
const process = require('node:process');

module.exports = {
    root: true,
    extends: ["neon/common", "neon/node", "neon/typescript"],
    parserOptions: {
        project: path.resolve(process.cwd(), "tsconfig.json")
    },
    ignorePatterns: ["**/dist/*"]
}