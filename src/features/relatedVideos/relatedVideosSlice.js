import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getRelatedVideos from "./relatedVideosAPI";


// initialState
const initialState = {
    relatedVideos: [],
    isLoading: false,
    isError: false,
    error: ''
};

// create async thunk
export const fetchRelatedVideos = createAsyncThunk('relatedVideos/fetchVideos', async ({ tags, id }) => {
    const data = await getRelatedVideos({ tags, id });
    return data;
})

// create slice
const relatedVideosSlice = createSlice({
    name: 'relatedVideos',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchRelatedVideos.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
                state.error = '';
            })
            .addCase(fetchRelatedVideos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.relatedVideos = action.payload;
            })
            .addCase(fetchRelatedVideos.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.relatedVideos = [];
                state.error = action.error?.message
            })
    }
})

export default relatedVideosSlice.reducer;