import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PostView_Screen from './pages/PostView_Screen';
// import PostCard from './models/PostCard';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <PostView_Screen />
    </React.StrictMode>
  );
} else {
  console.error('Root element not found');
}

// パフォーマンス測定用の関数を追加する場合は次のように設定
reportWebVitals();