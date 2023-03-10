import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { AppPaths } from 'routes';
import PageNotFound from 'components/Error/404';
import { useIsLogin } from 'hooks/auth';
// import { hasRole } from 'utils/entrust/hasRole';

// ----------------------------------------------------------------------

AuthProtectRoute.propTypes = {
  children: PropTypes.node,
  role: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
};

function AuthProtectRoute({ children, role }) {
  const [, isLogin] = useIsLogin();

  if (!isLogin) {
    return <Navigate to={AppPaths.login} />;
  }

  return children;
}

export default AuthProtectRoute;
