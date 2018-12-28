import {
  //需要更新的变量
  ADD_TODO, DELETE_TODO, COMPLETED_TODO,UPDATE_TODO
} from '../actions/index';
export default function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, {
        payload: action.payload,
        id: action.id,
        completed: false
      }];
    case DELETE_TODO:
      // let state = state.filter((e) => e.payload !== action.payload);
      return state.filter((e) => e.id !== action.id);
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    case COMPLETED_TODO:
      return state.map(todo => todo.id === action.id ? { ...todo, completed: !todo.completed } : todo);
    case UPDATE_TODO:
      return state.map(todo => todo.id === action.id ? { ...todo, payload: action.payload } : todo);
    default:
      return state;
  }
}
