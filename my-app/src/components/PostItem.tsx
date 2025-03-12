import React from 'react';
import { Link } from 'react-router-dom';

interface PostItemProps {
    id: number;
  title: string;
  content: string;
}

const PostItem: React.FC<PostItemProps> = ({ id, title, content }) => {
  return (
    <Link to={`/post/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{ backgroundColor: 'lightpink', padding: '10px', margin: '10px' }}>
        <h3>{title}</h3>
        <p>{content}</p>
        <span role="img" aria-label="like">❤️</span>
      </div>
    </Link>
  );
};

export default PostItem;