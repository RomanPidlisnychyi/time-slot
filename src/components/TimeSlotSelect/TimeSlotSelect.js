import { useState, useEffect } from 'react';
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

  const [selected, setSelected] = useState([]);

  const loading = useSelector(isLoading);
  const week = useSelector(getWeek);

  console.log('week', week);

  // useEffect(() => {
  //   const onSelect = week && week.filter(({ hour }) => hour);
  //   console.log('onSelect', onSelect);

  //   setSelected(onSelect);
  // }, []);

  const handleSelect = e => {
    const newSelections = [];

    document.querySelectorAll('option').forEach(option => {
      if (option.selected) {
        newSelections.push({ id: option.value });
      }
    });

    setSelected(newSelections);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const indexes = [];
    document.querySelectorAll('option').forEach(option => {
      if (option.selected) {
        indexes.push(option.value);
      }
    });

    console.log('indexes', indexes);
    // const { name, value } = e.target;

    // dispatch(changeTimeSlot({ name, value }));
  };

  console.log('selected', selected);
  return !loading && week ? (
    <form onSubmit={handleSubmit}>
      <select
        defaultValue={selected}
        multiple
        size={week.length}
        onChange={handleSelect}
      >
        {week.map(({ hour, id }) => (
          <option
            className={styles.btn}
            key={id}
            value={id}
            // onChange={handleSelect}
          />
        ))}
      </select>
      <button type="submit">Save</button>
    </form>
  ) : (
    <div>Loading...</div>
  );
}
