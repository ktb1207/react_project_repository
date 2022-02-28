import './App.css';
import { useSelector } from 'react-redux';
import { IStore } from './store/reducer';
import LoginControl from './components/LoginControl';
function App() {
  const loginState = useSelector((state: IStore) => state.loginState);
  console.log(`登录状态${loginState}`);
  return (
    <div className="App">
      <h5>是否登录：{loginState ? '已登录' : '未登录'}</h5>
      <LoginControl></LoginControl>
    </div>
  );
}

export default App;
