import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';


const App: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: '最初の夢',
      content: '戦ってる夢を見た...',
      novel: '主人公は、見知らぬ戦場で敵と対峙していた。',
    },
    {
      id: 2,
      title: 'Fail',
      content: '踊ってる夢を見た...',
      novel: '舞台の上で、主人公はスポットライトを浴びながら踊っていた。',
    },
    {
      id: 3,
      title: 'Green',
      content: 'ご飯をたくさん食べた...',
      novel: '食卓には、山盛りの料理が並んでいた。',
    },
    {
      id: 4,
      title: 'Venus',
      content: 'お母さんに電話した...',
      novel: '受話器の向こうから、優しい声が聞こえてきた。',
    },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostList posts={posts} />} />
        <Route path="/post/:id" element={<PostDetail posts={posts} />} />
      </Routes>
    </Router>
  );
};

export default App;