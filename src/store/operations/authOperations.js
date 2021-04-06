import {
  registerRequest,
  registerSuccess,
  registerError,
  registerMessage,
  loginRequest,
  loginSuccess,
  loginError,
  logoutSuccess,
  currentRequest,
  currentSuccess,
  currentError,
  cleanMessage,
} from '../actions/authActions';
import { onGetTimeSlot } from './timeSlotOperations';
import { register, login, logout, current } from '../../utils/apiUtils';

export const onRegister = credentials => async dispatch => {
  dispatch(registerRequest());
  const payload = await register(credentials);

  if (payload && payload.status < 400) {
    dispatch(registerSuccess(payload.data.name));
    dispatch(registerMessage('Registration was successfully!'));
    dispatch(onCleanMessage());
    return;
  }

  dispatch(registerError(payload));
  dispatch(onCleanMessage());
};

export const onLogin = credentials => async dispatch => {
  dispatch(loginRequest());
  const payload = await login(credentials);

  if (payload && payload.status < 400) {
    dispatch(loginSuccess(payload.data));
    dispatch(onGetTimeSlot());
    return;
  }

  dispatch(loginError(payload));
  dispatch(onCleanMessage());
};

export const onLogout = () => async dispatch => {
  logout();
  dispatch(logoutSuccess());
};

export const onCurrent = token => async dispatch => {
  dispatch(currentRequest());
  const payload = await current(token);

  if (payload && payload.status < 400) {
    dispatch(currentSuccess({ name: payload.data.name, token }));
    dispatch(onGetTimeSlot());
    return;
  }

  dispatch(currentError(payload));
  dispatch(onCleanMessage());
};

export const onCleanMessage = () => dispatch => {
  setTimeout(() => {
    dispatch(cleanMessage());
  }, 2000);
};
