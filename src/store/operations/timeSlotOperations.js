import {
  getTimeSlotRequest,
  getTimeSlotSuccess,
  getTimeSlotError,
  updateTimeSlotSuccess,
  updateTimeSlotError,
  updateTimeSlotRequest,
} from '../actions/timeSlotActions';
import { registerMessage } from '../actions/authActions';
import { onCleanMessage } from '../operations/authOperations';
import { getTimeSlot, updateTimeSlot } from '../../utils/apiUtils';

export const onGetTimeSlot = () => async dispatch => {
  dispatch(getTimeSlotRequest());

  const payload = await getTimeSlot();
  if (payload && payload.status < 400) {
    dispatch(getTimeSlotSuccess(payload.data));
    return;
  }

  dispatch(getTimeSlotError(payload));
};

export const onUpdateTimeSlot = slots => async dispatch => {
  dispatch(updateTimeSlotRequest());

  const payload = await updateTimeSlot({ slots });
  if (payload && payload.status < 400) {
    dispatch(updateTimeSlotSuccess());
    dispatch(registerMessage('Timeslot successfully updated!'));
    dispatch(onCleanMessage());
    return;
  }

  dispatch(updateTimeSlotError(payload));
  dispatch(onCleanMessage());
};
