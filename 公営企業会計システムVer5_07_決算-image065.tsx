import React from 'react';
import styled from 'styled-components';

type SpecialReceiptPersonFormProps = {
  persons: string[];
  reasons: string[];
  onPersonChange: (value: string) => void;
  onReasonChange: (value: string) => void;
  onAmountChange: (value: number) => void;
  amount: number;
};

const SpecialReceiptPersonForm: React.FC<SpecialReceiptPersonFormProps> = ({
  persons,
  reasons,
  onPersonChange,
  onReasonChange,
  onAmountChange,
  amount,
}) => {
  return (
    <Container>
      <FormGroup>
        <Label>特定収入項目</Label>
        <Select onChange={(e) => onPersonChange(e.target.value)}>
          {persons.map((person) => (
            <option key={person} value={person}>
              {person}
            </option>
          ))}
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>特定収入の使途の特定方法</Label>
        <Select onChange={(e) => onReasonChange(e.target.value)}>
          {reasons.map((reason) => (
            <option key={reason} value={reason}>
              {reason}
            </option>
          ))}
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>充当表記載額</Label>
        <Input
          type="number"
          value={amount}
          onChange={(e) => onAmountChange(Number(e.target.value))}
        />
        <Unit>円</Unit>
      </FormGroup>
    </Container>
  );
};

export default SpecialReceiptPersonForm;

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Label = styled.label`
  flex: 1;
  font-weight: bold;
`;

const Select = styled.select`
  flex: 2;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Input = styled.input`
  flex: 2;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Unit = styled.span`
  margin-left: 4px;
`;

// Sample usage
const SampleUsage: React.FC = () => {
  const persons = ['特定収入項目1', '特定収入項目2'];
  const reasons = ['使途の特定方法1', '使途の特定方法2'];

  const handlePersonChange = (value: string) => {
    console.log('Selected person:', value);
  };

  const handleReasonChange = (value: string) => {
    console.log('Selected reason:', value);
  };

  const handleAmountChange = (value: number) => {
    console.log('Amount changed:', value);
  };

  return (
    <SpecialReceiptPersonForm
      persons={persons}
      reasons={reasons}
      onPersonChange={handlePersonChange}
      onReasonChange={handleReasonChange}
      onAmountChange={handleAmountChange}
      amount={0}
    />
  );
};