import React, { Component } from 'react';
import { withRouter } from "react-router";
import './LeftMenu.less';
import { Menu } from 'antd';
import {
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined
} from '@ant-design/icons';

class LeftMenu extends Component {
  constructor(props){
    super(props)
    this.menuClick = this.menuClick.bind(this);
    this.state = {}
  }
  // 点击跳转
  menuClick (event) {
    this.props.history.push(event.key)
  }
  render(){
    const selectPath= this.props.location.pathname;
    return (
      <div className="left-menu-root">
        <Menu
          defaultSelectedKeys={[selectPath]}
          mode="inline"
          theme="dark"
          onClick={this.menuClick}
        >
          <Menu.Item key="/home">
            <PieChartOutlined />
            <span>event</span>
          </Menu.Item>
          <Menu.Item key="/home/redux">
            <DesktopOutlined />
            <span>redux</span>
          </Menu.Item>
          <Menu.Item key="/home/router">
            <ContainerOutlined />
            <span>router</span>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}
export default withRouter(LeftMenu);