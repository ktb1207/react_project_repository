### 说明

##### 支持功能
1. sass

2. less
less-loader 存在高版本不兼容问题
- npm uninstall less-loader --save-dev
- npm install less-loader@5.0.0 --save-dev

3. css module

4. 添加环境变量dotenv-cli
- npm start开发环境
- npm run build:dev打包开发环境
- npm run build:test打包测试环境
- npm run build:pro打包生产环境

5. 路径别名@:src

6. editorconfig

7. prettier

8. eslint

9. ie仅支持11

10. babel-import-plugin antd按需引入

---
#####[一、登录流程处理]()
1.store 保存登录状态，localStorge保存登录token；
2.登录页获取store登录状态，未登录显示当前登录页面，已登录重定向平台首页；
3.系统进入，App判断登录状态，修改store登录状态值
4.高阶组件包装需要登录权限页面，未登录状态重定向登录页面；