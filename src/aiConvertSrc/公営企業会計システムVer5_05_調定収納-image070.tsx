import React from 'react';
import styled from '@emotion/styled';

interface ReceiptFormProps {
  receipts: string[];
  onSubmit: (values: ReceiptFormValues) => void;
}

interface ReceiptFormValues {
  node: string;
  details: string;
  saleAmount: number;
  taxRate: number;
  taxAmount: number;
  quantity: number;
}

const ReceiptForm: React.FC<ReceiptFormProps> = ({ receipts, onSubmit }) => {
  const [values, setValues] = React.useState<ReceiptFormValues>({
    node: receipts[0] || '',
    details: receipts[1] || '',
    saleAmount: 0,
    taxRate: 10,
    taxAmount: 0,
    quantity: 0,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: name === 'taxRate' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(values);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Label>節</Label>
        <Select name="node" value={values.node} onChange={handleChange}>
          {receipts.map((receipt, index) => (
            <option key={index} value={receipt}>
              {receipt}
            </option>
          ))}
        </Select>
      </Row>
      <Row>
        <Label>細節</Label>
        <Select name="details" value={values.details} onChange={handleChange}>
          {receipts.map((receipt, index) => (
            <option key={index} value={receipt}>
              {receipt}
            </option>
          ))}
        </Select>
      </Row>
      <Row>
        <Label>収納金額</Label>
        <Input
          type="number"
          name="saleAmount"
          value={values.saleAmount}
          onChange={handleChange}
        />
      </Row>
      <Row>
        <Label>消費税率</Label>
        <Input type="number" name="taxRate" value={values.taxRate} onChange={handleChange} />
        <span>%</span>
      </Row>
      <Row>
        <Label>内消費税額</Label>
        <Input
          type="number"
          name="taxAmount"
          value={values.taxAmount}
          onChange={handleChange}
        />
      </Row>
      <Row>
        <Label>数量</Label>
        <Input type="number" name="quantity" value={values.quantity} onChange={handleChange} />
      </Row>
      <ButtonGroup>
        <Button type="button">キャンセル</Button>
        <Button type="submit">OK</Button>
      </ButtonGroup>
    </Form>
  );
};

// Styles
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background: #f0f0f0;
  border-radius: 4px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  flex: 1;
  padding: 4px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Input = styled.input`
  flex: 1;
  padding: 4px;
  border-radius: 4px;
  border: 1px solid #ccc;

  &[type='number'] {
    width: 100px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;
`;

const Button = styled.button`
  padding: 6px 12px;
  border-radius: 4px;
  border: none;
  background: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

// Usage example
const receipts = ['00010411 総係・衛生結果', '001 総・消耗品費', '0010 総・消耗品費'];

const App: React.FC = () => {
  const handleSubmit = (values: ReceiptFormValues) => {
    console.log(values);
  };

  return <ReceiptForm receipts={receipts} onSubmit={handleSubmit} />;
};

export default App;