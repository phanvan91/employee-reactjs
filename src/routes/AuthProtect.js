import PropTypes from 'prop-types';
import { useRole } from 'hooks/auth';

// ----------------------------------------------------------------------

AuthProtect.propTypes = {
  children: PropTypes.node,
  role: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
};

function AuthProtect({ children, role }) {
  const hasRole = useRole(role);

  if (role && !hasRole) {
    return null
  }

  return children;
}

export default AuthProtect;
