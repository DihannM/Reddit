import React, { useState } from 'react';
import './Post.css';
import Card from '../../components/Card/Card';
import { BiLike, BiDislike, BiCommentDetail, BiSolidLike, BiSolidDislike } from 'react-icons/bi';
import Avatar from '../Avatar/Avatar';
import Comment from '../Comment/Comment';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'


const Post = (props) => {
    const [voteValue, setVoteValue] = useState(0);

    const { post, onToggleComments } = props;

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

    const getVoteType = () => {
        if (voteValue === 1) {
            return 'up-vote';
        } else if (voteValue === -1) {
            return 'down-vote';
        }
        return '';
    }

    const renderComments = () => {

        if(post.errorComments) {
            return (
                <div>
                    <h3>Failed to load comments.</h3>
                </div>
            );
        }

        if(post.loadingComments) {
            return (
                <div>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div>
            );
        }

        if(post.showingComments) {
            return (
                <div>
                    {post.comments.map((comment) => (
                        <Comment comment={comment} key={comment.id} />
                    ))}
                </div>
            );
        }

        return null;
    }


    return (
        <article key={post.id}>
            <Card>
                <div className="post-wrapper">
                    <div className="post-container">
                        <span className="author-details">
                            <Avatar />
                            <div className="test">
                                <span className="author-username">{post.author}</span>
                                <span className="created-date">5 days ago</span>
                            </div>
                        </span>
                        <h4 className="post-title">{post.title}</h4>
                        <div className="post-image-container">
                            <img src={post.url} alt="image" className="post-image" />
                        </div>
                        <div className="post-details">
                            <div className="post-votes-container">
                                <button
                                    type="button"
                                    className={`like-button ${voteValue === 1}`}
                                    aria-label="Up vote"
                                    onClick={upVote}
                                >
                                    {renderUpVote()}
                                </button>
                                <p className={`post-votes-value ${getVoteType()}`}>
                                    {voteValue < 0 ? 0 : voteValue}
                                </p>
                                <button
                                    type="button"
                                    className={`dislike-button ${voteValue === -1}`}
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
                                    onClick={() => onToggleComments(post.permalink)}
                                    className={`comment-button ${post.showingComments && `showing-comments`}`}
                                >
                                    <BiCommentDetail className="comment-icon" />
                                </button>
                            </span>
                        </div>
                        <div className='comment-container'>
                            {renderComments()}
                        </div>
                    </div>
                </div>
            </Card>
        </article>
    );
}

export default Post;