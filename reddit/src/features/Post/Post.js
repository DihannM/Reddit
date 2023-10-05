import React from 'react';
import './Post.css';
import Card from '../Card/Card';

const Post = () => {
    return (
        <article>
            <Card>
                <div className="post-wrapper">
                    <div className="post-container">
                        <h3 className="post-title">Title</h3>
                        <div className="post-image-container">
                            <img src={""} alt="" className="post-image" />
                        </div>
                        <div className="post-details">
                            <span className="author-details">
                                <span className="author-username">Author</span>
                            </span>
                            <div className="post-votes-container">
                                <button
                                    type="button"
                                    className="up-vote"
                                    aria-label="Up vote"
                                >
                                </button>
                                    <p className="post-votes-value">
                                        Votes Value
                                    </p>
                                <button
                                    type="button"
                                    className="down-vote"
                                    aria-label="Down vote"
                                >
                                </button>
                            </div>
                            <span className="post-comments-container">
                                <button
                                    type="button"
                                    aria-label="Show comments"
                                >
                                </button>
                            </span>
                            <span>post created date</span>
                        </div>
                    </div>
                </div>
            </Card>
        </article>
    );
}

export default Post;