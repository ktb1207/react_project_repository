import React, { Component }from 'react';

class EventPage extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount(){
    console.log('mounted')
  }

  componentDidUpdate(){
    console.log('updated')
  }

  componentWillUnmount(){
    console.log('unmounted')
  }

  render(){
    return (
      <div className="children-page">event</div>
    )
  }
}

export default EventPage;