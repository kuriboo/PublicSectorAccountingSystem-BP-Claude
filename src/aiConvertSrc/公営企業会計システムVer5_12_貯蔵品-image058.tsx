import React from 'react';
import styled from '@emotion/styled';

// 品番別受払簿作成コンポーネントのプロパティ型定義
type ReceiptFormProps = {
  onSubmit: (data: ReceiptFormData) => void;
};

// フォームデータの型定義
type ReceiptFormData = {
  itemCode: string;
  preset: boolean;
  startDate: string;
  endDate: string;
  protectionTarget: string;
  protectionNo: string;
  includeMiddle: boolean;
};

// スタイル定義
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

// 品番別受払簿作成コンポーネント
const ReceiptForm: React.FC<ReceiptFormProps> = ({ onSubmit }) => {
  // フォーム送信時のハンドラ
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: ReceiptFormData = {
      itemCode: e.currentTarget.itemCode.value,
      preset: e.currentTarget.preset.checked,
      startDate: e.currentTarget.startDate.value,
      endDate: e.currentTarget.endDate.value,
      protectionTarget: e.currentTarget.protectionTarget.value,
      protectionNo: e.currentTarget.protectionNo.value,
      includeMiddle: e.currentTarget.includeMiddle.checked,
    };
    onSubmit(data);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>品番別受払簿範囲入力</Label>
          <Input type="text" name="itemCode" placeholder="入力" required />
          <Input type="checkbox" name="preset" />
          <Label>預り</Label>
          <Input type="date" name="startDate" placeholder="平成29年06月" required />
          <span>〜</span>
          <Input type="date" name="endDate" placeholder="平成29年06月" required />
        </FormGroup>
        <FormGroup>
          <Label>保管場所</Label>
          <Input type="text" name="protectionTarget" />
          <span>〜</span>
          <Input type="text" name="protectionNo" />
        </FormGroup>
        <FormGroup>
          <Label>中間O印字区分</Label>
          <Select name="includeMiddle">
            <option value="false">なし</option>
            <option value="true">あり</option>
          </Select>
        </FormGroup>
        <Button type="submit">終了</Button>
        <Button type="button">クリア</Button>
        <Button type="button">終了</Button>
      </form>
    </FormContainer>
  );
};

// 使用例
const App: React.FC = () => {
  const handleSubmit = (data: ReceiptFormData) => {
    console.log(data);
  };

  return (
    <div>
      <h1>品番別受払簿作成</h1>
      <ReceiptForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;