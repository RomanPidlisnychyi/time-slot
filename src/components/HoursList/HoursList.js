import { hours } from '../../utils/week';
import styles from './HoursList.module.css';

export default function HoursList() {
  return (
    <ul className={styles.list}>
      {hours.map(hour => (
        <li className={styles.item} key={`a${hour}`}>
          {hour}
        </li>
      ))}
    </ul>
  );
}
