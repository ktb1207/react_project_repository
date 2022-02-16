### 关于React中setState使用注意

> 1. 在生命周期钩子函数和合成事件中，对同一个state属性值的多次调用setState修改会被合并为最后一次有效。

```js
// stateOne初始为1
componentDidMount(){
    this.setState({
      stateOne: this.state.stateOne + 1
    })
    this.setState({
      stateOne: this.state.stateOne + 2
    })
    // 合并执行最后一次修改，前面被忽略
    this.setState({
      stateOne: this.state.stateOne + 3
    })
}
```

> 2. 通过使用原生事件绑定方法内部对同一个state属性值的多次调用setState修改，不会被合并。

```js
this.btnOne.current.addEventListener('click', () => {
    // stateOne初始为1
    this.setState({
      stateOne: this.state.stateOne + 1
    })
    this.setState({
      stateOne: this.state.stateOne + 1
    })
    this.setState({
      stateOne: this.state.stateOne + 1
    })
    console.log(this.state.stateOne) // 4
})
```

> 3. setState()方法的执行有可能异步也有可能同步

- 在合成事件和生命周期内部为异步调用。
- 在原生绑定事件，setTimeout, setInterval(即使setTimeout, setInterval在合成事件内部)内部为同步调用。

4. 