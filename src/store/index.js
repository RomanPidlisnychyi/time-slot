import { configureStore } from '@reduxjs/toolkit';
import { user } from './reducers/authReducer';
import { week } from './reducers/timeSlotReducer';
import { loading } from './reducers/loadingReducer';

const store = configureStore({
  reducer: {
    user,
    week,
    loading,
  },
});

export default store;
