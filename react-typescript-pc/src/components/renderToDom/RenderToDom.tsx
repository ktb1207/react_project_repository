import React, { Component, ReactDOM } from 'react';
import ReactDom from 'react-dom';
import util from '@/utils/util';
import './renderToDom.scss';

interface IProps {
  show: boolean;
  rootDom?: HTMLElement;
  children?: React.ReactElement | null;
}

interface IState {}

class RenderToDom extends Component<IProps, IState> {
  // 默认props
  static defaultProps = {
    rootDom: document.body,
    show: false
  };
  // 声明 RenderToDom 类属性
  maxZIndex: string;
  rootDom: HTMLElement | undefined;
  createDom: HTMLDivElement;
  //
  constructor(props: IProps) {
    super(props);
    this.state = {};
    this.maxZIndex = '2';
    this.rootDom = document.body;
    this.createDom = document.createElement('div');
  }
  componentDidMount(): void {
    this.rootDom = this.props.rootDom;
    const isShow = this.props.show;
    // 创建div
    this.createDom = document.createElement('div');
    (this.rootDom as HTMLElement).appendChild(this.createDom);
    // 样式计算
    this.computedZIndex();
    this.createDom.style.position = 'absolute';
    this.createDom.style.top = '0px';
    this.createDom.style.right = '0px';
    this.createDom.style.bottom = '0px';
    this.createDom.style.left = '0px';
    this.createDom.style.backgroundColor = 'rgba(255,255,255,0.8)';
    this.createDom.className = 'render-to-dom';
    this.createDom.style['z-index'] = this.maxZIndex;
    if (isShow) {
      this.createDom.style.display = 'block';
      if (!util.hasClass(this.createDom, 'render-to-dom-transition')) {
        setTimeout(() => {
          this.createDom.classList.add('render-to-dom-transition');
        }, 20);
      }
    } else {
      if (util.hasClass(this.createDom, 'render-to-dom-transition')) {
        this.createDom.classList.remove('render-to-dom-transition');
        setTimeout(() => {
          this.createDom.style.display = 'none';
        }, 20);
      }
    }
    this.renderChildren();
  }
  componentDidUpdate(): void {
    const isShow = this.props.show;
    this.computedZIndex();
    this.createDom.style['z-index'] = this.maxZIndex;
    if (isShow) {
      this.createDom.style.display = 'block';
      if (!util.hasClass(this.createDom, 'render-to-dom-transition')) {
        setTimeout(() => {
          this.createDom.classList.add('render-to-dom-transition');
        }, 20);
      }
    } else {
      if (util.hasClass(this.createDom, 'render-to-dom-transition')) {
        this.createDom.classList.remove('render-to-dom-transition');
        setTimeout(() => {
          this.createDom.style.display = 'none';
        }, 20);
      }
    }
    this.renderChildren();
  }
  componentWillUnmount(): void {
    // 在组件卸载时候，保证插入元素也被删掉
    ReactDom.unmountComponentAtNode(this.createDom);
    (this.rootDom as HTMLElement).removeChild(this.createDom);
  }
  //将组件children添加到创建元素下
  renderChildren(): void {
    ReactDom.render(this.props.children as React.ReactElement, this.createDom);
  }
  // 获取当前页面最高z-index
  computedZIndex(): void {
    // 自动计算显示层级
    const allElement = Array.from(document.querySelectorAll('*'));
    const zIndexNum: Array<number> = [];
    allElement.forEach((item) => {
      const eleZindex = Number(window.getComputedStyle(item).zIndex) || 0;
      zIndexNum.push(eleZindex);
    });
    const maxNum = zIndexNum.length ? Math.max(...zIndexNum) : 0;
    this.maxZIndex = String(maxNum + 1);
  }
  render(): null {
    return null;
  }
}

export default RenderToDom;
