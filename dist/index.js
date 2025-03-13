import { jsx as _jsx } from "react/jsx-runtime";
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
var rootElement = document.getElementById('root');
if (rootElement) {
    var root = ReactDOM.createRoot(rootElement);
    root.render(_jsx(React.StrictMode, { children: _jsx(BrowserRouter, { children: _jsx(AppRoutes, {}) }) }));
}
else {
    console.error('Root element not found');
}
// パフォーマンス測定用の関数を追加する場合は次のように設定
reportWebVitals();
