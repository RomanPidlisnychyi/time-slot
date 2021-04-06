import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import { onCurrent } from '../store/operations/authOperations';
import { getUserName } from '../store/selectors/authSelectors';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import Pinotify from './Pinotify/Pinotify';
import { token } from '../utils/apiUtils';
import { routes } from '../utils/routes';

export default function App() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  const userToken = token.getLocalToken();

  useEffect(() => {
    if (!name && userToken) {
      dispatch(onCurrent(userToken));
    }
  }, [dispatch, name, userToken]);
  return (
    <Suspense fallback={false}>
      <Pinotify />
      <Switch>
        {routes.map(route =>
          route.public ? (
            <PublicRoute key={route.label} {...route} />
          ) : (
            <PrivateRoute key={route.label} {...route} />
          )
        )}
      </Switch>
    </Suspense>
  );
}
