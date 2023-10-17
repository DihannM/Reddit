import React, { useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import './Home.css';
import Post from '../Post/Post';
import {
    fetchComments,
    fetchPosts,
    selectFilteredPosts
  } from '../../store/redditSlice';

const Home = () => {
    // const posts = useSelector(selectPosts);
    const dispatch = useDispatch();
    const posts = useSelector(selectFilteredPosts);
    const reddit = useSelector((state) => state.reddit);
    const { selectedSubreddit } = reddit

    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit));
    }, [selectedSubreddit]);

    const onToggleComments = (index) => {
        const getComments = (permalink) => {
            dispatch(fetchComments(index, permalink));
        };

        return getComments;
    }

    return (
        <>
            {posts.map((post, index) => (
                <Post 
                    key={post.id}
                    post={post}
                    onToggleComments={onToggleComments(index)}
                />
            ))}
        </>
    );
};

export default Home;