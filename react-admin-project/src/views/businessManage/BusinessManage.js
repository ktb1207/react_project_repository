import './BusinessManage.scss';
import React, { useState, useEffect, useRef }from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom";
import { Button, Table, Modal, Form, Input, Divider, Radio, Row, Col, message} from 'antd';
import {PlusOutlined, DeleteOutlined, SettingOutlined} from '@ant-design/icons';
import HeaderTitle from '../../components/headerTitle/HeaderTitle';
import Map from '../../components/BMap/BMap';
import { showLoadingAction, hideLoadingAction } from '../../store/action';
import api from '../../api/index';
function BusinessManage() {
  const systemLoading = useSelector(state => state.appState.loadingState);
  const dispatch = useDispatch();
  console.log(systemLoading);
  // 获取路由信息
  const history = useHistory();
  const [businessTableData, setBusinessTableData] = useState([]); // 表格数据
  const [checkTableArr, setCheckTableArr] = useState([]); // 表格勾选数据
  const [tableLoading, setTableLoading] = useState(false); // 表格loading
  const [addOrEdit, setAddOrEdit] = useState(''); // 添加编辑状态
  const [modalVisible, setModalVisible] = useState(false); // modal框显示
  const [addBtnLoading, setAddBtnLoading] = useState(false); // 添加按钮loading
  const [locationModalVisible, setLocationModalVisible] = useState(false); // 位置modal
  const [businessAddressText, setBusinessAddressText] = useState(''); // 商家位置文本
  const fileRef = useRef();
  // antd form
  const [form] = Form.useForm();
  // 运营商--添加
  const addClick = () => {
    setAddOrEdit('添加')
    setModalVisible(true)
  }
  // 运营商--删除
  const deleteClick = async() => {
    dispatch(showLoadingAction())
    const postData = {
      ids: checkTableArr
    }
    try {
      await api.postDeleteBusiness(postData).then(res =>{
        if (res.code === 0) {
          message.success('删除成功！')
          fetchBusinessData('freshTable')
        }
      })
    } catch(err) {
      console.log(err)
    }
    dispatch(hideLoadingAction())
  }
  // 设备维护
  const editClick = (value) =>{
    console.log(value.id);
    history.push('/home/equipmentManage')
  }
  // 表格勾选
  const tableSelectChange = (keys) => {
    setCheckTableArr([...keys])
  };
  // 弹框-form-确认
  const formValidateSuccess = async(values) => {
    setAddBtnLoading(true)
    let formData = new FormData();
    formData.append('imgFile',fileRef.current.files[0]);
    for(let i in values) {
      formData.append(i, values[i])
    }
    try {
      api.postAddBusiness(formData).then(res => {
        if (res.code === 0) {
          setModalVisible(false)
          fetchBusinessData('freshTable')
        }
      })
    } catch(err) {
      console.log(err)
    }
    setAddBtnLoading(false)
  }
  // 弹框-取消
  // modal close
  const cancelModal = () => {
    setModalVisible(false)
  }
  // 打开地图弹窗
  const openMapModal = () => {
    const adressText = form.getFieldsValue().businessLocation;
    if (!adressText || adressText === '') {
      message.error('请输入商家位置信息');
      return false;
    }
    setBusinessAddressText(adressText)
    setLocationModalVisible(true)
  }
  // 获得地图点
  const getMapPoint = (point) => {
    console.log(point)
    const pointText = point.lng + '+' + point.lat;
    form.setFieldsValue({businessLongitude: pointText})
  }
  // 地图确认
  const mapOk = () => {
    setLocationModalVisible(false)
  }
  // 地图取消
  const mapCancel = () => {
    setLocationModalVisible(false)
  }
  // 获取运营商表格数据
  const fetchBusinessData = async(come) =>{
    if (come === 'initPage') {
      dispatch(showLoadingAction())
    }
    if (come === 'freshTable') {
      setTableLoading(true)
    }
    try {
      await api.getBusinessData().then(res =>{
        if (res.code === 0) {
          setBusinessTableData([...res.data.list])
        }
      })
    } catch(err) {
      console.log(err)
    }
    if (come === 'initPage') {
      dispatch(hideLoadingAction())
    }
    if (come === 'freshTable') {
      setTableLoading(false)
    }
  }
  // 获取页面表格数据
  useEffect(() => {
    fetchBusinessData('initPage')
  },[])
  // 表格列标题
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
        <Button type="link " size="small" onClick={() => editClick(value,data,index)}><SettingOutlined /></Button>
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
            initialValues={{
              businessStar: 1,
            }}
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
                  <Form.Item name="businessLongitude">
                    <Input disabled/>
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Button type="primary" onClick={openMapModal}>选择</Button>
                </Col>
              </Row>
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
              label="商家描述"
              name="businessDescribe"
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="商家星评"
              name="businessStar"
            >
              <Radio.Group disabled>
                <Radio value={0}>0分</Radio>
                <Radio value={1}>1分</Radio>
                <Radio value={2}>2分</Radio>
                <Radio value={3}>3分</Radio>
                <Radio value={4}>4分</Radio>
                <Radio value={5}>5分</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              label="商家图片"
              name="businessStatbusinessImageSrcus"
              rules={[{ required: true, message: '必选' }]}
            >
              <input type="file" ref={fileRef} value={''}/>
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
      {/* 地图选择 */}
      <Modal
        title="坐标位置选择"
        visible={locationModalVisible}
        centered
        closable={false}
        maskClosable={false}
        keyboard={false}
        destroyOnClose={true}
        width={1080}
        onOk={mapOk}
        onCancel={mapCancel}
      >
        <div className="modal-map-content">
          <Map location={businessAddressText} getPoint={getMapPoint}></Map>
        </div>
      </Modal>
    </div>
  )
}

export default BusinessManage;