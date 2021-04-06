import { useDispatch, useSelector } from 'react-redux';
import { onLogout } from '../../store/operations/authOperations';
import { getUserName } from '../../store/selectors/authSelectors';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  const handleBtn = () => {
    dispatch(onLogout());
  };
  return (
    <div className={styles.container}>
      <span className={styles.name}>{name}</span>
      <button type="button" onClick={handleBtn}>
        Logout
      </button>
    </div>
  );
}
