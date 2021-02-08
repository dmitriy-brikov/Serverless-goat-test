import React, { useState } from 'react';
import { saveReply } from '../helpers';

interface Props {
  comment: any;
  id: number;
  setRequestAgain: any;
}

const SpecificComment = ({ comment, id, setRequestAgain }: Props) => {
  const [isReplyVisible, setIsReplyVisible] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const [reply, setReply] = useState('');

  console.log(comment);

  const replyToComment = () => {
    console.log(reply);
    saveReply(id, comment.id, reply);
    setReply('');
    setRequestAgain(true);
    setIsReplying(false);
  };

  return (
    <div
      className="direct-comment"
      onMouseEnter={() => setIsReplyVisible(true)}
      onMouseLeave={() => setIsReplyVisible(false)}
    >
      <span>{comment.comment}</span>
      {isReplyVisible && (
        <span className="reply" onClick={() => setIsReplying(!isReplying)}>
          Reply
        </span>
      )}
      {comment.reply && (
        <div className="reply-container">
          {comment.reply.map((answer: any) => {
            return <span key={answer.id}>{answer.reply}</span>;
          })}
        </div>
      )}
      {isReplying && (
        <div className="reply-block">
          <input value={reply} onChange={(e) => setReply(e.target.value)} type="text" />
          <button disabled={reply.length === 0} onClick={replyToComment}>
            Reply
          </button>
        </div>
      )}
    </div>
  );
};

export default SpecificComment;
