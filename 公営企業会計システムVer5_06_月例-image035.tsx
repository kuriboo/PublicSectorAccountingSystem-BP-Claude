import React from 'react';
import styled from '@emotion/styled';

interface FundTransferFormProps {
  transferDate: string;
  transferAmount: number;
  monthlyTransferAmount: number;
  onSubmit: () => void;
  onCancel: () => void;
  onClear: () => void;
}

const FundTransferForm: React.FC<FundTransferFormProps> = ({
  transferDate,
  transferAmount,
  monthlyTransferAmount,
  onSubmit,
  onCancel,
  onClear,
}) => {
  return (
    <Container>
      <Title>資金予算予定入力明細登録</Title>
      <FormField>
        <Label>項目名称</Label>
        <Value>{transferDate}</Value>
      </FormField>
      <FormField>
        <Label>翌月金額</Label>
        <Value>{transferAmount.toLocaleString()}</Value>
      </FormField>
      <FormField>
        <Label>翌々月金額</Label>
        <Value>{monthlyTransferAmount.toLocaleString()}</Value>
      </FormField>
      <ButtonContainer>
        <Button onClick={onSubmit}>OK</Button>
        <Button onClick={onClear}>クリア</Button>
        <Button onClick={onCancel}>キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  width: 300px;
`;

const Title = styled.h2`
  margin: 0 0 20px;
`;

const FormField = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.div`
  font-weight: bold;
`;

const Value = styled.div`
  border: 1px solid #ccc;
  padding: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 5px 10px;
  font-size: 14px;
`;

// Usage example
const FundTransferFormExample: React.FC = () => {
  const handleSubmit = () => {
    // Handle form submission
  };

  const handleCancel = () => {
    // Handle form cancellation
  };

  const handleClear = () => {
    // Handle form clear
  };

  return (
    <FundTransferForm
      transferDate="項目名"
      transferAmount={1000000}
      monthlyTransferAmount={500000}
      onSubmit={handleSubmit}
      onCancel={handleCancel}      
      onClear={handleClear}
    />
  );
};

export default FundTransferForm;