import React from 'react';
import Nodes from '../../graph.json';
import CommentsForNodes from './CommentsForNodes';

interface Props {}

const CommentsBlock = (props: Props) => {
  return (
    <nav className="comments">
      {Nodes.nodes.map((node) => (
        <CommentsForNodes node={node} key={node.id} />
      ))}
    </nav>
  );
};

export default CommentsBlock;
