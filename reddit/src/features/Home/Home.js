import React, { useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import './Home.css';
import Post from '../Post/Post';
import {
    fetchComments,
    fetchPosts,
    selectFilteredPosts,
    setSearchTerm
} from '../../store/redditSlice';
import PostLoading from '../Post/PostLoading';
import { AnimatedList } from 'react-animated-list';

const Home = () => {
    // const posts = useSelector(selectPosts);
    const dispatch = useDispatch();
    const posts = useSelector(selectFilteredPosts);
    const reddit = useSelector((state) => state.reddit);
    const { isLoading, error, searchTerm, selectedSubreddit } = reddit

    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit));
    }, [selectedSubreddit]);

    const onToggleComments = (index) => {
        const getComments = (permalink) => {
            dispatch(fetchComments(index, permalink));
        };

        return getComments;
    }

    if (isLoading) {
        return (
            <AnimatedList animation={"grow"}>
                {posts.map((p) => (
                    <PostLoading  key={p.id}/>
                ))}
            </AnimatedList>
        );
    };

    if (error) {
        return (
            <div className='error-container'>
                <h2>Failed to load posts.</h2>
                <button
                    type="button"
                    onClick={() => dispatch(fetchPosts(selectedSubreddit))}
                >
                    Try again
                </button>
            </div>
        );
    };

    if (posts.length === 0) {
        return (
            <div className='error-container'>
                <h2>No results found for "{searchTerm}".</h2>
                <button
                    type="button"
                    onClick={() => dispatch(setSearchTerm(''))}
                >
                    Home
                </button>
            </div>
        );
    };

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