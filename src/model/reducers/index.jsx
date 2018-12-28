// //reducer 接收来自调用的更新action
import {combineReducers} from 'redux';
import todos from './todo';
import visibilityFilter from './visibilityFilter';
export const todoApp = combineReducers({ todos,visibilityFilter });