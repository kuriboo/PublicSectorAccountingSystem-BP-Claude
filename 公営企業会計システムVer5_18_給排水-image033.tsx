import React from 'react';
import styled from 'styled-components';

// 金額の型定義
type AmountType = {
  tax: number;
  taxExcluded: number;
  consumptionTax: number;
};

// テーブル行の型定義
type RowType = {
  item: string;
  quantity: string;
  unitPrice: number;
  price: number;
  taxRate: number;
};

// プロパティの型定義
type Props = {
  amount: AmountType;
  rows: RowType[];
};

// スタイリング
const Container = styled.div`
  font-family: sans-serif;
  max-width: 500px;
  margin: 0 auto;
`;

const Table = styled.table`
  width: 100%;
  margin-bottom: 20px;
  border-collapse: collapse;

  th, td {
    padding: 5px;
    text-align: right;
    border: 1px solid #ccc;
  }

  th {
    background-color: #f0f0f0;
  }
`;

const ButtonGroup = styled.div`
  text-align: center;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
`;

// 金額コンポーネント
const Amount: React.FC<AmountType> = ({ tax, taxExcluded, consumptionTax }) => (
  <div>
    <div>税込額　　　{tax.toLocaleString()}</div>
    <div>税抜額　　　{taxExcluded.toLocaleString()}</div>
    <div>消費税額　　{consumptionTax.toLocaleString()}</div>
  </div>
);

// テーブルコンポーネント 
const InvoiceTable: React.FC<Props> = ({ amount, rows }) => {
  return (
    <Container>
      <Amount {...amount} />
      <Table>
        <thead>
          <tr>
            <th>品目</th>
            <th>数量</th>
            <th>単価</th>
            <th>金額</th>
            <th>消費税率</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.item}</td>
              <td>{row.quantity}</td>
              <td>{row.unitPrice.toLocaleString()}</td>
              <td>{row.price.toLocaleString()}</td>
              <td>{row.taxRate.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ButtonGroup>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonGroup>
    </Container>
  );
};

// サンプルデータ
const sampleData = {
  amount: {
    tax: 25000,
    taxExcluded: 22980,
    consumptionTax: 2020,
  },
  rows: [
    { item: '課税', quantity: '80.00%', unitPrice: 15000, price: 13889, taxRate: 1111 },
    { item: '課税', quantity: '10.00%', unitPrice: 10000, price: 9091, taxRate: 909 },
  ],
};

// 表示用コンポーネント
const App: React.FC = () => <InvoiceTable {...sampleData} />;

export default App;