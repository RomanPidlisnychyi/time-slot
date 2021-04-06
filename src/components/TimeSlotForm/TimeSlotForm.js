import { useSelector, useDispatch } from 'react-redux';
import TimeSlotTable from '../TimeSlotTable/TimeSlotTable';
import TimeSlotDayList from '../TimeSlotDayList/TimeSlotDayList';
import HoursList from '../HoursList/HoursList';
import { isLoading } from '../../store/selectors/loadingSelectors';
import { getSlots } from '../../store/selectors/timeSlotSelectors';
import { onUpdateTimeSlot } from '../../store/operations/timeSlotOperations';
import styles from './TimeSlotForm.module.css';

export default function TimeSlotForm() {
  const dispatch = useDispatch();
  const slots = useSelector(getSlots);
  const loading = useSelector(isLoading);

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(onUpdateTimeSlot(slots));
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.title}>Select timeslot</h3>
      <div className={styles.contentWrap}>
        <TimeSlotDayList />
        <div>
          <HoursList />
          <TimeSlotTable />
        </div>
      </div>
      <button className={styles.button} type="submit" disabled={loading}>
        {loading ? '...' : 'Save'}
      </button>
    </form>
  );
}
