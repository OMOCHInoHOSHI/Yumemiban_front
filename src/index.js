import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import PostCard from './models/PostCard';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; // routerで追加
import AppRoutes from './Routes'; // routerで追加
// const rootElement = document.getElementById('root');
// if (rootElement) {
//   const root = ReactDOM.createRoot(rootElement);
//   root.render(
//     <React.StrictMode>
//       <PostView_Screen />
//     </React.StrictMode>
//   );
// } else {
//   console.error('Root element not found');
// }
const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(React.createElement(React.StrictMode, null,
        React.createElement(BrowserRouter, null,
            React.createElement(AppRoutes, null))));
}
else {
    console.error('Root element not found');
}
// パフォーマンス測定用の関数を追加する場合は次のように設定
reportWebVitals();
