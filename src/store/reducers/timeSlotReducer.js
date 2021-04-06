import { createReducer } from '@reduxjs/toolkit';
import { getTimeSlotSuccess, changeTimeSlot } from '../actions/timeSlotActions';

export const slots = createReducer(null, {
  [getTimeSlotSuccess]: (_, { payload }) => payload,
  [changeTimeSlot]: (_, { payload }) => payload,
});
