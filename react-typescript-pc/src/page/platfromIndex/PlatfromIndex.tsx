import React, { Component } from 'react';
import platStyle from './platform.module.scss';

interface IProps {}

interface IState {
  title: string;
}

class PlatfromIndex extends Component<IProps, IState> {
  readonly state: IState;
  public constructor(props: IProps) {
    super(props);
    this.state = {
      title: '标题'
    };
  }
  public render(): React.ReactElement {
    return (
      <div className={`root-router-page ${platStyle.platfromWrp}`}>
        <div className={platStyle.meunHeader}></div>
        <div className={platStyle.menuLeft}></div>
        <div className={platStyle.mainContent}>
          <div className={platStyle.childRootWrp}></div>
        </div>
      </div>
    );
  }
}

export default PlatfromIndex;
