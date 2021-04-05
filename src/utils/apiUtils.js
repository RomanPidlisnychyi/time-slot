import { week } from './week';

export const getTimeSlot = async () => {
  try {
    return week.map((hour, index) => ({ id: index + 1, hour }));
  } catch (err) {
    console.log(err);
  }
};
