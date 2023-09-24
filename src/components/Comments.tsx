import React from 'react';
import { useState, useEffect } from "react";
import CommentForm from "../components/CommentForm";
import Comment from "../components/Comment";
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  updateComment as updateCommentApi,
  deleteComment as deleteCommentApi,
} from "../Api";

import { BackendComment } from '../types'

type Props = {
    commentsUrl: any,
    currentUserId:any,
  };

const Comments = ({ commentsUrl, currentUserId }:Props) => {

  const [backendComments, setBackendComments] = useState<any[]>([]);
  const [activeComment, setActiveComment] = useState(null);
  const rootComments = backendComments.filter(

    (backendComment) => backendComment.parentId === null
  );

  const getReplies = (commentId:any) =>
    backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
      
  const addComment = (text:any, parentId:any) => {
    createCommentApi(text, parentId).then((comment) => {
      setBackendComments([comment, ...backendComments]); 
      setActiveComment(null);
    });
  };

  const updateComment = (text:any, commentId:any) => {
    updateCommentApi(text).then(() => {
      const updatedBackendComments = backendComments.map((backendComment) => {
        if (backendComment.id === commentId) {
          return { ...backendComment, body: text };
        }
        return backendComment;
      });
      setBackendComments(updatedBackendComments);
      setActiveComment(null);
    });
  };
  const deleteComment = (commentId:any) => {
    if (window.confirm("Are you sure you want to remove comment?")) {
      deleteCommentApi().then(() => {
        const updatedBackendComments = backendComments.filter(
          (backendComment) => backendComment.id !== commentId
        );
        setBackendComments(updatedBackendComments);
      });
    }
  };

  useEffect(() => {
    getCommentsApi().then((data) => {  
      setBackendComments(data);
    });
  }, []);

  return (
    <div className="comments">
      <h3 className="comments-title">Propose Your Events and submit them to the Blockchain</h3>
      <div className="comment-form-title">Write a detailed proposal for your event</div>
      <CommentForm 
              submitLabel="Write"
              handleSubmit={addComment}
              handleCancel={addComment} 
              hasCancelButton={false} 
              initialText={''}        />
      <div className="comments-container">
        {rootComments.map((rootComment) => (
          <Comment
                key={rootComment.id}
                comment={rootComment}
                replies={getReplies(rootComment.id)}
                activeComment={activeComment}
                setActiveComment={setActiveComment}
                addComment={addComment}
                deleteComment={deleteComment}
                updateComment={updateComment}
                currentUserId={currentUserId} parentId={undefined}          
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
