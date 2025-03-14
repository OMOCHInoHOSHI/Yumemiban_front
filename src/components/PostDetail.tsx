import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

// interface Post {
//   id: number;
//   title: string;
//   content: string;
//   novel?: string;
// }

interface Post {
  "content": "string",
  "createdAt": "string",
  "id": "string",
  "likes": 0,
  "nickname": "string",
  "novel": "string",
  "title": "string",
  "updatedAt": "string",
  "userId": "string"
}

interface PostDetailProps {
  posts: Post[];
}

const PostDetail: React.FC<PostDetailProps> = ({ posts }) => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find((p) => p.id === (id));
  const [isNovelExpanded, setIsNovelExpanded] = useState(false);

  useEffect(() => {
    console.log("postCard");
    console.log("Post:", post);
    console.log("Posts:", posts); // 追加: postsプロパティのコンソール出力
  }, [id, post, posts]);

  if (!post) {
    return <div>投稿が見つかりませんでした。</div>;
  }

  return (
    <div style={{width: '80%', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center' }}>{post.nickname}さんは{post.title}</h2> {/* 中央揃え */}
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
        <h2 style={{ textAlign: 'center' }}>短編小説</h2> {/* 中央揃え */}
        <p style={{ textAlign: 'left' }}>{post.novel}</p> {/* 左揃え */}
      </div>
    </div>
  );
};

export default PostDetail;

