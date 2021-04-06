import { Route, Redirect } from 'react-router-dom';
import { token } from '../../utils/apiUtils';

export default function PublicRoute({
  component: Component,
  restricted,
  ...rest
}) {
  const isAuthenticated = token.getLocalToken();
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
