import { createSlice } from "@reduxjs/toolkit";

// initialState
const initialState = {
    search: ''
}

// create slice 
const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searched: (state, action) => {
            state.search = action.payload
        }
    }
});


export default searchSlice.reducer;
export const { searched } = searchSlice.actions