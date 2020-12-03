import './equipmentPage.scss';
import React from 'react';
import { useHistory, useParams, useLocation } from 'react-router-dom';

interface IProps {}

const EquipmentPage: React.FC<IProps> = () => {
  const params = useParams();
  console.log(params);
  console.log(useLocation());
  console.log(useHistory());
  return <div>equipmentPage</div>;
};

export default EquipmentPage;
