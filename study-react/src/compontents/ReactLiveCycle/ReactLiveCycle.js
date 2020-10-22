import React, { Component } from 'react';
import './ReactLiveCycle.less';

class ReactLiveCycle extends Component {
  constructor (props) {
    super(props)
    this.state={}
  }

  render () {
    return (
      <div className="react-live-cycle">
        <p>react 生命周期分为：挂载、更新、卸载三个过程</p>
        <h2>旧生命周期如下：</h2>
        <p>挂载：</p>
        <ol>
          <li>
            <p><i>constructor()</i></p>
            <p>
              constructor()中完成了React数据的初始化，它接受两个参数：props和context，当想在函数内部使用这两个参数时，需使用super()传入这两个参数。
            </p>
            <p>注意：只要使用了constructor()就必须写super(),否则会导致this指向错误。</p>
          </li>
          <li>
            <p><i>componentWillMount()</i></p>
            <p>componentWillMount()一般用的比较少，它更多的是在服务端渲染时使用。它代表的过程是组件已经经历了constructor()初始化数据后，但是还未渲染DOM时。</p>
          </li>
          <li>
            <p><i>render()</i></p>
            <p>react最重要的步骤，创建虚拟dom，进行diff算法，更新dom树都在此进行。<i>记住，不要在render里面修改state。</i></p>
          </li>
          <li>
            <p><i>componentDidMount()</i></p>
            <p>组件第一次渲染完成，此时dom节点已经生成，可以在这里调用ajax请求，返回数据setState后组件会重新渲染</p>
          </li>
        </ol>
        <p>更新：</p>
        <ol>
          <li>
            <p><i>componentWillReceiveProps(nextProps)</i></p>
            <p>组件接受新的props时调用。props是父组件传递给子组件的。 父组件发生render的时候子组件就会调用componentWillReceiveProps（不管props有没有更新，也不管父子组件之间有没有数据交换）。</p>
            <p>常用处：通过对比nextProps和this.props，将nextProps的state为当前组件的state，从而重新渲染组件</p>
          </li>
          <li>
            <p><i>shouldComponentUpdate(nextProps,nextState)</i></p>
            <p>主要用于性能优化(部分更新)</p>
            <p>唯一用于控制组件重新渲染的生命周期，由于在react中，setState以后，state发生变化，组件会进入重新渲染的流程，在这里return false可以阻止组件的更新</p>
            <p>因为react父组件的重新渲染会导致其所有子组件的重新渲染，这个时候其实我们是不需要所有子组件都跟着重新渲染的，因此需要在子组件的该生命周期中做判断</p>
          </li>
          <li>
            <p><i>componentWillUpdate (nextProps,nextState)</i></p>
            <p>shouldComponentUpdate返回true以后，组件进入重新渲染的流程，进入componentWillUpdate,这里同样可以拿到nextProps和nextState。</p>
          </li>
          <li>
            <p><i>render()</i></p>
            <p>render函数会插入jsx生成的dom结构，react会生成一份虚拟dom树，在每一次组件更新时，在此react会通过其diff算法比较更新前后的新旧DOM树，比较以后，找到最小的有差异的DOM节点，并重新渲染。</p>
          </li>
          <li>
            <p><i>componentDidUpdate(prevProps,prevState)</i></p>
            <p>这里可以拿到prevProps和prevState，即更新前的props和state。</p>
          </li>
        </ol>
        <p>卸载</p>
        <ol>
          <li>
            <p><i>componentWillUnmount ()</i></p>
            <p>在此处完成组件的卸载和数据的销毁。</p>
            <p>1.clear你在组建中所有的setTimeout,setInterval</p>
            <p>2.移除所有组建中的监听 removeEventListener</p>
            <p>3.有时候我们会碰到这个warning:</p>
            <p>Can only update a mounted or mounting component. This usually      means you called setState() on an unmounted component. This is a   no-op. Please check the code for the undefined component.</p>
            <p>原因：因为你在组件中的ajax请求返回setState,而你组件销毁的时候，请求还未完成，因此会报warning</p>
            <p>解决办法：增加判断条件componentDidMount(){'{this.isMount === true}'},componentWillUnmount(){'{this.isMount === false}'}</p>
          </li>
        </ol>
        <h2>新生命周期：</h2>
        <p>在新的生命周期中，移除3个旧生命周期钩子函数</p>
        <ol>
          <li><i>componentWillMount()</i></li>
          <li><i>componentWillReceiveProps()</i></li>
          <li><i>componentWillUpdate()</i></li>
        </ol>
        <p>新增两个生命周期钩子函数</p>
        <ol>
          <li>
            <p><i>getDerivedStateFromProps(nextProps, prevState)</i></p>
            <p>代替componentWillReceiveProps()。</p>
            <p>在 componentWillReceiveProps 中，我们一般会做以下两件事</p>
            <p>一是根据 props 来更新 state</p>
            <p>二是触发一些回调，如动画或页面跳转等。</p>
            <p>老版本中的componentWillReceiveProps()方法判断前后两个 props 是否相同，如果不同再将新的 props 更新到相应的 state 上去</p>
            <p>这样做一来会破坏 state 数据的单一数据源，导致组件状态变得不可预测，另一方面也会增加组件的重绘次数。</p>
            <p>在老版本的 React 中，这两件事我们都需要在 componentWillReceiveProps 中去做。</p>
            <p>而在新版本中，官方将更新 state 与触发回调重新分配到了 getDerivedStateFromProps 与 componentDidUpdate 中，使得组件整体的更新逻辑更为清晰。</p>
            <p>而且在 getDerivedStateFromProps 中还<i>禁止了组件去访问 this.props，强制让开发者去比较 nextProps 与 prevState 中的值</i></p>
          </li>
          <li>
            <p><i>getSnapshotBeforeUpdate(prevProps, prevState)</i></p>
            <p>代替componentWillUpdate。</p>
            <p>常见的 componentWillUpdate 的用例是在组件更新前，读取当前某个 DOM 元素的状态，并在 componentDidUpdate 中进行相应的处理。</p>
            <p>典型场景：获取render之前的dom状态</p>
            <p>这两者的区别在于：</p>
            <p>在 React 开启异步渲染模式后，在 render 阶段读取到的 DOM 元素状态并不总是和 commit 阶段相同，这就导致在
                componentDidUpdate 中使用 componentWillUpdate 中读取到的 DOM 元素状态是不安全的，因为这时的值很有可能已经失效了。
            </p>
            <p>getSnapshotBeforeUpdate 会在最终的 render 之前被调用，也就是说在 getSnapshotBeforeUpdate 中读取到的 DOM 元素状态是可以保证与 componentDidUpdate 中一致的。</p>
            <p>此生命周期返回的任何值都将作为参数传递给componentDidUpdate（）。</p>
          </li>
        </ol>
      </div>
    )
  }
}

export default ReactLiveCycle;