import './equipmentPage.scss';
import React from 'react';
import { useParams } from 'react-router-dom';

interface IProps {}

const EquipmentPage: React.FC<IProps> = () => {
  const params = useParams();
  console.log(params);
  return <div>equipmentPage</div>;
};

export default EquipmentPage;
