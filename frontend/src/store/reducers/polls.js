import {SET_POLLS, SET_CURRENT_POLL} from '../actionTypes'

export const polls = (states =[], action) => {
    switch (action.type) {
        case SET_POLLS:
            return action.polls
        default: 
            return states
    }
}

export const currentPoll = (state = {}, action) => {
    switch (action.type) {
        case SET_CURRENT_POLL:
            return action.poll
        default: 
            return state
    }
}