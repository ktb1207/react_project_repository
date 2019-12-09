import React,{Component} from 'react';
import PostItem from '../components/postItem/PostItem.js';
import Clock from '../components/clock/Clock.js';
import ClickAdd from '../components/clickAdd/ClickAdd.js';
import ListKey from '../components/listKey/ListKey.js';
import Dollar from '../components/dollar/Dollar.js';
import '../style/home.less'
let postData=[
    {
        name:"刘德华",
        order:1,
        date:"20018-12-01"
    },{
        name:"任贤齐",
        order:2,
        date:"20018-12-01" 
    },{
        name:"周华健",
        order:3,
        date:"20018-12-01"
    }
]
class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            inputValue:'',
            textareaValue:'',
            selectValue:"刘德华",
            dollar:'',
            yuan:'',
        }
        this.inputHandleChange=this.inputHandleChange.bind(this)
        this.textareaHandelChange=this.textareaHandelChange.bind(this)
        this.selectHandleChange=this.selectHandleChange.bind(this)
        this.dollarInput=this.dollarInput.bind(this)
        this.yuanInput=this.yuanInput.bind(this)
    }
    inputHandleChange(event){
        this.setState({inputValue:event.target.value})
    }
    textareaHandelChange(event){
        this.setState({textareaValue:event.target.value})
    }
    selectHandleChange(event){
        this.setState({selectValue:event.target.value})
    }
    dollarInput(value) {
        if (parseFloat(value) || value === '' || parseFloat(value) === 0) {
            this.setState({
                dollar:  value,
                yuan:   value === '' ? '' : value * 6.7951
            });
        } else {
            alert('输入值必须为数字。');
        }
    }
    yuanInput(value) {
        if (parseFloat(value) || value === '' || parseFloat(value) === 0) {
            this.setState({
                dollar: value === '' ? '' : value * 0.1472,
                yuan: value,
            });
        } else {
            alert('输入值必须为数字。');
        }
    }
    render() {
        return (
            <div className="home-wrp">
                <div className="row-style">
                    <div className="demo-wrp">
                        <p className="demo-title">组件demo1:歌手列表</p>
                        <ul>
                            {
                                postData.map((item,index)=>{
                                    return <PostItem 
                                        name={item.name} 
                                        order={item.order}
                                        date={item.date}
                                        key={index}>
                                    </PostItem>
                                })
                            }
                        </ul>
                    </div>
                    <div className="demo-wrp">
                        <p className="demo-title">组件demo2:时钟</p>    
                        <Clock></Clock>
                    </div>
                    <div className="demo-wrp">
                        <p className="demo-title">组件demo3:事件</p>    
                        <ClickAdd></ClickAdd>
                    </div>
                    <div className="demo-wrp">
                        <p className="demo-title">组件demo4:列表&key</p>
                        <ListKey numbers={postData}></ListKey>
                    </div>
                    <div className="demo-wrp">
                        <p className="demo-title">组件demo4:表单-input框</p>
                        <p>当前输入值：{this.state.inputValue}</p>
                        <p><input type="text" value={this.state.inputValue} onChange={this.inputHandleChange}/></p>
                    </div>
                    <div className="demo-wrp">
                        <p className="demo-title">组件demo4:表单-textarea</p>
                        <p>当前输入值：{this.state.textareaValue}</p>
                        <p><textarea value={this.state.textareaValue} onChange={this.textareaHandelChange}/></p>
                    </div>
                    <div className="demo-wrp">
                        <p className="demo-title">组件demo4:表单-select框</p>
                        <p>当前选中值：{this.state.selectValue}</p>
                        <select name="test" value={this.state.selectValue} onChange={this.selectHandleChange}>
                            <option value="张学友">张学友</option>
                            <option value="刘德华">刘德华</option>
                            <option value="郭富城">郭富城</option>
                            <option value="黎明">黎明</option>
                            <option value="四大天王">四大天王</option>
                        </select>
                    </div>
                </div>
                <div className="row-style">
                   <div className="demo-wrp">
                        <p className="demo-title">
                            <span>状态提升的定义：</span>
                            <br/>
                        </p> 
                        <p>
                            React的状态提升就是用户对子组件操作，子组件不改变自己的状态，
                            通过自己的props把这个操作改变的数据传递给父组件，改变父组件的状态，
                            从而改变受父组件控制的所有子组件的状态，这也是React单项数据流的特性决定的。   
                        </p> 
                        <div>
                            <Dollar type={'d'} dollarChange={this.dollarInput} money={this.state.dollar}></Dollar>    
                            <Dollar type={'y'} dollarChange={this.yuanInput} money={this.state.yuan}></Dollar>    
                        </div>    
                   </div>
                </div>
            </div>
        )
    }
}

export default Home;