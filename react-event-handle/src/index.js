import React from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <div></div>
//   </React.StrictMode>
// );

function clickButton () {
  debugger
  console.log('click-button')
}
const element = (
  <div className='class-one'>
    <button onClick={clickButton}>click1</button>
    <button onClick={clickButton}>click2</button>
  </div>
)
console.log(element)
root.render(
  element
)
