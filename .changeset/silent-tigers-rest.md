---
"@aviene/eslint-config-react": minor
"@aviene/eslint-config-base": minor
---

Fix compability issues between eslint v8 and v9 by using fixupPluginRules from the @eslint/compat package. When the packages support eslint v9 we should remove the usage of the @eslint/compat package.
