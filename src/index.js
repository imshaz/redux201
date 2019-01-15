
import store from './store'
import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App'


import add_item_to_cart from './actions/cart_actions'
// subscibe to store ---this will be called every time the system get updated... 
store.subscribe(()=>{console.log("Store Updated")}); 


//Now dispating some actions to the store....
store.dispatch(add_item_to_cart("Dell E5570 i7",10,900));
store.dispatch(add_item_to_cart("Dell E550 i7",10,900));
store.dispatch(add_item_to_cart("Dell E5570 i7",10,900));


console.log("Initial State: ", store.getState());



ReactDOM.render(<App />, document.getElementById('root'));
