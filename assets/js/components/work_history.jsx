import React from 'react';
import DonePost from './done_post';

export default function WorkHistory(params) {
  let posts = _.map(params.posts, (pp) => <DonePost key={pp.id} post={pp} />);
  return <div>
    { posts }
  </div>;
}
