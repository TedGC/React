

//List of things to make in this file 
// 1 redux
// 2. state, action and other factors without using Redux
// 3. how they are used in other components with the use of thunk 
import { createSlice } from 'redux-react'




// export const cartSlice = createSlice({
//     name: 'cart',
//     initialState: {
//         items: [],
//         totalQuantity: 0,
//         changed: false
//     },
//     reducers: { 
//         replaceCart(state, action) {
//             state.totalQuantity = action.payload.totalQuantity
//             state.items = action.payload.items
//         },

//         addItem(state, action) {
//             const newItem = action.payload
//             const existingItem = state.items.find(item => item.id === newItem.id)

//             if(!existingItem) {
//                 state.items.push({
//                     name: newItem.name,
//                     quantity: 1,
//                     totalPrice: newItem.price
//                 })
//             }
//             else{
//                 state.totalQuantity++
//                 state.totalPrice = existingItem.totalPrice + newItem.price
//             }

//         }
//     }
// })


//here the fact I should be aware of that is that Redux will take care of the behind-the-scene
// state update manipulation suhc as updating the curernt status of the state without 
// damanging the integiry of the data and possibility of data distortion 
const initialValue = {
    items: [],
    addItem: (item) => { },
    removeItmm: (id) => { }
}

function cartReducer(state, action) {
    if (action.type === 'ADD_ITEM') {
        const existingItemIndex = state.items.findIndex(item => item.id === state.items.id)
        const udpatedItems = { ...state.items }


        if (existingItemIndex > -1) {
            const existingItem = state.items[existingItemIndex]
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            }

            udpatedItems[existingItemIndex] = updatedItem
        }
        else {
            udpatedItems.push({...action.item, quantity: 1})
        }

        return {...state, items: udpatedItems}
    }
}




export default function CartContextProvider({children}) {

const [cart, dispatchCartAction] = useReducer({items: []}) 


function addItem(item) {
    dispatchCartAction({type: 'ADD_ITEM', item})
}


const ctxValue = {
    items: cart.items,
    addItem,
    removeItem,
}
    return (
        <CartContextProvider value={ctxValue}>
            {children}
        </CartContextProvider>
    )
}



export const fetchCardData = () => {
    return async (dispatch) => {
        const fetchData  = async() => {
            const response = await fetch(
                'htttp://localhost:8080/events'
            )
        } 

        const data = await response.json()
    }
}


import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                'https://react-http-6b4a6.firebaseio.com/cart.json'
            );

            if (!response.ok) {
                throw new Error('Could not fetch cart data!');
            }

            const data = await response.json();

            return data;
        };

        try {
            const cartData = await fetchData();
            dispatch(
                cartActions.replaceCart({
                    items: cartData.items || [],
                    totalQuantity: cartData.totalQuantity,
                })
            );
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Fetching cart data failed!',
                })
            );
        }
    };
};

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending cart data!',
            })
        );

        const sendRequest = async () => {
            const response = await fetch(
                'https://react-http-6b4a6.firebaseio.com/cart.json',
                {
                    method: 'PUT',
                    body: JSON.stringify({
                        items: cart.items,
                        totalQuantity: cart.totalQuantity,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error('Sending cart data failed.');
            }
        };

        try {
            await sendRequest();

            dispatch(
                uiActions.showNotification({
                    status: 'success',
                    title: 'Success!',
                    message: 'Sent cart data successfully!',
                })
            );
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Sending cart data failed!',
                })
            );
        }
    };
};