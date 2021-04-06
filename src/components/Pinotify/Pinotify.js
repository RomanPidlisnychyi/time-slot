import { useSelector } from 'react-redux';
import { getMessage } from '../../store/selectors/authSelectors';
import styles from './Pinotify.module.css';

export default function Pinotify() {
  const message = useSelector(getMessage);
  return message && <h3 className={styles.message}>{message}</h3>;
}
