### 关于 react-redux 使用总结

react-redux 在 v7.1.0 中新增了 hook api 以支持 react 函数组件获取 redux 状态

> 1. hook api useSelector 用法：

```js
const result: any = useSelector(selector: Function, equalityFn?: Function)
```

- 在单个函数组件中可以多次调用 useSelector
- 每次调用 useSelector()都会创建一个对 Redux 存储的单独订阅
- React Redux v7 中使用的 React `更新批处理行为`，导致 useSelector()同一组件中的多个 s 返回新值的调度操作应该只导致一次重新渲染
- 参数 selector 函数的返回值即 useSelector 返回值，可以返回任何值作为结果;
  - 如果返回值为 state 对象，则函数组件未使用的 store 中数据发生变化，函数组件也会被更新渲染；
  - 如果返回值为简单值，则函数组件中未使用的 store 中数据发生变化，函数组件不会参与更新。
- 每当 store 数据发生变化，useSelector 将对之前的返回结果和现在的返回结果做比较，如果他们不同组件将重新渲染，如果前后返回值相等，则组件不会被渲染更新。
- useSelector()默认情况下使用严格===的引用相等检查，而不是浅相等。这与 class 组件使用 connect()不同，后者使用对调用结果的浅层相等性检查 mapState 来确定是否需要重新渲染。
- 可以使用 react-redux 提供的 shallowEqual 函数作为第二个参数函数，进行浅比较。

> 2. hook api useDispatch 用法

这个钩子从 Redux 存储中返回对 store.dispatch 函数的引用
