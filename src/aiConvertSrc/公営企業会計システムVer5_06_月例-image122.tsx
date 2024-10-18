import React from 'react';
import styled from 'styled-components';

type TaxCalculationFormProps = {
  onSubmit: (data: TaxCalculationFormData) => void;
};

type TaxCalculationFormData = {
  startDate: string;
  endDate: string;
  startPrice: number;
  endPrice: number;
  appreciationRate: number;
  transferExpenseRate: number;
  includeAcquisitionCost: boolean;
  includeTransferIncome: boolean;
  includeSpecialDeduction: boolean;
  includeTransferExpense: boolean;
};

const TaxCalculationForm: React.FC<TaxCalculationFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // フォームのデータを収集して、onSubmitコールバックに渡す
    const data: TaxCalculationFormData = {
      startDate: '2022-01-01',
      endDate: '2022-12-31',
      startPrice: 1000000,
      endPrice: 2000000,
      appreciationRate: 10,
      transferExpenseRate: 5,
      includeAcquisitionCost: false,
      includeTransferIncome: true,
      includeSpecialDeduction: false,
      includeTransferExpense: true,
    };
    onSubmit(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        期間指定
        <InputWrapper>
          <DateInput type="text" defaultValue="年 月 日" />
          <Separator>〜</Separator>
          <DateInput type="text" defaultValue="年 月 日" />
        </InputWrapper>
      </Label>

      <Label>
        所得
        <InputWrapper>
          <NumberInput type="text" defaultValue="0000000" />
          <Separator>〜</Separator>
          <NumberInput type="text" defaultValue="9999999" />
        </InputWrapper>
      </Label>
 
      <Label>
        予算料目
        <InputWrapper>
          <NumberInput type="text" defaultValue="00000000" />
          <Separator>〜</Separator>
          <NumberInput type="text" defaultValue="999999999" />
        </InputWrapper>
      </Label>

      <Label>
        税率
        <Select>
          <option>指定しない</option>
          <option>指定する</option>
        </Select>
        <NumberInput type="text" defaultValue="0" />%
        <Checkbox type="checkbox" />軽減税率
      </Label>

      <Label>
        <Checkbox type="checkbox" defaultChecked />譲渡所得控除調整入力で登録した企業も出力する
      </Label>
      <Label>
        <Checkbox type="checkbox" />総額のみ保有10分の伝票を出力する
      </Label>
      <Label>
        <Checkbox type="checkbox" />過特控除選択行事業者10分の伝票を出力する        
      </Label>
      <Label>
        <Checkbox type="checkbox" />過特控除選択行事業者以外10分の伝票を出力する
        <NumberInput type="text" defaultValue="0" />%
      </Label>

      <ButtonWrapper>
        <Button type="submit">CSV出力</Button>
        <Button type="button">クリア</Button>
        <Button type="button">終了</Button>
      </ButtonWrapper>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const DateInput = styled.input`
  width: 100px;
`;

const NumberInput = styled.input`
  width: 100px;
`;

const Separator = styled.span``;

const Select = styled.select`
  width: 100px;
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Usage example
const App: React.FC = () => {
  const handleSubmit = (data: TaxCalculationFormData) => {
    console.log('Form submitted:', data);
    // 提出されたデータを処理するロジックをここに追加
  };

  return (
    <div>
      <h1>消費税計算明細書</h1>
      <TaxCalculationForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;