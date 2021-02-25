import React, { Component } from 'react';
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

interface IProps {
  menuStatus: boolean;
  onExpandMenu: () => void;
  onHiddenMenu: () => void;
  testName: string;
}

interface IState {
  collapsed: boolean;
}

const { SubMenu } = Menu;

class ColumnMenus extends Component<IProps, IState> {
  // default props value
  static defaultProps = {
    testName: 'test'
  };
  readonly state: IState;
  public constructor(props: IProps) {
    super(props);
    this.state = {
      collapsed: false
    };
  }

  toggleCollapsed = (): void => {
    this.props.menuStatus ? this.props.onHiddenMenu() : this.props.onExpandMenu();
  };

  public render(): React.ReactElement {
    const storeMenuStatus = !this.props.menuStatus;
    return (
      <div className={menuStyle.menuWrp}>
        <div className={menuStyle.topLogo}>{storeMenuStatus ? 'pro' : 'antd pro'}</div>
        <div className={menuStyle.menuCenter}>
          <Menu
            className={menuStyle.antMenu}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={storeMenuStatus}
          >
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <Menu.Item key="3" icon={<ContainerOutlined />}>
              Option 3
            </Menu.Item>
            <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </SubMenu>
          </Menu>
        </div>
        <div className={menuStyle.menuControll}>
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
export default connect(mapStateToProps, mapDispatchToProps)(ColumnMenus);
