import jsdoc from 'eslint-plugin-jsdoc';

/** @type {import("eslint").Linter.Config} */
const config = {
	plugins: {
		jsdoc
	},
	rules: {
		// Enforce a convention in the order of require() / import statements
		"import/order": "warn",

		// Enforces having an empty line after the last top-level import statement or require call
		"import/newline-after-import": "warn",

		// Ensures that access modifiers (`@private`, `@protected`, `@public`) are used correctly in JSDoc comments.
		'jsdoc/check-access': 'warn',

		// Checks that JSDoc block tags are aligned correctly (i.e., vertically aligned) in your code.
		'jsdoc/check-alignment': 'warn',

		// Validates the code examples within JSDoc comments to ensure they are syntactically correct and follow best practices.
		'jsdoc/check-examples': 'off',

		// Enforces consistent indentation in JSDoc comments, ensuring multi-line tags are indented properly.
		'jsdoc/check-indentation': 'off',

		// Ensures that the alignment of JSDoc block tags matches the alignment of the code that they describe.
		'jsdoc/check-line-alignment': 'off',

		// Verifies that parameter names in JSDoc comments match those in the function or method signature.
		'jsdoc/check-param-names': 'warn',

		// Ensures that property names in JSDoc comments match the property names in the associated object or class.
		'jsdoc/check-property-names': 'warn',

		// Ensures that the syntax of JSDoc comments adheres to the expected standards and rules.
		'jsdoc/check-syntax': 'off',

		// Ensures that JSDoc tag names are valid according to the JSDoc specification.
		'jsdoc/check-tag-names': 'warn',

		// Ensures that template parameter names in JSDoc comments match the names in the function or class.
		'jsdoc/check-template-names': 'off',

		// Verifies that types in JSDoc comments are valid according to the JSDoc specification.
		'jsdoc/check-types': 'warn',

		// Ensures that values described in JSDoc comments are valid and correctly typed.
		'jsdoc/check-values': 'warn',

		// Converts regular comments to JSDoc comments where applicable.
		'jsdoc/convert-to-jsdoc-comments': 'off',

		// Ensures that tags are not left empty in JSDoc comments.
		'jsdoc/empty-tags': 'warn',

		// Ensures that classes have an `@implements` tag if they implement an interface.
		'jsdoc/implements-on-classes': 'warn',

		// Ensures that `import` statements are correctly documented as dependencies in JSDoc comments.
		'jsdoc/imports-as-dependencies': 'off',

		// Verifies that informative JSDoc comments are used where necessary to explain complex code.
		'jsdoc/informative-docs': 'off',

		// Ensures that there is a blank line before JSDoc block tags.
		'jsdoc/lines-before-block': 'off',

		// Checks that the descriptions in JSDoc comments match certain patterns or rules.
		'jsdoc/match-description': 'off',

		// Ensures that the names in JSDoc comments match the corresponding code entities.
		'jsdoc/match-name': 'off',

		// Enforces consistent formatting of multiline JSDoc blocks.
		'jsdoc/multiline-blocks': 'warn',

		// Prevents the use of certain bad block tags in JSDoc comments.
		'jsdoc/no-bad-blocks': 'off',

		// Ensures that block descriptions in JSDoc comments are not left blank.
		'jsdoc/no-blank-block-descriptions': 'off',

		// Ensures that entire JSDoc blocks are not left blank.
		'jsdoc/no-blank-blocks': 'off',

		// Disallows the use of default values in JSDoc comments.
		'jsdoc/no-defaults': 'warn',

		// Ensures that certain syntax is not missing from JSDoc comments.
		'jsdoc/no-missing-syntax': 'off',

		// Prevents the use of multiple asterisks in the opening lines of JSDoc comments.
		'jsdoc/no-multi-asterisks': 'warn',

		// Disallows the use of restricted syntax in JSDoc comments.
		'jsdoc/no-restricted-syntax': 'off',

		// Disallows the use of type annotations in JSDoc comments where they are not needed.
		'jsdoc/no-types': 'off',

		// Ensures that undefined types are not referenced in JSDoc comments.
		'jsdoc/no-undefined-types': 'warn',

		// Ensures that the `@` symbol is prefixed to every asterisk in multiline JSDoc comments.
		'jsdoc/require-asterisk-prefix': 'off',

		// Requires that every JSDoc comment includes a description.
		'jsdoc/require-description': 'off',

		// Enforces the use of complete sentences in JSDoc descriptions.
		'jsdoc/require-description-complete-sentence': 'off',

		// Requires that JSDoc comments include an `@example` tag where applicable.
		'jsdoc/require-example': 'off',

		// Ensures that a file overview is provided in JSDoc comments at the top of files.
		'jsdoc/require-file-overview': 'off',

		// Requires a hyphen before the description of parameters in JSDoc comments.
		'jsdoc/require-hyphen-before-param-description': 'off',

		// Requires that JSDoc comments are present for functions, methods, and classes.
		'jsdoc/require-jsdoc': 'warn',

		// Ensures that `@param` tags are present and correctly formatted in JSDoc comments.
		'jsdoc/require-param': 'warn',

		// Requires that descriptions are provided for all `@param` tags in JSDoc comments.
		'jsdoc/require-param-description': 'warn',

		// Ensures that `@param` tags include the name of the parameter in JSDoc comments.
		'jsdoc/require-param-name': 'warn',

		// Requires that `@param` tags include the type of the parameter in JSDoc comments.
		'jsdoc/require-param-type': 'warn',

		// Ensures that `@property` tags are present and correctly formatted in JSDoc comments.
		'jsdoc/require-property': 'warn',

		// Requires that descriptions are provided for all `@property` tags in JSDoc comments.
		'jsdoc/require-property-description': 'warn',

		// Ensures that `@property` tags include the name of the property in JSDoc comments.
		'jsdoc/require-property-name': 'warn',

		// Requires that `@property` tags include the type of the property in JSDoc comments.
		'jsdoc/require-property-type': 'warn',

		// Ensures that `@returns` tags are present and correctly formatted in JSDoc comments.
		'jsdoc/require-returns': 'warn',

		// Ensures that return statements in functions and methods match the description in `@returns` tags.
		'jsdoc/require-returns-check': 'warn',

		// Requires that descriptions are provided for all `@returns` tags in JSDoc comments.
		'jsdoc/require-returns-description': 'warn',

		// Ensures that `@returns` tags include the type of the return value in JSDoc comments.
		'jsdoc/require-returns-type': 'warn',

		// Ensures that JSDoc comments include a `@template` tag where applicable.
		'jsdoc/require-template': 'off',

		// Requires that JSDoc comments include a `@throws` tag where exceptions are thrown.
		'jsdoc/require-throws': 'off',

		// Ensures that JSDoc comments include a `@yields` tag where a generator function is used.
		'jsdoc/require-yields': 'warn',

		// Ensures that yield statements in generator functions match the description in `@yields` tags.
		'jsdoc/require-yields-check': 'warn',

		// Requires that tags in JSDoc comments are sorted in a specific order.
		'jsdoc/sort-tags': 'off',

		// Enforces specific rules for the formatting of lines within JSDoc comments.
		'jsdoc/tag-lines': ['warn', 'always', { count: 1 }],

		// Ensures that text in JSDoc comments is correctly escaped where necessary.
		'jsdoc/text-escaping': 'off',

		// Validates that the types used in JSDoc comments are valid according to the JSDoc specification.
		'jsdoc/valid-types': 'warn',
	},
};

export default config;
