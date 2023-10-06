import React, { useState } from 'react';
import './Post.css';
import Card from '../../components/Card/Card';
import { BiLike, BiDislike, BiCommentDetail, BiSolidLike, BiSolidDislike } from 'react-icons/bi';


const Post = () => {
    const [voteValue, setVoteValue] = useState(0);

    const upVote = () => {
        if  (voteValue === 0) {
            setVoteValue(1);
        } else if (voteValue === -1) {
            setVoteValue(1);
        } else {
            setVoteValue(0);
        };
    }

    const downVote = () => {
        if  (voteValue === 0) {
            setVoteValue(-1);
        } else if (voteValue === 1) {
            setVoteValue(-1);
        } else {
            setVoteValue(0);
        }
    }

    const renderUpVote = () => {
        if (voteValue === 1) {
            return <BiSolidLike className="like-icon-active" />;
        } 
        return <BiLike className="like-icon"/>;
    }

    const renderDownVote = () => {
        if (voteValue === -1) {
            return <BiSolidDislike className="dislike-icon-active" />;
        } 
        return <BiDislike className="dislike-icon"/>
    }


    return (
        <article>
            <Card>
                <div className="post-wrapper">
                    <div className="post-container">
                        <span className="author-details">
                                    <span className="author-username">Author</span>
                                    <span className="created-date">~ post created date</span>
                        </span>
                        <h3 className="post-title">Title</h3>
                        <div className="post-image-container">
                            <img src="/assets/images/audi.jpg" alt="image" className="post-image" />
                        </div>
                        <div className="post-details">
                            <div className="post-votes-container">
                                <button
                                    type="button"
                                    className="up-vote"
                                    aria-label="Up vote"
                                    onClick={upVote}
                                >
                                    {renderUpVote()}
                                </button>
                                <p className="post-votes-value">
                                    {voteValue < 0 ? 0 : voteValue}
                                </p>
                                <button
                                    type="button"
                                    className="down-vote"
                                    aria-label="Down vote"
                                    onClick={downVote}
                                >
                                    {renderDownVote()}
                                </button>
                            </div>
                            <span className="post-comments-container">
                                <button
                                    type="button"
                                    aria-label="Show comments"
                                >
                                    <BiCommentDetail className="comment-icon" />
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </Card>
        </article>
    );
}

export default Post;