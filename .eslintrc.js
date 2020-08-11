module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2020: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 11,
    },
    rules: {
        'linebreak-style': ['off'],
        'object-curly-newline': ['off'],
        'react/jsx-indent': ['off'],
        'react/jsx-indent-props': ['off'],
        indent: ['error', 4],
        'no-else-return': ['error', { allowElseIf: true }],
        'react/jsx-one-expression-per-line': ['off'],
        'react/no-array-index-key': ['off'],
        'no-console': ['off'],
        'no-return-assign': ['off'],
        // "react/prop-types": ['off']
    },
};
