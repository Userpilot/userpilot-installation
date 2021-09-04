import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/Layout/Layout';

// Pages
import Dashboard from '@/pages/Dashboard/Dashboard';
import Typography from '@/pages/Typography/Typography'
import Tables from '@/pages/Tables/Basic'
import Notifications from '@/pages/Notifications/Notifications'
import Error from "@/pages/Error/Error";
import Login from "@/pages/Login/Login";



export const authenticationGuard = (to, from, next) => {
  const authenticated = localStorage.getItem('authenticated');

  if (authenticated === 'true') {
    return next();
  } else {
    return next('/login')
  }
  
};


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      redirect: 'login',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard,
          beforeEnter: authenticationGuard,
        },
        {
          path: 'typography',
          name: 'Typography',
          component: Typography,
          beforeEnter: authenticationGuard,
        },
        {
          path: 'tables',
          name: 'Tables',
          component: Tables,
          beforeEnter: authenticationGuard,
        },
        {
          path: 'notifications',
          name: 'Notifications',
          component: Notifications,
          beforeEnter: authenticationGuard,
        },
      ],
    },
    {
      path: '*',
      name: 'Error',
      component: Error
    }
  ],
});
