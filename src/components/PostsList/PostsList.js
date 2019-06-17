import React from 'react';

import './PostsList.css';

const PostsList = ({ posts }) => (
  <ul>
    {
      posts.map(post => (
        <li key={post.data.id}>
          <div className="thumbnail" style={{ backgroundImage: `url(${post.data.thumbnail})` }} />
          <div className="title">
            <span>{post.data.title}</span>
          </div>
        </li>
      ))
    }
  </ul>
)


export default PostsList;
