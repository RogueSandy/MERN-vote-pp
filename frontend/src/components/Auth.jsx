import React, { Component } from "react";
import { connect } from 'react-redux'

import { authUser, logout } from '../store/actions'
import { Route } from "react-router";
import { Link } from "react-router-dom";

import '../styles/form.css'

class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit(e) {
        const { username, password } = this.state
        const { authType } = this.props
        
        e.preventDefault()
        // console.log(username, password)
        // console.log(authType)

        this.props.authUser(authType || 'login', { username, password })
    }

    render() {
        const { username, password } = this.state
        return <div className="formcontainer">
                <h1>{this.props.authType === "login" && "Login" || "Register"} From</h1>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="username">username</label>
                <input
                    type="text"
                    value={username}
                    name="username"
                    placeholder="Username"
                    autoComplete="off"
                    onChange={this.handleChange}
                />

                <label htmlFor="password">password</label>
                <input
                    type="password"
                    value={password}
                    name="password"
                    placeholder="Password"
                    autoComplete="off"
                    onChange={this.handleChange}
                />

                <button type="submit"><span className="bg"></span>Submit</button>
                <p className="subtitle">
                    {this.props.authType === "login" && "Don't Have an Account, " || "Already have an Account, "} 
                    {this.props.authType === "login" && <Link to="/Register" >Register</Link> || <Link to="/Login" >Login</Link>}
                </p>
            </form>
        </div>
    }
}

export default connect(() => ({}), { authUser, logout })(Auth)