import { createStore, compose} from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory }from 'react-router'

// import the root reducers
import rootReducer from './reducers/index'


//imported data
import posts from './data/posts'
import comments from './data/comments'

// create object for default data

const defaultState = {
    posts,
    comments
};

const store = createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const history = syncHistoryWithStore(browserHistory, store);

export default store;