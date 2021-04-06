import { createReducer } from '@reduxjs/toolkit';
import {
  getTimeSlotRequest,
  getTimeSlotSuccess,
  getTimeSlotError,
  updateTimeSlotRequest,
  updateTimeSlotSuccess,
  updateTimeSlotError,
} from '../actions/timeSlotActions';

export const loading = createReducer(false, {
  [getTimeSlotRequest]: () => true,
  [getTimeSlotSuccess]: () => false,
  [getTimeSlotError]: () => false,
  [updateTimeSlotRequest]: () => true,
  [updateTimeSlotSuccess]: () => false,
  [updateTimeSlotError]: () => false,
});
