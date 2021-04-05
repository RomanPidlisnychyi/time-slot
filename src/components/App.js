import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { onGetTimeSlot } from '../store/operations/timeSlotOperations';
import TimeSlotTable from './TimeSlotTable/TimeSlotTable';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetTimeSlot());
  }, [dispatch]);
  return (
    <div>
      <TimeSlotTable />
    </div>
  );
}
