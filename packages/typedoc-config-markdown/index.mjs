import baseConfig from '@aviene/typedoc-config-base';


/** @type {import('typedoc').TypeDocOptions} */
export default {
  ...baseConfig,
  plugin: ['typedoc-plugin-markdown']
}