import React from 'react';
import './Post.css';
import './PostLoading.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { BiLike, BiDislike, BiCommentDetail } from 'react-icons/bi';

const PostLoading = () => {
  return (
            <article className="post">
                    <div className="post-container">
                        <span className="author-details">
                            <Skeleton width={100} height={40} containerClassName="flex-1"/>
                        </span>
                        <h4 className="post-title">
                            <Skeleton />
                        </h4>
                        <div className="post-image-container loading-image">
                            <Skeleton height={250}/>
                        </div>
                        <div className="post-details loading-post-details">
                            <div className="post-votes-container">
                                <button
                                    type="button"
                                    className="like-button"
                                    aria-label="Up vote"
                                >
                                    <BiLike className="like-icon"/>
                                </button>
                                <Skeleton className="post-votes-value-loading" />
                                <button
                                    type="button"
                                    className="dislike-button"
                                    aria-label="Down vote"
                                >
                                    <BiDislike className="dislike-icon"/>
                                </button>
                            </div>
                            <span className="post-comments-container">
                                <button
                                    type="button"
                                    aria-label="Show comments"
                                    className="comment-button"
                                >
                                    <BiCommentDetail className="comment-icon"/>
                                </button>
                            </span>
                        </div>
                    </div>
            </article>
        );
};

export default PostLoading;