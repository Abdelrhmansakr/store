/* eslint-disable indent */
// eslint-disable-next-line no-undef
module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {
        indent: ['error', 2],
        //   "linebreak-style": [
        //       "error",
        //       "unix"
        //   ],
        quotes: [
            'error',
            'single',
            {
                allowTemplateLiterals: true,
            },
        ],
        semi: ['error', 'always'],
        'no-multiple-empty-lines': [
            2,
            {
                max: 1,
                maxEOF: 0,
                maxBOF: 0,
            },
        ],
        'no-trailing-spaces': 'error',
        'import/no-extraneous-dependencies': 0,
        'no-console': 0,
        'no-var': 'error',
        'prefer-const': 'error',
    },
};