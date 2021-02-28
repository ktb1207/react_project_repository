import React, { Component, Suspense } from 'react';
import { RouterProps, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import ColumnMenus from '@/components/columnMenus/ColumnMenus';
import UserSetting from '@/components/userSetting/UserSetting';
import { showLoading, hideLoading } from '@/store/action';
import util from '@/utils/util';
import homeStyle from './menuHome.module.scss';

// 二级子路由
const Demo = React.lazy(() => import('@/childRouterPage/aCategory/demo/Demo'));

interface IProps extends RouterProps {
  menuStatus: boolean;
  showSystemLoading: () => void;
  hideSystemLoading: () => void;
}

interface IState {
  title: string;
  timeId: number;
}

class MenuHome extends Component<IProps, IState> {
  quoteTimeout: number;
  readonly state: IState;
  public constructor(props: IProps) {
    super(props);
    this.state = {
      title: '标题',
      timeId: 0
    };
    this.quoteTimeout = 0;
  }
  // 退出登录
  quitOut = (): void => {
    this.props.showSystemLoading();
    this.setState({
      timeId: window.setTimeout(() => {
        this.props.hideSystemLoading();
        util.clearToken();
        this.props.history.push('/login');
      }, 2000)
    });
  };

  public componentWillUnmount() {
    window.clearTimeout(this.state.timeId);
  }

  public render(): React.ReactElement {
    console.log(this.props);
    // 左侧菜单宽度
    const menuWidth = this.props.menuStatus ? '208px' : '68px';
    return (
      <div className={`root-router-page ${homeStyle.platfromWrp}`}>
        {/* header */}
        <div className={homeStyle.meunHeader}>
          <div className={homeStyle.featureWrp}>
            <UserSetting userQuitOut={this.quitOut}></UserSetting>
          </div>
          <div className={homeStyle.featureWrp}>2</div>
          <div className={homeStyle.featureWrp}>3</div>
        </div>
        {/* left menu */}
        <div className={homeStyle.menuLeft} style={{ width: menuWidth }}>
          <ColumnMenus></ColumnMenus>
        </div>
        {/* content */}
        <div className={homeStyle.mainContent}>
          <div className={homeStyle.hiddenContent} style={{ flex: `0 0 ${menuWidth}` }}></div>
          {/* 二级子路由出口 */}
          <div className={homeStyle.childRootWrp}>
            <Suspense fallback={<div></div>}>
              <Switch>
                <Route path={'/menuHome/a/a'} component={Demo}></Route>
                <Route path="/menuHome/*">meiyou</Route>
                <Route path="*">meiyou123456</Route>
              </Switch>
            </Suspense>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MenuHome);
