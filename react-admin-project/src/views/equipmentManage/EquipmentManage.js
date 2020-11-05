import './equipmentManage.scss';
import React, { useState, useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
import { Button, Table, Modal, Form, Input, Radio, Divider} from 'antd';
import {PlusOutlined, DeleteOutlined, SettingOutlined} from '@ant-design/icons';
import HeaderTitle from '../../components/headerTitle/HeaderTitle';
import { showLoadingAction, hideLoadingAction } from '../../store/action';
import api from '../../api/index';
function EquipmentManage() {
  const dispatch = useDispatch();
  let { equipmentId } = useParams();
  const [tableLoading, setTableLoading] = useState(false); // 表格loading
  const [equipmentTableData, setEquipmentTableData] = useState([]); // 表格数据
  const [checkTableArr, setCheckTableArr] = useState([]); // 表格勾选数据
  const [modalVisible, setModalVisible] = useState(false); // modal框显示
  const [addBtnLoading, setAddBtnLoading] = useState(false); // 添加按钮loading
  // antd form
  const [form] = Form.useForm();
  // 添加
  const addClick = () => {
    form.setFieldsValue({equipmentName: '', equipmentType: ''})
    setModalVisible(true)
  }
  // 删除
  const deleteClick = () => {}
  // 表格勾选
  const tableSelectChange = (keys) => {
    setCheckTableArr([...keys])
  };
  const editClick = () => {};
  // 添加表单确认
  const formValidateSuccess = async(values) => {
    setAddBtnLoading(true)
    try {
      const postData = {
        equipmentName: values.equipmentName,
        equipmentType: values.equipmentType,
        equipmentConcatBusinessId: equipmentId,
      }
      await api.postAddEquipment(postData).then(res =>{
        if (res.code === 0) {
          setAddBtnLoading(false)
          setModalVisible(false)
          fetchEquipmentData('freshTable')
        }
      })
    } catch(err) {
      console.log(err)
      setAddBtnLoading(false)
    }
  };
  // 添加取消
  const cancelModal = () => {
    setModalVisible(false)
  }
  // 获取表格数据
  const fetchEquipmentData = async(come) => {
    if (come === 'initPage') {
      dispatch(showLoadingAction())
    }
    if (come === 'freshTable') {
      setTableLoading(true)
    }
    try {
      await api.getBusinessEquipment(equipmentId).then(res => {
        if (res.code === 0) {
          setEquipmentTableData([...res.data.list])
        }
      })
    } catch(err){
      console.log(err)
    }
    if (come === 'initPage') {
      dispatch(hideLoadingAction())
    }
    if (come === 'freshTable') {
      setTableLoading(false)
    }
  }
  // 获取表格数据
  useEffect(() => {
    fetchEquipmentData('initPage')
  }, [])
  // 表格列标题
  const columns = [
    {
      title: '洗衣机名称',
      dataIndex: 'equipmentName',
      key: 'equipmentName',
    },
    {
      title: '洗衣机类型',
      dataIndex: 'equipmentType',
      key: 'equipmentType'
    },
    {
      title: '操作',
      key: 'handel',
      render:(value,data,index) => (
        <Button type="link " size="small" onClick={() => editClick(value,data,index)}><SettingOutlined /></Button>
      )
    }
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
          <span name="left">洗衣机列表</span>
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
          dataSource={equipmentTableData} 
          columns={columns} 
        />
      </div>
      {/* 添加-编辑modal */}
      <Modal
        title='添加设备'
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
            label="设备名称"
            name="equipmentName"
            rules={[{ required: true, message: '必填' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="设备类型"
            name="equipmentType"
            rules={[{ required: true, message: '必填' }]}
          >
            <Radio.Group>
              <Radio.Button value="1">洗衣机</Radio.Button>
              <Radio.Button value="2">洗鞋机</Radio.Button>
              <Radio.Button value="3">烘干机</Radio.Button>
            </Radio.Group>
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

export default EquipmentManage;