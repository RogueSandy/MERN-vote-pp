import React from 'react'
import { useParams } from 'react-router-dom'

import Poll from '../components/Poll'


const PollPage = ({ getPoll }) => {


    const host = window.location.href
    const {id} = useParams()
    getPoll(id)

  return (
    <div>
        <Poll />
    </div>
  )
}

export default PollPage