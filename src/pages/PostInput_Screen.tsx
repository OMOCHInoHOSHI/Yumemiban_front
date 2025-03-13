import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PostInput_Screen.css';

import Components from '../components/conponent';
import textpush from '../models/PushText';
import Novel from '../models/Novel';
import { IconButton } from '@mui/material'; 
import { SendIcon } from 'lucide-react';

const PostInput_Screen: React.FC = () => {

  // 初期値を空文字列に設定
  const [nickname, setNickname] = useState('');   // ニックネーム
  const [content, setContent] = useState('');     // 夢の内容
  const [novelText, setNovelText] = useState(''); // 生成された短編小説のテキスト

  const handleSubmit = () => {
    // ニックネームと内容とノベルテキストを textpush 関数に渡す
    textpush(nickname, content, novelText);
  };

  // 小説の生成、セット
  const sendcreateNovle = () => {
    console.log('createNovle');
    Novel.createNovel(nickname, content);
    const generatedText = Novel.getNovel();
    setNovelText(generatedText);
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

      <IconButton onClick={handleSubmit}><SendIcon /></IconButton>
    </div>
  );
};

export default PostInput_Screen;