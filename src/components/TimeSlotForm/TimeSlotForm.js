import { useSelector } from 'react-redux';
import TimeSlotTable from '../TimeSlotTable/TimeSlotTable';
import TimeSlotDayList from '../TimeSlotDayList/TimeSlotDayList';
import HoursList from '../HoursList/HoursList';
import { isLoading } from '../../store/selectors/loadingSelectors';
import styles from './TimeSlotForm.module.css';

export default function TimeSlotForm() {
  const loading = useSelector(isLoading);

  const handleSubmit = e => {
    e.preventDefault();
  };
  return !loading ? (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.title}>Select timeslot</h3>
      <div className={styles.contentWrap}>
        <TimeSlotDayList />
        <div>
          <HoursList />
          <TimeSlotTable />
        </div>
      </div>
      <button className={styles.button} type="submit">
        Save
      </button>
    </form>
  ) : (
    <div>Loading...</div>
  );
}
