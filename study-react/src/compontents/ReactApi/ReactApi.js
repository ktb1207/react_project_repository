import React, {Component} from 'react';
import './ReactApi.less';

class ReactApi extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render(){
    return (
      <div className="react-api">
        <ol>
          <li>
            <p><i>React.createElement()</i></p>
            <p>Babel 会把 JSX 转译成一个名为 React.createElement() 函数调用。</p>
          </li>
          <li>
            <p><i>ReactDOM.render()</i></p>
            <p></p>
          </li>
        </ol>
      </div>
    )
  }
}

export default ReactApi;