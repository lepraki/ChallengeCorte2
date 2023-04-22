import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivatePage from "@/componentes/PrivatePage";
import PublicHome from './componentes/PublicH';
import Login from './componentes/Login';
import Logout from './componentes/Logout';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/private">
            <PrivatePage />
          </Route>
          <Route path="/">
            <PublicHome />
          </Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default App;