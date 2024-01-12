module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}", "src/**/*.vue"],
      rules: { "vue/multi-word-component-names": "off" },
      parserOptions: {},
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    indent: ["error", 2, { SwitchCase: 1 }],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "no-unused-vars": "off",
    "no-console": "off",
    "no-debugger": "off",
  },
};
// .prettierrc.json 规则配置 后边将配置ESLint使用Prettier规则检查代码 以及怎么解决二者规则冲突的问题
