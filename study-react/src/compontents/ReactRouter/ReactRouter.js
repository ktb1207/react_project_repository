import React, {Component} from 'react';
import './ReactRouter.less';

class ReactRouter extends Component {
    constructor (props) {
        super(props)
        this.state = {

        }
    }

    render () {
        return (
            <div className="react-router">
                <h3>1.在react-router中使用js实现跳转路由的方法</h3>
                <p>一.使用Redirect</p>
                <ol>
                    <li>
                        <p>要引入Redirect:import { '{Redirect}'} from "react-router-dom";</p>
                    </li>
                    <li>
                        <p>定义一个flag:{'this.state = {isLoign:false}'}</p>
                    </li>
                    <li>
                        <p>render里面判断flag 来决定是否跳转</p>
                        <div>
                            <p>{'if(this.state.loginFlag){'}</p>
                            <p>{'return <Redirect to={{ pathname: "/" }} />;'}</p>
                            <p>{'}'}</p>
                        </div>
                    </li>
                </ol>
                <p>二.使用withRouter解决</p>
                <ol>
                    <li>
                        <p>引入withRouter:{"import {withRouter } from 'react-router';"}</p>
                    </li>
                    <li>
                        <p>使用withRouter方法加工需要触发路由跳转的组件</p>
                        <p>{'export default withRouter(Login);'}</p>
                    </li>
                    <li>
                        <p>通过withRouter加工后的组件会多出一个history props，这时就可以通过history的push方法跳转路由了。</p>
                        <p>{"this.props.history.push('/home');"}</p>
                    </li>
                </ol>
                <h3>2.关于react-router不存在路由跳转默认路由的处理</h3>
                <ol>
                    <li>
                        <p>使用重定向Redirect：</p>
                        <p>{'<Redirect from="/*" to="/" />'}</p>
                        <p><i>Redirect必须放在Switch里面的最后一行</i></p>
                    </li>
                    <li>
                        <p>使用Route path="*"</p>
                        <p>{'<Route path="*" component={LoginPage} />'}</p>
                        <p><i>需同样放在Switch最后一行</i></p>
                    </li>
                    <li>
                        <p>重定向Redirect路由路径会更新</p>
                        <p>使用Route path路由路径不会更新</p>
                    </li>
                </ol>
                <h3>3.关于react-router中route属性render、children、component区别</h3>
                <ol>
                    <li>
                        <p>render:</p>
                        <p>render属性能使你便捷的渲染内联组件或是嵌套组件，你可以给这个属性传入一个函数，
                            <i>当路由的路径匹配时调用</i>。同时，render属性也会接受所有由route传入的所有参数。</p>
                    </li>
                    <li>
                        <p>children:</p>
                        <p>
                            children属性是这三个属性中比较特殊的一个，它的值为一个函数，当Route有children属性时，
                            不管当前的路径是否与Route匹配，<i>该函数都会执行</i>，同时，
                            children属性也会接受所有由route传入的所有参数。
                        </p>
                    </li>
                    <li>
                        <p>component:</p>
                        <p>
                            当你使用component属性时，router会通过你赋给该属性的值，
                            <i>使用React.createElement方法去创建一个新的React元素</i>，
                            这意味着如果你给component属性赋的值是一个内联函数，那他每次渲染都会创建一个新的组件，
                            <i>这会导致每次渲染都会伴随新组件的挂载和旧组件的卸载，而不是只是对已存在组件的更新操作。</i>
                            所以当你要使用内联函数进行组件渲染时，使用render或children属性会更合适些。
                        </p>
                    </li>
                    <li>
                        <p>注意：当这三个属性同时存在时的优先级问题</p>
                        <p>
                            正常情况下我们基本上使用其中一个属性就可以了，但当他们同时存在时，优先渲染component的值，
                            其次是render属性的值，而children属性的值优先级最低，为了避免 不必要的错误，
                            尽量每个Route中只是用他们三个中的其中一个。
                        </p>
                    </li>
                </ol>
            </div>
        )
    }
}

export default ReactRouter;