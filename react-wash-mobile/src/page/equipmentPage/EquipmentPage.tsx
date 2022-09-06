import './equipmentPage.scss';
import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import EquipmentList from '@/components/equipmentList/EquipmentList';

interface IProps {}

interface IEquipment {
  name: string;
  typeName: string;
  distance: string;
  status: number;
}

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

const EquipmentPage: React.FC<IProps> = (props: IProps) => {
  const params = useParams();
  const history = useHistory();
  const [equipmentData] = useState<Array<IEquipment>>(testArr);
  console.log(params);
  console.log(props);
  // 单元格点击
  const listClick = (item: IEquipment) => {
    console.log(item);
    history.push({
      pathname: '/equipmentDetails/123'
    });
  };
  return (
    <div className="equipment-page">
      <EquipmentList equipmentArr={equipmentData} cellClick={listClick}></EquipmentList>
    </div>
  );
};

export default EquipmentPage;
