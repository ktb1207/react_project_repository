import './register.scss';
import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

interface IProps {}

const Register: React.FC<IProps> = (props) => {
  console.log(props);
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  console.log(history);
  console.log(location);
  console.log(params);
  return (
    <div>
      <span></span>
    </div>
  );
};

export default Register;
