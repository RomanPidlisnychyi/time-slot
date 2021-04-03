import { createAction } from '@reduxjs/toolkit';

export const getTimeSlotRequest = createAction('GET_TIMESLOT_REQUEST');
export const getTimeSlotSuccess = createAction('GET_TIMESLOT_SUCCESS');
export const getTimeSlotError = createAction('GET_TIMESLOT_ERROR');

export const changeTimeSlot = createAction('CHANGE_TIMESLOT_ERROR');

export const updateTimeSlotRequest = createAction('UPDATE_TIMESLOT_REQUEST');
export const updateTimeSlotSuccess = createAction('UPDATE_TIMESLOT_SUCCESS');
export const updateTimeSlotError = createAction('UPDATE_TIMESLOT_ERROR');
