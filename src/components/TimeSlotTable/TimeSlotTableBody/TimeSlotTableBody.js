import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeTimeSlot } from '../../../store/actions/timeSlotActions';
// import { changeTimeSlotItem } from '../../../store/actions/timeSlotActions';
// import TimeSlotTableBodyItem from './TimeSlotTableBodyItem/TimeSlotTableBodyItem';
import styles from './TimeSlotTableBody.module.css';

export default function TimeSlotTableBody({ week }) {
  const dispatch = useDispatch();

  const [newWeek, setNewWeek] = useState(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const [startX, setStartX] = useState(null);
  const [startY, setStartY] = useState(null);

  useEffect(() => {
    if (week && !newWeek) {
      setNewWeek(week);
    }
  }, [week, newWeek]);

  const handleClick = e => {
    setStartX(e.clientX);
    setStartY(e.clientY);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newWeek = [];
    document.querySelectorAll('option').forEach(option => {
      newWeek.push({ id: +option.value, hour: option.selected });
    });

    dispatch(changeTimeSlot(newWeek));
  };

  const handleClickDown = e => {
    handleClick(e);
    setIsMouseDown(true);
  };

  const handleSingleClick = e => {
    const { id } = e.target;
    const newWeek2 = newWeek.map(hour => {
      if (hour.id === +id) {
        return { ...hour, hour: !hour.hour };
      }

      return hour;
    });

    setNewWeek(newWeek2);
  };

  const handleClickUp = e => {
    setIsMouseDown(false);
    setStartX(null);
    setStartY(null);
    if (isMouseMoving) {
      setIsMouseMoving(false);
      return;
    }
    handleSingleClick(e);
  };

  const handleMouseMove = e => {
    if (!isMouseDown) {
      return;
    }

    setIsMouseMoving(true);

    const newWeek2 = [];
    document.querySelectorAll('td').forEach(td => {
      const position = td.getBoundingClientRect();
      const { top, left, right, bottom } = position;
      if (
        ((startX >= left && right >= e.clientX) ||
          (startX <= left && right <= e.clientX) ||
          (startX >= right && left >= e.clientX) ||
          (startX <= right && left <= e.clientX)) &&
        ((startY >= top && bottom >= e.clientY) ||
          (startY <= top && bottom <= e.clientY) ||
          (startY >= bottom && top >= e.clientY) ||
          (startY <= bottom && top <= e.clientY))
      ) {
        newWeek2.push({ id: +td.id, hour: true });
        return;
      }

      newWeek2.push({ id: +td.id, hour: false });
    });

    setNewWeek(newWeek2);
  };

  return (
    <tr
      className={styles.tr}
      onMouseDown={handleClickDown}
      onMouseUp={handleClickUp}
      onMouseMove={handleMouseMove}
    >
      {newWeek &&
        newWeek.map(({ hour, id }) => (
          <td
            key={id}
            id={id}
            data-ative={hour}
            className={hour ? `${styles.btn} ${styles.active}` : styles.btn}
          />
        ))}
    </tr>
  );
}
