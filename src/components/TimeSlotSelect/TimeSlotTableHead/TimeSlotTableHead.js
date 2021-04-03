export default function TimeSlotTableHead({ week }) {
  const hours = week['Monday'];
  return hours.map((hour, index) => <th key={index}>{index + 1}</th>);
}
