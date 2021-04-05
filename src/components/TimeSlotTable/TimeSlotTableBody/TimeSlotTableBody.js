import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeTimeSlot } from '../../../store/actions/timeSlotActions';
import styles from './TimeSlotTableBody.module.css';

export default function TimeSlotTableBody({ week }) {
  const dispatch = useDispatch();

  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const [selected, setSelected] = useState(null);
  const [startX, setStartX] = useState(null);
  const [startY, setStartY] = useState(null);

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
    const newWeek = week.map(hour => {
      if (hour.id === +id) {
        return { ...hour, hour: !hour.hour };
      }

      return hour;
    });

    dispatch(changeTimeSlot(newWeek));
  };

  const handleSetSelected = () => {
    const newWeek = week.map(hour => {
      let isIdSelected = false;
      selected.forEach(id => {
        if (id === hour.id) {
          isIdSelected = true;
        }
      });

      if (isIdSelected) {
        return { ...hour, hour: !hour.hour };
      }

      return hour;
    });

    dispatch(changeTimeSlot(newWeek));
    setSelected(null);
  };

  const handleClickUp = e => {
    setIsMouseDown(false);
    setStartX(null);
    setStartY(null);
    if (isMouseMoving) {
      handleSetSelected();
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

    const selectedId = [];
    document.querySelectorAll('button[data-active]').forEach(td => {
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
        selectedId.push(+td.id);
        return;
      }
    });

    const uniqueId = [...new Set(selectedId)];
    setSelected(uniqueId);
  };

  return (
    <tr className={styles.tr} onMouseMove={handleMouseMove}>
      {week &&
        week.map(({ hour, id }) => {
          const isActive =
            selected && selected.find(selectedId => selectedId === id);
          return (
            <td className={styles.td} key={id}>
              <button
                id={id}
                data-active={hour}
                className={
                  (hour && !isActive) || (!hour && isActive)
                    ? `${styles.btn} ${styles.active}`
                    : styles.btn
                }
                type="button"
                onMouseDown={handleClickDown}
                onMouseUp={handleClickUp}
              />
            </td>
          );
        })}
    </tr>
  );
}
