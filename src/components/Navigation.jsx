import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import ComfortMenu from '../pages/ComfortMenu';

function Navigation() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/comf_menu"> Удобное меню </Link>
          </li>
        </ul>
      </div>

      <Route exact path="/" component={Home} />
      <Route path="/comf_menu" component={ComfortMenu} />
    </BrowserRouter>
  );
}

export default Navigation;
