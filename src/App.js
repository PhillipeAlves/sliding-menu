import React from 'react';
import { Menu } from './Components/Menu/Menu'
import { HashRouter, Route, Switch } from "react-router-dom";
import { Home, Projects, Contacts, About } from "./Pages";

export const App = () => {
  return (
    <HashRouter>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/projects' component={Projects} />
        <Route path='/contacts' component={Contacts} />
        <Route path='/about' component={About} />
      </Switch>
    </HashRouter>
  );
}

