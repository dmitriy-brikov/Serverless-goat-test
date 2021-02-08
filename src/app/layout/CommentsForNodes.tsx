import React, { useEffect, useState } from 'react';
import { getCommentsForNodes, saveComment } from '../helpers';
import SpecificComment from './SpecificComment';

interface Props {
  node: any;
}

const CommentsForNodes = ({ node }: Props) => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [shouldBeRequestAgain, setShouldBeRequestAgain] = useState(false);

  useEffect(() => {
    if (comment === '' || shouldBeRequestAgain) {
      setComments(getCommentsForNodes(node.id));
      setShouldBeRequestAgain(false);
    }
  }, [comment, shouldBeRequestAgain]);

  const publishComment = () => {
    console.log(comment);
    saveComment(node.id, comment);
    setComment('');
  };

  return (
    <div className="comments-node-container">
      <div className="specific-node">
        <span>{node.logicalId}</span>
        <span>{node.resourceType}</span>
      </div>
      <div className="comment-section">
        <div className="comments-node">
          {comments?.map((comment: string, index: number) => (
            <SpecificComment setRequestAgain={setShouldBeRequestAgain} id={node.id} comment={comment} key={index} />
          ))}
        </div>
        <div className="new-comment-section">
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            type="text"
            placeholder="write your comment here..."
          />
          <button disabled={comment.length === 0} onClick={publishComment}>
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentsForNodes;
