module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "airbnb-base",
        "airbnb-typescript/base",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module",
        "project": "./tsconfig.json",
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "@typescript-eslint/no-explicit-any": 2,
        "max-lines-per-function": ["error", { "max": 50 }],
        "@typescript-eslint/explicit-function-return-type": "error",
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/no-non-null-assertion": "error",
        "@typescript-eslint/no-var-requires": "off",
        "class-methods-use-this": "off",
        "no-console": 0,
        "padding-line-between-statements": [
            'warn',
                 {blankLine: 'always', prev: '*', next: ['if', 'for', 'while', 'switch']},
                 {blankLine: 'always', prev: '*', next: 'return'},
                 {blankLine: 'always', prev: ['const', 'let'], next: '*'},
                 {blankLine: 'always', prev: '*', next: ['const', 'let']},
                 {blankLine: 'any', prev: ['const', 'let'], next: ['export', 'const', 'let']},
               ],
           
    },
    "ignorePatterns": [
        "node_modules/",
        "build/",
        "webpack.config.js" ,
        "webpack.prod.config.js",
        "webpack.dev.config.js",
        ".eslintrc.js"
      ],
    
};
  