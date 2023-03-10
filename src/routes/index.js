import { Suspense, Fragment } from 'react';
import { Route, Routes } from 'react-router-dom'
import NoMatch from 'components/Error/404';
import appRoutes from './appRoutes';
import AppPaths from './appPaths';
import LoadingScreen from 'components/Loading/LoadingScreen';

export function renderRoutes(routes = []) {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        {routes.map((route, i) => {
          const Guard = route.guard || Fragment;
          const role = route.role || null;
          const Layout = route.layout || Fragment;
          const Component = route.component;

          const renderPage = <Layout>
            {route.routes ? (
              renderRoutes(route.routes)
            ) : (
              <Component />
            )}
          </Layout>

          const element = route.guard
            ? <Guard role={role}>{renderPage}</Guard>
            : <Guard>{renderPage}</Guard>

          return (
            <Route
              key={i}
              path={route.path}
              exact={true}
              element={element}
            />
          );
        })}
        <Route path="*" element={
          <div className="container-fluid">
            <NoMatch />
          </div>
        } />
      </Routes>
    </Suspense>
  );
}

export function childRoute(parent, child = '') {
  parent = parent.split('/*').join('')
  child = child.replace(parent, '')

  return child;
}

export function route(routeName, ...rest) {
  if (!routeName) {
    return '';
  }
  rest.map(value => {
    routeName = routeName.replace(/:[a-z]*/, value);
  });

  return routeName;
}

export {
  AppPaths
}

export default appRoutes;
