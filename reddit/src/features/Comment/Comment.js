import React from 'react';
import './Comment.css';
import Avatar from '../Avatar/Avatar';

const Comment = (props) => {
  return (
    <div>
        <div className="comment">
            <Avatar className="comment-avatar"/>
            <div className="comment-details">
                <div className="comment-author-details">
                    <p className="comment-author">Author</p>
                    <div className="comment-body">
                        <p>Testing the comments</p>
                    </div>
                </div>
                <p className="comment-created-time">1 day ago</p>
            </div>
        </div>
    </div>
  );
};

export default Comment;