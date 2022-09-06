import './register.scss';
import React, { useState, useEffect } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button } from 'antd-mobile';
import { showLoading, hideLoading } from '../../store/action';
import MInput from '@/components/MInput/MInput';

interface IProps {}

const Register: React.FC<IProps> = () => {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  console.log(history);
  console.log(location);
  console.log(params);
  const [userName, setUserName] = useState<string>(''); // 用户名
  const [userWord, setUserWord] = useState<string>(''); // 密码
  const dispatch = useDispatch();
  useEffect((): void => {
    console.log('dom');
  }, []);
  // 用户名输入
  const userNameChange = (val: string): void => {
    setUserName(val);
  };
  // 密码输入
  const userWordChange = (val: string): void => {
    setUserWord(val);
  };
  // 注册
  const registerMethod = (): void => {
    console.log(userName);
    console.log(userWord);
    dispatch(showLoading());
    setTimeout((): void => {
      dispatch(hideLoading());
    }, 3000);
  };
  return (
    <div className="full-page login-page">
      <div className="content-center">
        <MInput label="用户名" value="" placeHolder="用户名" change={userNameChange}></MInput>
        <MInput label="密码" type="password" value="" placeHolder="密码" change={userWordChange}></MInput>
        <Button type="primary" onClick={registerMethod}>
          注册
        </Button>
      </div>
    </div>
  );
};

export default Register;
