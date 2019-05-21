import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Todolist from './todolist';
import Tabletask from './tabletask';
import Sidemenu from './sidemenu';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div >
    <Switch>
    <Route path="/Todolist" component={Todolist} />
    <Route path="/Tabletask" component={Tabletask} />
    <Route path="/Sidemenu" component={Sidemenu} />
    </Switch>
    </div>
  );
}
export default App;
