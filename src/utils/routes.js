import { lazy } from 'react';

export const routes = [
  {
    path: '/',
    label: 'Home',
    exact: true,
    public: false,
    restricted: false,
    component: lazy(
      () => import('../views/HomeView') /* webpackChunkName: "home-view" */
    ),
  },
  {
    path: '/register',
    label: 'Register',
    exact: true,
    public: true,
    restricted: true,
    component: lazy(
      () =>
        import('../views/RegisterView') /* webpackChunkName: "register-view" */
    ),
  },
  {
    path: '/login',
    label: 'Login',
    exact: true,
    public: true,
    restricted: true,
    component: lazy(
      () => import('../views/LoginView') /* webpackChunkName: "login-view" */
    ),
  },
];
