import React from 'react';
import styled from 'styled-components';

// 入力フォームのプロパティの型定義
interface InputFormProps {
  fiscalYear: number;
  companyName: string;
  period: string;
  taxableAmount: number;
  amountOfTax: number;
  totalAmount: number;
}

// 入力フォームのスタイル定義
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Label = styled.label`
  font-weight: bold;
  margin-right: 10px;
  width: 120px;

  @media (max-width: 600px) {
    margin-bottom: 5px;
  }
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 100%;
  max-width: 300px;

  @media (max-width: 600px) {
    max-width: none;
  }
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 100%;
  max-width: 300px;

  @media (max-width: 600px) {
    max-width: none;
  }
`;

// 入力フォームのコンポーネント
const InputForm: React.FC<InputFormProps> = ({
  fiscalYear,
  companyName,
  period,
  taxableAmount,
  amountOfTax,
  totalAmount,
}) => {
  return (
    <FormContainer>
      <FormGroup>
        <Label>年度</Label>
        <Input type="number" value={fiscalYear} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>調定番号</Label>
        <Input type="text" value="15" readOnly />
      </FormGroup>
      <FormGroup>
        <Label>納入期限</Label>
        <Input type="text" value="平成26年05月30日" readOnly />
      </FormGroup>
      <FormGroup>
        <Label>納付先</Label>
        <Input type="text" value="県税" readOnly />
      </FormGroup>
      <FormGroup>
        <Label>期間</Label>
        <Input type="text" value={period} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>課税標準額</Label>
        <Input type="number" value={taxableAmount} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>税額</Label>
        <Input type="number" value={amountOfTax} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>合計税額</Label>
        <Input type="number" value={totalAmount} readOnly />
      </FormGroup>
    </FormContainer>
  );
};

// サンプルデータ
const sampleData: InputFormProps = {
  fiscalYear: 26,
  companyName: '株式会社ぎょうせい',
  period: '平成25年05月30日〜平成26年05月29日',
  taxableAmount: 140400,
  amountOfTax: 10400,
  totalAmount: 150800,
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>納入通知書</h1>
      <InputForm {...sampleData} />
    </div>
  );
};

export default App;