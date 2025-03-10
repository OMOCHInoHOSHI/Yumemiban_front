// ユーザー名のコンポーネント

// import React from 'react';
import React, { FC, ReactNode } from 'react';

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

// export default InputForm;
// 入力のコンポーネントE--------------------------------------------------------------------------


// 背景のコンポーネントS--------------------------------------------------------------------------
// プロパティの型を定義
interface RoundedBoxProps {
    width: string;          // ボックスの幅
    height: string;         // ボックスの高さ
    color: string;          // ボックスの色
    borderRadius: string;   // ボックスの角の丸み
    children?: ReactNode; // 子要素を受け取るためのプロパティを追加
}

// 角が丸い四角形のボックスを描画し、その中に任意の子要素（テキストや他のコンポーネント）を表示することができます
const RoundedBox: FC<RoundedBoxProps> = ({ width, height, color, borderRadius, children }) => {
    const style = {
    width,
    height,
    backgroundColor: color,
    borderRadius,
    };

    return <div style={style}>{children}</div>;
};
// 背景のコンポーネントE--------------------------------------------------------------------------

export default RoundedBox;InputForm;