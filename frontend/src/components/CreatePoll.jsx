import React, {Component} from 'react'
import { connect } from 'react-redux'

import '../styles/create.css'

import {createPoll} from '../store/actions'
import Modal from '../modal/Modal'

class CreatePoll extends Component {
    constructor(props){
        super(props)
        this.state = {
            question: '',
            options: ['']
        }

        this.handleChange = this.handleChange.bind(this)
        this.addAnswer = this.addAnswer.bind(this)
        this.handleAnswer = this.handleAnswer.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    addAnswer() {
        this.setState({options: [...this.state.options, '']})
    }

    handleAnswer(e, index){
        const options = [...this.state.options]
        options[index] = e.target.value
        this.setState({options})
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.createPoll(this.state)
        alert("Poll Created Successfully")
    }
    
    render(){
        const options = this.state.options.map((option, i) => <div className='option' key={i}>
        <label htmlFor="option">option</label><br />
        <input type="text" value={option} key={i} onChange={e => this.handleAnswer(e, i)} />
        </div>)

         return <div className='createformcontainer'>
            <form onSubmit={this.handleSubmit} className='createform'>
            <h1>Create A New Poll</h1>
            <label htmlFor="question">Question</label> 
            <input type="text" name='question' value={this.state.question} onChange={this.handleChange} />

            {options}
            <div className="btns">
            <button type='button' onClick={this.addAnswer}><span className='bg'></span>Add options</button>
            <button type='submit'><span className='bg'></span>Submit</button>
            </div>
         </form>
         </div>
    }
}

export default connect(() => ({}), {createPoll})(CreatePoll)