const INITIAL_STATE = {
    servers: [],
    currServer: null
}


export default function serverReducer(state = INITIAL_STATE, action) { //action : {type: 'SET_CURR_ROBOT', server:server}
    switch (action.type) {
        case 'SET_CURR_SERVER': {
            return {
                ...state,
                currServer:action.server
            }

        }
        case 'CREATE_SERVER': {
            const servers = [...state.servers]
            servers.push(action.addedServer)
            return {
                ...state,
                servers
            }

        }

        case 'SET_SERVERS':
            {
                return {
                    ...state,
                    servers: action.servers
                }

            }

        case 'UPDATE_SERVER':
            const idx = state.servers.findIndex(currServer => {
                return currServer.id === action.server.id
            })
            return {
                ...state,
                servers: [
                    ...state.servers.slice(0, idx),
                    action.server,
                    ...state.servers.slice(idx + 1)
                ]

            }
        default:
            return state
    }
}