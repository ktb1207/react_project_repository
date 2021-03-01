import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { RouterProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { expandMenu, hiddenMenu } from '@/store/action';
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined
} from '@ant-design/icons';
import menuStyle from './columnMenus.module.scss';

export type MenuItem = {
  menuName: string;
  pathName?: string;
  // 声明包含分类路由
  childClassify: number;
  // sub唯一key标识
  subUniqueKey: string;
  children: Array<MenuItem>;
  iconName?: string;
};

interface IProps extends RouteComponentProps {
  menuStatus: boolean;
  onExpandMenu: () => void;
  onHiddenMenu: () => void;
  testName: string;
  menuArr: Array<MenuItem>;
}

interface IState {
  collapsed: boolean;
  defaultMenuKey: string;
}

const { SubMenu } = Menu;

class ColumnMenus extends Component<IProps, IState> {
  // default props value
  static defaultProps = {
    testName: 'test',
    menuArr: []
  };
  readonly state: IState;
  public constructor(props: IProps) {
    super(props);
    this.state = {
      collapsed: false,
      defaultMenuKey: ''
    };
  }
  // 菜单展开/收起
  toggleCollapsed = (): void => {
    this.props.menuStatus ? this.props.onHiddenMenu() : this.props.onExpandMenu();
  };

  // 菜单点击跳转
  menuClick = (menuUrl: string | undefined): void => {
    if (menuUrl) {
      this.props.history.push({
        pathname: menuUrl
      });
      this.setState(
        {
          defaultMenuKey: menuUrl
        },
        () => {
          console.log('当前menu kty:' + this.state.defaultMenuKey);
        }
      );
    }
  };

  public componentDidMount() {
    // 设置初始默认选中菜单项
    if (this.props.menuArr.length > 0) {
      const indexOne = this.props.menuArr[0];
      this.setState(
        {
          defaultMenuKey: indexOne.children.length > 0 ? (indexOne.children[0].pathName as string) : ''
        },
        () => {
          console.log('初始化选择菜单：' + this.state.defaultMenuKey);
        }
      );
    }
  }
  // public shouldComponentUpdate(nextProps: IProps, nextState: IState) {
  //   if (nextState.collapsed === this.state.collapsed || nextState.defaultMenuKey === this.state.defaultMenuKey) {
  //     return false;
  //   }
  //   if (nextProps.menuStatus === this.props.menuStatus || nextProps.menuArr.length === this.props.menuArr.length) {
  //     return false;
  //   }
  //   return true;
  // }
  public componentDidUpdate() {
    console.log(this.props.history.location.pathname);
  }

  public render(): React.ReactElement {
    const storeMenuStatus = !this.props.menuStatus;
    const menuMap = this.props.menuArr;
    const testKey: string = this.props.history.location.pathname;
    return menuMap.length > 0 ? (
      <div className={menuStyle.menuWrp}>
        <div className={menuStyle.topLogo}>{storeMenuStatus ? 'pro' : 'antd pro'}</div>
        <div className={menuStyle.menuCenter}>
          <Menu
            className={menuStyle.antMenu}
            defaultSelectedKeys={[testKey]}
            selectedKeys={[testKey]}
            defaultOpenKeys={['A']}
            mode="inline"
            theme="dark"
            inlineCollapsed={storeMenuStatus}
          >
            {menuMap.map((item, sunIndex) => {
              if (item.children.length > 1) {
                return (
                  <SubMenu key={item.subUniqueKey} icon={<MailOutlined />} title={item.menuName}>
                    {item.children.map((childItem) => {
                      return (
                        <Menu.Item key={childItem.pathName} onClick={() => this.menuClick(childItem.pathName)}>
                          {childItem.menuName}
                        </Menu.Item>
                      );
                    })}
                  </SubMenu>
                );
              } else {
                return (
                  <Menu.Item
                    key={item.children.length > 0 ? (item.children[0].pathName as string) : sunIndex}
                    icon={<PieChartOutlined />}
                    onClick={() => this.menuClick(item.children[0].pathName)}
                  >
                    {item.menuName}
                  </Menu.Item>
                );
              }
            })}
          </Menu>
        </div>
        <div className={menuStyle.menuControll} style={{ textAlign: storeMenuStatus ? 'center' : 'right' }}>
          <Button
            className={menuStyle.controlBtn}
            type="primary"
            onClick={this.toggleCollapsed}
            style={{ marginBottom: 4 }}
          >
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
          </Button>
        </div>
      </div>
    ) : (
      <span>null</span>
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
    onExpandMenu: () => dispatch(expandMenu()),
    onHiddenMenu: () => dispatch(hiddenMenu())
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ColumnMenus));
