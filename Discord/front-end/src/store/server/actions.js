import serverService from '../../services/serverService'

export const createServer = (serverData) => {
    return async (dispatch) => {
        const addedServer = await serverService.create(serverData)
        return dispatch({ type: 'CREATE_SERVER', addedServer })
    }
}

const _setCurrServer = (server) => {
    return { type: 'SET_CURR_SERVER', server }
}

export const loadCurrServer = (id) => {
    return async (dispatch) => {
        const server = await serverService.getById(id)
        return dispatch(_setCurrServer(server))
    }
}

const _updateServer = (server) => {
    return { type: 'UPDATE_SERVER', server }
}

export const saveServer = (serverObj) => {
    return async (dispatch) => {
        const server = await serverService.save(serverObj)
        return dispatch(_updateServer(server))
    }
}

const _setServers = (servers) => {
    return { type: 'SET_SERVERS', servers }
}

export const loadServers = () => {
    console.log('loadserverRuning');
    return async (dispatch) => {
        const servers = await serverService.query()
        return dispatch(_setServers(servers))
    }
}

export const addChatMsg = (msgObj) => {

}