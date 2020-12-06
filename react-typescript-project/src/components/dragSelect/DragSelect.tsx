import './dragSelect.scss';
import React, { useState, useRef, useEffect } from 'react';

interface IProps {
  total?: number; // 最大值
  step?: number; // 步进数
  defaultSelect?: number; // 默认选择点数
}

const spotWidth: number = 6;
const lineEndsMargin: number = 10; // 标度线左右边距
const squreWidth: number = 20; // 滑块宽
const squreMargin: number = lineEndsMargin - squreWidth / 2;

const DragSelect: React.FC<IProps> = ({ total = 100, step = 20, defaultSelect = 0 }: IProps) => {
  // 分个数
  const gutterNum = total % step === 0 ? total / step : parseInt(String(total / step)) + 1;
  // 单位成员
  const unitArr: Array<number> = [];
  for (let i = 0; i <= gutterNum; i++) {
    if (step * i <= total) {
      unitArr.push(step * i);
    } else {
      unitArr.push(total);
    }
  }
  // 滑块左右margin
  const [squreLeftDistance, setSqureLeftDistance] = useState<number>(0);
  // 滑块可滑动最大量
  const [maxDragLeft, setMaxDragLeft] = useState<number>(0);
  // 当前选中单位点索引
  const [selectIndex, setSelectIndex] = useState<number>(defaultSelect);
  const squreParentRef = useRef<HTMLDivElement | null>(null);
  // 开始滑动
  const squreTouchStart = (event: React.TouchEvent<HTMLDivElement>): void => {
    // const $target = event.target as HTMLDivElement;
    // const parentEl = $target.parentElement;
    // const $parentW = window.getComputedStyle(parentEl as HTMLDivElement, null).width;
    // setMaxDragLeft(parseInt($parentW) - squreWidth);
    console.log(event);
  };
  // 滑动中
  const squreTouchMove = (event: React.TouchEvent<HTMLDivElement>): void => {
    let scollNum = event.changedTouches[0].clientX;
    // 最小
    if (scollNum <= 0) {
      scollNum = 0;
    }
    // 最大
    if (scollNum >= maxDragLeft) {
      scollNum = maxDragLeft;
    }
    setSqureLeftDistance(scollNum);
  };
  // 滑动停止
  const squreTouchEnd = (event: React.TouchEvent<HTMLDivElement>): void => {
    const scollEndLeftX = event.changedTouches[0].clientX;
    console.log(scollEndLeftX);
    setSelectIndex(4);
  };
  //
  useEffect(() => {
    const $parentW = window.getComputedStyle(squreParentRef.current as HTMLDivElement, null).width;
    // 保存滑块父元素宽度
    setMaxDragLeft(parseInt($parentW) - squreWidth);
  }, [total, step]);
  return (
    <div className="drag-select-wrp">
      <div className="drag-line" style={{ marginLeft: `${lineEndsMargin}px`, marginRight: `${lineEndsMargin}px` }}>
        {unitArr.map((item, index) => {
          return (
            <div className={`drag-spot ${selectIndex === index ? 'active-spot' : ''}`} key={index}>
              <span className="unit">{item}</span>
            </div>
          );
        })}
      </div>
      <div ref={squreParentRef} className="drag-squre-wrp" style={{ marginLeft: `${squreMargin}px`, marginRight: `${squreMargin}px` }}>
        <div
          className="squre"
          style={{ left: `${squreLeftDistance}px` }}
          onTouchStart={squreTouchStart}
          onTouchMove={squreTouchMove}
          onTouchEnd={squreTouchEnd}
        ></div>
      </div>
    </div>
  );
};

export default DragSelect;
