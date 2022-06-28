import { createContext } from 'react';
import { TimerStore, TimerStoreType } from './timer';
import { UserStore, UserStoreType } from './user';
// 单一Store类型，class组件props需要
export type { TimerStoreType, UserStoreType };

// mobx-react Provider 使用
export const stores = {
  timerStore: new TimerStore(),
  usertore: new UserStore(),
};

// fn组件 useContext使用
export const useStore = createContext(stores);
