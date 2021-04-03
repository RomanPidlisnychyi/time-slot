import { week } from './week';

export const getTimeSlot = async () => {
  try {
    return week;
  } catch (err) {
    console.log(err);
  }
};
