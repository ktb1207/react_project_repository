import React, { Component } from 'react';
import { connect } from 'react-redux';
import NumShow from '../NumShow/NumShow.js'

import { addTodo, decrease} from '../../store/action.js'

class ReduxPage extends Component {
  constructor (props) {
    super(props)
    this.decrease = this.decrease.bind(this)
    this.state = {
      initNum: 0
    }
  }

  decrease () {
    this.props.onDecClick(2)
  }

  render () {
    const { stateNum, onAddClick} = this.props;
    return (
      <div className="children-page">
        <div>
          <p>demo1</p>
          <p>
            <button onClick={onAddClick}>点我+1</button>
            <NumShow num={stateNum}></NumShow>
            <button onClick={this.decrease}>点我-1</button>
          </p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    stateNum: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddClick: () => {
      dispatch(addTodo(1))
    },
    onDecClick: (num) => {
      dispatch(decrease(num))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxPage);