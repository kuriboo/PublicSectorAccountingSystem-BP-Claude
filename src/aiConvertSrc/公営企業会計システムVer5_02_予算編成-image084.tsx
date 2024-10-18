import React from 'react';
import styled from 'styled-components';

// 予算特定収入額修正入力のプロパティ型
type Props = {
  department: string;
  year: number;
  projectCode: string;
  projectName: string;
  budgetedAmount: number;
  borrowingRate: number;
};

// スタイル定義
const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const InfoRow = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

const InfoLabel = styled.div`
  width: 100px;
`;

const InfoValue = styled.div`
  flex: 1;
`;

const TableContainer = styled.div`
  margin-top: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f0f0f0;
  }
`;

// 予算特定収入額修正入力コンポーネント
const BudgetRevisionInput: React.FC<Props> = ({
  department,
  year,
  projectCode,
  projectName,
  budgetedAmount,
  borrowingRate,
}) => {
  return (
    <Container>
      <Title>予算特定収入額修正入力</Title>
      <InfoRow>
        <InfoLabel>会計年度</InfoLabel>
        <InfoValue>{year}年度</InfoValue>
      </InfoRow>
      <InfoRow>
        <InfoLabel>予算編成区分</InfoLabel>
        <InfoValue>当初予算</InfoValue>
      </InfoRow>
      <InfoRow>
        <InfoLabel>最終査定値</InfoLabel>
        <InfoValue>査定額 1回</InfoValue>
      </InfoRow>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <th>予算科目</th>
              <th>科目名</th>
              <th>予算編成額</th>
              <th>借入金の償還</th>
              <th>内訳入力</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{projectCode}</td>
              <td>{projectName}</td>
              <td>{budgetedAmount.toLocaleString()}</td>
              <td>{borrowingRate}%</td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default BudgetRevisionInput;

// 使用例
const SampleData: Props = {
  department: '令和03年度',
  year: 2023,
  projectCode: '001-01-04-0001-1001',
  projectName: '国庫補助金',
  budgetedAmount: 11500000,
  borrowingRate: 0,
};

const App: React.FC = () => {
  return (
    <div>
      <h1>予算特定収入額修正入力サンプル</h1>
      <BudgetRevisionInput {...SampleData} />
    </div>
  );
};