import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        item: [],
        totalQuantity: 0
    },
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.item = action.payload.item;
        },
        addItemToCart(state, actions) {
            const newItem = actions.payload
            const existingItem = state.item.find((item) => item.id === newItem.id)
            
            if (!existingItem) {
                state.item.push({
                    id: newItem.id,
                    price: newItem.price,
                    totalPrice: newItem.price,
                    header: newItem.header,
                    image: newItem.image,
                    quantity: 1,

                },
                )
                state.totalQuantity++
            } else {
                return
            }
        },
        addQuantityToCart(state, actions) {
            const newItem = actions.payload
            const existingItem = state.item.find((item) => item.id === newItem.id)
            state.totalQuantity++
            if (!existingItem) {
                state.item.push({
                    id: newItem.id,
                    price: newItem.price,
                    totalPrice: newItem.price,
                    header: newItem.header,
                    image: newItem.image,
                    quantity: 1,
                })
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + existingItem.price
            }
        },
        removeItemFromCart(state, actions) {
            const id = actions.payload;
            const existingItem = state.item.find(item => item.id === id);
            state.totalQuantity--
            if (existingItem.quantity === 1) {
                state.item = state.item.filter(item => item.id !== existingItem.id)
            } else {
                existingItem.quantity--
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            }

        },
        deleteItemFromCart(state, actions) {
            const id = actions.payload;
            const deletedItem = state.item.find(item => item.id === id);
            state.totalQuantity -= deletedItem.quantity;
            state.item = state.item.filter(item => item.id !== id);
        },

        clearCart(state, actions) {
            state.item = [];
            state.totalQuantity = 0;
        }

    }
})

export const cartActions = cartSlice.actions;
export default cartSlice.reducer