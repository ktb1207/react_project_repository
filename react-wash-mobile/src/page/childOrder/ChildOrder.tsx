import React from 'react';
import './childOrder.scss';

const ChildOrder: React.FC = () => {
  return (
    <div className="child-order-wrp">
      <ul>
        <li>
          <div className="left-wrp">
            <div className="up-title">订单号：202000001002</div>
            <div className="down-desc">
              <span>2019-12-12 15:32</span>
              <span>13￥</span>
            </div>
          </div>
          <div className="right-wrp">烘干</div>
        </li>
        <li>
          <div className="left-wrp">
            <div className="up-title">订单号：202000001002</div>
            <div className="down-desc">
              <span>2019-12-12 15:32</span>
              <span>13￥</span>
            </div>
          </div>
          <div className="right-wrp">洗衣</div>
        </li>
      </ul>
    </div>
  );
};

export default ChildOrder;
