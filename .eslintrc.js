module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:react/recommended", "standard"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "space-before-function-paren": [
      "error",
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "always"
      }
    ],
    quotes: ["error", "double"],
    "arrow-parens": ["error", "always"],
    "no-unused-vars": 1,
    "react/prop-types": 0,
    "no-console": 1,
    "multiline-ternary": 0,
    "react/jsx-uses-react": 0,
    "react/react-in-jsx-scope": 0
    // indent: [
    //   "error",
    //   2,
    //   { offsetTernaryExpressions: false } // This rule appears to be broken https://github.com/eslint/eslint/issues/14058
    // ]
  }
}
