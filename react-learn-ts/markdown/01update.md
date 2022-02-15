### 关于React组件更新笔记

[一、组件生命周期]()
> 挂载
1. constructor(): 
   - react组件挂载前，类组件被实例化，首先调用他的构造函数
   - 不能在此调用setState,可直接初始化state
   - **避免将 props 的值复制给 state,毫无必要**
2. static getDerivedStateFromProps(nextProps, nextState)：
   - 在初始挂载和组件更新阶段都会被调用
   - 必须返回一个对象来更新state
   - 无法访问组件实例this
3. render:
   - 返回UI描述
4. componentDidMount:
   - 组件被挂载
   - 调用setState,会触发额外渲染，此渲染发生在上一次挂载阶段浏览器更新屏幕之前。
   - **应谨慎在此使用setState，会导致性能问题。**

> 更新
1. static getDerivedStateFromProps(nextProps, nextState)：
   - 可以在更新阶段依据当前props修改state返回。
2. shouldComponentUpdate(nextProps, nextState):
   - 默认返回true, 返回false可阻止更新流程
   - 返回false,阻止组件自身render, componentDidUpdate;并阻止子组件更新流程getDerivedStateFromProps，shouldComponentUpdate，render componentDidUpdate
   - 组件自身调用setState无论state结果是否改变，均会引起组件更新流程，但更新流程并不一定导致浏览器dom更新，react会根据render返回UI描述进行diff，实现有真正变化部分更新dom。
   - 父组件传入props无论是否变化，父组件更新均会导致子组件更新。
3. render()
4. getSnapshotBeforeUpdate(prevProps, prevState):
   - 在最近一次渲染输出（提交到 DOM 节点）之前调用
   - 它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）
   - 此生命周期的任何返回值将作为参数传递给 componentDidUpdate()
5. componentDidUpdate(prevProps, prevState, snapshot)
   - 更新后立即调用
   - 最后一个参数为getSnapshotBeforeUpdate返回值。
   - **可以在此使用setState，但必须被包裹在条件语句，否则将导致死循环**

> 卸载
1. componentWillUnmount()
   - 执行必要的清理操作，例如，清除 timer，取消网络请求或清除在 componentDidMount() 中创建的订阅等

> 错误处理
1. static getDerivedStateFromError()
2. componentDidCatch()



[二、]()