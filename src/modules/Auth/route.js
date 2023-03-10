import { lazy } from 'react';
import GuestProtectRoute from '../../routes/GuestProtectRoute'
// import Layout from 'Layout'

export const path = {
  login: `/login`,
}

const route = [
  {
    path: path.login,
    guard: GuestProtectRoute,
    // layout: Layout,
    component: lazy(() => import('./Login'))
  }
]

export default route;
