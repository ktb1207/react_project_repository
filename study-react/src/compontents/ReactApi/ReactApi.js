import React, {Component} from 'react';
import './ReactApi.less';

class ReactApi extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render(){
    return (
      <div className="react-api">
        <ol>
          <li>
            <p><i>React.Component和React.PureComponent</i></p>
            <p>两个都用来定义react组件</p>
            <p>React.PureComponent 与 React.Component 几乎完全相同，但 React.PureComponent 通过prop和state的浅对比来实现 shouldComponentUpate()。</p>
            <p>此外,React.PureComponent 的 shouldComponentUpate() 会忽略整个组件的子级。请确保所有的子级组件也是”Pure”</p>
          </li>
          <li>
            <p><i>React.memo</i></p>
            <p>React.memo 为高阶组件。它与 React.PureComponent 非常相似，但只适用于函数组件，而不适用 class 组件。</p>
            <p>如果你的函数组件在给定相同 props 的情况下渲染相同的结果，那么你可以通过将其包装在 React.memo 中调用，以此通过记忆组件渲染结果的方式来提高组件的性能表现。</p>
            <p>React.memo 仅检查 props 变更。如果函数组件被 React.memo 包裹，且其实现中拥有 useState 或 useContext 的 Hook，当 context 发生变化时，它仍会重新渲染。</p>
          </li>
          <li>
            <p><i>React.createElement()</i></p>
            <p>Babel 会把 JSX 转译成一个名为 React.createElement() 函数调用。</p>
          </li>
          <li>
            <p><i>ReactDOM.render()</i></p>
            <p>
              ReactDOM.render是React的最基本方法用于将模板转为HTML语言，并插入指定的DOM节点。ReactDOM.render(template,targetDOM),该方法接收两个参数：
              第一个是创建的模板，多个dom元素外层需使用一个标签进行包裹；
              第二个参数是插入该模板的目标位置。
            </p>
          </li>
          <li>
            <p><i>{'<Fragment>'}</i></p>
            <p>
              React 中的一个常见模式是一个组件返回多个元素。Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点。
            </p>
          </li>
          <li>
            <p><i>React.createRef()</i></p>
            <p>（Refs）提供了一个获得DOM节点或者创建在render方法中的React元素的方法</p>
            <p>什么时候使用Refs：</p>
            <ol>
              <li>管理焦点、文本选择、媒体回放</li>
              <li>触发必要动画</li>
              <li>整合第三方DOM库</li>
            </ol>
            <p>创建Refs</p>
            <p>可以通过React.createRef()创建Refs并通过ref属性联系到React组件</p>
            <p>访问Refs：</p>
            <p>当一个ref通过render放入一个元素中，一个对节点的引用可以通过ref的current属性得到；</p>
            <p>{'const node = this.myRef.current;'}</p>
          </li>
          <li>
            <p><i>forwardRef</i></p>
            <p>引用传递（Ref forwading）是一种通过组件向子组件自动传递 引用ref 的技术</p>
            <p>
              核心方法是React.forwardRef,该方法接受一个有额外ref参数的react组件函数，不调用该方法，普通的组件函数是不会获得该参数的。
            </p>
            <p>
              如果子组件中用到了该方法，那么对应的高阶组件中也需要使用React.forwardRef方法
            </p>
          </li>
          <li>
            <p><i>React.lazy和Suspense</i></p>
            <p>React.lazy方法可以异步加载组件文件。</p>
            <p>React.lazy不能单独使用，需要配合React.suspense，suspence是用来包裹异步组件，添加loading效果等。</p>
            <p>React.lazy原理</p>
            <p>React.lazy使用import来懒加载组件，import在webpack中最终会调用requireEnsure方法，动态插入script来请求js文件，类似jsonp的形式。</p>
          </li>
          <li>
            <p><i>Context</i></p>
            <p>
              Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法。
            </p>
            <ol>
              <li>
                <p><i>React.createContext</i></p>
                <p>React.createContext：创建一个上下文的容器(组件), defaultValue可以设置共享的默认数据</p>
                <p>{'const {Provider, Consumer} = React.createContext(defaultValue);'}</p>
              </li>
              <li>
                <p><i>Context.Provider</i></p>
                <p>每个 Context 对象都会返回一个 Provider React 组件，它允许消费组件订阅 context 的变化。</p>
                <p>Provider 接收一个 value 属性，传递给消费组件。</p>
                <p>
                  当 Provider 的 value 值发生变化时，它内部的所有消费组件都会重新渲染。
                  Provider 及其内部 consumer 组件都不受制于 shouldComponentUpdate 函数，
                  因此当 consumer 组件在其祖先组件退出更新的情况下也能更新。
                </p>
              </li>
              <li>
                <p><i>Class.contextType</i></p>
                <p>挂载在 class 上的 contextType 属性会被重赋值为一个由 React.createContext() 创建的 Context 对象</p>
                <p>如果你正在使用实验性的 public class fields 语法，你可以使用 static 这个类属性来初始化你的 contextType。</p>
              </li>
              <li>
                <p><i>Context.Consumer</i></p>
                <p>React 函数组件也可以订阅到 context 变更。这能让你在函数式组件中完成订阅 context。</p>
              </li>
            </ol>
          </li>
          <li>
            <p><i>ReactDOM.createPortal</i></p>
            <p>Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案。</p>
            <p>{'ReactDOM.createPortal(child, container)'}</p>
            <p>第一个参数（child）是任何可渲染的 React 子元素，例如一个元素，字符串或 fragment。第二个参数（container）是一个 DOM 元素。</p>
          </li>
          
        </ol>
      </div>
    )
  }
}

export default ReactApi;