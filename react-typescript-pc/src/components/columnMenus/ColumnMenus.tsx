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

type menuItem = {
  menuName: string;
  children?: Array<menuItem>;
};
interface IProps {
  menuStatus: boolean;
  onExpandMenu: () => void;
  onHiddenMenu: () => void;
  testName: string;
}

interface IState {
  collapsed: boolean;
  menuArr: Array<menuItem>;
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
      collapsed: false,
      menuArr: [
        {
          menuName: '物资采购',
          children: [
            {
              menuName: '采购管理'
            },
            {
              menuName: '供应商管理'
            },
            {
              menuName: '合同及招投标管理'
            },
            {
              menuName: '价格管理'
            },
            {
              menuName: '招投标过程管理'
            }
          ]
        },
        {
          menuName: '油品销售'
        },
        {
          menuName: '化工及炼油产品'
        },
        {
          menuName: '天然气销售'
        },
        {
          menuName: '工程技术'
        },
        {
          menuName: '工程建设'
        },
        {
          menuName: '资本运作'
        },
        {
          menuName: '科研项目技术服务'
        },
        {
          menuName: '资产管理'
        },
        {
          menuName: '在线监察'
        },
        {
          menuName: '风险数据库及制度'
        },
        {
          menuName: '金融业务'
        },
        {
          menuName: '国际贸易'
        },
        {
          menuName: '海外监督'
        }
      ]
    };
  }

  toggleCollapsed = (): void => {
    this.props.menuStatus ? this.props.onHiddenMenu() : this.props.onExpandMenu();
  };

  public render(): React.ReactElement {
    const storeMenuStatus = !this.props.menuStatus;
    const menuMap = this.state.menuArr;
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
            {menuMap.map((item, index) => {
              if (item.children) {
                return (
                  <SubMenu key={index} icon={<MailOutlined />} title={item.menuName}>
                    {item.children.map((childItem, cInx) => {
                      return <Menu.Item key={cInx}>{childItem.menuName}</Menu.Item>;
                    })}
                  </SubMenu>
                );
              } else {
                return (
                  <Menu.Item key={index} icon={<PieChartOutlined />}>
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
