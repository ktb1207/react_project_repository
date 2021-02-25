import React from 'react';
import RenderToDom from '@/components/renderToDom/RenderToDom';
import { Spin } from 'antd';
import modalLoading from './modalLoading.module.scss';

interface IProps {
  show: boolean;
}

function SystemLoading(props: IProps): React.ReactElement {
  const isShow = props.show;
  return (
    <RenderToDom show={isShow}>
      {isShow ? (
        <div className={modalLoading.modalLoadingCenter}>
          <Spin size="large" />
        </div>
      ) : null}
    </RenderToDom>
  );
}

export default SystemLoading;
