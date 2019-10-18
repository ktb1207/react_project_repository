import React,{Component} from 'react';
import './List.less';

class List extends Component {
    render(){
        const listData = this.props.listData;
        return (
            <ul>
                {
                   listData.map((item,index)=>{
                    return <li key={index}>{item.name}</li>
                   }) 
                }
            </ul>
        )
    }
}

export default List;