# Prettier Config Documentation

> Documentation for the `@aviene/prettier-config` module.

## Usage

```sh
npm install -D @aviene/prettier-config
```

And reference it in your _.prettierrc.js_ file:

```js
module.exports = require('@aviene/prettier-config')
```

Or you can of course choose your preffered way of using configs:

<details>
<summary><i>package.json</i></summary>

```json
{
  // ...
  "prettier": "@aviene/prettier-config"
}
```

</details>
<details>
<summary><i>.prettierrc</i> or <i>.prettierrc.json</i></summary>

```json
{
  "extends": ["@aviene/prettier-config"]
}
```

</details>

_Note: If you are using `prettier` < v1.17 check [this note](#Prettier-version)._

## Extending

To extend the current options you will need to create a _.prettierrc.js_ and add the following:

```js
module.exports = {
  ...require('@aviene/prettier-config'),

  // Add custom options bellow:
  useTabs: true,
}
```

## Notes

### Prettier version

Versions of `prettier` prior to v1.17 did not feature the possibility to use a shared config via _package.json_. The way to do it is similar to when [extending](#Extending), except that you can just export the config directly:

```js
// .prettierrc.js

module.exports = require('@aviene/prettier-config')
```

## More

- [Prettier Documentation](https://prettier.io/docs/en/index.html)