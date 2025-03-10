// ユーザー名のコンポーネント

// import React from 'react';
import React, { FC } from 'react';

// let name = "name";

// 入力のコンポーネントS--------------------------------------------------------------------------
// インターフェース　コンポーネントが受け取るプロパティの型を指定
interface InputProps {
    name: string;
    required: boolean;
  }

// コンポーネントの定義 Functional Component
// nameは入力フィールドの初期値、requiredはその入力フィールドが必須であるかどうかを示す真偽値
const InputForm: FC<InputProps> = (props) => {
    const { name, required } = props;
    return (
        <div>
            <label>ニックネーム</label>
            <input type="text" value={name} required={required} />
        </div>
    );
}

export default InputForm;
// 入力のコンポーネントE--------------------------------------------------------------------------

