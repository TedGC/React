import { createContext } from "react";

export const carContext = createContext({
    items: [],
    addItem: (item) => { },
    removeItem: (id) => { }
})


export function cartReducer(state, action) {

    if (action.type === 'ADD_ITEM') {
        const existingCartIndex = state.items.findIndex((item) => item.id === action.item.id)
        const updatedItems = [...state.items]

        if (existingCartIndex > -1) {
            const existingItem = state.items[existingCartIndex]
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            }
            updatedItems[existingCartIndex] = updatedItem
        }
        else {
            updatedItems.push({
                ...action.item,
                quantity: 1
            })
        } return { ...state, items: updatedItems }

    }
    if (action.type === 'REMOVE_ITEM') {
        const existingCartIndex = state.items.findIndex((item) => item.id === action.item.id)
        const updatedItems = [...state.items]

        if (existingCartIndex === 1) {
            const existingItem = state.items[existingCartIndex]
            updatedItems.splice(existingCartIndex, 1)
            }
            updatedItems[existingCartIndex] = updatedItem
        }
        else  {
        const updatedItem = {
            ...existingItem,
            quantity: existingItem.quantity - 1 
        }
        } return { ...state, items: updatedItems }

    }
} return state



export function CartContextProvider({ children }) {

    const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] })

    function addItem(item) {
        dispatchCartAction({ type: "ADD_ITEM", item })
    }

    function removeItem(id) {
        dispatchCartAction({ type: 'REMOVE_ITEM', id })
    }

    const cartValue = {
        items: cart.items,
        addItem,
        removeItem
    }


    return (
        <CartContextProvider value={cartValue} >
            {children}
        </CartContextProvider>
    )
}

export default cartContext