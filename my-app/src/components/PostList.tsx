import React from 'react';
import PostItem from './PostItem';

interface PostListProps {
  posts: { id: number;title: string; content: string }[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div>
      {posts.map((post, index) => (
        <PostItem key={post.id} id={post.id} title={post.title} content={post.content} />
      ))}
    </div>
  );
};

export default PostList;