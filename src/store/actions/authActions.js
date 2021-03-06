import { createAction } from '@reduxjs/toolkit';

export const registerRequest = createAction('REGISTER_REQUEST');
export const registerSuccess = createAction('REGISTER_SUCCESS');
export const registerError = createAction('REGISTER_ERROR');
export const registerMessage = createAction('REGISTER_MESSAGE');

export const loginRequest = createAction('LOGIN_REQUEST');
export const loginSuccess = createAction('LOGIN_SUCCESS');
export const loginError = createAction('LOGIN_ERROR');

export const logoutSuccess = createAction('LOGOUT_SUCCESS');
export const cleanMessage = createAction('CLEAN_MESSAGE');

export const currentRequest = createAction('CURRENT_REQUEST');
export const currentSuccess = createAction('CURRENT_SUCCESS');
export const currentError = createAction('CURRENT_ERROR');
