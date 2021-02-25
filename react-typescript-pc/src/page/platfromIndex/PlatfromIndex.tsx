import React, { Component } from 'react';
import { connect } from 'react-redux';
import ColumnMenus from '@/components/columnMenus/ColumnMenus';
import platStyle from './platform.module.scss';

interface IProps {
  menuStatus: boolean;
}

interface IState {
  title: string;
}

class PlatfromIndex extends Component<IProps, IState> {
  readonly state: IState;
  public constructor(props: IProps) {
    super(props);
    this.state = {
      title: '标题'
    };
  }
  public render(): React.ReactElement {
    const menuWidth = this.props.menuStatus ? '208px' : '68px';
    return (
      <div className={`root-router-page ${platStyle.platfromWrp}`}>
        <div className={platStyle.meunHeader}></div>
        <div className={platStyle.menuLeft} style={{ width: menuWidth }}>
          <ColumnMenus></ColumnMenus>
        </div>
        <div className={platStyle.mainContent}>
          <div className={platStyle.hiddenContent} style={{ flex: `0 0 ${menuWidth}` }}></div>
          <div className={platStyle.childRootWrp}>内容</div>
        </div>
      </div>
    );
  }
}

// 将reducer中的状态插入到组件的prop中
const mapStateToProps = (state: { menuStatus: boolean }): { menuStatus: boolean } => {
  return {
    menuStatus: state.menuStatus
  };
};

export default connect(mapStateToProps)(PlatfromIndex);
