module.exports = {
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module'
    },
    extends: ["eslint:recommended"],
    // prettier 插件 可以关闭和eslint冲突的那些规则 走自己的风格规则
    plugins: ["prettier"],
    rules: {
        "no-unused-vars": "off",
        // 如果不符合prettier的规范的话 辉报错 进行错误提示
        "prettier/prettier": ["error", { endOfLine: "auto" }]
    },
    env: { node: true }
}