import styles from './TimeSlotTableBody.module.css';

export default function TimeSlotTableBody({ week }) {
  const days = Object.keys(week);
  return days.map(day => (
    <tr key={day}>
      <td>{day}</td>
      {week[day].map((hour, index) => (
        <td
          key={index}
          className={hour ? `${styles.td} ${styles.active}` : styles.td}
        />
      ))}
    </tr>
  ));
}
