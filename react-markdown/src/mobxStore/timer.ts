import { makeAutoObservable } from 'mobx';

export interface TimerStoreType {
  timer: number;
  addTimer: Function;
  resetTimer: Function;
}

class TimerStore implements TimerStoreType {
  timer = 0;
  constructor() {
    makeAutoObservable(this);
  }

  addTimer() {
    this.timer += 1;
  }

  resetTimer() {
    this.timer = 0;
  }
}

export { TimerStore };
