import React from 'react';
import errorStyle from './errorPage.module.scss';
import errorImg from '@/static/images/404.png';

const ErrorPage: React.FC = () => {
  return (
    <div className={errorStyle.errorWrp}>
      <img src={errorImg} />
    </div>
  );
};

export default ErrorPage;
