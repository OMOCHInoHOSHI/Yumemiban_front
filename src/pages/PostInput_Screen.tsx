import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PostInput_Screen.css';

import Components from '../components/conponent';

const PostInput_Screen: React.FC = () => {
  return (
    <div>
      <h1>作成</h1>
      <Components.RoundedBox width="300px" height="200px" color="#f0f0f0" borderRadius="15px">
        <p>ニックネームを入力してください</p>
      <Components.InputForm input="" required={true} maxLength={20} />
        <p>夢の内容を書いてみてください...(=o=;)</p>
      <Components.InputForm input="" required={true} maxLength={50} />
      </Components.RoundedBox>
    </div>
  );
};

export default PostInput_Screen;