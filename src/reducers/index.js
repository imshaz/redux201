import {combineReducers} from 'redux'

import cartReducer from './cart-reducer'
import productReducer from './product-reducers'



const allReducer = {

    products:productReducer, 
    shoppingCart:cartReducer
}

//combine reducer
export  let rootReducer = combineReducers(allReducer); 

