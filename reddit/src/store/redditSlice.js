import { createSelector, createSlice } from '@reduxjs/toolkit';
import allPosts from '../data/data';
import { getPostComments, getSubredditPosts, getUsers } from '../api/reddit_api';


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
        },
        setSelectedSubreddit(state, action) {
            state.selectedSubreddit = action.payload;
            state.searchTerm = '';
        },
        toggleShowingComments(state, action) {
            state.posts[action.payload].showingComments = !state.posts[action.payload]
              .showingComments;
        },
        startGetComments(state, action) {
            state.posts[action.payload].showingComments = !state.posts[action.payload]
            .showingComments;
            if (!state.posts[action.payload].showingComments) {
                return;
            }
        },
        getComments(state, action) {
            state.posts[action.payload.index].comments = action.payload.comments;
        },
    }
});

export const {
    setPosts,
    setSearchTerm,
    setSelectedSubreddit,
    getComments,
    toggleShowingComments,
    startGetComments
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

    const postsWithMetadata = posts.map((post) => ({
        ...post,
        showingComments: false,
        comments: [],
    }));

    dispatch(setPosts(postsWithMetadata));
};

export const fetchComments = (index, permalink) => async (dispatch) => {
    dispatch(startGetComments(index));
    const comments = await getPostComments(permalink);
    dispatch(getComments({index, comments}));
};


export default redditSlice.reducer;

