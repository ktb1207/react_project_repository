import React,{Component} from 'react';
import {CSSTransition} from "react-transition-group";

import './HocRouterAnmiate.less';

/** 
 * CSSTransiton 标签包裹的div会被加上相应的动画
 * in 为控制动画开启关闭的“开关”，true为开启，false为关闭
 * classNames 为对应的样式类名，和下面的css内的名字对应
 * timeout 为动画执行时间
 * unmountOnExit 当动画效果为隐藏时，该标签会从dom树上移除，类似js操作
 * appear 是否第一次加载该组件时启用相应的动画渲染，css文件中有含有appear的均和此标签相关
 * onEntered 入场动画结束时触发的钩子
 * 
 * 
*/

function HocRouterAnmiate (WrappedComponent) {
    return class extends Component {
        render() {
            return (
                <CSSTransition
                    in={this.props.match != null}
                    classNames='hoc-anmiate'
                    timeout={1000}
                    unmountOnExit={true}
                    mountOnEnter={true}
                    appear={true}
                >
                    <WrappedComponent {...this.props} />
                </CSSTransition>
            )
        }
    }
}

export default HocRouterAnmiate;


