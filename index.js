module.exports = {
	env: {
		browser: true,
		node: true,
		'jest/globals': true
	},

	extends: [
		'standard',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:vue/recommended'
	],

	plugins: [
		'vue',
		'jest'
	],

	settings: {
		'import/resolver': {
			node: { extensions: ['.js', '.mjs'] }
		}
	},

	rules: {
		// Enforce import order
		'import/order': 2,

		// Imports should come first
		'import/first': 2,

		// Other import rules
		'import/no-mutable-exports': 2,

		// Allow unresolved imports
		'import/no-unresolved': 0,

		// Allow paren-less arrow functions only when there's no braces
		'arrow-parens': [2, 'as-needed', { requireForBlockBody: true }],

		// Allow async-await
		'generator-star-spacing': 0,

		// Allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
		'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
		'no-unused-vars': 1,

		// Prefer const over let
		'prefer-const': [2, {
			'destructuring': 'any',
			'ignoreReadBeforeAssign': false
		}],

		// No single if in an 'else' block
		'no-lonely-if': 2,

		// Force curly braces for control flow,
		// including if blocks with a single statement
		curly: [2, 'all'],

		// No async function without await
		'require-await': 2,

		// Force dot notation when possible
		'dot-notation': 2,

		'no-var': 2,

		// Use tab indentation
		'no-tabs': 0,
		'indent': [2, 'tab'],

		// Use comma dongle on multiline
		'comma-dangle': ['error', 'always-multiline'],

		// Do not allow console.logs etc...
		'vue/no-parsing-error': [2, {
			'x-invalid-end-tag': false
		}],

		'vue/max-attributes-per-line': [2, {
			'singleline': 5
		}],

		'vue/html-indent': ['error', 'tab', {
			'attribute': 1,
			'baseIndent': 1,
			'closeBracket': 0,
			'alignAttributesVertically': true,
			'ignores': []
		}],

		'vue/html-self-closing': ['error', {
			'html': {
				'void': 'never',
				'normal': 'never',
				'component': 'never'
			},
			'svg': 'any',
			'math': 'always'
		}],

		'vue/attributes-order': ['error', {
			'order': [
				'DEFINITION',
				'LIST_RENDERING',
				'CONDITIONALS',
				'RENDER_MODIFIERS',
				'GLOBAL',
				'UNIQUE',
				'TWO_WAY_BINDING',
				'OTHER_DIRECTIVES',
				'OTHER_ATTR',
				'EVENTS',
				'CONTENT'
			]
		}],

		'vue/singleline-html-element-content-newline': 0,
	}
}
