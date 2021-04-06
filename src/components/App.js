import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { onGetTimeSlot } from '../store/operations/timeSlotOperations';
import TimeSlotForm from './TimeSlotForm/TimeSlotForm';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetTimeSlot());
  }, [dispatch]);
  return <TimeSlotForm />;
}
