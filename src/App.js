import 'bootstrap/dist/css/bootstrap.min.css';
import 'scss/app.scss';

// import { useToken, useProfile } from 'hooks/auth';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from "history";
import routes, { renderRoutes } from 'routes';
import {useDispatch} from "react-redux";
import {getProfileRequest} from "./redux/auth/action";

const history = createBrowserHistory();
function App() {
  const dispatch = useDispatch();
  if(localStorage.getItem('auth')){
    let authLocalStorage = JSON.parse(localStorage.getItem('auth'));
    if(authLocalStorage.isLogin){
      dispatch(getProfileRequest(authLocalStorage))
    }
  }

  return (
    <BrowserRouter history={history}>
      {renderRoutes(routes)}
    </BrowserRouter>
  );
}

export default App;
