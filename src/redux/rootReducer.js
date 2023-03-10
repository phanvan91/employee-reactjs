import { combineReducers } from 'redux';
import auth from './auth/reducer';

const context = require.context("modules/");

console.log(11111)

let pageReducer = {}
let reduxs = []
let configs = []

context.keys().forEach(path => {
  path = path.replace('./', '')
  if (path.includes('redux/reducer.js')) {
    reduxs.push(path)
  }
  if (path.includes('config.js')) {
    configs.push(path)
  }
});

reduxs.forEach((path, index) => {
  let reducer = require('modules/' + path.replace('./', '')).default;

  let config = require('modules/' + configs[index].replace('./', '')).default;
  pageReducer[config.key] = reducer
})

const rootReducer = combineReducers({
  auth,
  ...pageReducer
});

export default rootReducer;
