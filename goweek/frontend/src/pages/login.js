import React, { Component } from 'react'
import TweetLogo from '../twitter.svg'
import './login.css'

export default class login extends Component {
    state = {
        username: '',
    }
    handleInputChange = (e) =>{
        this.setState({
            username: e.target.value
        })
    }

    handleSubmit = e =>{
        e.preventDefault()

        const {username} = this.state

        if (!username.length) return
        localStorage.setItem('@GoTwitter:username',username)
        this.props.history.push('/timeline')
    }
    render() {
        return (
            <div className="login-wrapper">
                <img src={TweetLogo} alt='GoTwittwe' />
                <form onSubmit={this.handleSubmit}>
                    <input
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        placeholder="Nome de usuário"
                    />
                    <button type="submit">Entar</button>
                </form>
            </div>
        )
    }
}
