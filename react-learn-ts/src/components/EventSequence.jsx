import React from 'react';

class EventSequence extends React.Component{
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.buttonRef = React.createRef();
  }
  handleClick(){
    console.log('button:react bind click')
  }
  componentDidMount(){
    document.getElementById('root').addEventListener('click', function(e){
      console.log('root: addEventListener click 捕获')
      e.stopPropagation();
    }, true)
    document.getElementById('root').addEventListener('click', function(){
      console.log('root: addEventListener click 冒泡')
    }, false)
    this.buttonRef.current.addEventListener('click', function(){
      console.log('button: addEventListener click 捕获')
    }, true)
    this.buttonRef.current.addEventListener('click', function(){
      console.log('button: addEventListener click 冒泡')
    }, false)
  }
  render(){
    return <div>
      <h2>二、react事件分析</h2>
      <hr />
      <div>
        <p>这是父组件</p>
        <button onClick={this.handleClick} ref={this.buttonRef}>点我</button>
      </div>
    </div>
  }
}

export default EventSequence;