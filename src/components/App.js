import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';
import { onGetTimeSlot } from '../store/operations/timeSlotOperations';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import { routes } from '../utils/routes';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetTimeSlot());
  }, [dispatch]);
  return (
    <Suspense fallback={false}>
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
