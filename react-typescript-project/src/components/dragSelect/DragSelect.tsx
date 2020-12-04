import './dragSelect.scss';
import React, { useState } from 'react';

const spotWidth: number = 6;
const lineEndsMargin: number = 10;
const squreWidth: number = 15;
const squreMargin: number = lineEndsMargin - squreWidth / 2;

const DragSelect: React.FC = () => {
  const [squreLeftDistance, setSqureLeftDistance] = useState<number>(0);
  const [maxDragLeft, setMaxDragLeft] = useState<number>(0);
  // 开始滑动
  const squreTouchStart = (event: React.TouchEvent<HTMLDivElement>): void => {
    const $target = event.target as HTMLDivElement;
    const parentEl = $target.parentElement;
    const $parentW = window.getComputedStyle(parentEl as HTMLDivElement, null).width;
    setMaxDragLeft(parseInt($parentW) - squreWidth - 2);
  };
  // 滑动中
  const squreTouchMove = (event: React.TouchEvent<HTMLDivElement>): void => {
    console.log(event);
    let scollNum = event.changedTouches[0].clientX;
    if (scollNum <= 0) {
      scollNum = 0;
    }
    if (scollNum >= maxDragLeft) {
      scollNum = maxDragLeft;
    }
    setSqureLeftDistance(scollNum);
  };
  return (
    <div className="drag-select-wrp">
      <div className="drag-line" style={{ marginLeft: `${lineEndsMargin}px`, marginRight: `${lineEndsMargin}px` }}>
        <div className="drag-spot">
          <span className="unit">0</span>
        </div>
        <div className="drag-spot">
          <span className="unit">20</span>
        </div>
        <div className="drag-spot">
          <span className="unit">40</span>
        </div>
        <div className="drag-spot">
          <span className="unit">60</span>
        </div>
        <div className="drag-spot">
          <span className="unit">80</span>
        </div>
        <div className="drag-spot">
          <span className="unit">100</span>
        </div>
      </div>
      <div className="drag-squre-wrp" style={{ marginLeft: `${squreMargin}px`, marginRight: `${squreMargin}px` }}>
        <div className="squre" style={{ left: `${squreLeftDistance}px` }} onTouchStart={squreTouchStart} onTouchMove={squreTouchMove}></div>
      </div>
    </div>
  );
};

export default DragSelect;
