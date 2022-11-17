import axios from "axios";

export const getAllPosts = async () => {
    const response = await axios.get("http://localhost:5000/posts")
    return response.data.posts
  }

export const createNewPost = async (data) => {
  const response = await axios.post("http://localhost:5000/posts", data)
  return response.data
}