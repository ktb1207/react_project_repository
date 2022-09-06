### redux 相关面试题

> 1. redux 中间件的原理是什么？

- 改装 dispatch
- 中间件即中间，谁和谁的中间，redux 中间件是指 dispatch 与 store 之间。默认情况下，dispatch 提交 action 到 store，而中间件即在 dispatch 提交 action 到达 store 之前，改装 dispatch
- 默认情况下，action 只能是对象，如在使用了 redux-thunk 中间件，action 可以为一个函数

redux-thunk 中间件源码分析

```js
// 外层
function createThunkMiddleware(extraArgument) {
  // 第一层，接受store.dispatch,store.getState,返回一个函数
  return function ({ dispatch, getState }) {
    // 第二层，接受名为next的参数，返回一个函数
    return function (next) {
      // 第三层，接受名为action参数
      return function (action) {
        // 判断传入action类型
        if (typeof action === 'function') {
          // 是一个函数则调用它，并传入dispatch,getState,
          return action(dispatch, getState, extraArgument);
        }
        // 不是函数，走第二层函数，调用经下一个中间件（在compose中为之前的中间件）改造后的dispatch方法（本层洋葱壳的下一层），并传入action
        return next(action);
      };
    };
  };
}

let thunk = createThunkMiddleware();
// 支持在调用applyMiddleware并传入thunk的时候时候可以不直接传入thunk本身，而是先调用包裹了thunk的函数(第一层柯里化的父函数)并传入需要的额外参数，再将该函数调用的后返回的值(也就是真正的thunk)传给applyMiddleware，从而实现对额外参数传入的支持
// 使用：const store = createStore(reducer, applyMiddleware(thunk.withExtraArgument({api, whatever})))；
thunk.withExtraArgument = createThunkMiddleware;
// 无需参数：const store = createStore(reducer, applyMiddleware(thunk))；
export default thunk;
```

applyMiddlware 串联和执行流程：

```js
export default createStore(reducer, applyMiddleware(middleware1, middleware2, middleware3));
```

- applyMiddlware 内部的 compose 串联中间件时，顺序是从右至左，middleware3 被包裹在了最里面，它内部含有对原始的 store.dispatch 的调用
- middleware3 最开始接收真正的 store.dispatch 作为入参，并返回改造的的 dispatch 函数作为入参传给 middleware2,这个改造后的函数内部包含有对原始 store.dispatch 的调用.
- 依次内推知道从右到左走完所有的中间件。整个过程就像是给原始的 store.dispatch 方法套上了一层又一层的壳子，最后得到了一个类似于洋葱结构的东西-`中间件`
- 中间件执行流程：当我们在业务代码中 dispatch 一个 action 时
- middleware1-3 的执行顺序是从左至右的，因为最后被包裹的中间件，将被最先执行(洋葱结构)

> 2. 你会把数据统一放到 redux 中管理，还是将共享数据放到 redux 进行管理？

把数据统一放到 redux 进行管理比较好，优点：

- 数据问题易于检查，相比与在 state,props,redux 使用三个地方进行存放数据，统一存放在 redux 中系统，应用数据问题易于排查。
- 组件可扩展性，如一个数据，组件现在自己用，将来其他组件也使用。
