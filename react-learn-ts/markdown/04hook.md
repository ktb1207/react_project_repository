### React hook使用记录

> 1. hook简介

hook是react16.8版本新增特性，在不编写class的情况下使用state、模拟使用生命周期等特性。
- 无需修改组件结构的情况下复用状态逻辑
- 将组件中相互关联的逻辑部分合理组织
- 非class情况下可以使用更多react特性。

> 2. hook强制规则

- 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。
- 只能在 React 的函数组件中调用 Hook(和自定义Hook中)。不要在其他 JavaScript 函数中调用。

> 3. useState

```js
const [num, addNum] = useState(0);
```
- react会在函数组件更新渲染时保留state状态值
- 更新函数addNum不会把新state和旧state进行合并，在对象类型值时候需要注意。
- 在合成事件处理函数中，多次调用更新函数addNum会被合并为最后一次执行，这点与this.setState()表现一致
```js
const handleClick = () => {
    addNum(num+1);
    addNum(num+1);
    addNum(num+1);
    addNum(num+4); // 仅此处执行
}
```
- 更新state需要依赖上一次state值
```js
addNum((preNum) => preNum + 1);
```

> 4. useEffect

`副作用`：React 组件中执行过数据获取、订阅或者手动修改过 DOM等这些操作称为“副作用”

提供了在class组件中componentDidMount、componentDidUpdate、componentWillUnmount相同的用途。

- 默认情况下，React会在每次渲染后调用副作用函数。
- 副作用函数通过返回一个函数来指定如何清除副作用，类似componentWillUnmount
- 组件更新，跳过useEffect进行性能优化
```js
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // 仅在 count 更改时更新

// react将对前一次渲染的count值和更新渲染的count进行比较，如果前后cont值相等，则跳过副作用函数执行，从而实现性能优化。

// 如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（[]）作为第二个参数。
// 如果你传入了一个空数组（[]），effect 内部的 props 和 state 就会一直持有其初始值。
```
- 副作用的执行时机，与 componentDidMount、componentDidUpdate 不同的是，在浏览器完成布局与绘制之后，传给 useEffect 的函数会延迟调用。

> 5. useContext

函数组件可以访问context
```js
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  // useContext
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}
```

> 6. useReducer

useState的高级方案替代, useReducer 是用于提高应用性能的，当更新逻辑比较复杂时，我们应该考虑使用useReducer
```js
const [state, dispatch] = useReducer(reducer, initialArg, init);
```

```js
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
```

useReducer 和 redux 的区别:
- useReducer 是 useState的代替方案，用于 state 复杂变化
- useReducer 是单个组件状态管理，组件通讯还需要 props
- redux 是全局状态管理，多组件共享数据

使用reducer场景：
- 如果你的state是一个数组或者对象

- 如果你的state变化很复杂，经常一个操作需要修改很多state

举例：login
```js
// useState
 function LoginPage() {
        const [name, setName] = useState(''); // 用户名
        const [pwd, setPwd] = useState(''); // 密码
        const [isLoading, setIsLoading] = useState(false); // 是否展示loading，发送请求中
        const [error, setError] = useState(''); // 错误信息
        const [isLoggedIn, setIsLoggedIn] = useState(false); // 是否登录

        const login = (event) => {
            event.preventDefault();
            setError('');
            setIsLoading(true);
            login({ name, pwd })
                .then(() => {
                    setIsLoggedIn(true);
                    setIsLoading(false);
                })
                .catch((error) => {
                    // 登录失败: 显示错误信息、清空输入框用户名、密码、清除loading标识
                    setError(error.message);
                    setName('');
                    setPwd('');
                    setIsLoading(false);
                });
        }
        return ( 
            //  返回页面JSX Element
        )
    }
```

```js
// useReducer
    const initState = {
        name: '',
        pwd: '',
        isLoading: false,
        error: '',
        isLoggedIn: false,
    }
    function loginReducer(state, action) {
        switch(action.type) {
            case 'login':
                return {
                    ...state,
                    isLoading: true,
                    error: '',
                }
            case 'success':
                return {
                    ...state,
                    isLoggedIn: true,
                    isLoading: false,
                }
            case 'error':
                return {
                    ...state,
                    error: action.payload.error,
                    name: '',
                    pwd: '',
                    isLoading: false,
                }
            default: 
                return state;
        }
    }
    function LoginPage() {
        const [state, dispatch] = useReducer(loginReducer, initState);
        const { name, pwd, isLoading, error, isLoggedIn } = state;
        const login = (event) => {
            event.preventDefault();
            dispatch({ type: 'login' });
            login({ name, pwd })
                .then(() => {
                    dispatch({ type: 'success' });
                })
                .catch((error) => {
                    dispatch({
                        type: 'error'
                        payload: { error: error.message }
                    });
                });
        }
        return ( 
            //  返回页面JSX Element
        )
    }
```

