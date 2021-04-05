import { createReducer } from '@reduxjs/toolkit';
import {
  getTimeSlotSuccess,
  changeTimeSlot,
  changeTimeSlotItem,
} from '../actions/timeSlotActions';

const updateItem = (state, { payload }) =>
  state.map(hour => {
    console.log('hour.id', hour.id);
    console.log('payload', payload);
    if (hour.id === payload) {
      return { ...hour, hour: !hour.hour };
    }

    return hour;
  });

export const week = createReducer(null, {
  [getTimeSlotSuccess]: (_, { payload }) => payload,
  [changeTimeSlot]: (_, { payload }) => payload,
  [changeTimeSlotItem]: updateItem,
});
