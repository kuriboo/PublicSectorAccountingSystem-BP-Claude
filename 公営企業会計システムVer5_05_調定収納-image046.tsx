import React from 'react';
import styled from 'styled-components';

// 個別商品の型定義
type Item = {
  code: string;
  name: string;
  unitPrice: number;
};

// コンポーネントのProps型定義
type Props = {
  items: Item[];
  taxRate: number;
};

// スタイル付きコンポーネント
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }
`;

const TotalTable = styled.table`
  float: right;
  td {
    padding: 4px;
  }
`;

const Button = styled.button`
  margin: 8px;
`;

// 商品明細コンポーネント
const ItemList: React.FC<Props> = ({ items, taxRate }) => {
  // 小計の計算
  const subtotal = items.reduce((sum, item) => sum + item.unitPrice, 0);

  // 消費税額の計算
  const tax = Math.floor(subtotal * taxRate / 100);

  // 合計金額の計算
  const total = subtotal + tax;

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>商品コード</th>
            <th>商品名</th>
            <th>単価</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.code}>
              <td>{item.code}</td>
              <td>{item.name}</td>
              <td>{item.unitPrice.toLocaleString()}円</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* 合計金額表示部分 */}
      <TotalTable>
        <tbody>
          <tr>
            <td>小計</td>
            <td>{subtotal.toLocaleString()}円</td>
          </tr>
          <tr>
            <td>消費税({taxRate}%)</td>
            <td>{tax.toLocaleString()}円</td>
          </tr>
          <tr>
            <td>合計金額</td>
            <td>{total.toLocaleString()}円</td>
          </tr>
        </tbody>
      </TotalTable>

      <div>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </div>
    </div>
  );
};

// サンプルデータ
const sampleData = [
  { code: '0030301001', name: '加入者分担金', unitPrice: 110000 },
  { code: '0001', name: '加入者分担金', unitPrice: 0 },
  { code: '0011', name: '分担金:20㎜', unitPrice: 0 },
];

// 使用例
const ItemListExample = () => {
  return (
    <div>
      <h1>商品明細</h1>
      <ItemList items={sampleData} taxRate={10} />
    </div>
  );
};

export default ItemListExample;