### 关于react中使用context注意事项

Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法。


- 它是可以穿透React.memo、React.PureComponent或者shouldComponentUpdate的比对的，也就是说，一旦 Context 的 Value 变动，所有依赖该 Context 的组件会全部 强制更新。