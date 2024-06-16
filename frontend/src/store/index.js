import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit'
import {thunk} from 'redux-thunk'

import rootReducers from './reducers'

const DEFAULT_STATE = {
    error: { message: null }
}

// export const store = configureStore(
//     {reducer: rootReducers}, DEFAULT_STATE, middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       thunk: {
//         extraArgument: myCustomApiService,
//       },
//       serializableCheck: false,
//     }), compose(
//         applyMiddleware(thunk),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// )
export const store = configureStore(
    {reducer: rootReducers}, DEFAULT_STATE, compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)