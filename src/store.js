

import {createStore} from 'redux'

import {rootReducer} from './reducers/index'

//pass reference to combine reducers to the store... so that store can hace access to all reducers. 
let store = createStore(rootReducer); 


export default store; 