import { makeObservable, observable, computed, action } from 'mobx';

export interface UserStoreType {
  name: string;
  age: number;
  doubleAge: number;
  editName: (str: string) => void;
}

class UserStore {
  name = '张三';
  age = 18;
  get doubleAge() {
    return this.age * 2;
  }
  constructor() {
    makeObservable(this, {
      name: observable,
      age: observable,
      doubleAge: computed,
      editName: action,
    });
  }

  editName(str: string) {
    this.name = str;
  }
}

export { UserStore };
