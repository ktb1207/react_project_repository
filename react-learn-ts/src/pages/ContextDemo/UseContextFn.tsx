import React, { useContext } from 'react';
import { LoginContext } from './createContext';

interface IProps {}

const UseContextFn: React.FC<IProps> = (props) => {
  const loginState = useContext(LoginContext);
  return <div>函数组建消费context: {loginState ? 'true' : 'false'}</div>;
};

export default UseContextFn;
