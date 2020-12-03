/**
 * 关于函数组件defaultProps
 * 如果你需要定义defaultProps,那么不要使用React.FC,因为React.FC对defaultProps支持不好
 * 可以使用
 * 1
 * const defaultProps = {
 *  name: '张三'
 * }
 * 2
 * type IProps = {
 *  age: Number;
 *  name?: string
 * } & typeof defaultProps;
 * 3
 * const Greet = (props: IProps) = > {return <div>demo</div>}
 * export default Greet;
 */

import './equipmentList.scss';
import React from 'react';

interface IEquipment {
  name: string;
  typeName: string;
  distance: string;
  status: number;
}

interface IProps {
  equipmentArr?: Array<IEquipment> | undefined;
  cellClick?: (item: IEquipment) => void | undefined;
}

const EquipmentList: React.FC<IProps> = ({ cellClick, equipmentArr = [] }: IProps) => {
  // 单元点击
  // const itemClick = (event: React.MouseEvent<HTMLLIElement>): void => {
  //   console.log(event);
  // };
  // 事件绑定--onClick = {itemClick}
  // const itemClick = (item: IEquipment) => (event: React.MouseEvent<HTMLLIElement>) => {
  //   console.log(item);
  //   console.log(event);
  // };
  // 事件绑定--onClick = {itemClick(item)}
  const itemClick = (event: React.MouseEvent<HTMLLIElement>, item: IEquipment): void => {
    console.log(event);
    if (cellClick) {
      cellClick(item);
    }
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
