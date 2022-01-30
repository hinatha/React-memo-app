import { ChangeEvent, useState, FC, useCallback } from "react";
import styled from "styled-components";

export const App: FC = () => {
  // テキストボックスState
  const [text, setText] = useState<string>("");

  const [memos, setMemos] = useState<string[]>([]);

  // テキストボックス入力時に入力内容をStateに設定
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  // [追加]ボタン押下時
  const onClickAdd = () => {

    const newMemos = [...memos];

    newMemos.push(text);

    setMemos(newMemos);

    // テキストボックスを空に
    setText("");
  };

  // [削除]ボタン押下時(何番目が押されたかを引数で受け取る)
  const onClickDelete = (index: number) => {
      const newMemos = [...memos];
      newMemos.splice(index, 1);
      setMemos(newMemos);
  };


  return (
    <div>
      <h1>Memo app</h1>
      <input type="text" value={text} onChange={onChangeText} />
      <SButton onClick={onClickAdd}>Add</SButton>
      <SContainer>
        <p>Display</p>
        <ul>
          {memos.map((memo, index) => (
            <li key={memo}>
              <SMemoWrapper>
                <p>{memo}</p>
                <SButton onClick={() => onClickDelete(index)}>
                  Delete
                </SButton>
              </SMemoWrapper>
            </li>
          ))}
        </ul>
      </SContainer>
    </div>
  );
};

const SButton = styled.button`
  margin-left: 16px;
`;
const SContainer = styled.div`
  border: solid 1px #ccc;
  padding: 16px;
  margin: 8px;
`;
const SMemoWrapper = styled.div`
  display: flex;
  align-items: center;
`

