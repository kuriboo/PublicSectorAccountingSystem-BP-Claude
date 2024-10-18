import React from 'react';
import styled from 'styled-components';

// 予算定義のプロパティ型
type BudgetDefinitionProps = {
  budget: number;
  consumption: number;
  balance: number;
  adjustment: number;
  dueDate: string;
};

// 予算表ヘッダーのプロパティ型
type BudgetTableHeaderProps = {
  headers: string[];
};

// 予算表行のプロパティ型
type BudgetTableRowProps = {
  label: string;
  amount: number;
};

// スタイリング
const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
`;

const Header = styled.h2`
  margin-bottom: 10px;
`;

const InputGroup = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: inline-block;
  width: 120px;
`;

const Input = styled.input`
  width: 150px;
  padding: 5px;
`;

const Select = styled.select`
  width: 150px;
  padding: 5px;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
  padding-bottom: 5px;
  margin-bottom: 5px;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 5px;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-right: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// 予算定義コンポーネント
const BudgetDefinition: React.FC<BudgetDefinitionProps> = ({
  budget,
  consumption,
  balance,
  adjustment,
  dueDate,
}) => {
  return (
    <div>
      <InputGroup>
        <Label>予算額:</Label>
        <Input type="text" value={budget.toLocaleString()} readOnly />
      </InputGroup>
      <InputGroup>
        <Label>消費累計:</Label>
        <Input type="text" value={consumption.toLocaleString()} readOnly />
      </InputGroup>
      <InputGroup>
        <Label>残高:</Label>
        <Input type="text" value={balance.toLocaleString()} readOnly />
      </InputGroup>
      <InputGroup>
        <Label>調整額:</Label>
        <Input type="text" value={adjustment.toLocaleString()} readOnly />
      </InputGroup>
      <InputGroup>
        <Label>次回予定日:</Label>
        <Input type="text" value={dueDate} readOnly />
      </InputGroup>
    </div>
  );
};

// 予算表ヘッダーコンポーネント
const BudgetTableHeader: React.FC<BudgetTableHeaderProps> = ({ headers }) => {
  return (
    <TableHeader>
      {headers.map((header, index) => (
        <div key={index}>{header}</div>
      ))}
    </TableHeader>
  );
};

// 予算表行コンポーネント 
const BudgetTableRow: React.FC<BudgetTableRowProps> = ({ label, amount }) => {
  return (
    <TableRow>
      <div>{label}</div>
      <div>{amount.toLocaleString()}</div>
    </TableRow>
  );
};

// メインコンポーネント
const BudgetDisplay: React.FC = () => {
  const sampleData = {
    budget: 1297000,
    consumption: 70000,
    balance: 1167000,
    adjustment: 0,
    dueDate: '08 10',
    bankCode: '0000',
    bankName: 'サンプル銀行',
    accountNo: '9999999',
    accountName: 'サンプル口座',
    reserveFunds: 10000,
    tax: 9091,
    taxRate: 10,
    insuranceFlag: false,
    memo: '',
  };

  return (
    <Container>
      <Header>予算決定科目登録（一般費用）</Header>
      <InputGroup>
        <Label>予算科目:</Label>
        <Input type="text" value="サンプル予算科目" readOnly />
      </InputGroup>
      <InputGroup>
        <Label>予算名:</Label>
        <Input type="text" value="サンプル予算名" readOnly />
      </InputGroup>

      <BudgetDefinition
        budget={sampleData.budget}
        consumption={sampleData.consumption}
        balance={sampleData.balance}
        adjustment={sampleData.adjustment}
        dueDate={sampleData.dueDate}
      />

      <InputGroup>
        <Label>銀行名:</Label>
        <Select value={sampleData.bankCode}>
          <option value="0000">サンプル銀行</option>
        </Select>
        <Input type="text" value={sampleData.bankName} readOnly />
      </InputGroup>

      <BudgetTableHeader headers={['科目', '金額']} />
      <BudgetTableRow label="預金口座" amount={sampleData.reserveFunds} />
      <BudgetTableRow label="税抜額" amount={sampleData.budget - sampleData.tax} />
      <BudgetTableRow label="消費税率" amount={sampleData.taxRate} />

      <InputGroup>
        <Label>保険入力:</Label>
        <Checkbox type="checkbox" checked={sampleData.insuranceFlag} readOnly />
      </InputGroup>

      <InputGroup>
        <Label>摘要:</Label>
        <Input type="text" value={sampleData.memo} readOnly />
      </InputGroup>

      <Button>OK</Button>
      <Button>クリア</Button>
      <Button>キャンセル</Button>
    </Container>
  );
};

export default BudgetDisplay;