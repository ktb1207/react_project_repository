import React from 'react';
import { LoginContext } from './createContext';

interface IProps {}

interface IState {
  name: string;
}

class UseContextClass extends React.Component<IProps, IState> {
  static contextType?: React.Context<any> | undefined = LoginContext;
  constructor(props: IProps) {
    super(props);
    this.state = {
      name: 'class',
    };
  }

  render() {
    return <div>类组建消费context: {this.context ? 'true' : 'false'}</div>;
  }
}

export default UseContextClass;
