import React,{Component} from 'react';
import './clickAdd.less';


//按钮+
class AddButton extends Component{
    constructor(props){
        super(props)
        this.add=this.add.bind(this)
    }
    add(){
        this.props.onClick()//子组件反馈父组件
    }
    render(){
        return <button onClick={this.add}>点我投票+1</button>
    }
}
//按钮-
class ReduceButton extends Component{
    constructor(props){
        super(props)
        this.reduce=this.reduce.bind(this)
    }
    reduce(){
        this.props.onClick() //子组件反馈父组件
    }
    render(){
        return <button onClick={this.reduce}>取消投票-1</button>
    }
}


class ClickAdd extends Component{
    constructor(props){
        super(props)
        this.state = {
            num:0
        }
        this.addNum = this.addNum.bind(this);
    }
    //在构造函数中使用bind绑定this
    addNum(){
        this.setState(prevState=>({
            num:prevState.num+1
        }))
    }
    //属性初始化器语法--es7实验性方案，Create React App 中默认开启
    reduceNum=()=>{
        this.setState(prevState=>({
            num:prevState.num-1
        }))
    }
    render(){
        /** 
         * 条件渲染--元素变量
         * */ 
        const isVote = this.state.num;
        let button = null;
        if(isVote<1){
            button=<AddButton onClick={this.addNum}></AddButton>
        }else{
            button=<ReduceButton onClick={this.reduceNum}></ReduceButton>
        }
        
        return (
            <div className="click-wrp">
                <span>当前投票数：<span className="total-num">{this.state.num}</span></span>
                <div>
                    {button}  
                </div>
            </div>
        )
    }
}

export default ClickAdd;