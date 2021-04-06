import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { onRegister, onLogin } from '../../store/operations/authOperations';
import styles from './RegisterForm.module.css';

export default function RegesterForm({ location: { pathname } }) {
  const dispatch = useDispatch();
  const isRegisterView = pathname === '/register';

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleInput = e => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
      return;
    }

    setPassword(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (isRegisterView) {
      dispatch(onRegister({ name, password }));
      return;
    }

    dispatch(onLogin({ name, password }));
  };

  const btnActive = name && password;
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h4>{isRegisterView ? 'Register' : 'Login'}</h4>
      <label className={styles.label}>
        login
        <input
          className={styles.input}
          type="text"
          name="name"
          value={name}
          onChange={handleInput}
        />
      </label>
      <label className={styles.label}>
        password
        <input
          className={styles.input}
          type="password"
          name="password"
          value={password}
          onChange={handleInput}
        />
      </label>
      <button className={styles.button} type="submit" disabled={!btnActive}>
        {isRegisterView ? 'Register' : 'Login'}
      </button>
      <Link
        className={styles.link}
        to={isRegisterView ? '/login' : '/register'}
      >
        {isRegisterView ? 'Login' : 'Register'}
      </Link>
    </form>
  );
}
