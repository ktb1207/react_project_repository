import React, { useState } from 'react';
import HookChildren from './HookChildren';

function UseHook(){
  const [num, addNum] = useState(0);

  const handleClick = () => {
    addNum(num+1);
    addNum(num+1);
    addNum(num+1);
    addNum(num+4);
  }
  
  return <div>
    <h2>hook使用</h2>
    <hr />
    <h5>这里是父组件</h5>
    <button onClick={handleClick}>点我+1</button>
    <p>当前值：{num}</p>
    <h5>下面是子组件</h5>
    <HookChildren></HookChildren>
  </div>
}


export default UseHook;