import logo from './logo.svg';
// import './App.css';

//import css

import 'bootstrap/dist/css/bootstrap.min.css';
import 'scss/app.scss';


import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from "history";
import routes, { renderRoutes } from 'routes';

const history = createBrowserHistory();
function App() {
  return (
    <BrowserRouter history={history}>
      {renderRoutes(routes)}
    </BrowserRouter>
  );
}

export default App;
