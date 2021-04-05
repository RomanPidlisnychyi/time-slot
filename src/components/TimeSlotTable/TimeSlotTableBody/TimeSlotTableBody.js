import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeTimeSlot } from '../../../store/actions/timeSlotActions';
import { changeTimeSlotItem } from '../../../store/actions/timeSlotActions';
import TimeSlotTableBodyItem from './TimeSlotTableBodyItem/TimeSlotTableBodyItem';
import styles from './TimeSlotTableBody.module.css';

export default function TimeSlotTableBody({ week }) {
  const dispatch = useDispatch();

  const [newWeek, setNewWeek] = useState(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(null);
  const [stopX, setStopX] = useState(null);
  const [startY, setStartY] = useState(null);
  const [stopY, setStopY] = useState(null);

  useEffect(() => {
    if (week && !newWeek) {
      setNewWeek(week);
    }
  }, [week]);

  const handleMouseEnter = e => {
    if (!isMouseDown) {
      return;
    }
    const { value } = e.target;

    const newValueWeek = newWeek.map(hour => {
      if (hour.id === +value) {
        return { ...hour, hour: !hour.hour };
      }

      return hour;
    });

    console.log(newValueWeek);

    setNewWeek(newValueWeek);
    // const { name, value } = e.target;
    // console.log('e.target', e.target);

    // dispatch(changeTimeSlot({ name, value }));
  };

  const handleClick = e => {
    const { value } = e.target;

    setStartX(e.clientX);
    setStartY(e.clientY);

    // const newValueWeek = newWeek.map(hour => {
    //   if (hour.id === +value) {
    //     return { ...hour, hour: !hour.hour };
    //   }

    //   return hour;
    // });

    // setNewWeek(newValueWeek);
    // const { name, value } = e.target;
    // console.log('e.target', e.target);

    // dispatch(changeTimeSlot({ name, value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newWeek = [];
    document.querySelectorAll('option').forEach(option => {
      newWeek.push({ id: +option.value, hour: option.selected });
    });

    dispatch(changeTimeSlot(newWeek));
  };

  // const days = Object.keys(week);
  const handleClickDown = e => {
    handleClick(e);
    setIsMouseDown(true);
  };
  const handleClickUp = e => {
    setIsMouseDown(false);
    setStartX(null);
    setStopX(null);
    setStartY(null);
    setStopY(null);
  };

  const handleMouseClick = e => {
    // console.log(e);
  };

  const handleOnClick = value => {
    const newValueWeek = newWeek.map(hour => {
      if (hour.id === +value) {
        return { ...hour, hour: !hour.hour };
      }

      return hour;
    });

    setNewWeek(newValueWeek);
  };

  const handleMouseMove = e => {
    if (!isMouseDown) {
      return;
    }

    const newWeek2 = [];
    document.querySelectorAll('td').forEach(td => {
      const position = td.getBoundingClientRect();
      const { top, left, right, bottom } = position;
      if (
        ((startX >= left && left >= e.clientX) ||
          (startX <= left && left <= e.clientX) ||
          (startX >= right && right >= e.clientX) ||
          (startX <= right && right <= e.clientX)) &&
        ((startY >= top && top >= e.clientY) ||
          (startY <= top && top <= e.clientY) ||
          (startY >= bottom && bottom >= e.clientY) ||
          (startY <= bottom && bottom <= e.clientY))
      ) {
        // if (!isInSession[td.id]) {
        //   const { id } = td;
        //   dispatch(changeTimeSlotItem(+id));
        //   isInSession = { ...isInSession, [id]: id };
        // }
        newWeek2.push({ id: +td.id, hour: true });
        return;
        // newWeek2 = newWeek.map(hour => {
        //   if (hour.id === +td.value) {
        //     return { ...hour, hour: !hour.hour };
        //   }

        //   return hour;
        // });
        // return;
      }

      newWeek2.push({ id: +td.id, hour: false });
    });

    setNewWeek(newWeek2);

    // setStopX(e.clientX);
    // setStopY(e.clientY);
  };

  // console.log('startX', startX);
  // console.log('stopX', stopX);
  // console.log('startY', startY);
  // console.log('stopY', stopY);
  console.log('week', week);
  return (
    <tr
      className={styles.tr}
      onMouseDown={handleClickDown}
      onMouseUp={handleClickUp}
      // onClick={handleMouseClick}
      onMouseMove={handleMouseMove}
    >
      {newWeek &&
        newWeek.map(({ hour, id }) => (
          // <TimeSlotTableBodyItem
          //   key={id}
          //   id={id}
          //   startX={startX}
          //   stopX={stopX}
          //   startY={startY}
          //   stopY={stopY}
          // />
          <td key={id} id={id}>
            <button
              className={hour ? `${styles.btn} ${styles.active}` : styles.btn}
              value={id}
              type="button"
            />
          </td>
        ))}
    </tr>
  );
}
