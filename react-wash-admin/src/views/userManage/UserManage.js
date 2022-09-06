import './UserManage.scss';
import React, { useState, useEffect }from 'react';
import { connect } from "react-redux";
import HeaderTitle from '../../components/headerTitle/HeaderTitle';
import { Button, Table, Modal, Form, Input, Divider,message} from 'antd';
import {PlusOutlined, DeleteOutlined, EditOutlined} from '@ant-design/icons';
import { showLoadingAction, hideLoadingAction } from '../../store/action';
import api from '../../api/index';
let editRowId = '';
const UserManage = ({showSystemLoading, hideSystemLoading})=> {
  const [userData, setUserData] = useState([]); // 表格数据
  const [tableLoading, setTableLoading] = useState(false); // 表格loading
  const [checkTableArr, setCheckTableArr] = useState([]); // 表格勾选数据
  const [modalVisible, setModalVisible] = useState(false); // modal框显示
  const [addOrEdit, setAddOrEdit] = useState(''); // 添加编辑状态
  const [addBtnLoading, setAddBtnLoading] = useState(false); // 添加按钮loading
  // antd form
  const [form] = Form.useForm();
  // 获取管理员列表数据
  const fetchUserData = async(come) => {
    if (come === 'initPage') {
      showSystemLoading();
    }
    if (come === 'freshTable') {
      setTableLoading(true)
    }
    try {
      await api.getUserData().then(res => {
        if (res.code === 0) {
          setUserData([...res.data.list])
        }
      })
    } catch(err) {
      console.log(err)
    }
    if (come === 'initPage') {
      hideSystemLoading();
    }
    if (come === 'freshTable') {
      setTableLoading(false)
    }
  };
  // add open modal
  const addClick = () => {
    setAddOrEdit('添加')
    setModalVisible(true)
  };
  // 确认添加
  const sureAddUser = async(values) => {
    setAddBtnLoading(true)
    if (addOrEdit === '添加') {
      let postData = {
        name: values.userName,
        password: values.password,
      }
      try {
        await api.postAddUser(postData).then(res => {
          if (res.code === 0) {
            setModalVisible(false)
            fetchUserData('freshTable')
          }
        })
      } catch(err) {
        console.log(err)
      }
    } else {
      // 修改
      const postData = {
        id:editRowId,
        userName: values.userName,
        password: values.password
      }
      try {
        await api.postEditUser(postData).then(res => {
          if (res.code === 0) {
            setModalVisible(false)
            fetchUserData('freshTable')
          }
        })
      } catch(err) {
        console.log(err)
      }
    }
    setAddBtnLoading(false)
  }
  // 表格勾选
  const tableSelectChange = (keys) => {
    setCheckTableArr([...keys])
    console.log(keys)
  };
  // 删除
  const deleteClick = async() => {
    showSystemLoading();
    const postData = {
      ids: checkTableArr
    }
    try {
      await api.postDeleteUser(postData).then(res =>{
        if (res.code === 0) {
          message.success('删除成功！')
          fetchUserData('freshTable')
        }
      })
    } catch(err) {
      console.log(err)
    }
    hideSystemLoading();
  };
  // edit
  const editClick = (value) => {
    setAddOrEdit('修改')
    setModalVisible(true)
    form.setFieldsValue({userName: value['user_name'],password: value['user_password']});
    editRowId = value.id;
    console.log(editRowId)
    console.log(value)
  };
  // modal close
  const cancelModal = () => {
    setModalVisible(false)
  }
  useEffect(() => {
    fetchUserData('initPage')
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
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 12 },
  };
  const tailLayout = {
    wrapperCol: { span: 24 },
  };
  return (
    <div className="menu-router-page">
      <div className="menu-page-header">
        <HeaderTitle>
          <span name="left">系统管理员列表</span>
          <div name="right">
            <Button type="primary" onClick={addClick}><PlusOutlined />添加</Button>
            <Button type="primary" danger disabled={checkTableArr.length===0} onClick={deleteClick}><DeleteOutlined />删除</Button>
          </div>
        </HeaderTitle>
      </div>
      <div className="menu-page-content">
        <Table 
          rowKey="id"
          loading={tableLoading}
          bordered
          rowSelection={{
            type: 'checkbox',
            onChange: tableSelectChange
          }}
          dataSource={userData} 
          columns={columns} />
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
          footer={null}
        >
          <Form
            {...layout}
            name="basic"
            form={form}
            initialValues={{}}
            onFinish={sureAddUser}
          >
            <Form.Item
              label="用户名"
              name="userName"
              rules={[{ required: true, message: '必填' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: '必填' }]}
            >
              <Input.Password />
            </Form.Item>
            <Divider />
            <Form.Item {...tailLayout}>
              <Button loading={addBtnLoading} type="primary" htmlType="submit" className="modal-form-sure">
                确定
              </Button>
              <Button htmlType="button" className="modal-form-cancel" onClick={cancelModal}>
                取消
              </Button>
            </Form.Item>
          </Form>
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