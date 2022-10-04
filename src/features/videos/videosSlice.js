import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getVideos from "./videosAPI";


// initialState
const initialState = {
    videos: [],
    isLoading: false,
    isError: false,
    error: ''
};

// create async thunk
export const fetchVideos = createAsyncThunk('videos/fetchVideos', async ({ tagsSelection, search }) => {
    const data = await getVideos(tagsSelection, search);
    return data;
})

// create slice
const videosSlice = createSlice({
    name: 'videos',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideos.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
                state.error = '';
            })
            .addCase(fetchVideos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.videos = action.payload;
            })
            .addCase(fetchVideos.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.videos = [];
                state.error = action.error?.message
            })
    }
})

export default videosSlice.reducer;