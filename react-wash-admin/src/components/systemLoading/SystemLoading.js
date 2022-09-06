import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import RenderInDom from '../renderInDom/RenderInDom';
import './SystemLoading.scss';

function SystemLoading(props) {
  const isShow = props.show;
  return (
    <RenderInDom show={isShow}>
      <div className="system-loading-center">
        <Spin size="large" tip="Loading..."/>
      </div>
    </RenderInDom>
  )
}
// 类型检查
SystemLoading.propTypes = {
  show: PropTypes.bool,
}
// 默认props
SystemLoading.defaultProps = {
  show: false
}

export default SystemLoading;