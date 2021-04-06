import { useSelector } from 'react-redux';
import UserMenu from '../UserMenu/UserMenu';
import TimeSlotForm from '../TimeSlotForm/TimeSlotForm';
import { isLoading } from '../../store/selectors/loadingSelectors';
import { getUserName } from '../../store/selectors/authSelectors';
import styles from './Home.module.css';

export default function Home() {
  const name = useSelector(getUserName);
  const loading = useSelector(isLoading);
  return (
    <div className={styles.container}>
      <UserMenu />
      {!name && loading ? <h3>Loading...</h3> : <TimeSlotForm />}
    </div>
  );
}
