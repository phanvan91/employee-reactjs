import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useIsLogin } from 'hooks/auth';

GuestProtectRoute.propTypes = {
  children: PropTypes.node
};

function GuestProtectRoute({ children }) {

  // xu li is auth khi login
  const [, isLogin] = useIsLogin();
  console.log(isLogin,'isLogin')

  if (isLogin) {
    return <Navigate to={'/employee'} />;
  }

  return children;
}

export default GuestProtectRoute;
