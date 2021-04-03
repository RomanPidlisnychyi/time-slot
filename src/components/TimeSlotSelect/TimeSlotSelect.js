import { useSelector } from 'react-redux';
import TimeSlotTableHead from './TimeSlotTableHead/TimeSlotTableHead';
import TimeSlotTableBody from './TimeSlotTableBody/TimeSlotTableBody';
import { getWeek } from '../../store/selectors/timeSlotSelectors';
import { isLoading } from '../../store/selectors/loadingSelectors';
import { useDispatch } from 'react-redux';
import { changeTimeSlot } from '../../store/actions/timeSlotActions';
import styles from './TimeSlotSelect.module.css';

export default function TimeSlotSelect() {
  const dispatch = useDispatch();
  const loading = useSelector(isLoading);
  const week = useSelector(getWeek);

  if (week) {
    var days = Object.keys(week);
  }

  const handlerChange = e => {
    console.log('e', e);
    // const { name, value } = e.target;

    // dispatch(changeTimeSlot({ name, value }));
  };
  return !loading && week ? (
    <form>
      {days.map(day => (
        <select
          key={day}
          multiple
          size={week[day].length}
          onSelect={handlerChange}
        >
          {week[day].map((hour, index) => (
            <option
              className={hour ? `${styles.btn} ${styles.active}` : styles.btn}
              key={index}
              name={day}
              value={index}
            />
          ))}
        </select>
      ))}
      <button type="submit">Save</button>
    </form>
  ) : (
    <div>Loading...</div>
  );
}
