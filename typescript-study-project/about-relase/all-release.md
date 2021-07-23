### 关于typescript各个版本主要更新记录说明
---
[typescript1.3]()

> 新增点：

- 1. 类protected修饰符
- 2. 元组类型
[typescript1.4]()

> 新增点：

- 1. 联合类型
- 2. let
- 3. const
- 4. 模版字符串
- 5. 类型别名

[typescript1.5]()

> 新增点：

- 1. ES6 模块和命名空间区分
- 2. 类装饰器
[typescript1.6]()

> 新增点：

- 1. JSX 支持
- 2. 交叉类型A&B
- 3. 本地类型声明
- 4. 类表达式
- 5. abstract 抽象的抽象的 类和方法
- 6. 泛型别名

[typescript1.7]()

> 新增点：

- 1. 支持 async/await
- 2. ES7 幂运算符** 和 **=

[typescript1.8]()

> 新增点：

- 1. 类型参数约束
- 2. 控制流错误分析
- 3. 允许 tsconfig.json 中的注释
---
[typescript2.0]()

> 新增点：

- 1. Null和undefined类型
- 2. 非null和非undefined类型保护
- 3. 非空断言操作符 ！
- 4. never类型
- 5. 类或者接口的只读属性readonly修饰符
- 6. tsconfig.json支持文件通配符
- 7. 类的可选属性和方法
- 8. 类私有private和受保护的protected修饰

[typescript2.1]()

> 新增点：

- 1. keyof
- 2. 对象扩展运算符和rest运算符

[typescript2.2]()

> 新增点：

- 1. 支持在JSX子元素上使用扩展运算符
- 2. 支持混合类
- 3. object类型
- 4. 支持new.target

[typescript2.3]()

> 新增点：

- 1. ES5/ES3 的生成器和迭代支持
- 2. 泛型参数默认类型
- 3. --checkJS选项下 .js 文件中的错误

[typescript2.4]()

> 新增点：

- 1. 动态导入表达式
- 2. 字符串枚举
- 3. 弱类型（Weak Type）探测

[typescript2.5]()

> 新增点：

- 1. 可选的catch语句变量
- 2. 包去重和重定向

[typescript2.6]()

> 新增点：

- 1. @ts-ignore 注释隐藏 .ts 文件中的错误
- 2. 更快的 tsc --watch
- 3. 只写的引用现在会被标记未使用

[typescript2.7]()

> 新增点：

- 1. 常量名属性
- 2. 更严格的类属性检查
- 3. 显式赋值断言
- 4. 固定长度元组，具有不同元数的元组不再允许相互赋值
- 5. 数字分隔符

[typescript2.8]()

> 新增点：

- 1. 有条件类型
- 2. 默认声明，允许引用了声明的名称的初始化器出现在逻辑或的左边
- 3. 各文件的JSX工厂

[typescript2.9]()

> 新增点：

- 1. JSX元素里的泛型参数
- 2. 新的--resolveJsonModule

[typescript3.0]()

> 新增点：

- 1. 工程引用，允许tsconfig.json文件引用其它tsconfig.json文件
- 2. 元组类型里的可选元素
- 3. 新的unknown类型
- 4. 在JSX里支持defaultProps
[typescript3.1]()

> 新增点：

- 1. 函数上的属性声明,提供了在函数声明上定义属性的能力
- 2. 使用typesVersions选择版本

[typescript3.2]()

> 新增点：

- 1. strictBindCallApply
- 2. BigInt
- 3. tsconfig.json可以通过Node.js包来继承
- 4. --showConfig， 运行tsc --showConfig时，TypeScript计算生效的tsconfig.json并打印

[typescript3.3]()

> 新增点：

- 1. 在合复合工程中增量地检测文件的变化 --build --watch

[typescript3.4]()

> 新增点：

- 1. 使用 --incremental 标志加快后续构建
- 2. 改进 ReadonlyArray 和 readonly 元祖
- 3. const 断言
- 4. 对 globalThis 的类型检查

[typescript3.5]()

> 新增点：改进速度

- 1. 类型检查速度提升
- 2. 改进 --incremental
- 3. Omit 辅助类型
- 4. 更智能的联合类型检查

[typescript3.7]()

> 新增点：

- 1. 可选链 ?.
```js
let x = foo?.bar.baz();
```
- 2. 空值合并 ??
```js
let x = foo ?? bar();
```
- 3. 断言函数
- 4. --declaration,选项允许我们从 TypeScript 源文件（诸如 .ts 和 .tsx 文件）生成 .d.ts 文件（声明文件）
- 5. --allowJs,选项允许混合使用 TypeScript 和 JavaScript 文件。
- 6. // @ts-nocheck,允许我们在 TypeScript 文件的顶部添加一行,注释来关闭语义检查

[typescript3.8]()

> 新增点：

- 1. 类型导入和导出
- 2. 类私有变量
```js
class Person {
    #name: string

    constructor(name: string) {
        this.#name = name;
    }

    greet() {
        console.log(`Hello, my name is ${this.#name}!`);
    }
}
```
- 3. export * as ns 语法
```js
import * as utilities from "./utilities.js";
export { utilities };
```
- 4. 顶层await
- 5. JSDoc 属性修饰词

[typescript3.9]()

> 新增点：

- 1. 速度优化
- 2. // @ts-expect-error 注释,当一行代码带有// @ts-expect-error注释时，TypeScript不会提示上例的错误；
- 3. 在JavaScript中自动导入CommonJS模块

[typescript4.0]()

> 新增点：

- 1. 可变参元组类型
- 2. 标签元组元素
- 3. 从构造函数中推断类属性
- 4. 断路赋值运算符
```js
a = a && b;
a = a || b;
a = a ?? b;
```
- 5. catch语句中的unknown类型
- 6. 自定义JSX工厂
- 7. 对启用了--noEmitOnError的`build模式进行速度优化,当启用了--noEmitOnError时，前一次失败构建的信息不会被缓存到.tsbuildinfo文件中。
- 8. 重写了TypeScript官网

[typescript4.1]()