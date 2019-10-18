import React, {Component} from 'react';

import './LiveReact.less';
import LiveImage from '../../assets/images/react-live.png';

class LiveReact extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return (
            <div className="live-wrp">
                <div className="flex-left">
                    <img src={LiveImage} alt="live" />
                </div>
                <div className="content">
                    <h3>初始化</h3>
                    <ol>
                        <li>getDefaultProps():设置默认的props，也可以用dufaultProps设置组件的默认属性.</li>
                        <li>getInitialState():在使用es6的class语法时是没有这个钩子函数的，可以直接在constructor中定义this.state。<i>此时可以访问this.props</i></li>
                        <li>componentWillMount():组件初始化时只调用，以后组件更新不调用，<i>整个生命周期只调用一次，此时可以修改state。</i></li>
                        <li>render():react最重要的步骤，创建虚拟dom，进行diff算法，更新dom树都在此进行。<i>记住，不要在render里面修改state。</i></li>
                        <li>componentDidMount():组件渲染之后调用，<i>只调用一次</i>。</li>
                    </ol>
                    <h3>更新</h3>
                    <ol>
                        <li>componentWillReceiveProps(nextProps): <i>组件初始化时不调用</i>，组件接受新的props时调用。
                            <i>props是父组件传递给子组件的。
                                父组件发生render的时候子组件就会调用componentWillReceiveProps（不管props有没有更新，也不管父子组件之间有没有数据交换）。</i>
                        </li>
                        <li>shouldComponentUpdate(nextProps, nextState):react性能优化非常重要的一环。
                            组件接受新的state或者props时调用，我们可以设置在此对比前后两个props和state是否相同，
                            如果相同则返回false阻止更新，因为相同的属性状态一定会生成相同的dom树，
                            这样就不需要创造新的dom树和旧的dom树进行diff算法对比，节省大量性能，
                            尤其是在dom结构复杂的时候
                        </li>
                        <li>componentWillUpdata(nextProps, nextState):<i>组件初始化时不调用</i>，只有在组件将要更新时才调用，此时可以修改state </li>
                        <li>render():组件渲染</li>
                        <li>componentDidUpdate():<i>组件初始化时不调用</i>，组件更新完成后调用，<i>此时可以获取dom节点。</i></li>
                    </ol>
                    <h3>卸载</h3>
                    <ol>
                        <li>componentWillUnmount():组件将要卸载时调用，一些事件监听和定时器需要在此时清除。</li>
                    </ol>
                    <h3>在react中，触发render的有4条路径。</h3>
                    <p>以下假设shouldComponentUpdate都是按照默认返回true的方式。</p>
                    <ol>
                        <li>首次渲染Initial Render</li>
                        <li>调用this.setState （并不是一次setState会触发一次render，React可能会合并操作，再一次性进行render）</li>
                        <li>父组件发生更新（一般就是props发生改变，但是就算props没有改变或者父子组件之间没有数据交换也会触发render）</li>
                        <li>调用this.forceUpdate</li>
                    </ol>
                </div>
            </div>
        )
    }
}

export default LiveReact;