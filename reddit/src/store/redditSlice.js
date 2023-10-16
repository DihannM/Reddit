import { createSelector, createSlice } from '@reduxjs/toolkit';
import allPosts from '../data/data';
import { getSubredditPosts } from '../api/reddit_api';


const initialState = {
    posts: [],
    searchTerm: '',
    selectedSubreddit: '/r/pics/',
}

const redditSlice = createSlice({
    name: 'reddit',
    initialState,
    reducers: {
        setPosts(state, action) {
            state.posts = action.payload;
        },
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        }
    }
});

export const {
    setPosts,
    setSearchTerm
} = redditSlice.actions;

export const selectPosts = (state) => state.reddit.posts;
export const selectSearchTerm = (state) => state.reddit.searchTerm;
export const selectSelectedSubreddit = (state) => state.reddit.selectedSubreddit;

export const selectFilteredPosts = createSelector(
    [selectPosts, selectSearchTerm],
    (posts, searchTerm) => {
        if (searchTerm !== '') {
            return posts.filter((post) =>
                post.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        return posts;
    }
)

export const fetchPosts = (subreddit) => async (dispatch) => {
    const posts = await getSubredditPosts(subreddit);
    dispatch(setPosts(posts));
};

export default redditSlice.reducer;

