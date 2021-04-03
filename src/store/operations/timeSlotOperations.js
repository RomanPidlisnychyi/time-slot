import {
  getTimeSlotRequest,
  getTimeSlotSuccess,
  getTimeSlotError,
} from '../actions/timeSlotActions';
import { getTimeSlot } from '../../utils/apiUtils';

export const onGetTimeSlot = () => async dispatch => {
  dispatch(getTimeSlotRequest());

  const payload = await getTimeSlot();

  dispatch(getTimeSlotSuccess(payload));

  // dispatch(getTimeSlotError());
};
