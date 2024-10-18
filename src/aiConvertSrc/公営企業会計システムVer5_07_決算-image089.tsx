import React from 'react';
import styled from 'styled-components';

// 特定収入使途分類の型定義
type SpecialIncomeUsageClassification = {
  id: string;
  name: string;
  amount: number;
};

// 特定収入使途分類コンポーネントのプロパティ型定義
type SpecialIncomeUsageClassificationProps = {
  classifications: SpecialIncomeUsageClassification[];
  totalAmount: number;
};

// 特定収入使途分類コンポーネント
const SpecialIncomeUsageClassification: React.FC<SpecialIncomeUsageClassificationProps> = ({
  classifications,
  totalAmount,
}) => {
  return (
    <Table>
      <thead>
        <tr>
          <Th>特定収入項目名称</Th>
          <Th>特定収入額</Th>
          <Th>課税仕入れ等にする特定収入額</Th>
          <Th>課税仕入れ以外の特定収入額</Th>
        </tr>
      </thead>
      <tbody>
        {classifications.map((classification) => (
          <tr key={classification.id}>
            <Td>{classification.name}</Td>
            <Td>{classification.amount.toLocaleString()}</Td>
            {/* 例外処理: 課税仕入れ等にする特定収入額と課税仕入れ以外の特定収入額が未入力の場合は0を表示 */}
            <Td>{classification.amount > 0 ? classification.amount.toLocaleString() : 0}</Td>
            <Td>{classification.amount > 0 ? 0 : classification.amount.toLocaleString()}</Td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <Th>合計額</Th>
          <Td>{totalAmount.toLocaleString()}</Td>
          {/* 例外処理: 合計額が0の場合は0を表示 */}
          <Td>{totalAmount > 0 ? 0 : totalAmount.toLocaleString()}</Td>
          <Td>{totalAmount.toLocaleString()}</Td>
        </tr>
      </tfoot>
    </Table>
  );
};

// スタイリング
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const Th = styled.th`
  background-color: #f0f0f0;
  padding: 8px;
  text-align: left;
  border: 1px solid #ccc;
`;

const Td = styled.td`
  padding: 8px;
  border: 1px solid #ccc;
`;

// サンプルデータを用いた使用例
const SampleSpecialIncomeUsageClassification: React.FC = () => {
  const sampleData: SpecialIncomeUsageClassification[] = [
    { id: '1', name: '補助金・交付金等', amount: 3490000 },
    { id: '2', name: '寄附金', amount: 2100000 },
    { id: '3', name: '出資に対する配当金', amount: 0 },
    { id: '4', name: '保険金', amount: 0 },
    { id: '5', name: '損害賠償金', amount: 0 },
    { id: '6', name: '会費・入会金', amount: 0 },
    { id: '7', name: '遅延金', amount: 0 },
    { id: '8', name: '債務免除益', amount: 0 },
    { id: '9', name: '借入金', amount: 0 },
    { id: '10', name: '出資の受入れ', amount: 0 },
    { id: '11', name: '賃付回収金', amount: 0 },
  ];

  const totalAmount = sampleData.reduce((sum, data) => sum + data.amount, 0);

  return (
    <SpecialIncomeUsageClassification
      classifications={sampleData}
      totalAmount={totalAmount}
    />
  );
};

export default SampleSpecialIncomeUsageClassification;