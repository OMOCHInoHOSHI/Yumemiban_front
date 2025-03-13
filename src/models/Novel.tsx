// 生成した小説のテキストを保存する
let novelText = '';

// 小説を作成する関数
const createNovel = (name: string, contents: string) => {
    novelText = '生成された小説のテキスト'+name+contents;
}

// 小説を取得する関数
const getNovel = () => {
    return novelText;
}

const Components = { getNovel, createNovel };
export default Components;