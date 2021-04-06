import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getToken } from '../../store/selectors/authSelectors';

export default function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = useSelector(getToken);
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
