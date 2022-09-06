import { useDispatch } from 'react-redux';
import { loginSuccess, loginError } from '../store/actions/createLoginAction';
import { showLoading, hideLoading } from '../store/actions/createLoadingAction';

function LoginControl(props) {
  const dispatch = useDispatch();
  const login = () => {
    dispatch({ ...loginSuccess() });
  };
  const quit = () => {
    dispatch({ ...loginError() });
  };

  const show = () => {
    dispatch({ ...showLoading() });
  };
  const hide = () => {
    dispatch({ ...hideLoading() });
  };

  const changProps = () => {
    // props.nowNum +=1;
    console.log('props 不可修改，否则导致错误');
  };

  return (
    <div>
      <button onClick={login}>登录</button>
      <button onClick={quit}>退出</button>
      <button onClick={show}>显示loading</button>
      <button onClick={hide}>关闭loading</button>
      <button onClick={changProps}>{props.nowNum}</button>
    </div>
  );
}

export default LoginControl;
