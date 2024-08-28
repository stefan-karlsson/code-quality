# @aviene/eslint-config-react

> Configuration for React projects.

## Installation

```sh
npm install -D @aviene/eslint-config-react
```

## Rulesets

- `'@aviene/eslint-config-react'`: A generic ruleset that focuses on code correctness
- `'@aviene/eslint-config-react/optional'`: Addiitonal ruleset that might provide useful tips and hints how to improve your code
- `'@aviene/eslint-config-react/style'`: Ruleset that focuses solely on code style (indentation, spacing, naming, syntax preference etc.)

## Usage

```js
// eslint.config.mjs
import react from '@aviene/eslint-config-react'
import optional from '@aviene/eslint-config-react/optional'
import style from '@aviene/eslint-config-react/style'
// Just to help us re-use the same globs multiple times
const globs = {
  jsx: '**/*.jsx',
}

/** @type {Array<import("eslint").Linter.Config>} */
const config = [
  { files: [globs.jsx], ...react },
  { files: [globs.jsx], ...optional },
  { files: [globs.jsx], ...style },
  // Any custom settings to be applied
  { files: [globs.jsx],
    languageOptions: { ecmaVersion: 2023, ecmaFeatures: { jsx: true } },
  },
]

export default config
```