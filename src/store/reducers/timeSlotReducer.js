import { createReducer } from '@reduxjs/toolkit';
import { getTimeSlotSuccess, changeTimeSlot } from '../actions/timeSlotActions';

export const week = createReducer(null, {
  [getTimeSlotSuccess]: (_, { payload }) => payload,
  [changeTimeSlot]: (_, { payload }) => payload,
});
