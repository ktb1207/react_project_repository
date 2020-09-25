import React, { useState, useEffect }from 'react';
import { useHistory } from "react-router-dom";
import { Menu, Button } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import './LeftMenus.scss';
import menuMap from '../../router/menuMap';
const { SubMenu } = Menu;

function LeftMenus() {
  // 获取路由信息
  const history = useHistory();
  // 展开/折叠
  const [collapsed, setCollapsed] = useState(false);
  // 菜单默认选中
  const [defaultMenuKey, setDefaultMenuKey] = useState(menuMap[0].path);
  // 找到所有包含子菜单项
  let subMenuArr = [];
  menuMap.forEach(item => {
    if (item.subpath && item.expand) {
      subMenuArr.push(item.subpath)
    }
  })
  // 展开/折叠-控制
  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }
  // 菜单路由切换
  const switchMenu = (obj) => {
    history.push(obj.key)
  }
  // 根据当前url路由调整选中菜单
  useEffect(() => {
    const nowUrl = history.location.pathname;
    setDefaultMenuKey(nowUrl)
  }, [history.location.pathname])
  return (
    <div className="left-meuns-components">
      <div className="top-menu">
        <Menu
          defaultSelectedKeys={[defaultMenuKey]}
          selectedKeys={[defaultMenuKey]}
          defaultOpenKeys={subMenuArr}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          onClick={switchMenu}
        >
          {
            menuMap.map(item => {
              if (item.path) {
                return <Menu.Item key={item.path} icon={<item.icon />}>{item.name}</Menu.Item>
              } else {
                return (
                  <SubMenu key={item.subpath} icon={<item.icon />} title={item.name}>
                    {
                      item.children.map(sub => {
                        return <Menu.Item key={sub.path}>{sub.name}</Menu.Item>
                      })
                    }
                  </SubMenu>
                )
              }
            })
          }
        </Menu>
      </div>
      <div className="bottom-button">
        <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
      </div>
    </div>
  )
}

export default LeftMenus;