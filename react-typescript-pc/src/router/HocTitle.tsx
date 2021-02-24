import React from 'react';

interface IProps {}
const HocTitle: React.ReactElement<IProps> = (WrapComponent: React.ReactElement) => {
  return class extends React.Component<IProps> {
    constructor(props: IProps) {
      super(props)
    }

    render(): React.ReactElement{
      return <WrapComponent>
    }
  }
}

export default HocTitle;