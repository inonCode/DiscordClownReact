import React, { Component } from 'react'
import Moment from 'react-moment';

export default class MsgDisplay extends Component {
    render() {
        let msg = this.props.msg
        return (
            <li className='msg-display'>
                <img src={msg.fromUser.imgUrl} alt={msg.fromUser.name} />
                <div className='msg-wrapper '>
                    <h2>
                        <span className='username'>{msg.fromUser.name}</span>
                        <span className='time'>
                            <Moment fromNow>{msg.sentAt}</Moment>

                        </span>

                    </h2>
                    <div className='msg-content' >{msg.content}</div>
                </div>

            </li>
        )
    }
}
