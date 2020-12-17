import React from 'react'
import Bookslist from '../booksList/BooksList'
import { Contacts } from '../contacts/Contacts'
import MovieAPI from '../movie/MovieAPI';
import Shop from '../shop/Shop';
import './main.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


    function Main () {
        return (
            <Router>
            <div className='table'>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Shop</Link>
                  </li>
                  <li>
                    <Link to="/bookslist">Bookslist</Link>
                  </li>
                  <li>
                    <Link to="/movie">Movie</Link>
                  </li>
                </ul>
              </nav>
      
              <Switch>
                <Route path="/bookslist">
                  <Bookslist />
                </Route>
                <Route path="/movie">
                  <MovieAPI />
                </Route>
                <Route path="/">
                  <Shop />
                </Route>
              </Switch>
            </div>
          </Router>
        )
    }


export default Main   