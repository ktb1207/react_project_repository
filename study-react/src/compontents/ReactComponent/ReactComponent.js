import React, {Component} from 'react'
import './ReactComponent.less'

class ReactComponent extends Component {
    constructor (props) {
        super(props)
        this.state = {

        }
    }

    render () {
        return (
            <div className="react-component">
                <p>React推出后，出于不同的原因先后出现三种定义react组件的方式，殊途同归；具体的三种方式：</p>
                <ol>
                    <li>函数式定义的<i>无状态组件</i></li>
                    <li>es5原生方式React.createClass定义的组件</li>
                    <li>es6形式的extends React.Component定义的组件</li>
                </ol>
                <h4>函数式组件特点</h4>
                <ol>
                    <li>
                        <h5>组件不会被实例化，整体渲染性能得到提升</h5>
                        <p>因为组件被精简成一个render方法的函数来实现的，由于是无状态组件，
                            所以无状态组件就不会在有组件实例化的过程，无实例化过程也就不需要分配多余的内存，
                            从而性能得到一定的提升。</p>
                    </li>
                    <li>
                        <h5>组件不能访问this对象</h5>
                        <p>
                            无状态组件由于没有实例化过程，所以无法访问组件this中的对象，例如：this.ref、this.state等均不能访问。
                            若想访问就不能使用这种形式来创建组件
                        </p>
                    </li>
                    <li>
                        <h5>组件无法访问生命周期的方法</h5>
                        <p>
                        因为无状态组件是不需要组件生命周期管理和状态管理，
                        所以底层实现这种形式的组件时是不会实现组件的生命周期方法。所以无状态组件是不能参与组件的各个生命周期管理的。
                        </p>
                    </li>
                    <li>
                        <h5>无状态组件只能访问输入的props，同样的props会得到同样的渲染结果，不会有副作用</h5>
                        <p>
                            无状态组件被鼓励在大型项目中尽可能以简单的写法来分割原本庞大的组件，未来React也会这种面向无状态组件在譬如无意义的检查和内存分配领域进行一系列优化，
                            所以<i>只要有可能，尽量使用无状态组件。</i>
                        </p>
                    </li>
                </ol>
                <h4>React.createClass特点</h4>
                <p>React.createClass会自绑定函数方法（不像React.Component只绑定需要关心的函数）导致不必要的性能开销，增加代码过时的可能性。</p>
                <h4>React.Component</h4>
                <p>React.Component是以ES6的形式来创建react的组件的，是React目前极为推荐的创建有状态组件的方式，最终会取代React.createClass形式；</p>
                <ol>
                    <li>
                        函数this自绑定
                    </li>
                    <li>有生命周期</li>
                    <li>有状态 state</li>
                </ol>
            </div>
        )
    }
}

export default ReactComponent;