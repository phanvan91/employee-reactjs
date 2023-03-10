import { all } from 'redux-saga/effects';
import auth from './auth/tasks';
console.log('vvv','context')

const context = require.context("modules/");



let moduleSagas = []

context.keys().forEach((path) => {
  path = path.replace('./', '')
  if (path.includes('redux/saga.js')) {
    let redux = require('modules/' + path.replace('./', ''));
    let saga = redux.default;
    moduleSagas.push(saga)
  }
});

export default function* rootSaga() {
  yield all([
    auth(),
    ...moduleSagas.map(pageSaga => pageSaga())
  ]);
}
