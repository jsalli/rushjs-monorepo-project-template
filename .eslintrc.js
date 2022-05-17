module.exports = {
	env: {
		es6: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2019,
		sourceType: 'module',
		ecmaFeatures: {
			impliedStrict: true,
		},
		project: ['./packages/*/tsconfig.eslint.json'],
	},
	ignorePatterns: ['**/.eslintrc.js'],
	plugins: ['anti-trojan-source', 'import', '@typescript-eslint'],
	reportUnusedDisableDirectives: true,
	root: true,
	rules: {
		'anti-trojan-source/no-bidi': 'error',
		'arrow-parens': ['off'],
		'brace-style': ['off', 'stroustrup'],
		'consistent-return': 'error',
		curly: ['error', 'multi-line', 'consistent'],
		'eol-last': 'error',
		'linebreak-style': ['error', 'unix'],
		'new-parens': 'error',
		'no-console': 'off',
		'no-constant-condition': ['warn', { checkLoops: false }],
		'no-caller': 'error',
		'no-debugger': 'warn',
		'no-dupe-class-members': 'off',
		'no-else-return': 'warn',
		'no-empty': ['warn', { allowEmptyCatch: true }],
		'no-eval': 'error',
		'no-ex-assign': 'warn',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-floating-decimal': 'error',
		'no-implicit-coercion': 'error',
		'no-implied-eval': 'error',
		// Turn off until fix for: https://github.com/typescript-eslint/typescript-eslint/issues/239
		'no-inner-declarations': 'off',
		'no-lone-blocks': 'error',
		'no-lonely-if': 'error',
		'no-loop-func': 'error',
		'no-multi-spaces': 'error',
		'no-return-assign': 'error',
		'no-return-await': 'warn',
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-template-curly-in-string': 'warn',
		'no-throw-literal': 'error',
		'no-unmodified-loop-condition': 'warn',
		'no-unneeded-ternary': 'error',
		'no-use-before-define': 'off',
		'no-useless-call': 'error',
		'no-useless-catch': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-concat': 'error',
		'no-useless-rename': 'error',
		'no-useless-return': 'error',
		'no-var': 'error',
		'no-with': 'error',
		'one-var': ['error', 'never'],
		'prefer-arrow-callback': 'error',
		'prefer-const': [
			'error',
			{
				destructuring: 'all',
				ignoreReadBeforeAssign: false,
			},
		],
		'prefer-numeric-literals': 'error',
		'prefer-object-spread': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		quotes: [
			'error',
			'single',
			{ avoidEscape: true, allowTemplateLiterals: true },
		],
		// Turn off until fix for: https://github.com/eslint/eslint/issues/11899
		'require-atomic-updates': 'off',
		semi: ['error', 'always'],
		'semi-style': ['error', 'last'],
		'sort-imports': [
			'error',
			{
				ignoreCase: true,
				ignoreDeclarationSort: true,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
			},
		],
		yoda: 'error',
		'import/export': 'off',
		'import/extensions': ['error', 'never'],
		'import/named': 'off',
		'import/namespace': 'off',
		'import/newline-after-import': 'warn',
		'import/no-cycle': 'off',
		'import/no-dynamic-require': 'error',
		'import/no-default-export': 'error',
		'import/no-self-import': 'error',
		'import/no-unresolved': ['warn', { ignore: ['vscode', '@env'] }],
		'import/order': [
			'warn',
			{
				alphabetize: { order: 'asc', caseInsensitive: true },
				groups: [
					'builtin',
					'external',
					'internal',
					['parent', 'sibling', 'index'],
				],
				// "groups": ["builtin", "external", "internal", ["index", "sibling", "parent"]],
				'newlines-between': 'never',
			},
		],
		'@typescript-eslint/ban-types': [
			'error',
			{
				extendDefaults: false,
				types: {
					String: {
						message: 'Use string instead',
						fixWith: 'string',
					},
					Boolean: {
						message: 'Use boolean instead',
						fixWith: 'boolean',
					},
					Number: {
						message: 'Use number instead',
						fixWith: 'number',
					},
					Symbol: {
						message: 'Use symbol instead',
						fixWith: 'symbol',
					},
					// "Function": {
					// 	"message": "The `Function` type accepts any function-like value.\nIt provides no type safety when calling the function, which can be a common source of bugs.\nIt also accepts things like class declarations, which will throw at runtime as they will not be called with `new`.\nIf you are expecting the function to accept certain arguments, you should explicitly define the function shape."
					// },
					Object: {
						message:
							'The `Object` type actually means "any non-nullish value", so it is marginally better than `unknown`.\n- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.\n- If you want a type meaning "any value", you probably want `unknown` instead.',
					},
					'{}': {
						message:
							'`{}` actually means "any non-nullish value".\n- If you want a type meaning "any object", you probably want `object` or `Record<string, unknown>` instead.\n- If you want a type meaning "any value", you probably want `unknown` instead.',
						fixWith: 'object',
					},
					// "object": {
					// 	"message": "The `object` type is currently hard to use ([see this issue](https://github.com/microsoft/TypeScript/issues/21732)).\nConsider using `Record<string, unknown>` instead, as it allows you to more easily inspect and use the keys."
					// }
				},
			},
		],
		'@typescript-eslint/consistent-type-assertions': [
			'error',
			{
				assertionStyle: 'as',
				objectLiteralTypeAssertions: 'allow-as-parameter',
			},
		],
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-member-accessibility': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off', // TODO@eamodio revisit
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'variable',
				format: ['camelCase', 'PascalCase'],
				leadingUnderscore: 'allow',
				filter: {
					regex: '^_$',
					match: false,
				},
			},
			{
				selector: 'variableLike',
				format: ['camelCase'],
				leadingUnderscore: 'allow',
				filter: {
					regex: '^_$',
					match: false,
				},
			},
			{
				selector: 'memberLike',
				modifiers: ['private'],
				format: ['camelCase'],
				leadingUnderscore: 'allow',
			},
			{
				selector: 'memberLike',
				modifiers: ['private', 'readonly'],
				format: ['camelCase', 'PascalCase'],
				leadingUnderscore: 'allow',
			},
			{
				selector: 'memberLike',
				modifiers: ['static', 'readonly'],
				format: ['camelCase', 'PascalCase'],
			},
			{
				selector: 'interface',
				format: ['PascalCase'],
				custom: {
					regex: '^I[A-Z]',
					match: false,
				},
			},
		],
		'@typescript-eslint/no-duplicate-imports': 'error',
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-empty-interface': 'error',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-floating-promises': 'error',
		'@typescript-eslint/no-inferrable-types': [
			'warn',
			{ ignoreParameters: true, ignoreProperties: true },
		],
		'@typescript-eslint/no-misused-promises': [
			'error',
			{ checksVoidReturn: false },
		],
		'@typescript-eslint/no-namespace': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-parameter-properties': 'off',
		'@typescript-eslint/no-unnecessary-condition': 'off',
		'@typescript-eslint/no-unsafe-argument': 'off',
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-unsafe-call': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'off',
		'@typescript-eslint/no-unsafe-return': 'off',
		'@typescript-eslint/no-unused-expressions': [
			'warn',
			{ allowShortCircuit: true },
		],
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{
				args: 'none',
				argsIgnorePattern: '^_',
				ignoreRestSiblings: true,
				varsIgnorePattern: '^_$',
			},
		],
		'@typescript-eslint/no-use-before-define': 'off',
		'@typescript-eslint/prefer-nullish-coalescing': 'off',
		'@typescript-eslint/prefer-optional-chain': 'warn',
		'@typescript-eslint/restrict-template-expressions': [
			'error',
			{
				allowAny: true,
				allowBoolean: true,
				allowNumber: true,
				allowNullish: true,
			},
		],
		'@typescript-eslint/strict-boolean-expressions': [
			'warn',
			{
				allowString: true,
				allowNumber: true,
				allowNullableObject: false,
				allowNullableBoolean: true,
				allowNullableNumber: true,
				allowNullableString: true,
				allowAny: false,
			},
		],
		'@typescript-eslint/unbound-method': 'off', // Too many bugs right now: https://github.com/typescript-eslint/typescript-eslint/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+unbound-method
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
			},
		},
	},
};
