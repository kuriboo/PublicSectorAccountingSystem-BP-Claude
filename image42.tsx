import React from 'react';
import styled from '@emotion/styled';

type TaxExemptionEntry = {
  date: string;
  description: string;
  taxCategory: string;
  taxRate: number;
  amount: number;
  taxAmount: number;
  consumptionTaxAmount: number;
};

type TaxExemptionFormProps = {
  entries: TaxExemptionEntry[];
  onSubmit: () => void;
  onCancel: () => void;
};

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

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 20px;

  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f2f2f2;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const TaxExemptionForm: React.FC<TaxExemptionFormProps> = ({ entries, onSubmit, onCancel }) => {
  // 合計金額を計算
  const totalAmount = entries.reduce((sum, entry) => sum + entry.amount, 0);
  // 合計税額を計算
  const totalTaxAmount = entries.reduce((sum, entry) => sum + entry.taxAmount, 0);

  return (
    <Container>
      <Title>特定課税仕入伝票管理入力</Title>
      <Table>
        <thead>
          <tr>
            <th>摘要2</th>
            <th>振替年月</th>
            <th>振替番号</th>
            <th>伝票日付</th>
            <th>摘要</th>
            <th>金額</th>
            <th>税込額</th>
            <th>消費税額</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td>{entry.date}</td>
              <td>{entry.description}</td>
              <td>{entry.taxCategory}</td>
              <td>{entry.taxRate}%</td>
              <td>{entry.amount.toLocaleString()}</td>
              <td>{entry.taxAmount.toLocaleString()}</td>
              <td>{entry.consumptionTaxAmount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4}>計</td>
            <td>{totalAmount.toLocaleString()}</td>
            <td>{totalTaxAmount.toLocaleString()}</td>
            <td>0</td>
          </tr>
        </tfoot>
      </Table>
      <ButtonContainer>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onSubmit}>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータを使用した例
const sampleData: TaxExemptionEntry[] = [
  {
    date: '2016/03/27',
    description: '振替手形',
    taxCategory: '課税',
    taxRate: 8,
    amount: 90000,
    taxAmount: 7200,
    consumptionTaxAmount: 0,
  },
  {
    date: '2016/03/27',
    description: '売上手形',
    taxCategory: '課税',
    taxRate: 8,
    amount: 80000,
    taxAmount: 6400,
    consumptionTaxAmount: 0,
  },
];

const TaxExemptionFormExample: React.FC = () => {
  const handleSubmit = () => {
    // 送信処理
    console.log('Form submitted');
  };

  const handleCancel = () => {
    // キャンセル処理
    console.log('Form cancelled');
  };

  return <TaxExemptionForm entries={sampleData} onSubmit={handleSubmit} onCancel={handleCancel} />;
};

export default TaxExemptionFormExample;