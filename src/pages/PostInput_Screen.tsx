import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PostInput_Screen.css';

import Components from '../components/conponent';
import textpush from '../models/PushText';
import Novel from '../models/Novel';

const PostInput_Screen: React.FC = () => {

  // 初期値を空文字列に設定
  const [nickname, setNickname] = useState('');   // ニックネーム
  const [content, setContent] = useState('');     // 夢の内容
  const [novelText, setNovelText] = useState(''); // 生成された短編小説のテキスト

  const handleSubmit = () => {
    // ニックネームと文章を textpush 関数に渡す
    textpush(nickname, content, novelText);
  };

  const sendcreateNovle = () => {
    console.log('createNovle');
    const generatedText = getNoveltext();
    setNovelText(generatedText);
  }

  const getNoveltext = () => {
    console.log('getNoveltext');
    return 'noveltext';
  }

  return (
    <div>
      <h2>作成</h2>
      <Components.RoundedBox width="300px" height="200px" color="#f0f0f0" borderRadius="15px">
        <p>ニックネームを入力してください</p>
        <Components.InputForm
          input={nickname}  // useState の値を渡す
          required={true}
          maxLength={20}
          onChange={setNickname}
        />
        <p>夢の内容を書いてみてください...(=o=;)</p>
        <Components.InputForm
          input={content}  // useState の値を渡す
          required={true}
          maxLength={50}
          onChange={setContent}
        />
      </Components.RoundedBox>

      {/* 生成された短編小説のページS */}
      <Components.RoundedBox width="300px" height="200px" color="#f0f0f0" borderRadius="15px">
        <p>生成された短編小説</p>
        <button onClick={sendcreateNovle}>生成</button>
        <div className="novel-text-field">
          <Components.NovelTextFild novelText={novelText} />
        </div>
      </Components.RoundedBox>
      {/* 生成された短編小説のページE */}

      <button onClick={handleSubmit}>送信</button>
    </div>
  );
};

export default PostInput_Screen;