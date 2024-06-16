import React from 'react'
import { Navigate } from 'react-router'

import '../styles/intro.css'

import Auth from '../components/Auth'
import ErrorMessage from '../components/ErrorMessage'

const AuthPage = ({ authType, isAuthenticated }) => {

    if (isAuthenticated) {
        // console.log(isAuthenticated)
        return <Navigate to="/" />
    }

    return (
        <div className='authpage'>
            <div className="sidebar">
                <div className="info">
                    <h1>Welcome!</h1>
                    <p>
                    The StudentElect Voting App is your gateway to make your voice heard. 
                    </p>
                    <p>This user-friendly platform allows you to participate in college-wide decisions, elect representatives, and contribute to shaping the future of our community.</p>
                    <a href="#">Know More</a>
                </div>

            </div>
            <Auth authType={authType} />
        </div>
    )
}

export default AuthPage