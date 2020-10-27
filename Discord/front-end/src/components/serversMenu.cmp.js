import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import svgService from '../services/svgService'
import AddServerModal from '../components/addServerModal.cmp'
export class ServersMenu extends Component {
    constructor(props) {
        super()
        this.state = { isAddServerShowen: false };
    }
    toggleAddServer = () => {
        this.setState(state => ({
            isAddServerShowen: !state.isAddServerShowen
        }))
    }
    render() {
        const {
            servers
        } = this.props
        return (
            <aside className="servers-menu ">
                {
                    servers && < div className="wrraper flex justify-center">
                        <Link
                            className='menu-item'
                            to="/">
                            {svgService.query('homeIcon')}
                        </Link>
                        {servers.map(server =>
                            <Link className='menu-item'
                                to={`/serverDisplay/${server.id}`}
                                key={server.id} >
                                <div className='img-container'>
                                    <img src={server.imgUrl} alt="" />
                                </div>
                            </Link>)
                        }
                        <button className='menu-item' onClick={this.toggleAddServer}>
                            {svgService.query('addServerIcon')}
                        </button>
                        <AddServerModal closeModal={this.toggleAddServer} showModal={this.state.isAddServerShowen}>
                        </AddServerModal>
                    </div>
                }
            </aside>
        )
    }
}