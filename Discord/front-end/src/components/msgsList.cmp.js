import React, { Component } from 'react'
import MsgDisplay from './msgDisplay.cmp'
export default class MsgsList extends Component {
    // componentDidMount() {
    //     console.log(this.props, 'props in msgsList')
    // }
    render() {
        return (
            <ul className="msgs-list">
                {this.props.msgs.map(msg => <MsgDisplay msg={msg} key={msg.id} />)}
            </ul>
        )
    }
}
