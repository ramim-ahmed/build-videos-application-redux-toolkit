import { createSlice } from "@reduxjs/toolkit";

// initialState
const initialState = {
    tagsSelection: []
}

// create slice 
const tagsFilterSlice = createSlice({
    name: 'tagsFilter',
    initialState,
    reducers: {
        addSelectionTags: (state, action) => {
            state.tagsSelection = [...state.tagsSelection, action.payload]
        },
        removeSelectionTags: (state, action) => {
            const index = state.tagsSelection.indexOf(action.payload);
            if (index !== -1) {
                state.tagsSelection.splice(index, 1)
            }
        },
        resetTags: (state) => {
            state.tagsSelection = []
        }
    }
});

export default tagsFilterSlice.reducer;
export const { addSelectionTags, removeSelectionTags, resetTags } = tagsFilterSlice.actions;