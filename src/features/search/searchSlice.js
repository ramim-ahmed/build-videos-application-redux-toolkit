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
        },
        resetSearch: (state) => {
            state.search = '';
        }
    }
});


export default searchSlice.reducer;
export const { searched, resetSearch } = searchSlice.actions