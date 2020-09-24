import React, { useState }from 'react';
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  MailOutlined,
} from '@ant-design/icons';
import './LeftMenus.scss';

const { SubMenu } = Menu;

function LeftMenus() {
  // 展开/折叠
  const [collapsed, setCollapsed] = useState(false)
  // 展开/折叠-控制
  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div className="left-meuns-components">
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
      >
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          用户管理
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          订单管理
        </Menu.Item>
        <SubMenu key="sub1" icon={<MailOutlined />} title="商家管理">
          <Menu.Item key="5">运营商管理</Menu.Item>
          <Menu.Item key="6">设备管理</Menu.Item>
        </SubMenu>
      </Menu>
      <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button>
    </div>
  )
}

export default LeftMenus;