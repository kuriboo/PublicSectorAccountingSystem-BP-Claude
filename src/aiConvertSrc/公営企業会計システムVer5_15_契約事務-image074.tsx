import React from 'react';
import styled from '@emotion/styled';

type Division = '工事' | '分類';
type PaymentMethod = '現金' | '分割';
type ClearingMethod = 'そのまま' | '分割最初に合算';

interface BusinessExpenseSettingsProps {
  year: number;
  division: Division;
  paymentMethod: PaymentMethod;
  clearingMethod: ClearingMethod;
  amount: number;
  onChangeAmount: (amount: number) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  padding: 4px;
`;

const Input = styled.input`
  padding: 4px;
  width: 100px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const BusinessExpenseSettings: React.FC<BusinessExpenseSettingsProps> = ({
  year,
  division,
  paymentMethod,
  clearingMethod,
  amount,
  onChangeAmount,
}) => {
  return (
    <Container>
      <Row>
        <Label>年度</Label>
        <div>{year}年度</div>
      </Row>
      <Row>
        <Label>支払区分</Label>
        <Select value={division}>
          <option value="工事">工事</option>
          <option value="分類">分類</option>
        </Select>
      </Row>
      <Row>
        <Label>集計区分</Label>
        <div>
          <input type="radio" id="monthly" name="paymentMethod" value="現金" checked={paymentMethod === '現金'} />
          <label htmlFor="monthly">現金</label>
          <input type="radio" id="installment" name="paymentMethod" value="分割" checked={paymentMethod === '分割'} />
          <label htmlFor="installment">分割</label>
        </div>
      </Row>
      <Row>
        <Label>出力区分</Label>
        <div>
          <input type="radio" id="asIs" name="clearingMethod" value="そのまま" checked={clearingMethod === 'そのまま'} />
          <label htmlFor="asIs">そのまま</label>
          <input type="radio" id="addToFirst" name="clearingMethod" value="分割最初に合算" checked={clearingMethod === '分割最初に合算'} />
          <label htmlFor="addToFirst">分割最初に合算</label>
        </div>
      </Row>
      <Row>
        <Label>金額</Label>
        <Input type="number" value={amount} onChange={(e) => onChangeAmount(Number(e.target.value))} />
      </Row>
      <Row>
        <div></div>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </Row>
    </Container>
  );
};

// サンプル使用例
const App: React.FC = () => {
  const handleAmountChange = (amount: number) => {
    console.log(`Amount changed to ${amount}`);
  };

  return (
    <BusinessExpenseSettings
      year={2029}
      division="工事"
      paymentMethod="現金"
      clearingMethod="そのまま"
      amount={999}
      onChangeAmount={handleAmountChange}
    />
  );
};

export default App;