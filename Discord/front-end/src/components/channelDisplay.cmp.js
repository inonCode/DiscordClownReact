import React, { Component } from 'react'

export default class ChannelDisplay extends Component {

    //setCurrTextCh(channel.id) 
    channelClicked = (id) => {
        const { setCurrTextCh } = this.props
        if (this.props.setCurrTextCh) {
            setCurrTextCh(id)
        } else {
            // should call joinVoiceCh(id) 
        }
    }
    render() {
        const { icon, channel } = this.props
        return (

            <li className="channel-prv flex" onClick={() => { this.channelClicked(channel.id) }}>
                {icon}
                <h2>{channel.name}</h2>
            </li>
        )
    }
}
