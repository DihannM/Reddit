import { createSelector, createSlice } from '@reduxjs/toolkit';
import allPosts from '../data/data';


const initialState = {
    posts: allPosts,
    searchTerm: ''
}

const redditSlice = createSlice({
    name: 'reddit',
    initialState,
    reducers: {
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        }
    }
});

export const {
    setSearchTerm
} = redditSlice.actions;

export const selectPosts = (state) => state.reddit.posts;
export const selectSearchTerm = (state) => state.reddit.searchTerm;

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

export default redditSlice.reducer;

