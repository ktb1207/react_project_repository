/*
 * action 类型
 */

export const ADD_TODO = 'ADD_TODO';
export const DECREASE_TODO = 'DECREASE_TODO';

/*
 * 其它的常量
 */


/*
 * action 创建函数
 */

export function addTodo(num) {
  return { type: ADD_TODO, num }
}

export function decrease(num){
  return { type: DECREASE_TODO, num}
}
