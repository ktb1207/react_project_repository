import './equipmentDetails.scss';
import React from 'react';
import { useParams } from 'react-router-dom';
import DragSelect from '../../components/dragSelect/DragSelect';

interface IProps {}

const EquipmentDetails: React.FC<IProps> = (props: IProps) => {
  console.log(props);
  const params = useParams();
  console.log(params);
  return (
    <div className="equipment-details">
      <DragSelect></DragSelect>
    </div>
  );
};

export default EquipmentDetails;
