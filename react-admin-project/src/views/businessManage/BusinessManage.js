import './BusinessManage.scss';
import React, { useState, useEffect }from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { Button, Table, Modal, Form, Input, Divider, Radio, Row, Col} from 'antd';
import {PlusOutlined, DeleteOutlined, EditOutlined} from '@ant-design/icons';
import HeaderTitle from '../../components/headerTitle/HeaderTitle';
import { showLoadingAction, hideLoadingAction } from '../../store/action';
import api from '../../api/index';
function BusinessManage() {
  const systemLoading = useSelector(state => state.appState.loadingState);
  const dispatch = useDispatch();
  const [businessTableData, setBusinessTableData] = useState([]); // 表格数据
  const [checkTableArr, setCheckTableArr] = useState([]); // 表格勾选数据
  const [tableLoading, setTableLoading] = useState(false); // 表格loading
  const [addOrEdit, setAddOrEdit] = useState(''); // 添加编辑状态
  const [modalVisible, setModalVisible] = useState(false); // modal框显示
  const [addBtnLoading, setAddBtnLoading] = useState(false); // 添加按钮loading
  // antd form
  const [form] = Form.useForm();
  // 运营商--添加
  const addClick = () => {
    setAddOrEdit('添加')
    setModalVisible(true)
  }
  // 运营商--删除
  const deleteClick = () => {}
  // 运营商--编辑
  const editClick = () =>{
    setAddOrEdit('修改')
    setModalVisible(true)
  }
  // 表格勾选
  const tableSelectChange = (keys) => {
    setCheckTableArr([...keys])
  };
  // 弹框-form-确认
  const formValidateSuccess = () => {
    setAddBtnLoading(true)
  }
  // 弹框-取消
  // modal close
  const cancelModal = () => {
    setModalVisible(false)
  }
  // 获取运营商表格数据
  const fetchBusinessData = async() =>{
    dispatch(showLoadingAction())
    try {
      await api.getBusinessData().then(res =>{
        if (res.code === 0) {
          setBusinessTableData([...res.data.list])
        }
      })
    } catch(err) {
      console.log(err)
    }
    dispatch(hideLoadingAction())
  }
  // 获取页面表格数据
  useEffect(() => {
    fetchBusinessData('initPage')
  },[])
  const columns = [
    {
      title: '运营商名称',
      dataIndex: 'businessName',
      key: 'businessName',
    },
    {
      title: '商家位置',
      dataIndex: 'businessLocation',
      key: 'businessLocation',
    },
    {
      title: '经度值',
      dataIndex: 'businessLongitude',
      key: 'businessLongitude',
    },
    {
      title: '纬度值',
      dataIndex: 'businessLatitude',
      key: 'businessLatitude',
    },
    {
      title: '商家描述信息',
      dataIndex: 'businessDescribe',
      key: 'businessDescribe',
    },
    {
      title: '运营状态',
      dataIndex: 'businessStatus',
      key: 'businessStatus',
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
    wrapperCol: { span: 14 },
  };
  const tailLayout = {
    wrapperCol: { span: 24 },
  };
  return (
    <div className="menu-router-page">
      <div className="menu-page-header">
        <HeaderTitle>
        <span name="left">运营商列表{true}</span>
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
          dataSource={businessTableData} 
          columns={columns} 
        />
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
            onFinish={formValidateSuccess}
          >
            <Form.Item
              label="商家名称"
              name="businessName"
              rules={[{ required: true, message: '必填' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="商家地址信息"
              name="businessLocation"
              rules={[{ required: true, message: '必填' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="商家坐标值"
              name="businessLongitude"
              rules={[{ required: true, message: '必填' }]}
            >
              <Row>
                <Col span={18}>
                  <Input disabled/>
                </Col>
                <Col span={6}>
                  <Button type="primary">选择</Button>
                </Col>
              </Row>
            </Form.Item>
            <Form.Item
              label="商家描述"
              name="businessDescribe"
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="商家运营状态"
              name="businessStatus"
              rules={[{ required: true, message: '必填' }]}
            >
              <Radio.Group>
                <Radio.Button value="1">营业中</Radio.Button>
                <Radio.Button value="2">停业</Radio.Button>
                <Radio.Button value="3">休息中</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              label="商家星评"
              name="businessStar"
              rules={[{ required: true, message: '必填' }]}
            >
              <Radio.Group disabled>
                <Radio value="0">0分</Radio>
                <Radio value="1">1分</Radio>
                <Radio value="2">2分</Radio>
                <Radio value="3">3分</Radio>
                <Radio value="2">4分</Radio>
                <Radio value="5">5分</Radio>
              </Radio.Group>
            </Form.Item>
            {/* <Form.Item
              label="商家图片"
              name="businessStatbusinessImageSrcus"
              rules={[{ required: true, message: '必填' }]}
            >
              
            </Form.Item> */}
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

export default BusinessManage;