module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  env: {
    es6: true,
    // browser: true,
    // node: true
  },
  ecmaFeatures: {
    modules: true,
    spread: true,
    restParams: true
  },
  parser: "@babel/eslint-parser",
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["@comps", "./src/comps"],
          ["@styles", "./src/styles"],
          ["@images", "./src/images"],
          ["@styles", "./src/styles"],
          ["@fonts", "./src/fonts"],
          ["@hooks", "./src/hooks"],
          ["@utils", "./src/utils"],
          ["@configs", "./src/configs"],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json']
      },
    },
  }
};