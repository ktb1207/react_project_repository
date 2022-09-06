import { useState } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { IStore } from './store/reducer';
import LoginControl from './components/LoginControl';
function App() {
  const loginState = useSelector((state: IStore) => state.loginState);
  const [aNum, setANum] = useState(0);
  console.log(`登录状态${loginState}`);
  return (
    <div className="App">
      <h5>是否登录：{loginState ? '已登录' : '未登录'}</h5>
      <LoginControl nowNum={aNum}></LoginControl>
    </div>
  );
}

export default App;
