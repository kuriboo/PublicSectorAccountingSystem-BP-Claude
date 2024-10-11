import React from 'react';
import styled from 'styled-components';

// 税率計算のための定数
const TAX_RATE = 0.1;

// 親コンポーネントから渡されるプロパティの型定義
type Props = {
  items: {
    name: string;
    price: number;
    count: number;
  }[];
};

// 明細表のコンポーネント
const InvoiceTable: React.FC<Props> = ({ items }) => {
  // 小計を計算する関数
  const calculateSubtotal = (price: number, count: number) => {
    return price * count;
  };

  // 合計金額を計算する関数
  const calculateTotal = () => {
    return items.reduce((total, item) => total + calculateSubtotal(item.price, item.count), 0);
  };

  // 消費税を計算する関数
  const calculateTax = () => {
    return Math.floor(calculateTotal() * TAX_RATE);
  };

  return (
    <TableWrapper>
      <Table>
        <thead>
          <tr>
            <HeaderCell>明細書名</HeaderCell>
            <HeaderCell>行削除</HeaderCell>
            <HeaderCell>税率簿</HeaderCell>
            <HeaderCell>明細書</HeaderCell>
            <HeaderCell>税率別明細</HeaderCell>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <Cell>{item.name}</Cell>
              <Cell>
                <DeleteButton>削除</DeleteButton>
              </Cell>
              <Cell>{item.price.toLocaleString()}円</Cell>
              <Cell>{item.count}</Cell>
              <Cell>{calculateSubtotal(item.price, item.count).toLocaleString()}円</Cell>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <FooterCell colSpan={3}>小計(税抜)</FooterCell>
            <FooterCell colSpan={2}>{calculateTotal().toLocaleString()}円</FooterCell>
          </tr>
          <tr>
            <FooterCell colSpan={3}>消費税</FooterCell>
            <FooterCell colSpan={2}>{calculateTax().toLocaleString()}円</FooterCell>
          </tr>
          <tr>
            <FooterCell colSpan={3}>合計(税込)</FooterCell>
            <FooterCell colSpan={2}>{(calculateTotal() + calculateTax()).toLocaleString()}円</FooterCell>
          </tr>
        </tfoot>
      </Table>
    </TableWrapper>
  );
};

// スタイリング
const TableWrapper = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const HeaderCell = styled.th`
  background-color: #f2f2f2;
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const Cell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const FooterCell = styled.td`
  padding: 10px;
  text-align: right;
  border-top: 1px solid #ddd;
`;

const DeleteButton = styled.button`
  background-color: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;

// サンプルデータ
const sampleData = [
  { name: '商品A', price: 1000, count: 2 },
  { name: '商品B', price: 500, count: 3 },
  { name: '商品C', price: 2000, count: 1 },
];

// 表示用のコンポーネント
const App: React.FC = () => {
  return (
    <div>
      <h1>明細書</h1>
      <InvoiceTable items={sampleData} />
    </div>
  );
};

export default App;