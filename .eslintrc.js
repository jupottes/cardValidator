module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
    "semi": 1,
    "indent": [1, 2],
    "id-length": [1, { "exceptions": ["i", "j", "x"] }],
    "camelcase": 1,
    "keyword-spacing": 1,
    "space-infix-ops": 1,
    "comma-spacing": 1,
    "space-before-blocks": 1,
    "spaced-comment": 1,
    "key-spacing": 1,
    "no-multi-spaces": 1,
    "space-in-parens": 1,
    "space-before-function-paren": [1, "never"],
    "func-call-spacing": 1,
    "no-multiple-empty-lines": 1,
    "padded-blocks": [1, "never"],
    "quotes": [1, "single"],
    "no-floating-decimal": 1,
    "object-property-newline": 1,
    "brace-style": 1,
    "eqeqeq": 1,
    "no-array-constructor": 1
    }
};