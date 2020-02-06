import React, { Component } from 'react'

import api from '../services/api'
import like from '../like.svg'
import './Tweet.css'

export default class Tweet extends Component {


    handleLike = async () =>{
        const {_id} = this.props.Tweet
        await api.post(`likes/${_id}`)
    }

    render() {
        const { Tweet } = this.props

        return (
            <li className="tweet">
                <strong>{Tweet.author}</strong>
                <p>{Tweet.content}</p>
                <button type="button" onClick={this.handleLike}>
                    <img src={like} alt="Like" />
                    {Tweet.likes}
                </button>
            </li>
        )
    }
}