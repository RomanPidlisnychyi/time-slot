import { createReducer } from '@reduxjs/toolkit';
import {
  registerSuccess,
  loginSuccess,
  logoutSuccess,
  currentSuccess,
  currentError,
} from '../actions/authActions';

const initialState = {
  name: null,
  token: null,
};

export const user = createReducer(initialState, {
  [registerSuccess]: (state, { payload }) => ({ ...state, name: payload }),
  [loginSuccess]: (_, { payload }) => payload,
  [currentSuccess]: (_, { payload }) => payload,
  [currentError]: () => initialState,
  [logoutSuccess]: () => initialState,
});
