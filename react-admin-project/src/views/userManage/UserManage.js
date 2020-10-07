import './UserManage.scss';
import React, { useState, useEffect }from 'react';
import { connect } from "react-redux";
import HeaderTitle from '../../components/headerTitle/HeaderTitle';
import { Button, Table, Modal} from 'antd';
import {PlusOutlined, DeleteOutlined, EditOutlined} from '@ant-design/icons';
import { showLoadingAction, hideLoadingAction } from '../../store/action';
import api from '../../api/index';
const UserManage = ({showSystemLoading, hideSystemLoading})=> {
  const [userData, setUserData] = useState([]); // 表格数据
  const [modalVisible, setModalVisible] = useState(false); // modal框显示
  const [addOrEdit, setAddOrEdit] = useState(''); // 添加编辑状态
  // 获取管理员列表数据
  const fetchUserData = async() => {
    showSystemLoading();
    try {
      await api.getUserData().then(res => {
        if (res.code === 0) {
          setUserData(userData.concat(res.data.list))
        }
      })
    } catch(err) {
      console.log(err)
    }
    hideSystemLoading();
  };
  // add
  const addClick = () => {
    setAddOrEdit('添加')
    setModalVisible(true)
  };
  // edit
  const editClick = (value,data,index) => {
    setAddOrEdit('修改')
    setModalVisible(true)
    console.log(value)
    console.log(data)
    console.log(index)
  };
  // modal框确认
  const modalOk = () => {};
  // modal取消
  const modalCancel = () => {
    setModalVisible(false)
  }; 
  useEffect(() => {
    fetchUserData()
  },[])

  const columns = [
    {
      title: '用户名',
      dataIndex: 'user_name',
      key: 'user_name',
    },
    {
      title: '密码',
      dataIndex: 'user_password',
      key: 'user_password',
    },
    {
      title: '操作',
      key: 'handel',
      render:(value,data,index) => (
        <Button type="link " size="small" onClick={() => editClick(value,data,index)}><EditOutlined /></Button>
      )
    },
  ];
  return (
    <div className="menu-router-page">
      <div className="menu-page-header">
        <HeaderTitle>
          <span name="left">系统管理员列表</span>
          <div name="right">
            <Button type="primary" onClick={addClick}><PlusOutlined />添加</Button>
            <Button type="primary" danger><DeleteOutlined />删除</Button>
          </div>
        </HeaderTitle>
      </div>
      <div className="menu-page-content">
        <Table 
          rowKey="id"
          bordered
          rowSelection={{
            type: 'checkbox'
          }}
          dataSource={userData} 
          columns={columns} />;
      </div>
      {/* 添加-编辑modal */}
      <Modal
          title={addOrEdit}
          visible={modalVisible}
          centered
          closable={false}
          maskClosable={false}
          keyboard={false}
          destroyOnClose={true}
          onOk={modalOk}
          onCancel={modalCancel}
        >
          
        </Modal>
    </div>
  )
}
const mapDispatchToProps = (dispatch) => {
  return {
    showSystemLoading: () => {
      dispatch(showLoadingAction())
    },
    hideSystemLoading: () => {
      dispatch(hideLoadingAction())
    }
  }
}
export default connect(
  null,
  mapDispatchToProps
)(UserManage)