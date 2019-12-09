import React,{Component} from 'react';
class Dollar extends Component{
    constructor(props){
        super(props)
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(event){
        this.props.dollarChange(event.target.value)
    }
    render(){
        const money = this.props.money;
        const text = this.props.type === 'd'?'美元':'人民币';
        return (
            <fieldset>
                <legend>{text}</legend>
                <input type="text" value={money} onChange={this.handleChange}/>
            </fieldset>
        )
    }
}
export default Dollar;