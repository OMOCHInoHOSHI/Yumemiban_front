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
    <div style={{width: '80%', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center' }}>{post.title}</h2> {/* 中央揃え */}
      <p style={{ textAlign: 'left' }}>{post.content}</p> {/* 左揃え */}
      <hr />
      <div
        onClick={() => setIsNovelExpanded(!isNovelExpanded)}
        style={{
          position: isNovelExpanded ? 'fixed' : 'static',
          top: isNovelExpanded ? 0 : 'auto',
          width: isNovelExpanded ? '80%' : 'auto',
          height: isNovelExpanded ? '100vh' : '0',
          backgroundColor: isNovelExpanded ? 'white' : 'transparent',
          zIndex: isNovelExpanded ? 10 : 'auto',
          overflow: isNovelExpanded ? 'auto' : 'visible',
          margin: '0 auto',
        }}
      >
        <h3 style={{ textAlign: 'center' }}>小説</h3> {/* 中央揃え */}
        <p style={{ textAlign: 'left' }}>{post.novel}</p> {/* 左揃え */}
      </div>
    </div>
  );
};

export default PostDetail;