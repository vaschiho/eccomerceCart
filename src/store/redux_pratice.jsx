import { createSlice } from "@reduxjs/toolkit";


const initialState = { count: 0 }
const artimathicSlice = createSlice({

    name: "counter",
    initialState,
    reducers: {
        increament(state) {
            state.count = state.count + 1
        },
        decreament(state) {
            state.count = state.count + 1
        },
        payload(state, actions) {
            state.count = state.count + actions.payload
        }
    }
})

export const artimathicAction = artimathicSlice.actions
export default artimathicSlice.reducer;