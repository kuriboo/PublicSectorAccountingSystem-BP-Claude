import React from 'react';
import styled from '@emotion/styled';

interface TaxWithholdingInputProps {
  startDate: Date;
  endDate: Date;
  exemption: number;
  deductionAmount: number;
  onStartDateChange: (date: Date) => void;
  onEndDateChange: (date: Date) => void;
  onExemptionChange: (exemption: number) => void;
  onDeductionAmountChange: (amount: number) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Row = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const TaxWithholdingInput: React.FC<TaxWithholdingInputProps> = ({
  startDate,
  endDate,
  exemption,
  deductionAmount,
  onStartDateChange,
  onEndDateChange,
  onExemptionChange,
  onDeductionAmountChange,
}) => {
  // Format date as YYYY/MM/DD
  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
  };

  return (
    <Container>
      <Row>
        <Label>対象期間</Label>
        <Input
          type="date"
          value={formatDate(startDate)}
          onChange={(e) => onStartDateChange(new Date(e.target.value))}
        />
        <span>〜</span>
        <Input
          type="date"
          value={formatDate(endDate)}
          onChange={(e) => onEndDateChange(new Date(e.target.value))}
        />
      </Row>
      <Row>
        <Label>検索</Label>
        <div>
          <input type="radio" id="allSearch" name="searchType" />
          <label htmlFor="allSearch">全検索</label>
        </div>
        <div>
          <input type="radio" id="orderSearch" name="searchType" />
          <label htmlFor="orderSearch">訂正</label>
        </div>
        <div>
          <input type="radio" id="deleteSearch" name="searchType" />
          <label htmlFor="deleteSearch">削除</label>
        </div>
      </Row>
      <Row>
        <Label>課税年月日</Label>
        <Input type="number" />
        <span>〜</span>
        <Input
          type="number"
          value={deductionAmount}
          onChange={(e) =>
            onDeductionAmountChange(e.target.valueAsNumber || 0)
          }
        />
      </Row>
      <Row>
        <Label>伝票年月日</Label>
        <Input type="number" />
        <span>〜</span>
        <Input type="number" />
      </Row>
      <Row>
        <Label>伝票番号</Label>
        <Input type="number" />
        <span>〜</span>
        <Input
          type="number"
          value={exemption}
          onChange={(e) => onExemptionChange(e.target.valueAsNumber || 0)}
        />
      </Row>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const [exemption, setExemption] = React.useState(0);
  const [deductionAmount, setDeductionAmount] = React.useState(0);

  return (
    <div>
      <h1>Tax Withholding Input Example</h1>
      <TaxWithholdingInput
        startDate={startDate}
        endDate={endDate}
        exemption={exemption}
        deductionAmount={deductionAmount}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
        onExemptionChange={setExemption}
        onDeductionAmountChange={setDeductionAmount}
      />
    </div>
  );
};

export default App;