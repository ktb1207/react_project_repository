import React, { Component, Suspense } from 'react';
import { RouterProps, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import ColumnMenus from '@/components/columnMenus/ColumnMenus';
import { MenuItem } from '@/components/columnMenus/ColumnMenus';
import UserSetting from '@/components/userSetting/UserSetting';
import { showLoading, hideLoading } from '@/store/action';
import util from '@/utils/util';
import routerMap from '@/router/routerMap';
import { IRoute } from '@/router/RouterAuth';
import { menuHomeChildClassify } from '@/enums/index';
import homeStyle from './menuHome.module.scss';

// 二级子路由
const Demo = React.lazy(() => import('@/childRouterPage/aCategory/demo/Demo'));
// 错误路由
const errorView = React.lazy(() => import('@/page/errorPage/ErrorPage'));

interface IProps extends RouterProps {
  menuStatus: boolean;
  showSystemLoading: () => void;
  hideSystemLoading: () => void;
}

interface IState {
  title: string;
  timeId: number;
  // 菜单数组
  menusArr: Array<MenuItem>;
  // 子路由
  childRoutesArr: Array<IRoute>;
}

class MenuHome extends Component<IProps, IState> {
  basicMenuSub: Array<MenuItem>;
  readonly state: IState;
  public constructor(props: IProps) {
    super(props);
    this.state = {
      title: '标题',
      timeId: 0,
      menusArr: [],
      childRoutesArr: []
    };
    this.basicMenuSub = [
      {
        menuName: '物资采购',
        iconName: 'iconfont1',
        childClassify: menuHomeChildClassify.A,
        children: [],
        subUniqueKey: 'A'
      },
      {
        menuName: '油品销售',
        iconName: 'iconfont2',
        childClassify: menuHomeChildClassify.B,
        children: [],
        subUniqueKey: 'B'
      }
    ];
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

  public componentDidMount() {
    const oldArr = this.basicMenuSub;
    const configRouter = routerMap;
    let menuHomeChildRouter: Array<IRoute> = [];
    configRouter.forEach((item) => {
      if (item.name === 'MenuHome') {
        menuHomeChildRouter = item.children as Array<IRoute>;
      }
    });
    this.setState({
      childRoutesArr: [...menuHomeChildRouter]
    });
    for (let oi = 0, lg = oldArr.length; oi < lg; oi++) {
      for (let ci = 0, cl = menuHomeChildRouter.length; ci < cl; ci++) {
        if (oldArr[oi].childClassify === menuHomeChildRouter[ci].childClassify) {
          const childObj = {
            menuName: menuHomeChildRouter[ci].name,
            pathName: menuHomeChildRouter[ci].path,
            childClassify: oldArr[oi].childClassify,
            children: [],
            subUniqueKey: ''
          };
          (oldArr[oi].children as Array<MenuItem>).push(childObj);
        }
      }
    }
    this.setState({
      menusArr: [...oldArr]
    });
  }
  public shouldComponentUpdate(nextProps: IProps, nextState: IState) {
    if (
      nextProps.menuStatus !== this.props.menuStatus ||
      nextState.menusArr.length !== this.state.menusArr.length ||
      nextState.childRoutesArr.length !== this.state.childRoutesArr.length
    ) {
      return true;
    }
    return false;
  }
  public componentDidUpdate() {
    console.log('菜单home有更新。。。');
  }
  public componentWillUnmount() {
    window.clearTimeout(this.state.timeId);
  }

  public render(): React.ReactElement {
    // 左侧菜单宽度
    const menuWidth = this.props.menuStatus ? '208px' : '68px';
    const childRouteMap = this.state.childRoutesArr;
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
          {this.state.menusArr.length > 0 && <ColumnMenus menuArr={this.state.menusArr}></ColumnMenus>}
        </div>
        {/* content */}
        <div className={homeStyle.mainContent}>
          <div className={homeStyle.hiddenContent} style={{ flex: `0 0 ${menuWidth}` }}></div>
          {/* 二级子路由出口 */}
          <div className={homeStyle.childRootWrp}>
            <Suspense fallback={<div></div>}>
              <Switch>
                {childRouteMap.map((item, index) => {
                  return <Route exact key={index} path={item.path} component={item.component}></Route>;
                })}
                <Route path="*" component={errorView}></Route>
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
