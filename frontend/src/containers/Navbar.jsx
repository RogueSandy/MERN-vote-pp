import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import {logout} from '../store/actions'

import '../styles/navbar.css'

function Navbar({ auth, logout }) {
  return (
    <div className='navbar'>
      <div className="logo">VotingApp</div>
      
        <div className="homelinks">
          <li>
            <Link to="/" >Home</Link>
          </li>
          {auth.isAuthenticated && <>
            {/* <li>
              <Link to={`/poll/`}>Vote</Link>
            </li> */}
            <li>
              <Link to="/test" >Vote</Link>
            </li>
            <li>
              <Link to="/poll/new">Create</Link>
            </li>
          </>}
        </div>
      <ul>
        {auth.isAuthenticated && <div className='logout'>
        {auth.user.username && <p>Logged in as {auth.user.username}</p>}
        <li>
          <a onClick={logout} className='btn'>Logout<span className='bg'></span></a>
        </li></div> || <div className='login'><li>
          <Link to="/Register" >Register</Link>
        </li>
        <li>
          <Link to="/Login" >Login</Link>
        </li></div>}
        
        
      </ul>
    </div>
  )
}

export default connect(store => ({ auth: store.auth }), {logout})(Navbar)