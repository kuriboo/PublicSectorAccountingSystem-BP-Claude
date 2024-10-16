import React from 'react';
import styled from 'styled-components';

type FundsTransferFormProps = {
  defaultTransferNumber?: number;
  defaultMemo?: string;
  bankOptions: string[];
  defaultBank?: string;
  goldPointCheckboxLabel?: string;
  isGoldPointDefaultChecked?: boolean;
  onSubmit: (data: FundsTransferFormData) => void;
  onCancel: () => void;
};

type FundsTransferFormData = {
  transferNumber: number;
  memo: string;
  bank: string;
  isGoldPoint: boolean;
};

const FundsTransferForm: React.FC<FundsTransferFormProps> = ({
  defaultTransferNumber = 0,
  defaultMemo = '',
  bankOptions,
  defaultBank = bankOptions[0],
  goldPointCheckboxLabel = '帳簿出力無し',
  isGoldPointDefaultChecked = false,
  onSubmit,
  onCancel,
}) => {
  const [transferNumber, setTransferNumber] = React.useState(defaultTransferNumber);
  const [memo, setMemo] = React.useState(defaultMemo);
  const [bank, setBank] = React.useState(defaultBank);
  const [isGoldPoint, setIsGoldPoint] = React.useState(isGoldPointDefaultChecked);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ transferNumber, memo, bank, isGoldPoint });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow>
        <Label>集計番号</Label>
        <Input type="number" value={transferNumber} onChange={e => setTransferNumber(Number(e.target.value))} />
      </FormRow>
      <FormRow>
        <Label>項目名称1</Label>
        <Input type="text" value={memo} onChange={e => setMemo(e.target.value)} />
      </FormRow>
      <FormRow>
        <Label>金額CIF区分</Label>
        <Select value={bank} onChange={e => setBank(e.target.value)}>
          {bankOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </Select>
      </FormRow>
      <FormRow>
        <CheckboxLabel>
          <Checkbox type="checkbox" checked={isGoldPoint} onChange={e => setIsGoldPoint(e.target.checked)} />
          {goldPointCheckboxLabel}
        </CheckboxLabel>
        <div />
      </FormRow>
      <ButtonRow>
        <Button type="submit">OK</Button>
        <Button type="button" onClick={onCancel}>クリア</Button>
        <Button type="button">キャンセル</Button>
      </ButtonRow>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Label = styled.label`
  flex: 1;
`;

const Input = styled.input`
  flex: 2;
  padding: 5px;
`;

const Select = styled.select`
  flex: 2;
  padding: 5px;
`;

const CheckboxLabel = styled.label`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Checkbox = styled.input`
  margin: 0;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 5px 10px;
`;

// Usage example
const MyComponent = () => {
  const handleSubmit = (data: FundsTransferFormData) => {
    console.log(data);
    // Handle form submission
  };

  const handleCancel = () => {
    // Handle cancel button click
  };

  return (
    <FundsTransferForm
      defaultTransferNumber={900}
      defaultMemo="資金期末残高"
      bankOptions={['普通期末残高', '当座期末残高']}
      defaultBank="普通期末残高"
      goldPointCheckboxLabel="帳簿出力無し"
      isGoldPointDefaultChecked={false}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
    />
  );
};

export default MyComponent;