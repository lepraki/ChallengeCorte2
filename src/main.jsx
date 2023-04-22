import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './componentes/PrivateRoute';
import PublicHome from './componentes/PublicH';
import PublicPage from './componentes/PublicPage';
import PrivatePage from './componentes/PrivatePage';
import Login from './componentes/Login';
import Logout from './componentes/Logout';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={PublicHome} />
          <Route exact path="/public" component={PublicPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <PrivateRoute exact path="/private" component={PrivatePage} />
        </Switch>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);