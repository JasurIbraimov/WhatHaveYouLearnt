import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "http://localhost:5000/posts";
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const response = await axios.get(API_URL);
    return response.data.posts;
});

export const createPost = createAsyncThunk("posts/createPost", async (data) => {
    const response = await axios.post(API_URL, data);
    return response.data;
});
export const deletePost = createAsyncThunk("posts/deletePost", async (id) => {
    await axios.delete(API_URL + "/" + id);
    return id;
});
export const updatePost = createAsyncThunk("posts/updatePost", async (id) => {
    const response = await axios.patch(API_URL, { id });
    return { data: response.data, id };
});
const initialState = {
    postItems: [    ],
    isLoading: true,
    amount: 0,
    isError: false,
	created: false 
};

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.isError = false;
                state.postItems = action.payload;
                state.amount = action.payload.length;
                state.isLoading = false;
				state.created = false;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            })
			.addCase(createPost.fulfilled, (state, action) => {
				state.created = true
			})
			.addCase(deletePost.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.postItems = state.postItems.filter(
                    (post) => post._id != action.payload
                );
                state.amount = state.postItems.length;
				state.isLoading = false;
				state.isError = false
            })
			.addCase(deletePost.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
			})
			;
    },
});

export default postsSlice.reducer;
console.log(postsSlice);
