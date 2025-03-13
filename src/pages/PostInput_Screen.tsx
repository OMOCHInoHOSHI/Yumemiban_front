import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PostInput_Screen.css';

import Components from '../components/conponent';
import textpush from '../models/PushText';
import Novel from '../models/Novel';
import { IconButton } from '@mui/material'; 
import { SendIcon } from 'lucide-react';
import ja_text from '../resous_ja.json';

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
      <h2 style={{ marginLeft: '20px' }}>{ja_text.create}</h2>
      <Components.RoundedBox width="70%" height="calc(35vh)" color="#f0f0f0" borderRadius="15px" justifyContent="center" alignItems="center" margin="0 auto">
        <p>{ja_text.nickname_input_label}</p>
        <Components.InputForm
          input={nickname}  // useState の値を渡す
          required={true}
          maxLength={20}
          onChange={setNickname}
        />
        <p>{ja_text.dream_content_label}</p>
        <Components.InputForm
          input={content}  // useState の値を渡す
          required={true}
          maxLength={50}
          onChange={setContent}
        />
      </Components.RoundedBox>

      {/* 生成された短編小説のページS */}
      <Components.RoundedBox width="70%" height="calc(35vh)" color="#f0f0f0" borderRadius="15px" justifyContent="center" alignItems="center" margin="0 auto">
        <p>{ja_text.generated_novel_label}</p>


        <button onClick={sendcreateNovle}>{ja_text.generate_button_label}</button>

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