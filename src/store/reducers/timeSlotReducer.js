import { createReducer } from '@reduxjs/toolkit';
import { getTimeSlotSuccess, changeTimeSlot } from '../actions/timeSlotActions';

const changeWeek = (state, { payload }) => {
  const { name, value } = payload;

  const newHours = state[name].map((hour, index) => {
    if (index === +value) {
      return !hour;
    }

    return hour;
  });

  return { ...state, [name]: newHours };
};

export const week = createReducer(null, {
  [getTimeSlotSuccess]: (_, { payload }) => payload,
  [changeTimeSlot]: changeWeek,
});
