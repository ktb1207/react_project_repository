import React, { useState } from 'react';
import './childMy.scss';
import defaultUser from '../../static/images/default_user.png';
const ChildMy: React.FC = () => {
  const [userAvter] = useState<string>(defaultUser);
  // 文件选择
  const fileSelect = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(event);
  };
  return (
    <div className="child-my-wrp">
      <div className="top-bg">
        <div className="user-avter">
          <img src={userAvter} />
          <input className="file-input" type="file" onChange={fileSelect} />
        </div>
        <div className="user-desc">
          <span>永远的战士</span>
          <span>男</span>
        </div>
      </div>
    </div>
  );
};

export default ChildMy;
