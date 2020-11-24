import React from 'react';
import RenderInDom from '../renderInDom/RenderInDom';
import './systemLoading.scss';

interface IProps {
  show: boolean;
}

function SystemLoading(props: IProps): React.ReactElement {
  const isShow = props.show;
  return (
    <RenderInDom show={isShow}>
      <div className="system-loading-center">
        <span>loading...</span>
      </div>
    </RenderInDom>
  );
}

export default SystemLoading;
