import React from 'react'
import { connect } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
// import { createBrowserHistory } from 'history'

import AuthPage from '../pages/AuthPage'
import Home from '../pages/Home'
import TestPage from '../pages/TestPage'
import HomePage from '../pages/HomePage'
import { getCurrentPoll } from '../store/actions'
import PollPage from '../pages/PollPage'
import CreatePollPage from '../pages/CreatePollPage'

function RouteViews({ auth, getCurrentPoll }) {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route
          exact path='/login'
          element={
            <AuthPage
              authType="login"
              isAuthenticated={auth.isAuthenticated}
            />
          }
        />
        <Route
          exact
          path='/register'
          element={
            <AuthPage
              authType="register"
              isAuthenticated={auth.isAuthenticated}
            />
          }
        />
        <Route
          exact
          path='/poll/new'
          element={<CreatePollPage isAuthenticated={auth.isAuthenticated} />}
        />
        <Route
          exact
          path="/poll/:id"
          element={
            <PollPage getPoll={id => getCurrentPoll(id)} />
          }
        />
        <Route
          exact
          path="/test"
          element={
            <TestPage />
          }
        />
      </Routes>
    </main>
  )
}

export default connect(store => ({ auth: store.auth }), { getCurrentPoll })(RouteViews)