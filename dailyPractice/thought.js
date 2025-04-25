// // NextJS slugifying the page option in the menu bar 

import CartContextProvider from "./patterns/redux"


// export default async function saveMeal(meal) {

//     meal.slug = slugify(meal.tile, { lower: true })
//     meal.description = xss(meal.description)
//     // even in this part, I have to udnerstand the nature of why I am making this 
//     // variable 'const extension' 
//     // what file or data am I trying to manipualte here? 
//     //also I have to undestand the purpsoe !!!!
//     const extension = meal.image.namea
//     const fileNamae = `${meal.slug} ${extension}`

//     const stream = fs.createWriteStream(`public/images/${fileNamae}`)
//     const bufferedIamge = meal.image.bufferArray()

//     stream.write(Buffer.from(bufferedIamge), (error) => {
//         if (error) {
//             throw new Error('saving image failed')
//         }
//     })

//     meal.image = `images/${fileNamae}`

//     db.prepare(`INSERT INTO meals (title, summary, name)
//     VALUES (@title, @summary, @name)`
//     ).run()
// }


// // redux vs context

// export default const cartSlice = createSlice({
//     name: 'cart',
//     initialState: {
//         items: [],
//         totalQuantity: 0,
//         changed: false
//     },
//     reducers: {
//         replaceCart(state, action) {
//             state.totalQuantity = action.payload.totalQuantity
//             state.totlaPrice = action.payload.totlaPrice
//         },

//         addItem(state, action) {
//             const newItem = action.paylod
//             const existingItem = state.items.find(item => item.id === action.payload.id)

//             if (!existingItem) {
//                 state.items.push({
//                     name: newItem.name,
//                     title: newItem.title,
//                     quantity: 1,
//                     price: newItem.price
//                 })
//             } else {
//                 state.totalQuantity++
//                 state.totalPrice = existingItem.totalPrice + newItem.price
//             }
//         }
//     }
// })



// export default function cartReducer(state, action) {
//     if(action.type === 'ADD') {

//         const existingItemIndex = state.items.findIndex(item => item.id === state.items.id)
//         const updatedItems = {...state.items}

//         if(existingItemIndex > -1) {
//             const existingItem = state.items[existingItemIndex]
//             const updatedItem = {
//                 ...existingItem,
//                 quantity: existingItem.quantity + 1
//             }
//             updatedItems[existingItemIndex] = updatedItem
//         }
//         else {
//             updatedItems.push({...action.item, quantity: 1})
//         }
//         return {...state, items: updatedItems}
//     }




// export default function CartContextProvider({children}) {



// const [cart, dispatchCartAction] = useReducer({items: []})



// function addItem(item) {
//     dispatchCartAction({type: 'ADD' , item})
// }

// const cartCtx = {
//     items: cart.items, 
//     addItem
// }


//     return (
//         <CartContextProvider value={cartCtx}>
//             {children}
//         </CartContextProvider>

//     )
// }




export const fetchCardData = () => {
    return async(dispatch) => {
        const fetchData = async () => {
            const response = await fetch (
                'http://localhost:8080/events'
            )


            if(!response.ok){
                throw new Error('data not fetched')
            }

            const data = await response.json()

            return data;
        }

        try {
            await fetchData() 

            

        }

    }
}