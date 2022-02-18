import React, { useState } from 'react';

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
    <button onClick={handleClick}>点我+1</button>
    <p>当前值：{num}</p>
  </div>
}


export default UseHook;