import {
  PieChartOutlined,
  DesktopOutlined,
  MailOutlined,
} from '@ant-design/icons';

const menuMap = [
  {
    path: '/home',
    icon: PieChartOutlined,
    name: '用户管理'
  },
  {
    path: '/home/orderManage',
    icon: DesktopOutlined,
    name: '订单管理'
  },
  {
    subpath:'businessSub',
    expand: true,
    icon: MailOutlined,
    name: '商家管理',
    children: [
      {
        path: '/home/businessManage',
        name: '运营商管理'
      },
      {
        path: '/home/businessManage2',
        name: '设备管理'
      }
    ]
  }
];

export default menuMap;