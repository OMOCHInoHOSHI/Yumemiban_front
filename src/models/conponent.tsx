// ユーザー名のコンポーネント

// import React from 'react';
import React, { FC } from 'react';

// let name = "name";

// 入力のコンポーネントS--------------------------------------------------------------------------
// インターフェース　コンポーネントが受け取るプロパティの型を指定
interface InputProps {
    input: string;      // 入力フィールドの初期値
    required: boolean;  // 入力フィールドが必須かどうか
    maxLength?: number; // 入力フィールドの最大文字数(オプション)
  }

// コンポーネントの定義 Functional Component
// nameは入力フィールドの初期値、requiredはその入力フィールドが必須であるかどうかを示す真偽値
const InputForm: FC<InputProps> = (props) => {
    const { input, required, maxLength } = props;
    return (
        <div>
            <label>入力</label>
            <input type="text" value={input} required={required} maxLength={maxLength} />
        </div>
    );
}

export default InputForm;
// 入力のコンポーネントE--------------------------------------------------------------------------

