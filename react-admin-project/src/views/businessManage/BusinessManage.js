import './BusinessManage.scss';
import React, { useState, useEffect }from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { Button, Table, Modal, Form, Input, Divider,message} from 'antd';
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
  // 运营商--添加
  const addClick = () => {}
  // 运营商--删除
  const deleteClick = () => {}
  // 运营商--编辑
  const editClick = () =>{}
  // 表格勾选
  const tableSelectChange = (keys) => {
    setCheckTableArr([...keys])
  };
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
  return (
    <div className="menu-router-page">
      <div className="menu-page-header">
        <HeaderTitle>
        <span name="left">运营商列表{systemLoading ? 'true' : 'false'}</span>
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
    </div>
  )
}

export default BusinessManage;