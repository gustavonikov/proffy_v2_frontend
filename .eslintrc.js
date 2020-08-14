module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    rules: {
        'linebreak-style': ['off'],
        'object-curly-newline': ['off'],
        'react/jsx-indent': ['off'],
        'react/jsx-indent-props': ['off'],
        indent: ['warn', 4],
        'no-else-return': ['error', { allowElseIf: true }],
        'react/jsx-one-expression-per-line': ['off'],
        'react/no-array-index-key': ['off'],
        'no-console': ['off'],
        'no-return-assign': ['off'],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'import/extensions': ['error', 'never', {
            tsx: 'never',
            svg: 'never',
        }],
        "react/prop-types": ['off'],
        'max-len': ['warn', { 'code': 150}],
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
};
