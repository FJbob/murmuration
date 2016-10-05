import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App';
import Map from './components/Map';
import Table from './components/Table';
import Objective from './components/Objective';

window.React = React;

render(
  (<Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/table" component={Table} />
      <Route path="/map" component={Map} />
      <Route path="/objective/:id" component={Objective}/>
    </Route>
  </Router>), document.getElementById('content')
);
