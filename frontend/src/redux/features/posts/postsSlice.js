import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  postItems: [],
  isLoading: true, 
  amount: 0
}
export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
  },
})


export default postsSlice.reducer
console.log(postsSlice)