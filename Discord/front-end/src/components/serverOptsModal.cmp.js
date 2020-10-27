import React, { Component } from 'react'
import svgService from '../services/svgService'
export default class ServerOptsModal extends Component {
    state = {
        isShowen: false
    }
    componentDidMount() {

    }
    render() {
        const { closeModal, showModal } = this.props

        if (!showModal) {
            return null;
        }
        return (
            <div className='server-opts-modal'>
                <div className='server-opts-menu'>
                    <button className='menu-item flex space-between'>
                        <span>Invite People</span>
                        {svgService.query('invitePplIcon')}
                    </button>
                    <button className='menu-item flex space-between'>
                        <span>Create Channel</span>
                        {svgService.query('createChIcon')}
                    </button>

                </div>
                <div className='back-drop-layer' onClick={closeModal} >
                </div>
            </div>
        )
    }
}
