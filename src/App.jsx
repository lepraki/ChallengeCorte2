import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavComponent from './componentes/NavComponent';
import Home from './componentes/home';
import Acerca from './componentes/Acerca';
import Contacto from './componentes/Contacto';

function App() {
  return (
    <Router>
      <NavComponent />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/acerca" component={Acerca} />
        <Route path="/contacto" component={Contacto} />
      </Switch>
    </Router>
  );
}
export default App;
