import React, {useEffect} from 'react'
import Post from "../Post/Post";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../redux/features/posts/postsSlice"
const Posts = () => {
  const { amount, postItems, isError, isLoading } = useSelector((store) => store.posts)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])
  return (
    <div className='container'>
      {
        isError ? <h2>Error!</h2> : <><h3>We have already {amount} posts!</h3>
        <div className='row gy-4'>
        {
          postItems.map(post => <Post key={post.id} {...post}/>)
        }
        </div>
        </>
      }
    </div>
  )
}

export default Posts
