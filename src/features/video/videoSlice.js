import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getVideoItem from "./videoAPI";

// initialState
const initialState = {
    video: {},
    isLoading: false,
    isError: false,
    error: ''
};

// create async thunk 
export const fetchVideo = createAsyncThunk('video/fetchVideo', async (videoId) => {
    const video = await getVideoItem(videoId);
    return video;
});


// create slice 
const videoSlice = createSlice({
    name: 'video',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideo.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
                state.error = '';
            })
            .addCase(fetchVideo.fulfilled, (state, action) => {
                state.isLoading = false;
                state.video = action.payload;
            })
            .addCase(fetchVideo.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.video = {};
                state.error = action.error?.message
            })
    }
})


export default videoSlice.reducer;