import { Component } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import util from '../../utils/utils';
import './RenderInDom.scss';
class RenderInDom extends Component {
  constructor(p) {
    super(p);
    this.state = {};
    this.renderChildren = this.renderChildren.bind(this);
    this.computedZIndex = this.computedZIndex.bind(this);
    this.maxZIndex = 2;
  }
  componentDidMount() {
    this.rootDom = this.props.rootDom;
    const isShow = this.props.show;
    // 创建div
    this.createDom = document.createElement("div");
    this.rootDom.appendChild(this.createDom)
    // 样式计算
    this.computedZIndex();
    this.createDom.style.position='absolute';
    this.createDom.style.top = '0px';
    this.createDom.style.right = '0px';
    this.createDom.style.bottom = '0px';
    this.createDom.style.left = "0px";
    this.createDom.style.backgroundColor = "rgba(255,255,255,0.8)";
    this.createDom.className = 'render-in-dom'
    this.createDom.style["z-index"] = this.maxZIndex;
    if (isShow) {
      this.createDom.style.display = 'block';
      if (!util.hasClass(this.createDom, 'render-in-dom-transition')) {
        setTimeout(() => {
          this.createDom.classList.add('render-in-dom-transition')
        },20)
      }
    } else {
      if (util.hasClass(this.createDom, 'render-in-dom-transition')) {
        this.createDom.classList.remove('render-in-dom-transition')
        setTimeout(() => {
          this.createDom.style.display = 'none';
        },20)
      }
    }
    this.renderChildren()
  }
  componentDidUpdate() {
    const isShow = this.props.show;
    this.computedZIndex();
    this.createDom.style["z-index"] = this.maxZIndex;
    if (isShow) {
      this.createDom.style.display = 'block';
      if (!util.hasClass(this.createDom, 'render-in-dom-transition')) {
        setTimeout(() => {
          this.createDom.classList.add('render-in-dom-transition')
        },20)
      }
    } else {
      if (util.hasClass(this.createDom, 'render-in-dom-transition')) {
        this.createDom.classList.remove('render-in-dom-transition')
        setTimeout(() => {
          this.createDom.style.display = 'none';
        },20)
      }
    }
    this.renderChildren()
  }
  componentWillUnmount() {
    // 在组件卸载时候，保证插入元素也被删掉
    ReactDom.unmountComponentAtNode(this.createDom);
    this.rootDom.removeChild(this.createDom);
  }
  //将组件children添加到创建元素下
  renderChildren() {
    ReactDom.render(this.props.children, this.createDom);
  }
  // 获取当前页面最高z-index
  computedZIndex () {
    // 自动计算显示层级
    let allElement = Array.from(document.querySelectorAll('*'));
    let zIndexNum = [];
    allElement.forEach(item => {
      let eleZindex = Number(window.getComputedStyle(item).zIndex) || 0;
      zIndexNum.push(eleZindex);
    });
    let maxNum = zIndexNum.length ? Math.max(...zIndexNum) : 0;
    this.maxZIndex = maxNum + 1;
  }
  render() {
    return null;
  }
}
// 类型检查
RenderInDom.propTypes = {
  show:PropTypes.bool,
}
// 默认props
RenderInDom.defaultProps = {
  rootDom: document.body,
  show:false,
}
export default RenderInDom;
