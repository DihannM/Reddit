import React, { useEffect } from 'react';
import './Subreddits.css';
import Card from '../../components/Card/Card';
import { selectSubreddits } from '../../store/subRedditSlice';
import { fetchSubreddits } from '../../store/subRedditSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedSubreddit, selectSelectedSubreddit } from '../../store/redditSlice';

const Subreddits = () => {
    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);
    const selectedSubreddit = useSelector(selectSelectedSubreddit)

    useEffect(() => {
        dispatch(fetchSubreddits());
    }, [dispatch]);

    return (
        <Card className="subreddit-card">
            <h2>Subreddits</h2>
            <ul className='subreddits-list'>
                {subreddits.map((subreddit) => (
                    <li
                        key={subreddit.id}
                        className={`${
                            selectedSubreddit === subreddit.url && `selected-subreddit`
                        }`}
                    >
                        <button
                            type='button'
                            onClick={() => dispatch(setSelectedSubreddit(subreddit.url))}
                        >
                            <img
                                src={subreddit.icon_img}
                                alt={`${subreddit.display_name}`}
                                className='subreddit-icon'
                            />
                            {subreddit.display_name}
                        </button>
                    </li>
                ))} 
            </ul>
        </Card>
    );
};

export default Subreddits;