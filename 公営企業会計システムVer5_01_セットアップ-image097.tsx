import React from 'react';
import styled from '@emotion/styled';

interface CashFlowMasterListProps {
  fiscalYear: number;
  accountingPeriod: string;
  slipDate: {
    from: string;
    to: string;
  };
  amountRange: {
    from: number;
    to: number;
  };
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: sans-serif;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 400px;
`;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const CashFlowMasterList: React.FC<CashFlowMasterListProps> = ({
  fiscalYear = new Date().getFullYear(),
  accountingPeriod = '',
  slipDate = { from: '', to: '' },
  amountRange = { from: 0, to: 999 },
}) => {
  return (
    <Container>
      <Title>キャッシュ・フロー計算書集計マスタリスト作成</Title>
      <Form>
        <Label>
          会計年度
          <Input type="number" defaultValue={fiscalYear} />
        </Label>
        <Label>
          範囲指定
          <Select defaultValue={accountingPeriod}>
            <option value="">業務種類</option>
            <option value="執行">執行</option>
            <option value="予算">予算</option>
          </Select>
        </Label>
        <Label>
          伝票日
          <Input type="date" defaultValue={slipDate.from} /> ～{' '}
          <Input type="date" defaultValue={slipDate.to} />
        </Label>
        <Label>
          集計範囲
          <Input type="number" defaultValue={amountRange.from} /> ～{' '}
          <Input type="number" defaultValue={amountRange.to} />
        </Label>
      </Form>
      <ButtonContainer>
        <Button type="button">OK</Button>
        <Button type="button">クリア</Button>
        <Button type="button">終了</Button>
      </ButtonContainer>
    </Container>
  );
};

export default CashFlowMasterList;

// Usage example:
const App: React.FC = () => {
  return (
    <div>
      <h1>Cash Flow Master List Example</h1>
      <CashFlowMasterList />
    </div>
  );
};