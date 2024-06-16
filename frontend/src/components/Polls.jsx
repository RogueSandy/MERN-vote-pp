import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getCurrentPoll, getPolls, getUserPolls } from '../store/actions'

import '../styles/main.css'

class Polls extends Component {

    constructor(props) {
        super(props)

        this.handleSelect = this.handleSelect.bind(this)
    }

    componentDidMount() {
        const { getPolls } = this.props
        getPolls()
    }

    handleSelect(id) {
        const { getCurrentPoll } = this.props
        getCurrentPoll(id)
    }


    render() {
        const { auth, getPolls, getUserPolls } = this.props

        const polls = this.props.polls.map(poll => (
            <li
                className='question'
                key={`p_${poll._id}`} 
                onClick={() => auth.isAuthenticated ? this.handleSelect(poll._id) : alert("Login Required")}
            >Poll:  {poll.question}</li>
        ))

        return <>
            <ul className='polls'>
                {auth.isAuthenticated && (
                    <div className='pollbtns'>
                        <button onClick={getPolls}><span className='bg'></span>All Polls</button>
                        <button onClick={getUserPolls}><span className='bg'></span>My Polls</button>
                    </div>
                )}
                {polls}
            </ul>
        </>
    }
}

export default connect(store => ({
    auth: store.auth,
    polls: store.polls
}), { getPolls, getUserPolls, getCurrentPoll })(Polls)