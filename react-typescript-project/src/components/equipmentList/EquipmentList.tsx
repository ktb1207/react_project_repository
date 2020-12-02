import './equipmentList.scss';
import React from 'react';

interface IEquipment {
  name: string;
  typeName: string;
  distance: string;
  status: number;
}

interface IProps {
  equipmentArr?: Array<IEquipment>;
}

const EquipmentList: React.FC<IProps> = ({ equipmentArr = [] }) => {
  // 单元点击
  // const itemClick = (event: React.MouseEvent<HTMLLIElement>): void => {
  //   console.log(event);
  // };
  // const itemClick = (item: string) => (event: React.MouseEvent<HTMLLIElement>) => {
  //   console.log(item);
  //   console.log(event);
  // };
  const itemClick = (event: React.MouseEvent<HTMLLIElement>, item: IEquipment): void => {
    console.log(event);
    console.log(item);
  };
  const listItems = equipmentArr.map((item, index) => {
    let classStatus = '';
    switch (item.status) {
      case 1:
        classStatus = 'empty';
        break;
      case 2:
        classStatus = 'busy';
        break;
      case 3:
        classStatus = 'hitch';
        break;
      default:
        break;
    }
    return (
      <li className={classStatus} key={index} onClick={(e) => itemClick(e, item)}>
        <div className="left-wrp">
          <div className="up-title">{item.name}</div>
          <div className="down-desc">{item.typeName}</div>
        </div>
        <div className="right-wrp">{item.distance}</div>
      </li>
    );
  });
  return <ul className="equipment-list">{listItems}</ul>;
};

export default EquipmentList;
