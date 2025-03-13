import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface PostDetailProps {
  posts: { id: number; title: string; content: string; novel?: string }[];
}

const PostDetail: React.FC<PostDetailProps> = ({ posts }) => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find((p) => p.id === Number(id));
  const [isNovelExpanded, setIsNovelExpanded] = useState(false);

  useEffect(() => {
    console.log('Post ID:', id);
    console.log('Post:', post);
    console.log('Posts:', posts); // 追加: postsプロパティのコンソール出力
  }, [id, post, posts]);

  if (!post) {
    return <div>投稿が見つかりませんでした。</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <hr />
      <div
        onClick={() => setIsNovelExpanded(!isNovelExpanded)}
        style={{
          position: isNovelExpanded ? 'fixed' : 'static',
          top: isNovelExpanded ? 0 : 'auto',
          left: 0,
          width: isNovelExpanded ? '100%' : 'auto',
          height: isNovelExpanded ? '100vh' : 'auto',
          backgroundColor: isNovelExpanded ? 'white' : 'transparent',
          zIndex: isNovelExpanded ? 10 : 'auto',
          overflow: isNovelExpanded ? 'auto' : 'visible',
        }}
      >
        <h3>小説</h3>
        <p>{post.novel}</p>
      </div>
    </div>
  );
};

export default PostDetail;