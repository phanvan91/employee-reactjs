import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
// import { useToken } from 'hooks/auth';

GuestProtectRoute.propTypes = {
  children: PropTypes.node
};

function GuestProtectRoute({ children }) {

  // xu li is auth khi login
  // const [, is] = useToken();

  // if (token) {
  //   return <Navigate to={'/'} />;
  // }

  return children;
}

export default GuestProtectRoute;