> 7. useCallback

把内联回调函数及依赖项数组作为参数传入useCallback，返回回调函数的`缓存引用`；

该`缓存引用`回调函数仅在某个依赖项改变时才会更新。

`主要场景`：把返回`缓存`函数传递给经过React.memo()优化的函数组件，使用`引用相等性`去避免非必要更新。

```js
// child
import React, { memo } from 'react'

const ChildComp = memo(function ({ name, onClick }) {
  console.log('render child-comp ...')
  return <>
    <div>Child Comp ... {name}</div>
    <button onClick={() => onClick('hello')}>改变 name 值</button>
  </>
})

```
```js
// parent 01
function ParentComp () {
  const [ count, setCount ] = useState(0)
  const increment = () => setCount(count + 1)

  const [ name, setName ] = useState('hi~')
  // 父组件更新渲染时会创建一个新的函数
  // 即传给子组件的 onClick 属性发生了变化，导致子组件渲染；
  // 导致React.memo()包裹的子组件不必要更新
  const changeName = (newName) => setName(newName)  

  return (
    <div>
      <button onClick={increment}>点击次数：{count}</button>
      <ChildComp name={name} onClick={changeName}/>
    </div>
  );
}
```
```js
// parent 02
import React, { useCallback } from 'react'

function ParentComp () {
  // ...
  const [ name, setName ] = useState('hi~')
  // 每次父组件渲染，返回的是同一个函数引用
  // useCallback() 起到了缓存的作用，即便父组件渲染了，useCallback() 包裹的函数也不会重新生成，会返回上一次的函数引用。
  const changeName = useCallback((newName) => setName(newName), [])  

  return (
    <div>
      <button onClick={increment}>点击次数：{count}</button>
      <ChildComp name={name} onClick={changeName}/>
    </div>
  );
}
```

> 8. useMemo

把“创建”函数和依赖项数组作为参数传入 useMemo，它仅会在某个依赖项改变时才重新计算 memoized 值

- 传入 useMemo 的函数会在渲染期间执行。
- 请不要在这个函数内部执行与渲染无关的操作即副作用。
- 如果没有提供依赖项数组，useMemo 在每次渲染时都会计算新的值。

返回`缓存`值。
```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

`主要场景`：当父组件向子组件通过prop传递引用型数据类型，可使用useMemo()包裹返回引用型数据的`缓存引用`，仅在依赖项改变时才会返回新引用值，结合子组件使用React.memo()来实现非必要子组件更新，以实现性能优化，

```js
// parent
function ParentComp () {
  // ....
  const [ name, setName ] = useState('hi~')
  const [ age, setAge ] = useState(20)
  const changeName = useCallback((newName) => setName(newName), [])
  const info = useMemo(() => ({ name, age }), [name, age])   // 包一层

  return (
    <div>
      <button onClick={increment}>点击次数：{count}</button>
      <ChildComp info={info} onClick={changeName}/>
    </div>
  );
}
```

> 9. useRef

```js
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

> 10. useLayoutEffect

其函数签名与 useEffect 相同，但它会在所有的 DOM 变更之后(浏览器渲染之前)同步调用 effect。

- useLayoutEffect 与 componentDidMount、componentDidUpdate 的调用阶段是一样的, 都会阻塞浏览器渲染。
- 建议将修改 DOM 的操作里放到 useLayoutEffect 里，而不是 useEffect，
   + 通过 useLayoutEffect 可以拿到最新的 DOM 节点，并且在此时对 DOM 进行样式上的修改只有一次回流、重绘的代价。
   + 放在 useEffect 里，useEffect 的函数会在组件渲染到屏幕之后执行，此时对 DOM 进行修改，会触发浏览器再次进行回流、重绘，增加了性能上的损耗。
