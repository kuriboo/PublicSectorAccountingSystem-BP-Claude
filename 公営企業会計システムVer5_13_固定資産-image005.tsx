import React from 'react';
import styled from '@emotion/styled';

// 財源情報の型定義
type FundingSource = {
  id: string;
  name: string;
  amount: number;
};

// コンポーネントのPropsの型定義
type BudgetAllocationProps = {
  totalAmount: number;
  totalUsedAmount: number;
  fundingSources: FundingSource[];
  onCancel: () => void;
  onClear: () => void;
  onSubmit: () => void;
};

// スタイル定義
const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.th`
  background-color: #f0f0f0;
  padding: 10px;
  text-align: left;
  border: 1px solid #ccc;
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ccc;
`;

const TotalRow = styled.tr`
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  text-align: right;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  font-size: 16px;
`;

// BudgetAllocationコンポーネント
const BudgetAllocation: React.FC<BudgetAllocationProps> = ({
  totalAmount,
  totalUsedAmount,
  fundingSources,
  onCancel,
  onClear,
  onSubmit,
}) => {
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <TableHeader>財源コード</TableHeader>
            <TableHeader>財源名称</TableHeader>
            <TableHeader>債務金額</TableHeader>
            <TableHeader>財源金額</TableHeader>
          </tr>
        </thead>
        <tbody>
          {fundingSources.map((source) => (
            <tr key={source.id}>
              <TableCell>{source.id}</TableCell>
              <TableCell>{source.name}</TableCell>
              <TableCell>{source.amount.toLocaleString()}</TableCell>
              <TableCell>{source.amount.toLocaleString()}</TableCell>
            </tr>
          ))}
          <TotalRow>
            <TableCell colSpan={3}>財源合計額</TableCell>
            <TableCell>{totalAmount.toLocaleString()}</TableCell>
          </TotalRow>
        </tbody>
      </Table>

      <div>
        財源コード：
        <select>
          {fundingSources.map((source) => (
            <option key={source.id} value={source.id}>
              {source.id} {source.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        債務区分：<input type="number" min={0} />
      </div>
      <div>
        財源金額：<input type="number" min={0} />
      </div>

      <ButtonContainer>
        <Button onClick={onSubmit}>OK</Button>
        <Button onClick={onClear}>クリア</Button>
        <Button onClick={onCancel}>キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータ
const sampleData: BudgetAllocationProps = {
  totalAmount: 7000000,
  totalUsedAmount: 0,
  fundingSources: [
    { id: '01', name: '自己財源', amount: 3000000 },
    { id: '02', name: '工事負担金', amount: 4000000 },
  ],
  onCancel: () => console.log('キャンセルがクリックされました'),
  onClear: () => console.log('クリアがクリックされました'),
  onSubmit: () => console.log('OKがクリックされました'),
};

// 使用例
const App: React.FC = () => {
  return <BudgetAllocation {...sampleData} />;
};

export default App;