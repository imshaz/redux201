



//create variables for types/not necessary but a good practice to avooid errors

export let ADD_TO_CART = "ADD_TO_CART"; 
export let UPDATE_CART ="UPDATE_CART"; 
export let DELETE_FROM_CART ="DELETE_FROM_CART"; 


// action generator 
// function returining simple js Object...! with item type(must), payload(optional and can give any name)

const add_item_to_cart = (productName, quantity, unitCost)=>{

    return {

        type:ADD_TO_CART, 
        payload: {productName, quantity, unitCost}
    }
}

export default add_item_to_cart;