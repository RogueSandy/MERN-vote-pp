import React, { useEffect } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import { jwtDecode } from 'jwt-decode'

import api from './services/api'
import { store } from './store'
import {setCurrentUser, addError, setToken} from './store/actions'

if(localStorage.jwttoken) {
  setToken(localStorage.jwttoekn)
  try {
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)))
  } catch (err) {
    store.dispatch(setCurrentUser({}))
    store.dispatch(addError(err))
  }
}

const App = () => {
  return <Provider store={store}>
    <div>APP WORKS</div>
  </Provider>
}

export default App
