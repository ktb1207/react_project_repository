import './dragSelect.scss';
import React, { useState, useRef, useEffect } from 'react';

interface IProps {
  total?: number; // 最大值
  step?: number; // 步进数
  defaultSelect?: number; // 默认选择点数
  selectChange?: (selectUnit: number) => void | undefined; // 选择回调
}

const spotWidth: number = 6;
const lineEndsMargin: number = 10; // 标度线左右边距
const squreWidth: number = 20; // 滑块宽
const squreMargin: number = lineEndsMargin - squreWidth / 2;

const DragSelect: React.FC<IProps> = ({ selectChange, total = 200, step = 20, defaultSelect = 0 }: IProps) => {
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
  // 每分割份对应像素位置
  const [unitPxArr, setUnitPxArr] = useState<Array<number>>([]);
  // 单位像素点步进数
  const [unitStepPx, setUnitStepPx] = useState<number>(0);
  const squreParentRef = useRef<HTMLDivElement | null>(null);
  const spotParentRef = useRef<HTMLDivElement | null>(null);
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
    // 滑动跟随标点滚动
    const $squreDom = event.target as HTMLDivElement;
    const squreScollLeft = $squreDom.offsetLeft;
    for (let i = 0; i < unitPxArr.length; i++) {
      const unitFloatNum = unitPxArr[i] - squreScollLeft;
      if (unitFloatNum < parseFloat(String(unitStepPx / 3))) {
        setSelectIndex(i);
      }
    }
  };
  // 滑动停止
  const squreTouchEnd = (event: React.TouchEvent<HTMLDivElement>): void => {
    const $target = event.target as HTMLDivElement;
    const scollEndLeftX = $target.offsetLeft;
    let selectIndex: number = 0;
    // 滑动距离等于点坐标
    if (scollEndLeftX % unitStepPx === 0) {
      setSelectIndex(parseInt(String(scollEndLeftX / unitStepPx)));
      setSqureLeftDistance(unitPxArr[parseInt(String(scollEndLeftX / unitStepPx))] - (squreWidth / 2 - spotWidth / 2) - 1);
      selectIndex = parseInt(String(scollEndLeftX / unitStepPx));
    } else {
      const pieHref = unitStepPx / 2;
      // 滑动距离超过点坐标但不超过一半
      if (scollEndLeftX % unitStepPx < pieHref) {
        setSelectIndex(parseInt(String(scollEndLeftX / unitStepPx)));
        setSqureLeftDistance(unitPxArr[parseInt(String(scollEndLeftX / unitStepPx))] - (squreWidth / 2 - spotWidth / 2) - 1);
        selectIndex = parseInt(String(scollEndLeftX / unitStepPx));
      } else {
        // 滑动距离超过点坐标并且大于一半
        setSelectIndex(parseInt(String(scollEndLeftX / unitStepPx)) + 1);
        setSqureLeftDistance(unitPxArr[parseInt(String(scollEndLeftX / unitStepPx)) + 1] - (squreWidth / 2 - spotWidth / 2) - 1);
        selectIndex = parseInt(String(scollEndLeftX / unitStepPx)) + 1;
      }
    }
    // 回调反馈
    if (selectChange) {
      selectChange(unitArr[selectIndex]);
    }
  };
  // effect
  useEffect(() => {
    const $parentW = window.getComputedStyle(squreParentRef.current as HTMLDivElement, null).width;
    const $spotParent = spotParentRef.current as HTMLDivElement;
    const parentWNum = parseInt($parentW);
    const stepPx = parseInt(String(parentWNum / gutterNum));
    const stepArr: Array<number> = [];
    for (let i = 0; i < $spotParent.children.length; i++) {
      const $children = $spotParent.children[i] as HTMLDivElement;
      stepArr.push($children.offsetLeft);
    }
    setUnitPxArr(stepArr);
    setUnitStepPx(stepPx);
    // 保存滑块父元素宽度
    setMaxDragLeft(parseInt($parentW) - squreWidth);
    // 回调反馈
    if (selectChange) {
      selectChange(unitArr[defaultSelect]);
    }
  }, [total, step]);
  return (
    <div className="drag-select-wrp">
      <div ref={spotParentRef} className="drag-line" style={{ marginLeft: `${lineEndsMargin}px`, marginRight: `${lineEndsMargin}px` }}>
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
