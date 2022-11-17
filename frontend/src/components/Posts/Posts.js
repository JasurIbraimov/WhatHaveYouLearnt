import React, { useEffect } from "react";
import Post from "../Post/Post";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, deletePost } from "../../redux/features/posts/postsSlice";
import AppLoader from "../AppLoader/AppLoader";
const Posts = () => {
    const { amount, postItems, isError, isLoading } = useSelector(
        (store) => store.posts
    );
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    return (
        <div className="container">
            {isLoading ? (
                <AppLoader />
            ) : (
                <>
                    <h3>We have already {amount} posts!</h3>
                    <div className="row gy-4">
                        {postItems.map((post) => (
                            <Post key={post._id} {...post} deletePost={() => dispatch(deletePost(post._id))} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Posts;
