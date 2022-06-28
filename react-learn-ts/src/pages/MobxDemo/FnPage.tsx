import React, { useContext } from 'react';

import { observer } from 'mobx-react';
import { useStore } from '../../mobxStore/index';

interface IProps {}

const FnPage: React.FC = (props: IProps) => {
  const { timerStore } = useContext(useStore);
  return (
    <div>
      <p>当前timer值：{timerStore.timer}</p>
      <button onClick={() => timerStore.addTimer()}>mobx值+1</button>
      <button onClick={() => timerStore.resetTimer()}>重制</button>
    </div>
  );
};

export default observer(FnPage);
