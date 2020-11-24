import './register.scss';
import React from 'react';

interface IProps {
  history: any;
  location: any;
  match: any;
}

const Register: React.FC<IProps> = (props) => {
  console.log(props);
  return (
    <div>
      <span>注册</span>
    </div>
  );
};

export default Register;
