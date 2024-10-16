import React from 'react';
import styled from '@emotion/styled';

type ReceiptItem = {
  id: number;
  name: string;
  unitPrice: number;
  quantity: number;
};

type ReceiptProps = {
  receiptDate: string;
  receiptItems: ReceiptItem[];
  totalAmount: number;
  taxRate: number;
  taxAmount: number;
};

const ReceiptTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
  }

  td:last-child {
    text-align: right;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const TotalAmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const TotalAmountLabel = styled.span`
  font-weight: bold;
`;

const TotalAmountValue = styled.span`
  font-weight: bold;
`;

const Receipt: React.FC<ReceiptProps> = ({
  receiptDate,
  receiptItems,
  totalAmount,
  taxRate,
  taxAmount,
}) => {
  return (
    <div>
      <h2>領収書</h2>
      <p>日付: {receiptDate}</p>
      <ReceiptTable>
        <thead>
          <tr>
            <th>品名</th>
            <th>単価</th>
            <th>数量</th>
            <th>金額</th>
          </tr>
        </thead>
        <tbody>
          {receiptItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.unitPrice.toLocaleString()}円</td>
              <td>{item.quantity}</td>
              <td>{(item.unitPrice * item.quantity).toLocaleString()}円</td>
            </tr>
          ))}
        </tbody>
      </ReceiptTable>
      <TotalAmountContainer>
        <TotalAmountLabel>合計:</TotalAmountLabel>
        <TotalAmountValue>{totalAmount.toLocaleString()}円</TotalAmountValue>
      </TotalAmountContainer>
      <p>消費税({taxRate}%): {taxAmount.toLocaleString()}円</p>
    </div>
  );
};

// サンプルデータを用いた使用例
const sampleData: ReceiptProps = {
  receiptDate: '2022年12月22日',
  receiptItems: [
    { id: 1, name: 'テスト用品1号', unitPrice: 15000, quantity: 1 },
    { id: 2, name: 'テスト用品2号(前払い)', unitPrice: 22000, quantity: 1 },
    { id: 3, name: '出納受渡テストケリオ', unitPrice: 260000, quantity: 1 },
    { id: 4, name: '出納受渡テストケリオSB', unitPrice: 330000, quantity: 1 },
  ],
  totalAmount: 629000,
  taxRate: 10,
  taxAmount: 62900,
};

const ReceiptExample: React.FC = () => {
  return <Receipt {...sampleData} />;
};

export default ReceiptExample;