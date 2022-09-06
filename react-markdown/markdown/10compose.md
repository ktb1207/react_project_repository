### compose 

函数调用扁平化，即把层级嵌套的函数调用扁平化

```js
const fn1 = (x) => x+1;
const fn2 = (x) => x + 3;
// 普通嵌套调用
const result = fn2(fn1(7));

// compose
const result2 = compose(fn1,fn2)(7);
```

```js
// compose接受执行函数，返回一个函数接受调用参数
function compose(...func) {
    // func 函数参数集合
    // 返回一个接受参数函数
    return function proxy(...args) {
      // args参数
      const funLen = func.length;
      if (funLen === 0) {
        // 一个函数都不需要执行，直接返回args
        return args;
      }
      if (funLen === 1) {
        // 只有一个函数，直接调用返回结果
        return func[0](...args)
      }
      // 如果给出的参数集合是两个及以上，把前一个函数的执行结果赋给后一个函数，数组reduce
      return func.reduce((x,y) => {
        // 第一次执行的时候，参数x是个函数，之后再执行的时候x是个函数执行的结果，所以需要进行判断
        return typeof x === 'function'? y(x(...args)) : y(x)
      })
    }
  }
```