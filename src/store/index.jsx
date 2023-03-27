import { configureStore } from "@reduxjs/toolkit";
import artimathicReducer from "./redux_pratice";
import cartReducer from "./cart_slice";
import displayReducer from "./display_slice";


const store = configureStore({
   reducer: { counter: artimathicReducer, cart: cartReducer, toggle: displayReducer }
})

export default store