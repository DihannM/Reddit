import { createSlice } from '@reduxjs/toolkit';
import data from '../data/data';
import { getSubreddits } from '../api/reddit_api';

const initialState = {
    subreddits: [],
}

const subRedditSlice = createSlice({
    name: 'subreddits',
    initialState,
    reducers: {
        setSubreddits(state, action) {
            state.subreddits = action.payload;
        }
    }
});

export const {
    setSubreddits,
  } = subRedditSlice.actions;

export default subRedditSlice.reducer;

export const fetchSubreddits = () => async (dispatch) => {
        const subreddits = await getSubreddits();
        dispatch(setSubreddits(subreddits));
};

export const selectSubreddits = (state) => state.subreddits.subreddits;