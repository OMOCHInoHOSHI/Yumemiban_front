// useStateを使って、入力フォームの値を管理する
// useState..関数コンポーネントで状態（state）を管理するために使用
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PostInput_Screen.css';

import Components from '../components/conponent';
import textpush from '../models/PushText';

const PostInput_Screen: React.FC = () => {

  // 初期値を空文字列に設定
  const [nickname, setNickname] = useState('');   // ニックネーム
  const [content, setContent] = useState('');     // 夢の内容

  // // ニックネームと夢の内容を送信する関数
  // const handleInputChange = (name: string, value: string) => {
  //   // 入力された値を変数に格納
  //   if (name === 'nickname') {
  //     setNickname(value);
  //   } else if (name === 'content') {
  //     setContent(value);
  //   }
  // };

  const handleSubmit = () => {
    console.log("たなか");
    // ニックネームと文章を textpush 関数に渡す
    textpush(nickname, content);
  };


  return (
    <div>
      <h1>作成</h1>
      <Components.RoundedBox width="300px" height="200px" color="#f0f0f0" borderRadius="15px">

        <p>ニックネームを入力してください</p>
      <Components.InputForm
        input={nickname}  // ✅ useState の値を渡す
        required={true}
        maxLength={20}
        onChange={setNickname}
      />

        <p>夢の内容を書いてみてください...(=o=;)</p>
      <Components.InputForm
        input={content}  // ✅ useState の値を渡す
        required={true}
        maxLength={50}
        onChange={setContent}
        />

      </Components.RoundedBox>

      <button onClick={handleSubmit}>送信</button>
    </div>
  );
};

export default PostInput_Screen;