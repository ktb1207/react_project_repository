### 关于typescript学习环境配置
---

[一、安装]()
npm install -g typescript
[二、创建工程文件夹]()
+ 1. 新建typescript-study-project
+ 2. 项目初始化npm init

[三、文件编译]()
文件编译有两种方式：
+ 1. 手动编译
   + 1. 新建hello.ts
   + 2. 终端执行tsc hello.ts,此时会编译hello.ts文件并生成一个hello.js文件
   + 3. 运行结果，执行node hello.js

[四、自动编译]()
在项目根目录下创建一个ts配置文件tsconfig.json

+ 1. tsc --init
+ 2. 配置
```json
{
  // 编译选项,在compilerOptions中包含多个子选项，用来完成对编译的配置
  "compilerOptions": {
    "target": "es6", // 设置ts代码编译的目标版本。
    "module": "es6", // 设置编译后代码使用的模块化系统。
    "strict": true, // 启用所有的严格检查
    "jsx": "preserve",
    "importHelpers": true,
    "moduleResolution": "node",
    "experimentalDecorators": true,
    "skipLibCheck": true,
    // 默认情况下null和undefined是所有类型的子类型。 就是说你可以把null和undefined赋值给其它类型的变量。
    // 当你指定了strictNullChecks标记，null和undefined只能赋值给void和它们各自
    "strictNullChecks": true,
    // 不允许变量或函数参数具有隐式any类型。
    "noImplicitAny": true,
    // 不允许this上下文隐式定义
    "noImplicitThis": false,
    // 规则将对bind, call, apply更严格地检测类型。
    "strictBindCallApply": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    // 编译自动生成声明文件
    "declaration": true,
    "sourceMap": true, // 编译创建sourcemap
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "src/*"
      ]
    },
    "lib": [
      "esnext",
      "dom",
      "dom.iterable",
      "scripthost"
    ],
    "outDir": "dist", // 编译后文件所在的目录。
    "rootDir": "./src" // 指定编译代码的根目录
  },
  // 定义需要编译文件所在的目录。
  "include": [
    "src/*.ts"
  ],
  // 定义不需要编译文件所在的目录。
  "exclude": [
    "node_modules",
    "dist"
  ]
}

```
+ 3.用watch来动态检测ts文件的改变并自动编译：tsc -w
说明：
执行上述文件后我们可以发现进入了watch模式, 当我们在该模式下,对src中的ts文件进行了修改并保存,其会自动执行tsc命令更新.ts文件对应的.js文件,如果有报错也会在命令行中显示.