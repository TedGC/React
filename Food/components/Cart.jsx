import { createContext, useReducer } from "react";



export const cartContext = createContext( {
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {}
}) 

function cartReducer(state, action) { 

    if(action.type === 'ADD_ITEM') {
        const existingItemIndex = state.items.findIndex((item) => item.id === action.item.id)
        const updatedItems = [...state.items] 

        if(existingItemIndex > -1) {
            const existingItem = state.items[existingItemIndex]
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1 
            }
            updatedItems[existingItemIndex] = updatedItem
        } else {
            updatedItems.push({...action.item, quantity: 1})
        } 
        return {...state, items: updatedItems}
    }

    if(action.type === 'removeItem') {
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id)
     
        const existingCartItem = state.items[existingCartItemIndex]
        if(existingCartItem === 1) {
            const updatedItems = [...state.items]
            updatedItems.splice(existingCartItemIndex, 1)
        }
        else {
            const updatedCartIem = {
                ...existingCartItem, 
            quantity: existingCartItem.quantity - 1}
        } updatedItems[existingCartItemIndex] = updatedCartIem
        return { ...state, items: updatedItems }
    } 
    return state
}




export function CartContextProvider({children}) {

//reducer / action

const [cart, dispatchCartActino] = useReducer(cartReducer, {items: [],})
//function for addItem and removeItem


function addItem (item) {
    dispatchCartActino({type: 'ADD_ITEM', item})
}
// and ADD_ITEM for dispaytch shit

function removeItem(id) {
    dispatchCartActino({ type: 'REMOVE_ITEM', id})
}
//export  values


const cartValue = {
    items: cart.items,
    addItem,
    removeItem
}


    return (
        <CartContextProvider>
            {children}
        </CartContextProvider>
    )
}