import React from 'react';
import './childCollect.scss';

const ChildCollect: React.FC = () => {
  return (
    <div className="child-collect-wrp">
      <ul>
        <li>
          <div className="left-wrp">
            <div className="up-title">大望路万达广场店</div>
            <div className="down-desc">洗衣机</div>
          </div>
          <div className="right-wrp">2.3km</div>
        </li>
        <li>
          <div className="left-wrp">
            <div className="up-title">大望路万达广场店</div>
            <div className="down-desc">洗衣机</div>
          </div>
          <div className="right-wrp">2.3km</div>
        </li>
      </ul>
    </div>
  );
};

export default ChildCollect;
