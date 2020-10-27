import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './styles/global.scss';
import { home } from './views/home'
import ServerDisplay from './views/serverDisplay'
import { ServersMenu } from './components/serversMenu.cmp'
import { connect } from 'react-redux';


class App extends Component {

    render() {
        return (
            < div className="App flex" >
                <ServersMenu servers={this.props.servers} />
                <Switch>
                    <Route exact path="/" component={home} />
                    <Route path="/serverDisplay/:id" component={ServerDisplay} />

                </Switch>

            </div >
        )
    }

}

const mapStateToProps = state => {
   
    return {
        servers: state.servers
    }
}


export default connect(mapStateToProps)(App);