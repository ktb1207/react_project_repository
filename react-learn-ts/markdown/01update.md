### 关于 React 组件更新笔记

[一、组件生命周期]()

> 挂载

1. constructor():
   - react 组件挂载前，类组件被实例化，首先调用他的构造函数
   - 不能在此调用 setState,可直接初始化 state
   - **避免将 props 的值复制给 state,毫无必要**
2. static getDerivedStateFromProps(nextProps, nextState)：
   - 在初始挂载和组件更新阶段都会被调用
   - 必须返回一个对象来更新 state
   - 无法访问组件实例 this
3. render:
   - 返回 UI 描述
4. componentDidMount:
   - 组件被挂载
   - 调用 setState,会触发额外渲染，此渲染发生在上一次挂载阶段浏览器更新屏幕之前。
   - **应谨慎在此使用 setState，会导致性能问题。**

> 更新

1. static getDerivedStateFromProps(nextProps, nextState)：
   - 可以在更新阶段依据当前 props 修改 state 返回。
2. shouldComponentUpdate(nextProps, nextState):
   - 默认返回 true, 返回 false 可阻止更新流程
   - 返回 false,阻止组件自身 render, componentDidUpdate;并阻止子组件更新流程 getDerivedStateFromProps，shouldComponentUpdate，render componentDidUpdate
   - 组件自身调用 setState 无论 state 结果是否改变，均会引起组件更新流程，但更新流程并不一定导致浏览器 dom 更新，react 会根据 render 返回 UI 描述进行 diff，实现有真正变化部分更新 dom。
   - 父组件传入 props 无论是否变化，父组件更新均会导致子组件更新。
3. render()
4. getSnapshotBeforeUpdate(prevProps, prevState):
   - 在最近一次渲染输出（提交到 DOM 节点）之前调用
   - 它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）
   - 此生命周期的任何返回值将作为参数传递给 componentDidUpdate()
5. componentDidUpdate(prevProps, prevState, snapshot)
   - 更新后立即调用
   - 最后一个参数为 getSnapshotBeforeUpdate 返回值。
   - **可以在此使用 setState，但必须被包裹在条件语句，否则将导致死循环**

> 卸载

1. componentWillUnmount()
   - 执行必要的清理操作，例如，清除 timer，取消网络请求或清除在 componentDidMount() 中创建的订阅等

> 错误处理

1. static getDerivedStateFromError()
2. componentDidCatch()

[二、旧组件生命周期]()

react 自 16.4 版本对组件生命周期做了改版设计，移除 componentWillMount, componentWillReceiveProps, componentWillUpdate 共 3 个生命周期钩子函数。

> 1. componentWillReceiveProps

父组件更新 render 函数被调用，render 里面被渲染的子组件就会被更新。

- `不管父组件传递子组件props是否变化，都会触发子组件componentWillReceiveProps钩子函数执行`
- `组件自身调用this.setState()引起的更新不会触发componentWillReceiveProps钩子执行`
