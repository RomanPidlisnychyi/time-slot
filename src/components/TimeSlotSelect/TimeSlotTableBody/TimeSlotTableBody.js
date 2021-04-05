import { useDispatch } from 'react-redux';
import { changeTimeSlot } from '../../../store/actions/timeSlotActions';
import styles from './TimeSlotTableBody.module.css';

export default function TimeSlotTableBody({ week }) {
  const dispatch = useDispatch();

  const handlerChange = e => {
    const { name, value } = e.target;

    // dispatch(changeTimeSlot({ name, value }));
  };
  return (
    <tr>
      {week.map(({ hour, id }) => (
        <td key={id}>
          <button
            className={hour ? `${styles.btn} ${styles.active}` : styles.btn}
            value={id}
            type="button"
            onClick={handlerChange}
          />
        </td>
      ))}
    </tr>
  );
}
