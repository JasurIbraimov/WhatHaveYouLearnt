import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAllPosts, createNewPost  } from "../../../api";
export const fetchPosts = createAsyncThunk('posts/fetchPosts', getAllPosts)
export const createPost = createAsyncThunk("posts/createPost", async (data) =>{
  console.log(data)
  await createNewPost(data)


})

const initialState = {
  postItems: [
    {
      description: "Learned Redux!",
      id: 1,
      links: ["https://www.youtube.com/watch?v=bbkBuqC1rU4"],
      creator: "Jasur",
      tags: ["Redux", "Programming"],
      likeCount: 1,
      selectedFile: ""
    },
    {
      description: "Learned Redux!",
      id: 2,
      links: ["https://www.youtube.com/watch?v=bbkBuqC1rU4"],
      creator: "Jasur",
      tags: ["Redux", "Programming"],
      likeCount: 1,
      selectedFile: ""
    },
    {
      description: "Learned Redux!",
      id: 3,
      links: ["https://www.youtube.com/watch?v=bbkBuqC1rU4", "https://www.youtube.com/watch?v=bbkBuqC1rU4"],
      creator: "Jasur",
      tags: ["Redux", "Programming"],
      likeCount: 1,
      selectedFile: ""
    },{
      description: "Learned Redux!",
      id: 4,
      links: ["https://www.youtube.com/watch?v=bbkBuqC1rU4"],
      creator: "Jasur",
      tags: ["Redux", "Programming"],
      likeCount: 1,
      selectedFile: ""
    },
    {
      description: "Learned Redux!",
      id: 5,
      links: ["https://www.youtube.com/watch?v=bbkBuqC1rU4"],
      creator: "Jasur",
      tags: ["Redux", "Programming"],
      likeCount: 1,
      selectedFile: ""
    },
    {
      description: "Learned Redux!",
      id: 6,
      links: ["https://www.youtube.com/watch?v=bbkBuqC1rU4"],
      creator: "Jasur",
      tags: ["Redux", "Programming"],
      likeCount: 1,
      selectedFile: ""
    },{
      description: "Learned Redux!",
      id: 7,
      links: ["https://www.youtube.com/watch?v=bbkBuqC1rU4"],
      creator: "Jasur",
      tags: ["Redux", "Programming"],
      likeCount: 1,
      selectedFile: ""
    },
    {
      description: "Learned Redux!",
      id: 8,
      links: ["https://www.youtube.com/watch?v=bbkBuqC1rU4", ],
      creator: "Jasur",
      tags: ["Redux", "Programming"],
      likeCount: 1,
      selectedFile: ""
    },
    {
      description: "Learned Redux!",
      id: 9,
      links: ["https://www.youtube.com/watch?v=bbkBuqC1rU4"],
      creator: "Jasur",
      tags: ["Redux", "Programming"],
      likeCount: 1,
      selectedFile: ""
    }

  ],
  isLoading: true, 
  amount:4,
  isError: false
}



export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder
    .addCase(
      fetchPosts.pending, (state, action) => {
        state.isLoading = true 
      }
    ).addCase(
      fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.postItems = action.payload
        state.amount = action.payload.length 
      }
    ).addCase(
      fetchPosts.rejected, (state, action) => {
        state.isLoading = false 
        state.isError = true
      }
    )
  }
})


export default postsSlice.reducer
console.log(postsSlice)