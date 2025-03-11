import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PostInput_Screen.css';

import Components from '../components/conponent';

const PostInput_Screen: React.FC = () => {
  return (
    <div>
      <h1>作成aa</h1>
      <Components.RoundedBox width="300px" height="200px" color="#f0f0f0" borderRadius="15px">
        <p>これは角が丸いボックスの中のテキストです。</p>
      </Components.RoundedBox>
      <Components.InputForm input="初期値" required={true} maxLength={50} />
    </div>
  );
};

export default PostInput_Screen;