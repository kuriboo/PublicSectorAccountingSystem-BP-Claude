import React from 'react';
import styled from '@emotion/styled';

// 振替入力コンポーネントの型定義
type TransferInputProps = {
  date: string;
  accountCode: string;
  summary: string;
  amountBefore: number;
  amountAfter: number;
  taxRate: number;
  taxAmountBefore: number;
  taxAmountAfter: number;
  onInputChange: (field: string, value: string | number) => void;
};

// 振替入力コンポーネント
const TransferInput: React.FC<TransferInputProps> = ({
  date,
  accountCode,
  summary,
  amountBefore,
  amountAfter,
  taxRate,
  taxAmountBefore, 
  taxAmountAfter,
  onInputChange,
}) => {
  // 入力変更時のハンドラ
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    onInputChange(name, value);
  };

  return (
    <Container>
      <Title>振替入力</Title>
      <DateInput
        type="date"
        name="date"
        value={date}
        onChange={handleInputChange}
      />
      <Row>
        <Label>借方科目</Label>
        <Input
          type="text"
          name="accountCodeBefore"
          value={accountCode}
          onChange={handleInputChange}
        />
        <Label>貸方科目</Label>
        <Input
          type="text"
          name="accountCodeAfter"
          value={accountCode}
          onChange={handleInputChange}
        />
      </Row>
      <Label>摘要</Label>
      <Input
        type="text"
        name="summary"
        value={summary}
        onChange={handleInputChange}
      />
      <Row>
        <Column>
          <Label>税区分</Label>
          <Select name="taxType" onChange={handleInputChange}>
            <option value="taxable">課税</option>
            <option value="taxExempt">非課税</option>
          </Select>
        </Column>
        <Column>
          <Label>税率</Label>
          <Input
            type="number"
            name="taxRate"
            value={taxRate}
            onChange={handleInputChange}
          />
          <span>%</span>
        </Column>
      </Row>
      <Row>
        <Column>
          <Label>税込金額</Label>
          <Input
            type="number"
            name="amountIncludingTaxBefore"
            value={amountBefore}
            onChange={handleInputChange}
          />
        </Column>
        <Column>
          <Label>税抜金額</Label>
          <Input
            type="number"
            name="amountExcludingTaxBefore"
            value={amountBefore / (1 + taxRate / 100)}
            onChange={handleInputChange}
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <Label>税込金額</Label>
          <Input
            type="number"
            name="amountIncludingTaxAfter"
            value={amountAfter}
            onChange={handleInputChange}
          />
        </Column>
        <Column>
          <Label>税抜金額</Label>
          <Input
            type="number"
            name="amountExcludingTaxAfter"
            value={amountAfter / (1 + taxRate / 100)}
            onChange={handleInputChange}
          />
        </Column>
      </Row>
    </Container>
  );
};

// 振替入力コンポーネントのサンプルデータ
const sampleData = {
  date: '2023-03-27',
  accountCode: '500',
  summary: '通信費',
  amountBefore: 80000,
  amountAfter: 80000, 
  taxRate: 0,
  taxAmountBefore: 0,
  taxAmountAfter: 0,
};

// 振替入力コンポーネントの使用例
const TransferInputSample = () => {
  const [formData, setFormData] = React.useState(sampleData);

  const handleInputChange = (field: string, value: string | number) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return <TransferInput {...formData} onInputChange={handleInputChange} />;
};

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  font-size: 20px;
  margin: 0;
`;

const Row = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  flex: 1;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 4px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const DateInput = styled(Input)`
  width: auto;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export default TransferInputSample;