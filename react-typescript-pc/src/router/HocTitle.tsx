import React from 'react';
import { Diff } from 'utility-types';

interface InjectedProps {
  titleName: string;
}

const HocTitle = <BaseProps extends InjectedProps>(BaseComponent: React.ComponentType<BaseProps>, titleName: string) => {
  type HocProps = Diff<BaseProps, InjectedProps> & {
    // here you can extend hoc with new props
  };
  type HocState = {
    count?: number;
  };

  return class Hoc extends React.Component<HocProps, HocState> {
    // Enhance component name for debugging and React-Dev-Tools
    static displayName = `HocTitle(${BaseComponent.name})`;
    // reference to original wrapped component
    static readonly WrappedComponent = BaseComponent;

    readonly state: HocState = {
      count: 2
    };

    componentDidMount() {
      document.title = titleName;
    }

    componentDidUpdate() {
      document.title = titleName;
    }

    render() {
      const { ...restProps } = this.props;
      return <BaseComponent {...(restProps as BaseProps)} />;
    }
  };
};

export default HocTitle;
