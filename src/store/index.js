import { configureStore } from '@reduxjs/toolkit';
import { week } from './reducers/timeSlotReducer';
import { loading } from './reducers/loadingReducer';

const store = configureStore({
  reducer: {
    week,
    loading,
  },
});

export default store;
