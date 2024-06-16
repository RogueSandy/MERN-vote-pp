import React from 'react'
import "core-js/stable/atob";
import './App.css'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'

import api from './services/api'
import { store } from './store'
import {setCurrentUser, addError, setToken} from './store/actions'
import Navbar from './containers/Navbar';
import RouteViews from './containers/RouteViews';
import Modal from './modal/Modal';

if(localStorage.jwttoken) {
  setToken(localStorage.jwttoken)
  try {
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwttoken, { header: true })))
  } catch (err) {
    store.dispatch(setCurrentUser({}))
    store.dispatch(addError(err))
  }
}

const App = () => {
  return <Provider store={store}>
    <Router>
      <div className='maincontainer'>
        <div className="container">
          <Navbar />
          <RouteViews />
        </div>
      </div>
    </Router>
  </Provider>
}

export default App
