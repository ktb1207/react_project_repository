import React from 'react';
import { Menu, Dropdown } from 'antd';
import { UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import settingStyle from './userSetting.module.scss';
import userLogon from '@/static/images/defaultUserLogo.png';

interface IProps {
  userQuitOut: () => void;
}

const UserSetting: React.FC<IProps> = (props: IProps) => {
  console.log(props);
  // 退出登录
  const quitOut = (): void => {
    props.userQuitOut();
  };
  const menu = (
    <Menu>
      <Menu.Item>
        <UserOutlined />
        个人中心
      </Menu.Item>
      <Menu.Item>
        <SettingOutlined />
        个人设置
      </Menu.Item>
      <Menu.Item onClick={quitOut}>
        <LogoutOutlined />
        退出登录
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu} placement="bottomRight" arrow>
      <div className={settingStyle.userInfo}>
        <img className={settingStyle.logo} src={userLogon} alt="user logo" />
        <span className={settingStyle.userName}>Sertia Ma</span>
      </div>
    </Dropdown>
  );
};

export default UserSetting;
