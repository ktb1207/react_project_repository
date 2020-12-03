import React, { useState } from 'react';
import './childCollect.scss';
import EquipmentList from '../../components/equipmentList/EquipmentList';

interface IEquipment {
  name: string;
  typeName: string;
  distance: string;
  status: number;
}

const ChildCollect: React.FC = () => {
  const testArr = [
    {
      name: '大望路万达广场店',
      typeName: '洗衣机',
      distance: '2.5km',
      status: 1
    },
    {
      name: '国贸店',
      typeName: '烘干机',
      distance: '2.8km',
      status: 2
    },
    {
      name: '清河店',
      typeName: '洗鞋机',
      distance: '2.8km',
      status: 3
    }
  ];
  const [equipmentData] = useState<Array<IEquipment>>(testArr);
  // 单元格点击
  const listClick = (item: IEquipment) => {
    console.log(item);
  };
  return (
    <div className="child-collect-wrp">
      <EquipmentList equipmentArr={equipmentData} cellClick={listClick}></EquipmentList>
    </div>
  );
};

export default ChildCollect;
