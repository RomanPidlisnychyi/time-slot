import { createReducer } from '@reduxjs/toolkit';
import {
  registerSuccess,
  registerError,
  registerMessage,
  loginSuccess,
  loginError,
  logoutSuccess,
  currentSuccess,
  currentError,
  cleanMessage,
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

export const message = createReducer(null, {
  [registerError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
  [currentError]: (_, { payload }) => payload,
  [registerMessage]: (_, { payload }) => payload,
  [cleanMessage]: () => null,
});
