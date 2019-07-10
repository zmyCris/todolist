module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true,
        "mocha": true
    },
    "plugins": [],
    // recommend rules - 96
    "extends": "eslint:recommended",
    "parser": "esprima",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "linebreak-style": ["off", "unix"],
        "indent": ["off", 4],
        // Stylistic Issues
        // "quotes": ["warn", "single"],
        "keyword-spacing": ["warn", {
            "before": true,
            "after": true
        }],
        "semi": ["warn", "always"],
        // Best Practices
        "array-callback-return": ["warn"],
        "block-scoped-var": ["warn"],
        "default-case": ["warn"],
        "eqeqeq": ["warn", "smart"],
        "guard-for-in": ["warn"],
        "no-alert": ["warn"],
        "no-else-return": ["warn", {
            "allowElseIf": true
        }],
        "no-eval": ["warn"],
        "no-empty-pattern": ["error"],
        "no-extend-native": ["warn"],
        "no-labels:": ["off"],
        "require-await": ["warn"],
        // Possible Errors
        "no-console": ["warn", {
            allow: ["warn", "error"]
        }],
        "valid-jsdoc": ["warn", {
            requireReturn: false,
            requireParamDescription: false,
            requireReturnDescription: false
        }],
        // ECMAScript 6
        "no-var": ["warn"],
        "arrow-body-style": ["warn", "as-needed"],
        "arrow-spacing": ["warn", {
            "before": true,
            "after": true
        }],
        // Node.js and CommonJS
        "no-process-env": ["warn"],
        "no-use-before-define": ["warn", {
            "functions": true,
            "classes": true
        }],
    }
};