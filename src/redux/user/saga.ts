import { all, fork, put, takeEvery, select } from 'redux-saga/effects';
import { loginSucces, loginInterface } from './actions';
import { UserActionTypes } from './types';
import * as credsJSON from '../../data/creds.json';

export function* watchLogin() {
  yield takeEvery(UserActionTypes.LOGIN, processLogin);
}

function* processLogin({ payload }: loginInterface) {
  const { email, password } = payload;

  console.log('login');

  let found = credsJSON.accounts.find(
    account => email == account.email && password == account.password
  );

  if (found) {
    console.log('found');
    yield put(loginSucces());
  }
}

export default function* rootSaga() {
  yield all([fork(watchLogin)]);
}
