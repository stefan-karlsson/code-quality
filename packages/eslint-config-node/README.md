# @aviene/eslint-config-node

> Configuration for Node.js projects.

## Installation

```sh
npm install -D @aviene/eslint-config-node
```

## Rulesets

- `'@aviene/eslint-config-node'`: A generic ruleset that focuses on code correctness
- `'@aviene/eslint-config-node/optional'`: Addiitonal ruleset that might provide useful tips and hints how to improve your code
- `'@aviene/eslint-config-node/style'`: Ruleset that focuses solely on code style (indentation, spacing, naming, syntax preference etc.)

## Usage

```js
// eslint.config.mjs
import node from '@aviene/eslint-config-node'
import optional from '@aviene/eslint-config-node/optional'
import style from '@aviene/eslint-config-node/style'
// Just to help us re-use the same globs multiple times
const globs = {
  js: '**/*.js',
}

/** @type {Array<import("eslint").Linter.Config>} */
const config = [
  { files: [globs.js], ...node },
  { files: [globs.js], ...optional },
  { files: [globs.js], ...style },
  // Any custom settings to be applied
  { files: [globs.js],
    languageOptions: { ecmaVersion: 2023 },
  },
]

export default config
```