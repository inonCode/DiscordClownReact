// import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'

// import userReducer from './modules/common/reducers'


// const store = createStore(
//     serverReducer,
//     applyMiddleware(thunk),
//     window.devToolsExtension ? window.devToolsExtension() : f => f
// )
import serverReducer from './server/reducers'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
console.log('storeJSruning');

export default function configureStore(initialState) {
    return createStore(
        serverReducer,
        initialState,
        compose(
            applyMiddleware(thunk),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
}



// export default store