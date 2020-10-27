import React, { Component } from 'react'
import ChannelDisplay from './channelDisplay.cmp'
import svgService from '../services/svgService'
export default class ChannelsList extends Component {
    state = {

    }
    render() {
        const { server, setCurrTextCh } = this.props
        return (
            <div className='channels-list flex col align-center'>
                <h2 className='list-title'>Text channels</h2>
                <ul className='txt-channels'>
                    {server.textChannels.map(channel => <ChannelDisplay channel={channel} setCurrTextCh={setCurrTextCh} icon={svgService.query('txtChIcon')} key={channel.id} />)}
                </ul>

                <h2 className='list-title'>Voice channels</h2>
                <ul className='voice-channels'>
                    {server.textChannels.map(channel => <ChannelDisplay channel={channel} icon={svgService.query('voiceChIcon')} key={channel.id} />)}
                </ul>
            </div>
        )
    }
}
