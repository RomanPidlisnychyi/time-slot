import { Route, Redirect } from 'react-router-dom';
import { token } from '../../utils/apiUtils';

export default function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = token.getLocalToken();
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
