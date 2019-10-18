import React, {Component} from 'react';
import './ReactState.less';

class ReactState extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return (
            <div className="state-wrp">
                <h2>一、State是什么？</h2>
                <p>React的<i>核心思想是组件化</i>，而组件中最重要的概念是State（状态），
                    State是一个组件的UI数据模型，树组件渲染时的数据依据。</p>
                <p>状态（state）和属性（props）类似，都是一个组件需要的一些数据集合，
                    但是state是私有的，可以认为state是组件的“私有属性”
                </p>
                <h2>二、State与Props区别</h2>
                <p><i>props是组件对外的接口，state是组件对内的接口。</i>其主要区别为：</p>
                <ul>
                    <li>state是可变的，是一组用于反映组件UI变化的状态集合</li>
                    <li>而props对于使用它的组件来说，是自读的，要想修改props,只能通过该组件的
                        父组件修改。
                    </li>
                </ul>
                <h2>三、如何判断是否为State？</h2>
                <p>组件中用到的一个变量是不是应该作为组件的state，可以通过下面的4条依据进行判断：</p>
                <ul>
                    <li>这个变量是否可以通过props从父组件中获取？如果是，那么它不是一个状态。</li>
                    <li>这个变量是否在组件的整个生命周期中都保持不变？如果是，那么它不是一个状态。</li>
                    <li>这个变量是否可以通过其他状态state或者属性props计算得到？
                        如果是，那么它不是一个状态。
                    </li>
                    <li>这个变量是否在组件的render方法中使用？如果不是，那么它不是一个状态。
                        这种情况下，这个变量更适合定义为组件的一个<i>普通属性</i>。
                    </li>
                </ul>
                <h2>四、正确使用State</h2>
                <ol>
                    <li>
                        <p>如何修改state:</p>
                        <p>正确的修改方式是使用setState(),<i>直接修改state,组件并不会重新触发render()</i></p>
                        <p dangerouslySetInnerHTML={{ __html: '正确：this.setState({name:"hello"})'}}></p>
                        <p dangerouslySetInnerHTML={{ __html: '错误：this.state.name = "hello"'}}></p>
                    </li>
                    <li>
                        <p>state的更新是异步的</p>
                        <p>调用setState后，setState会把要修改的状态放入一个队列中（因而 组件的state并不会立即改变）；</p>
                        <p>之后React 会优化真正的执行时机，来优化性能，所以优化过程中有可能会将多个 setState 的状态修改合并为一次状态修改，
                            因而state更新可能是异步的。</p>
                        <p><i>所以不要依赖当前的State，计算下个State</i>。当真正执行状态修改时，
                            依赖的this.state并不能保证是最新的State，因为React会把多次State的修改合并成一次，
                            这时，this.state将还是这几次State修改前的State。</p>
                        <p>另外需要注意的事，<i>同样不能依赖当前的Props计算下个状态</i>，因为Props一般也是从父组件的State中获取，
                            依然无法确定在组件状态更新时的值。</p>
                        <p>要弥补这个问题，使用 setState() 的另一种形式，它接受一个函数而不是一个对象。这个函数有两个参数：</p>
                        <p>（1）第一个参数: 是当前最新状态的前一个状态（本次组件状态修改前的状态）</p>
                        <p>（2）第二个参数：是当前最新的属性props</p>
                    </li>
                    <li>
                        <p>State更新会被合并</p>
                    </li>
                    <li>setState里顺序更新</li>
                </ol>
                <h3>参考链接：https://blog.csdn.net/b954960630/article/details/79822639</h3>
            </div>
        )
    }
}

export default ReactState
