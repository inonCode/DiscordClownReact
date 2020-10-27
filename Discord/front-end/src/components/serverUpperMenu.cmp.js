import React, { Component } from 'react'
import ServerOptsModal from './serverOptsModal.cmp'
export default class ServerUpperMenu extends Component {
    constructor(props) {
        super()
        this.state = { isServerOptsShowen: false };
    }
    toggleServerOpts = () => {
        this.setState(state => ({
            isServerOptsShowen: !state.isServerOptsShowen
        }))
    }
    render() {
        const { isServerOptsShowen } = this.state
        return (
            <div className="upper-menu flex align-center">
                <div className='server-opts-container flex col align-center'>
                    <button className="server-opts-btn" onClick={this.toggleServerOpts}>{this.props.serverName}
                    </button>
                    <ServerOptsModal closeModal={this.toggleServerOpts} showModal={isServerOptsShowen}></ServerOptsModal>
                </div>
                <h2>{this.props.currentTextCh.name}</h2>
            </div>
        )
    }
}
