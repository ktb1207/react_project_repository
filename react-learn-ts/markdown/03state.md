### 关于 React 中 setState 使用注意

> 1. 在生命周期钩子函数和合成事件中，对同一个 state 属性值的多次调用 setState 修改会被合并为最后一次有效。

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

> 2. 通过使用原生事件绑定方法内部对同一个 state 属性值的多次调用 setState 修改，不会被合并。

```js
this.btnOne.current.addEventListener('click', () => {
  // stateOne初始为1
  this.setState({
    stateOne: this.state.stateOne + 1,
  });
  this.setState({
    stateOne: this.state.stateOne + 1,
  });
  this.setState({
    stateOne: this.state.stateOne + 1,
  });
  console.log(this.state.stateOne); // 4
});
```

> 3. setState()方法的执行有可能异步也有可能同步

- 在合成事件和生命周期内部为异步调用。
- 在原生绑定事件，setTimeout, setInterval(即使 setTimeout, setInterval 在合成事件内部)内部为同步调用。

> 4. 直接修改 state 值，值会改变，但不会触发 UI 更新

```js
// stateOne初始为1
handleClick() {
    // stateOne值被修改，但是不会更新UI
    this.state.stateOne += 1;
    this.setState({
      stateOne: this.state.stateOne + 1,
    });
}
// 最终结果：3
```

> 5. 获取 setState 之后 state 状态值

```js
// setState(stateChange, [callback]) stateChange为对象, callback是可选的回调函数, 在状态更新且界面更新后才执行
this.setState(
  {
    stateOne: this.state.stateOne + 1,
  },
  () => {
    console.log(this.state.stateOne);
  }
);
```

> 6. 不要依赖当前 state 或 props 直接修改 state

```js
// setState(updater, [callback]), updater为返回stateChange对象的函数: (state, props) => stateChange 接收的state和props被保证为最新的

// 错误示例
this.setState({
  stateOne: this.state.stateOne + 1,
});

// 正确示例
this.setState(
  (state, props) => ({
    stateOne: state.stateOne,
  }),
  () => {
    console.log('状态更新且界面更新后才执行');
  }
);
```
