
import { ADD_TO_CART, UPDATE_CART, DELETE_FROM_CART }from '../actions/cart_actions'


// //create variables for types/not necessary but a good practice to avooid errors

// const ADD_TO_CART = "ADD_TO_CART"; 
// const UPDATE_CART ="UPDATE_CART"; 
// const DELETE_FROM_CART ="DELETE_FROM_CART"; 



//initial state for cart --for testing 
// array of objects
const cartInitialState = {
    cart:[
    {
        productName: "I phone 8", 
        quantity:10, 
        unitCost:500
    },
    {
        productName: "Samsung Note 8", 
        quantity:5, 
        unitCost:400
    },
    {
        productName: "I phone x", 
        quantity:2, 
        unitCost:900
    }
]

}

//create cartReducer
const cartReducer = (state=cartInitialState,action)=>{

    switch(action.type){

        case ADD_TO_CART:{
            return {...state, cart: [...state.cart, action.payload]
            }
        }

        case UPDATE_CART:{
            return {...state, cart: [...state.cart, action.payload]
            }
        }
        case DELETE_FROM_CART:{
            return {...state, cart: [...state.cart, action.payload]
            }
        }

        default: {
            return state; 
        }
        }
    }

export default cartReducer; 