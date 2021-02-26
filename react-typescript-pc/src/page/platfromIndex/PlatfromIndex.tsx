import React, { Component } from 'react';
import { RouterProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import ColumnMenus from '@/components/columnMenus/ColumnMenus';
import UserSetting from '@/components/userSetting/UserSetting';
import { showLoading, hideLoading } from '@/store/action';
import util from '@/utils/util';
import platStyle from './platform.module.scss';

interface IProps extends RouterProps {
  menuStatus: boolean;
  showSystemLoading: () => void;
  hideSystemLoading: () => void;
}

interface IState {
  title: string;
}

class PlatfromIndex extends Component<IProps, IState> {
  quoteTimeout: any;

  readonly state: IState;
  public constructor(props: IProps) {
    super(props);
    this.state = {
      title: '标题'
    };
  }
  // 退出登录
  quitOut = (): void => {
    this.props.showSystemLoading();
    setTimeout(() => {
      this.props.hideSystemLoading();
      util.clearToken();
      this.props.history.push('/login');
    }, 2000);
  };

  public componentWillUnmount() {
    if (this.quoteTimeout) {
      window.clearTimeout(this.quoteTimeout);
    }
  }

  public render(): React.ReactElement {
    // 左侧菜单宽度
    const menuWidth = this.props.menuStatus ? '208px' : '68px';
    return (
      <div className={`root-router-page ${platStyle.platfromWrp}`}>
        {/* header */}
        <div className={platStyle.meunHeader}>
          <div className={platStyle.featureWrp}>
            <UserSetting userQuitOut={this.quitOut}></UserSetting>
          </div>
          <div className={platStyle.featureWrp}>2</div>
          <div className={platStyle.featureWrp}>3</div>
        </div>
        {/* left menu */}
        <div className={platStyle.menuLeft} style={{ width: menuWidth }}>
          <ColumnMenus></ColumnMenus>
        </div>
        {/* content */}
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

// 将对应的action插入到组件props
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    showSystemLoading: () => dispatch(showLoading()),
    hideSystemLoading: () => dispatch(hideLoading())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlatfromIndex);
