import React, { Component } from 'react'

export default class ChatControls extends Component {
    render() {
        return (
            <form className="chat-controls">
                <input type="textarea" placeholder={'Message #'+this.props.target} />
            </form>
        )
    }
}
