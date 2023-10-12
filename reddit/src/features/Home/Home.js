import React from 'react';
import {useSelector } from 'react-redux';
import './Home.css';
import Post from '../Post/Post';
import {
    selectFilteredPosts,
    selectPosts
  } from '../../store/redditSlice';

const Home = () => {
    // const posts = useSelector(selectPosts);
    const posts = useSelector(selectFilteredPosts);

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