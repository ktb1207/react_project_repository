# Getting Started with Create React App

react mobile 项目概括
采用官方脚手架 create-react-app 扩充配置

## Available Scripts

In the project directory, you can run:

### `npm start`

启动开发环境

### `npm test`

启动测试环境

### `npm run build`

生产环境打包

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

#配置说明

## 项目采用 typescript 语言进行项目配置

1.配置文件 tsconfig.json
2.eslintrc.js
3.prettierrc.js
4.editorconfig

##环境区分配置
1.npm install dotenv-cli --save-dev 2.项目根目录新建 .env.development,.env.production,.env.test，三个文件依次是开发环境，生产环境，测试环境
3.package.json 修改 script 命令

## css 配置

1.npm install node-sass 支持 sass 预编译
2.npm install less less-loader --save-dev 支持 less 预编译
3.npm install postcss-pxtorem --save-dev 采用 px-rem 支配

## 路径别名配置

@：src

## 引入 fastlick.js 解决移动端 click 延迟
