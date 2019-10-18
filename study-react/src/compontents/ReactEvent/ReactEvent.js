import React, { Component } from 'react';
import './ReactEvent.less';
import eventImage from '../../assets/images/react-event.png';

class ReactEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="event-wrp">
        <h3>事件流</h3>
        <p>在了解事件之前先来看一下什么是事件流。</p>
        <p>'流’这个名词在JS中随处可见。像DOM事件流、React中的数据流等等。</p>
        <p>其实，流就是一种有方向的数据；事件流，是页面接受事件的顺序。</p>
        <h3>一、DOM事件流的三个阶段</h3>
        <ol>
          <li>
            <h4>事件捕获阶段</h4>
            <p>
              当某个事件触发时，文档根节点最先接受到事件，然后根据DOM树结构向具体绑定事件的元素传递。该阶段为父元素截获事件提供了机会。
            </p>
            <p>事件传递路径为：window —> document —> boy —> button</p>
          </li>
          <li>
            <h4>目标阶段</h4>
            <p>具体元素已经捕获事件。之后事件开始想根节点冒泡。</p>
          </li>
          <li>
            <h4>事件冒泡阶段</h4>
            <p>
              该阶段的开始即是事件的开始，根据DOM树结构由具体触发事件的元素向根节点传递。
            </p>
            <p>事件传递路径：button —> body —> document —> window</p>
          </li>
          <li>
            <h4>选择监听事件的阶段</h4>
            <p>使用addEventListener函数在事件流的的不同阶段监听事件。</p>
            <p>DOMEle.addEventListener(‘事件名称’,handleFn,Boolean)</p>
            <p>
              此处第三个参数Boolean即代表监听事件的阶段:为true时，在在捕获阶段监听事件，执行逻辑处理；为false时，在冒泡阶段监听事件，执行逻辑处理。
            </p>
          </li>
        </ol>
        <h3>二、react合成事件</h3>
        <p>合成事件原理:</p>
        <p>
          如果react事件绑定在了真实DOM节点上，一个节点同事有多个事件时，
          页面的响应和内存的占用会受到很大的影响。因此SyntheticEvent作为中间层出现了。
        </p>
        <p>
          事件没有在目标对象上绑定，而是在document上监听所支持的所有事件，当事件发生并冒泡至document时，
          react将事件内容封装并叫由真正的处理函数运行。
        </p>
        <h3>React合成事件和原生事件区别</h3>
        <p>
          React合成事件一套机制：React并不是将click事件直接绑定在dom上面，而是
          <i>采用事件冒泡</i>的形式冒泡到document上面，
          然后React将事件封装给正式的函数处理运行和处理。
        </p>
        <img src={eventImage} alt="event" />
        <h3>关于事件池</h3>
        <p>
          虚拟事件对象已经被合并。这意味着虚拟事件对象将被重新使用，而该事件回调被调用之后所有的属性将无效。
          这是出于性能的考虑。因此，您不能以异步的方式访问事件。
        </p>
        <p>
          如果您想以一个异步的方式来访问事件属性，您应该对事件调用event.persist()。
          这将从事件池中取出合成的事件，并允许该事件的引用，使用户的代码被保留。
        </p>
      </div>
    );
  }
}

export default ReactEvent;
