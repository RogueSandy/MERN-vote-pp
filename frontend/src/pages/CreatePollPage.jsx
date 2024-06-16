import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

import CreatePoll from '../components/CreatePoll'

const CreatePollPage = (isAuthenticated) => {
    // console.log(isAuthenticated)
    if( !isAuthenticated ){
        return <Navigate to="/login" replace={true} />
    }
  return (
    <div>
        <CreatePoll />
    </div>
  )
}

export default CreatePollPage