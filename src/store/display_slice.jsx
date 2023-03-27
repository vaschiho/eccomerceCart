import { createSlice } from "@reduxjs/toolkit";


const displaySlice = createSlice({
    name: "toggle",
    initialState: { display: false ,navbar:false,cart:false},
    reducers: {
        onToggleImage(state) {
            state.display = !state.display
        },
        onToggleNavbar(state){
            state.navbar = !state.navbar
        },
        onToggleCart(state){
            state.cart = !state.cart
        }
    }
})

export const displayAction = displaySlice.actions

export default displaySlice.reducer