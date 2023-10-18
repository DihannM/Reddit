import { createSelector, createSlice } from '@reduxjs/toolkit';
import allPosts from '../data/data';
import { getPostComments, getSubredditPosts } from '../api/reddit_api';


const initialState = {
    posts: [],
    searchTerm: '',
    selectedSubreddit: '/r/pics/',
    isLoading: false,
    error: false,
}

const redditSlice = createSlice({
    name: 'reddit',
    initialState,
    reducers: {
        setPosts(state, action) {
            state.posts = action.payload;
        },
        startGetPosts(state) {
            state.isLoading = true;
            state.error = false;
        },
        getPostsFailed(state) {
            state.isLoading = false;
            state.error = true;
        },
        getPostsSuccess(state, action) {
            state.isLoading = false;
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
    startGetComments,
    startGetPosts,
    getPostsSuccess,
    getPostsFailed
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
    try {
        dispatch(startGetPosts());
        const posts = await getSubredditPosts(subreddit);
    
        const postsWithMetadata = posts.map((post) => ({
            ...post,
            showingComments: false,
            comments: [],
        }));
    
        dispatch(getPostsSuccess(postsWithMetadata));
    } catch (error) {
        dispatch(getPostsFailed());
    };

};

export const fetchComments = (index, permalink) => async (dispatch) => {
    dispatch(startGetComments(index));
    const comments = await getPostComments(permalink);
    dispatch(getComments({index, comments}));
};


export default redditSlice.reducer;

