import { days } from '../../utils/week';
import styles from './TimeSlotDayList.module.css';

export default function TimeSlotDayList() {
  return (
    <ul className={styles.list}>
      {days.map(day => (
        <li className={styles.item} key={day}>
          {day}
        </li>
      ))}
    </ul>
  );
}
