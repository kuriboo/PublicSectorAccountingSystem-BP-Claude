import React from 'react';
import styled from '@emotion/styled';

interface TaxFormProps {
  taxRate?: number;
  amount?: number;
  onAmountChange?: (value: number) => void;
  onTaxRateChange?: (value: number) => void;
}

const TaxForm: React.FC<TaxFormProps> = ({ 
  taxRate = 10,
  amount = 0,
  onAmountChange,
  onTaxRateChange,
}) => {
  // 消費税額を計算
  const taxAmount = Math.floor(amount * (taxRate / 100));

  // 入力値のバリデーション
  const validateNumber = (value: string) => {
    return value.replace(/[^0-9]/g, '');
  };

  return (
    <Container>
      <Row>
        <Label>税区分</Label>
        <Value>課税</Value>
      </Row>
      <Row>
        <Label>消費税率</Label>
        <Input
          type="number"
          value={taxRate}
          min={0}
          max={100}
          onChange={(e) => onTaxRateChange?.(Number(e.target.value))}
        />
        <Unit>%</Unit>
      </Row>
      <Row>
        <Label>調定金額</Label>
        <Input
          type="text"
          value={amount.toLocaleString()}
          onChange={(e) => onAmountChange?.(Number(validateNumber(e.target.value)))}
        />
      </Row>
      <Row>
        <Label>内消費税額</Label>
        <Value>{taxAmount.toLocaleString()}</Value>
      </Row>
      <ButtonGroup>
        <Button type="button">OK</Button>
        <Button type="button">クリア</Button>
        <Button type="button">キャンセル</Button>
      </ButtonGroup>
    </Container>
  );
};

// サンプルデータ
const sampleData = {
  taxRate: 8,
  amount: 10000,
};

// 使用例
const TaxFormExample: React.FC = () => {
  const [formData, setFormData] = React.useState(sampleData);

  const handleAmountChange = (amount: number) => {
    setFormData({ ...formData, amount });
  };

  const handleTaxRateChange = (taxRate: number) => {    
    setFormData({ ...formData, taxRate });
  };

  return (
    <TaxForm
      taxRate={formData.taxRate}
      amount={formData.amount}
      onAmountChange={handleAmountChange}
      onTaxRateChange={handleTaxRateChange}
    />
  );
};

// スタイリング
const Container = styled.div`
  padding: 16px;
  background-color: #f0f0f0;
  @media (min-width: 600px) {
    width: 400px;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Label = styled.div`
  width: 100px;
`;

const Value = styled.div`
  flex: 1;
`;

const Input = styled.input`
  width: 100px;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Unit = styled.span`
  margin-left: 4px;  
`;

const ButtonGroup = styled.div`
  margin-top: 16px;
  text-align: center;
`;

const Button = styled.button`
  margin: 0 4px;
  padding: 4px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export default TaxForm;