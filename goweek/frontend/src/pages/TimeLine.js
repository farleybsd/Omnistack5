import React, { Component } from 'react'
import Api from '../services/api'

import TweeterLogo from '../twitter.svg'
import './TimeLine.css'
import api from '../services/api'

export default class Timeline extends Component {

    state = {
        newTweet: ''
    }

    handleInputChange = e => {
        this.setState({
            newTweet: e.target.value
        })
    }

    handleNewTweet = async e => {
        if (e.keyCode !== 13) return;

        const content = this.state.newTweet
        const author = localStorage.getItem('@GoTwitter:username')

        await api.post("tweets",{content,author})
        this.setState({newTweet: ""})
       // console.log(content,author)
    }

    render() {
        return (
            <div className='timeline-wrapper '>
                <img height={24} src={TweeterLogo} alt="goTweeter" />
                <form>
                    <textarea
                        value={this.state.newTweet}
                        onChange={this.handleInputChange}
                        onKeyDown={this.handleNewTweet}
                        placeholder='O que está Acontecendo ?'
                    />
                </form>
            </div>
        )
    }
}