
### create-react-app搭建记录

> Eslint+Prettier集成

create-react-app已经安装eslint，我们只需要再集成进入prettier即可

##### 1.安装依赖

- prettier: prettier基础包
- eslint-config-prettier: 解决Eslint与prettier冲突，本质就是禁用掉了一些不必要的以及和 Prettier 相冲突的 ESLint 规则。
- eslint-plugin-prettier: 这个插件的主要作用就是将 prettier 作为 ESLint 的规则来使用，相当于代码不符合 Prettier 的标准时，会报一个 ESLint 错误

通常eslint-config-prettier配合eslint-plugin-prettier来使用，eslint-config-prettier仅仅只是将部分 ESLint 规则给禁用了，避免 Prettier 格式化之后的代码导致 ESLint 报错而已；eslint-plugin-prettier则是将prettier作为eslint的一个规则来使用。

##### 2. 配置

- 删除package.json中的eslintConfig属性
- 项目根目录新建.eslintrc和.eslintignore文件
- 项目根目录新建.prettierrc和.prettierignore文件

```js
// .eslintignore
/build
/config
/node_modules
/public
/scripts
```

```js
// .eslintrc.js
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "react-app",
    "react-app/jest",
    // "prettier"  1
    // 复合写
    "plugin:prettier/recommended",
  ],
  // plugins: ["prettier"] 2 1和2可以采用上方复合写
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'prettier/prettier': 'warn',
  }
};
```

```js
// .prettierignore
/build
/config
/node_modules
/public
/scripts
```

```js
// .prettierrc
{
  "semi": true,
  "trailingComma": "none",
  "singleQuote": true,
  "printWidth": 120,
  "useTabs": false,
  "tabWidth": 2,
  "bracketSpacing": true,
  "arrowParens": "always",
  "proseWrap": "preserve",
  "htmlWhitespaceSensitivity": "css",
  "endOfLine": "auto"
}

```

> editorconfig

项目根目录新建.editorconfig文件

```js
#表示是最顶层的配置文件，发现设为true时，才会停止查找.editorconfig文件
root = true

#设置换行符，值为lf、cr和crlf
end_of_line = lf

#是否将行尾空格自动删除
trim_trailing_whitespace = true

#设为true表示使文件以一个空白行结尾
insert_final_newline = true

# 对于以下文件，设置文件字符集为utf-8
[*.{js,css,html,vue,ts,tsx,less,scss}]
charset = utf-8

#设置缩进风格(tab是硬缩进，space为软缩进)
indent_style = space

#用一个整数定义的列数来设置缩进的宽度，如果indent_style为tab，则此属性默认为tab_width
indent_size = 2
```

> 添加路径别名

##### 1. 前提执行npm run eject命令，暴露webpack相关配置
##### 2. 在config/webpack/webpack.config.js文件中搜索alias
```js
alias: {
  // Support React Native Web
  // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
  'react-native': 'react-native-web',
  // Allows for better profiling with ReactDevTools
  ...(isEnvProductionProfile && {
    'react-dom$': 'react-dom/profiling',
    'scheduler/tracing': 'scheduler/tracing-profiling',
  }),
  ...(modules.webpackAliases || {}),
  // 文件路径别名
  '@': path.resolve(__dirname, '../src')
},
```


> typescript配置路劲别名

在tsconfig.json文件中，compilerOptions选项中新增
```js
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "src/*"
      ]
    },
  }
}
```

> 使用sass/scss

##### 项目中安装所需要依赖包即可

npm install node-sass sass-loader --save-dev