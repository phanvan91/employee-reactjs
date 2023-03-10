import { lazy } from 'react';
import Layout from 'Layout'
import { camelToRoute } from 'utils/helper'
import { childRoute } from 'routes'
import AuthProtectRoute from 'routes/AuthProtectRoute'

const KEY = {
	key: '/employee'
}
export const path = {
	index: `/${camelToRoute(KEY.key)}/*`,
	list: `/${camelToRoute(KEY.key)}`,
	detail: `/${camelToRoute(KEY.key)}/:id`,
	create: `/${camelToRoute(KEY.key)}/create`,
	edit: `/${camelToRoute(KEY.key)}/:id/edit`,
}
const route = {
	path: path.index,
	guard: AuthProtectRoute,
	layout: Layout,
	routes: [
		{
			exact: true,
			path: childRoute(path.index, path.list),
			component: lazy(() => import('./pages/list'))
		},
		{
			exact: true,
			path: childRoute(path.index, path.create),
			component: lazy(() => import('./pages/create'))
		},
	]
};

export default route;
