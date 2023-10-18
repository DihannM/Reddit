import React from 'react';
import './Comment.css';
import Avatar from '../Avatar/Avatar';
import ReactMarkdown from 'react-markdown';
import moment from 'moment';

const Comment = (props) => {

    const { comment } = props;
    const src = comment.body;


    return (
        <div>
            <div className="comment">
                <Avatar name={comment.author} className="comment-avatar"/>
                <div className="comment-details">
                    <div className="comment-author-details">
                        <p className="comment-author">{comment.author}</p>
                        <div className="comment-body">
                            <ReactMarkdown children={src}/>
                        </div>
                    </div>
                    <p className="comment-created-time">{moment.unix(comment.created_utc).fromNow()}</p>
                </div>
            </div>
        </div>
    );
};

export default Comment;