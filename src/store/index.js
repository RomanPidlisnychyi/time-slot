import { configureStore } from '@reduxjs/toolkit';
import { user, message } from './reducers/authReducer';
import { slots } from './reducers/timeSlotReducer';
import { loading } from './reducers/loadingReducer';

const store = configureStore({
  reducer: {
    user,
    message,
    slots,
    loading,
  },
});

export default store;
