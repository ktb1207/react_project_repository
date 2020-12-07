import './equipmentDetails.scss';
import React from 'react';
import { useParams } from 'react-router-dom';
import DragSelect from '../../components/dragSelect/DragSelect';

interface IProps {}

const EquipmentDetails: React.FC<IProps> = (props: IProps) => {
  console.log(props);
  const params = useParams();
  console.log(params);
  // 事件选择变化
  const timeSelectChange = (selectUnit: number) => {
    console.log('选择：' + selectUnit);
  };
  return (
    <div className="equipment-details">
      <DragSelect selectChange={timeSelectChange}></DragSelect>
    </div>
  );
};

export default EquipmentDetails;
