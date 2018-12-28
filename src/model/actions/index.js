/* 
  在ActionCreator 中完成的数据的获取与处理工作，并且通过向store发送各个组合的action，从而达到控制界面展示的内容实现交互。
*/
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const COMPLETED_TODO = 'COMPLETED_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
let nextTodoId = 0;
export function addTodo(text) {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    payload: text,
    completed: false
  }
};
export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id:id,
    completed: false
  }
};
export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}
export function completedTodo(id) {
  return {
    type: COMPLETED_TODO,
    id:id,
    completed: true
  }
}
export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
export function updateTodo (id,payload) {
  return {
    type:UPDATE_TODO,
    id:id,
    payload:payload
  }
}