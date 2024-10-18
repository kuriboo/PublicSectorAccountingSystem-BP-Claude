import React from 'react';
import styled from 'styled-components';

// 型定義
interface FormProps {
  onSubmit: (params: { adjustmentCategory: string; adjustmentNumber: string; startDate: string; endDate: string; outputFormat: string; }) => void;
}

// スタイリング
const FormContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  max-width: 500px;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const FormTitle = styled.h2`
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Select = styled.select`
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// コンポーネント
const AdjustmentForm: React.FC<FormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // フォームの値を取得
    const adjustmentCategory = (e.currentTarget.elements.namedItem('adjustmentCategory') as HTMLSelectElement).value;
    const adjustmentNumber = (e.currentTarget.elements.namedItem('adjustmentNumber') as HTMLInputElement).value;
    const startDate = (e.currentTarget.elements.namedItem('startDate') as HTMLInputElement).value;
    const endDate = (e.currentTarget.elements.namedItem('endDate') as HTMLInputElement).value;
    const outputFormat = (e.currentTarget.elements.namedItem('outputFormat') as HTMLSelectElement).value;

    // 値を親コンポーネントに渡す
    onSubmit({ adjustmentCategory, adjustmentNumber, startDate, endDate, outputFormat });
  };

  return (
    <FormContainer>
      <FormTitle>調定簿作成</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>範囲指定</Label>
          <Select name="adjustmentCategory" defaultValue="年度">
            <option value="年度">年度</option>
            {/* 他のオプションを追加 */}
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>調定年度</Label>
          <Input type="text" name="adjustmentNumber" defaultValue="999999" />
        </FormGroup>
        <FormGroup>
          <Label>調定日</Label>
          <Input type="text" name="startDate" defaultValue="平成30年02月27日" />
          <span> 〜 </span>
          <Input type="text" name="endDate" defaultValue="平成30年02月27日" />
        </FormGroup>
        <FormGroup>
          <Label>出力調定簿</Label>
          <Select name="outputFormat" defaultValue="加入者組合調定簿">
            <option value="加入者組合調定簿">加入者組合調定簿</option>
            <option value="工事負担金調定簿">工事負担金調定簿</option>
          </Select>
        </FormGroup>
        <Button type="submit">終了</Button>
      </form>
    </FormContainer>
  );
};

export default AdjustmentForm;

// 使用例
const SampleUsage = () => {
  const handleFormSubmit = (params: { adjustmentCategory: string; adjustmentNumber: string; startDate: string; endDate: string; outputFormat: string; }) => {
    // フォーム送信時の処理
    console.log(params);
  };

  return (
    <div>
      <h1>調定簿作成フォームサンプル</h1>
      <AdjustmentForm onSubmit={handleFormSubmit} />
    </div>
  );
};