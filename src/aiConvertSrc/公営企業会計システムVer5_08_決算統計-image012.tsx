import React from 'react';
import styled from '@emotion/styled';

type AutoTransferFormProps = {
  amount: number;
  onSubmit: (data: { purpose: string; memo: string }) => void;
};

const AutoTransferForm: React.FC<AutoTransferFormProps> = ({ amount, onSubmit }) => {
  const [purpose, setPurpose] = React.useState('');
  const [memo, setMemo] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ purpose, memo });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Amount>{amount.toLocaleString()}円必要</Amount>
      <PurposeSelect value={purpose} onChange={e => setPurpose(e.target.value)}>
        <option value="">用途</option>
        <option value="仕訳科目">仕訳科目</option>
        <option value="予算科目">予算科目</option>
      </PurposeSelect>
      <Memo
        value={memo}
        onChange={e => setMemo(e.target.value)}
        placeholder="指定した科目金額に対して1000円丸め処理を行います。"
      />
      <SubmitButton type="submit">OK</SubmitButton>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const Amount = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const PurposeSelect = styled.select`
  padding: 0.5rem;
  font-size: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 300px;
`;

const Memo = styled.textarea`
  padding: 0.5rem;
  font-size: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 300px;
`;

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
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
const ExampleUsage: React.FC = () => {
  const handleSubmit = (data: { purpose: string; memo: string }) => {
    console.log('Submitted data:', data);
  };

  return <AutoTransferForm amount={1000} onSubmit={handleSubmit} />;
};

export default AutoTransferForm;