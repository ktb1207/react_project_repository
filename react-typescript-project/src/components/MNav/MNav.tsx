/* eslint-disable react/prop-types */
import './mnav.scss';
import React from 'react';

interface IProps {
  title?: string;
  children?: React.ReactElement | string;
  onBack?: (fn: () => void) => void;
}

const MNav: React.FC<IProps> = (props) => {
  console.log(props);
  // 返回
  const goBack = (): void => {
    if (props.onBack) {
      props.onBack(systemBack);
    } else {
      systemBack();
    }
  };
  // 浏览器返回
  const systemBack = (): void => {
    window.history.back();
  };
  return (
    <header className="m-nav">
      <div className="left-back" onClick={goBack}>
        返回
      </div>
      <div className="center-title">{props.title}</div>
      <div className="right-custom">{props.children}</div>
    </header>
  );
};

MNav.defaultProps = {
  title: '标题'
};
export default MNav;
