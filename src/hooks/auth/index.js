import { useSelector } from 'react-redux';

const getSelector = key => state => state.auth[key];

const loadingSelector = getSelector('isLoading');
const isLoginSelector = getSelector('isLogin');

export const useIsLogin = () => {
  const isLogin = useSelector(isLoginSelector);
  const isLoading = useSelector(loadingSelector);
  return [isLoading, isLogin];
}