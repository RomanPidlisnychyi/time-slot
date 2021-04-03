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

  const loading = useSelector(isLoading);
  const week = useSelector(getWeek);

  const handleSubmit = e => {
    e.preventDefault();

    const newWeek = [];
    document.querySelectorAll('option').forEach(option => {
      newWeek.push({ id: +option.value, hour: option.selected });
    });

    console.log(newWeek);
    dispatch(changeTimeSlot(newWeek));
  };

  return !loading && week ? (
    <form onSubmit={handleSubmit}>
      <select multiple size={week.length}>
        {week.map(({ hour, id }) => (
          <option className={styles.btn} key={id} value={id} selected={hour} />
        ))}
      </select>
      <button type="submit">Save</button>
    </form>
  ) : (
    <div>Loading...</div>
  );
}
