import { useDispatch } from 'react-redux';
import { changeTimeSlot } from '../../../store/actions/timeSlotActions';
import styles from './TimeSlotTableBody.module.css';

export default function TimeSlotTableBody({ week }) {
  const dispatch = useDispatch();

  const handlerChange = e => {
    const { name, value } = e.target;

    dispatch(changeTimeSlot({ name, value }));
  };
  const days = Object.keys(week);
  return days.map(day => (
    <tr key={day}>
      <td>{day}</td>
      {week[day].map((hour, index) => (
        <td key={index}>
          <button
            className={hour ? `${styles.btn} ${styles.active}` : styles.btn}
            name={day}
            value={index}
            type="button"
            onClick={handlerChange}
          />
        </td>
      ))}
    </tr>
  ));
}
