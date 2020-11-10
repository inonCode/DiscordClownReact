import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCurrServer } from '../store/server/actions'
import ChannelsList from '../components/channelsList.cmp'
import ServerUpperMenu from '../components/serverUpperMenu.cmp'
import ChatDisplay from '../components/chatDisplay.cmp'
import UsersList from '../components/usersList.cmp'
class ServerDisplay extends Component {

    state = {
        server: null,
        currentTextCh: null
    }
    async componentDidMount() {
        const { id } = this.props.match.params
        let server = await this.props.loadCurrServer(id)
        if (server) {
            const server = this.props.currServer
            //setting the default text channel 
            this.setState({ currentTextCh: server.textChannels[0] })
        }

    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.onRouteChanged();
        }
    }

    onRouteChanged = () => {
        // console.log("ROUTE CHANGED");
        const { id } = this.props.match.params
        console.log(id);
        this.props.loadCurrServer(id)
        this.setState({ currentTextCh: this.props.currServer.textChannels[0]})
    }
    setCurrTextCh = (id) => {
        // console.log('setCurrtextChRuning', id);
        const { currServer } = this.props
        const idx = currServer.textChannels.findIndex(ch => ch.id === id)
        this.setState({ currentTextCh: currServer.textChannels[idx] })
    }
    render() {
        const { currentTextCh } = this.state
        const { currServer } = this.props
        if (currServer && currentTextCh) return (
            <div className='server-display router-view flex col'>
                <ServerUpperMenu serverName={currServer.name} currentTextCh={currentTextCh} />
                <div className='wrraper flex'>
                    <ChannelsList server={currServer} setCurrTextCh={this.setCurrTextCh} />
                    <ChatDisplay currentTextCh={currentTextCh} />
                    <UsersList />
                </div>
            </div>
        )
        else return (<div>no server found</div>)
    }
}

const mapStateToProps = state => {
    return {
        servers: state.servers,
        currServer: state.currServer
    }
}

const mapDispatchToProps = {
    loadCurrServer
}


export default connect(mapStateToProps, mapDispatchToProps)(ServerDisplay);