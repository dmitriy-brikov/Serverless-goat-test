import React from 'react';
import '../styles/app.scss';
import CommentsBlock from './layout/CommentsBlock';
import Schema from './layout/Schema';

const App = () => {
  return (
    <div className="container">
      <CommentsBlock />
      <Schema />
    </div>
  );
};

export default App;
