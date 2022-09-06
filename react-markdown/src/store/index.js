import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);


const unsubscribe = store.subscribe(() => {
  console.log('store数据更新');
  console.log(store.getState())
})

export default store;