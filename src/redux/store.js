import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer'

// Initial state for the application
const initialState = {}


// Creating store: rootReducer combines all reducers, 
// initialState defines initial state for the application
const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store