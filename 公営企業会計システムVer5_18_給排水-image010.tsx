import React from 'react';
import styled from '@emotion/styled';

// 税金計算の関数
const calculateTax = (price: number, taxRate: number): number => {
  return Math.floor(price * taxRate);
};

// 価格をカンマ区切りの文字列に変換する関数
const formatPrice = (price: number): string => {
  return price.toLocaleString();
};

type ReceiptItemProps = {
  date: string;
  store: string;
  item: string;
  price: number;
  taxRate: number;
  quantity: number;
};

const ReceiptItem: React.FC<ReceiptItemProps> = ({ date, store, item, price, taxRate, quantity }) => {
  // 税込価格を計算
  const taxIncludedPrice = price + calculateTax(price, taxRate);
  // 合計金額を計算
  const totalPrice = taxIncludedPrice * quantity;

  return (
    <ReceiptItemWrapper>
      <td>{date}</td>
      <td>{store}</td>
      <td>{item}</td>
      <td>{formatPrice(price)}円</td>
      <td>{formatPrice(taxIncludedPrice)}円</td>
      <td>{quantity}</td>
      <td>{formatPrice(totalPrice)}円</td>
    </ReceiptItemWrapper>
  );
};

const ReceiptItemWrapper = styled.tr`
  text-align: center;

  td {
    padding: 8px;
    border: 1px solid #ccc;
  }
`;

type ReceiptProps = {
  items: ReceiptItemProps[];
};

const Receipt: React.FC<ReceiptProps> = ({ items }) => {
  // アイテムが空の場合の処理
  if (items.length === 0) {
    return <div>レシートアイテムがありません</div>;
  }

  // 合計金額を計算
  const totalAmount = items.reduce((sum, item) => {
    const taxIncludedPrice = item.price + calculateTax(item.price, item.taxRate);
    return sum + taxIncludedPrice * item.quantity;
  }, 0);

  return (
    <ReceiptWrapper>
      <ReceiptTable>
        <thead>
          <tr>
            <th>日付</th>
            <th>店舗</th>
            <th>品目</th>
            <th>税抜価格</th>
            <th>税込価格</th>
            <th>数量</th>
            <th>金額</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <ReceiptItem key={index} {...item} />
          ))}
        </tbody>
      </ReceiptTable>
      <ReceiptTotal>合計: {formatPrice(totalAmount)}円</ReceiptTotal>
    </ReceiptWrapper>
  );
};

const ReceiptWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const ReceiptTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th {
    background-color: #f2f2f2;
    padding: 8px;
    border: 1px solid #ccc;
  }
`;

const ReceiptTotal = styled.p`
  text-align: right;
  font-weight: bold;
  margin-top: 16px;
`;

// サンプルデータ
const sampleItems: ReceiptItemProps[] = [
  {
    date: '5/4',
    store: '未収加入者負担金',
    item: '諸税',
    price: 157500,
    taxRate: 0.1,
    quantity: 1,
  },
  {
    date: '5/4',
    store: '未収加入者負担金',
    item: '諸経費',
    price: 15751,
    taxRate: 0.1,
    quantity: 1,
  },
];

const App: React.FC = () => {
  return (
    <div>
      <h1>レシート</h1>
      <Receipt items={sampleItems} />
    </div>
  );
};

export default App;