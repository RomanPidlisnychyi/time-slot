import { createSelector } from '@reduxjs/toolkit';

export const getWeek = state => state.week;
export const getItemById = createSelector(
  getWeek,
  (state, id) => id,
  (hours, id) => hours.find(hour => hour.id === id)
);
