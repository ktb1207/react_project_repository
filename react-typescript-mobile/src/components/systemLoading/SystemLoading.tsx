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
      {isShow ? (
        <div className="system-loading-center">
          <span>loading...</span>
        </div>
      ) : null}
    </RenderInDom>
  );
}

export default SystemLoading;
