import React from 'react';
import styled from 'styled-components';

// 特定収入項目の型定義
type IncomeItemProps = {
  code: string;
  name: string;
  totalIncome: number;
  internalUse: number;
};

// 特定収入項目コンポーネント
const IncomeItem: React.FC<IncomeItemProps> = ({ code, name, totalIncome, internalUse }) => {
  return (
    <tr>
      <td>{code}</td>
      <td>{name}</td>
      <td>{totalIncome.toLocaleString()}</td>
      <td>{internalUse.toLocaleString()}</td>
    </tr>
  );
};

// 特定収入項目一覧の型定義
type IncomeListProps = {
  incomeItems: IncomeItemProps[];
};

// 特定収入項目一覧コンポーネント
const IncomeList: React.FC<IncomeListProps> = ({ incomeItems }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>特定収入項目コード</th>
          <th>特定収入項目名称</th>
          <th>特定収入額</th>
          <th>特定収入以外の額</th>
        </tr>
      </thead>
      <tbody>
        {incomeItems.map((item, index) => (
          <IncomeItem key={index} {...item} />
        ))}
      </tbody>
    </Table>
  );
};

// 特定収入項目合計の型定義
type IncomeTotalProps = {
  totalIncome: number;
  totalInternalUse: number;
  totalAmount: number;
};

// 特定収入項目合計コンポーネント 
const IncomeTotal: React.FC<IncomeTotalProps> = ({ totalIncome, totalInternalUse, totalAmount }) => {
  return (
    <TotalWrapper>
      <div>
        <label>特定収入額:</label>
        <span>{totalIncome.toLocaleString()}円</span>
      </div>
      <div>
        <label>特定収入以外の額:</label>
        <span>{totalInternalUse.toLocaleString()}円</span>
      </div>
      <div>
        <label>不課税額合計:</label>
        <span>{totalAmount.toLocaleString()}円</span>
      </div>
    </TotalWrapper>
  );
};

// サンプルデータ
const sampleData: IncomeListProps = {
  incomeItems: [
    { code: 'S001', name: '租税', totalIncome: 0, internalUse: 0 },
    { code: 'S002', name: '補助金・交付金等', totalIncome: 0, internalUse: 0 },
    { code: 'S003', name: '他会計からの繰入金', totalIncome: 0, internalUse: 0 },
    { code: 'S004', name: '寄附金', totalIncome: 0, internalUse: 0 },
    { code: 'S005', name: '出資に対する配当金', totalIncome: 0, internalUse: 0 },
    { code: 'S006', name: '保険金', totalIncome: 0, internalUse: 0 },
    { code: 'S007', name: '損害賠償金', totalIncome: 0, internalUse: 0 },
    { code: 'S008', name: '会費・入会金', totalIncome: 0, internalUse: 0 },
    { code: 'S009', name: '登録金', totalIncome: 0, internalUse: 0 },
    { code: 'S010', name: '債務免除益', totalIncome: 0, internalUse: 0 },
    { code: 'S011', name: '借入金', totalIncome: 0, internalUse: 0 },
    { code: 'S012', name: '出資の受入れ', totalIncome: 0, internalUse: 0 },
    { code: 'S013', name: '貸付回収金', totalIncome: 0, internalUse: 0 },
    { code: 'U001', name: '雑収益', totalIncome: 0, internalUse: 0 },
    { code: 'U002', name: '負担金', totalIncome: 0, internalUse: 0 },
    { code: 'U003', name: 'その他', totalIncome: 0, internalUse: 0 },
  ],
};

// サンプル表示用コンポーネント
const SampleIncomeList: React.FC = () => {
  const totalIncome = sampleData.incomeItems.reduce((sum, item) => sum + item.totalIncome, 0);
  const totalInternalUse = sampleData.incomeItems.reduce((sum, item) => sum + item.internalUse, 0);
  const totalAmount = 100666;

  return (
    <Wrapper>
      <IncomeTotal
        totalIncome={totalIncome}
        totalInternalUse={totalInternalUse}  
        totalAmount={totalAmount}
      />
      <IncomeList incomeItems={sampleData.incomeItems} />
    </Wrapper>
  );
};

// スタイリング
const Wrapper = styled.div`
  font-family: Arial, sans-serif;
`;

const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;

  label {
    font-weight: bold;
    margin-right: 8px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export default SampleIncomeList;