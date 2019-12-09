import React,{ Component } from 'react';
import './postItem.less';
class PostItem extends Component{
    render(){
        const {name,order,date} = this.props;
        return(
            <li className="postitem">
                <div>歌手：<span className="post-name">{name}</span></div>
                <div>排名：<span className="post-order">{order}</span></div>
                <div>评论时间：<span className="post-date">{date}</span></div>
            </li>
        )
    }
}

export default PostItem;
