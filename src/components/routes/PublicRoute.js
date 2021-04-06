import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getToken } from '../../store/selectors/authSelectors';

export default function PublicRoute({
  component: Component,
  restricted,
  ...rest
}) {
  const isAuthenticated = useSelector(getToken);
  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated || (isAuthenticated && !restricted) ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}
