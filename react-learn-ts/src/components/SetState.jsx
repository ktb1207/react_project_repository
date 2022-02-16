import React from 'react';

class SetState extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      stateOne: 1
    }
    this.btnOne = React.createRef();
  }

  componentDidMount(){
    this.setState({
      stateOne: this.state.stateOne + 1
    })
    this.setState({
      stateOne: this.state.stateOne + 2
    })
    this.setState({
      stateOne: this.state.stateOne + 3
    })
    this.btnOne.current.addEventListener('click', () => {
      this.setState({
        stateOne: this.state.stateOne + 1
      })
      this.setState({
        stateOne: this.state.stateOne + 1
      })
      this.setState({
        stateOne: this.state.stateOne + 1
      })
      console.log(this.state.stateOne)
    })
  }

  render(){
    return <div>
      <h2>三、setState正确使用姿势</h2>
      <hr />
      <p>

        <span>stateOne值：{this.state.stateOne}</span>
        <button ref={this.btnOne}>click</button>
      </p>
    </div>
  }
}

export default SetState;