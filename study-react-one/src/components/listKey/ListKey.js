import React,{Component} from 'react';
import './listKey.less';
class ListKey extends Component{
    constructor(props){
        super(props)
        this.state={}//可以为空，但不可以不写，不然console提醒Useless constructor  no-useless-constructor
    }
    render(){
        const numbers=this.props.numbers;
        const listItems = numbers.map((item,index)=>
            (<li className="list-wrp" key={item.order.toString()}>
                <div>歌手：<span className="list-name">{item.name}</span></div>
                <div>排名：<span className="list-order">{item.order}</span></div>
                <div>评论时间：<span className="list-date">{item.date}</span></div>
            </li>)
        )
        
        return (
            <ul>{listItems}</ul>
        )
    }
}
export default ListKey;