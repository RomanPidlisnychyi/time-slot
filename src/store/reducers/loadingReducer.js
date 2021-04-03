import { createReducer } from '@reduxjs/toolkit';
import {
  getTimeSlotRequest,
  getTimeSlotSuccess,
  getTimeSlotError,
} from '../actions/timeSlotActions';

export const loading = createReducer(false, {
  [getTimeSlotRequest]: () => true,
  [getTimeSlotSuccess]: () => false,
  [getTimeSlotError]: () => false,
});
