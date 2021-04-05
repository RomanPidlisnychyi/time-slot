import { useSelector } from 'react-redux';
// import TimeSlotTableHead from './TimeSlotTableHead/TimeSlotTableHead';
import TimeSlotTableBody from './TimeSlotTableBody/TimeSlotTableBody';
import { getWeek } from '../../store/selectors/timeSlotSelectors';
import { isLoading } from '../../store/selectors/loadingSelectors';
import styles from './TimeSlotTable.module.css';

export default function TimeSlotTable() {
  const loading = useSelector(isLoading);
  const week = useSelector(getWeek);

  return !loading && week ? (
    <form>
      <table>
        {/* <thead>
          <tr>
            <th>Day</th>
            <TimeSlotTableHead week={week} />
          </tr>
        </thead> */}
        <tbody>
          <TimeSlotTableBody week={week} />
        </tbody>
      </table>
      <button type="submit">Save</button>
    </form>
  ) : (
    <div>Loading...</div>
  );
}
