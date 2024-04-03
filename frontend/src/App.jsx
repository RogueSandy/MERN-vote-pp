import React, { useEffect } from 'react'
import './App.css'
import api from './services/api'

class App extends React.Component {

  async componentDidMount() {
    const result = await api.call('post', 'auth/login', {
      username: 'username',
      password: 'password'
    })
    console.log(result)
  }

  render() {
    return (
      <div>hello</div>
    )
  }
}

export default App
