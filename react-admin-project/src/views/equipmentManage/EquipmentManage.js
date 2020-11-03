import './equipmentManage.scss';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Table} from 'antd';
import {PlusOutlined, DeleteOutlined, SettingOutlined} from '@ant-design/icons';
import HeaderTitle from '../../components/headerTitle/HeaderTitle';
function EquipmentManage() {
  let { equipmentId } = useParams();
  const [tableLoading, setTableLoading] = useState(false); // 表格loading
  const [equipmentTableData, setEquipmentTableData] = useState([]); // 表格数据
  const [checkTableArr, setCheckTableArr] = useState([]); // 表格勾选数据
  // 添加
  const addClick = () => {}
  // 删除
  const deleteClick = () => {}
  // 表格勾选
  const tableSelectChange = (keys) => {
    setCheckTableArr([...keys])
  };
  const editClick = () => {}
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
      key: 'equipmentType',
    },
    {
      title: '操作',
      key: 'handel',
      render:(value,data,index) => (
        <Button type="link " size="small" onClick={() => editClick(value,data,index)}><SettingOutlined /></Button>
      )
    }
  ]
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
    </div>
  )
}

export default EquipmentManage;