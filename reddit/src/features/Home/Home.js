import React, { useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import './Home.css';
import Post from '../Post/Post';
import {
    fetchPosts,
    selectFilteredPosts,
    selectPosts,
    selectSelectedSubreddit
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

    return (
        <>
            {posts.map((post) => (
                <Post 
                    key={post.id}
                    author={post.author}
                    url={post.url}
                    title={post.title}
                />
            ))}
        </>
    );
};

export default Home;