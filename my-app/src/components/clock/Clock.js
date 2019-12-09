import React,{Component} from 'react';
import './clock.less';

class Clock extends Component {
    constructor(props){
        super(props)
        this.state = {
            date:new Date()
        }
    }
    componentDidMount(){
        console.log(this);
        this.timerID = setInterval(()=>{
            this.tick()
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    
    tick(){
        this.setState({
            date:new Date()
        })
    }
    
    render() {
        return (
            <div className="clock-wrp">
                <h2>现在时间是：</h2>
                <h3>{this.state.date.toLocaleString()}</h3>
            </div>
        )
    }
}

export default Clock;
