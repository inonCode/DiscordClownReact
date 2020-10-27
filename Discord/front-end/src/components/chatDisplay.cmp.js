import React, { Component } from 'react'
import MsgsList from './msgsList.cmp'
import ChatControls from './chatControls.cmp'
export default class ChatDisplay extends Component {
    render() {
        let ch = this.props.currentTextCh
        return (
            <div className="chat-display">
                <MsgsList msgs={ch.msgs} />
                <ChatControls target={ch.name} />
            </div>
        )
    }
}
