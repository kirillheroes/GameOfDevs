import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/App';
import ComfortMenu from './pages/Comfort_Menu';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/comf_menu" component={ComfortMenu} />
    </Switch>
  </BrowserRouter>,

  document.getElementById('root'),
);
