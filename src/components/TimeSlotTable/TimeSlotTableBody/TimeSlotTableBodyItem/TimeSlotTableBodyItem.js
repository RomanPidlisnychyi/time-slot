// import { useState, useEffect } from 'react';
// import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { changeTimeSlotItem } from '../../../../store/actions/timeSlotActions';
// import { getItemById } from '../../../../store/selectors/timeSlotSelectors';
// import styles from '../TimeSlotTableBody.module.css';

// export default function TimeSlotTableBodyItem({
//   id,
//   startX,
//   stopX,
//   startY,
//   stopY,
// }) {
//   const dispatch = useDispatch();
//   const hour = useSelector(state => getItemById(state, id));

//   const [position, setPosition] = useState(null);
//   const [isActive, setIsActive] = useState(false);

//   useEffect(() => {
//     if (!position && hour) {
//       const itemPosition = document
//         .querySelector(`#a${id}`)
//         .getBoundingClientRect();
//       setPosition(itemPosition);
//     }
//   }, [position, hour]);

//   useEffect(() => {
//     if (!position) {
//       return;
//     }

//     const { top, left, right, bottom } = position;
//     if (
//       ((startX >= left && left >= stopX) ||
//         (startX <= left && left <= stopX) ||
//         (startX >= right && right >= stopX) ||
//         (startX <= right && right <= stopX)) &&
//       ((startY >= top && top >= stopY) ||
//         (startY <= top && top <= stopY) ||
//         (startY >= bottom && bottom >= stopY) ||
//         (startY <= bottom && bottom <= stopY))
//     ) {
//       setIsActive(true);
//       return;
//     }

//     setIsActive(false);
//   }, [position, startX, stopX, startY, stopY]);

//   useEffect(() => {
//     if (isActive) {
//       dispatch(changeTimeSlotItem(id));
//     }
//   }, [dispatch, isActive]);

//   console.log(isActive);
//   const handleMouseMove = e => {
//     // if (!isMouseDown) {
//     //   return;
//     // }

//     let newWeek2 = [];
//     document.querySelectorAll('td').forEach(td => {
//       const position = td.getBoundingClientRect();
//       const { top, left, right, bottom } = position;
//       if (
//         ((startX >= left && left >= e.clientX) ||
//           (startX <= left && left <= e.clientX) ||
//           (startX >= right && right >= e.clientX) ||
//           (startX <= right && right <= e.clientX)) &&
//         ((startY >= top && top >= e.clientY) ||
//           (startY <= top && top <= e.clientY) ||
//           (startY >= bottom && bottom >= e.clientY) ||
//           (startY <= bottom && bottom <= e.clientY))
//       ) {
//         newWeek2.push({ id: +td.value, hour: true });
//         return;
//       }

//       newWeek2.push({ id: +td.value, hour: false });
//     });

//     // setNewWeek(newWeek2);

//     // setStopX(e.clientX);
//     // setStopY(e.clientY);
//   };

//   return hour ? (
//     <td id={`a${id}`}>
//       <button
//         className={hour.hour ? `${styles.btn} ${styles.active}` : styles.btn}
//         value={id}
//         type="button"
//       />
//     </td>
//   ) : null;
// }
