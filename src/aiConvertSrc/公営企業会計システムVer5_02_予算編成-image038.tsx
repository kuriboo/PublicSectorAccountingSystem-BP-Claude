import React from 'react';
import styled from '@emotion/styled';

type ReceiptData = {
  date: string;
  items: {
    id: string;
    name: string;
    price: number;
  }[];
  subtotal: number;
  tax: number;
  total: number;
};

type TaxInfo = {
  label: string;
  rate: number;
};

type PaymentMethods = {
  [key: number]: {
    amount: number;
    count: number;
  };
};

type ReceiptProps = {
  data: ReceiptData;
  storeName?: string;
  taxInfo?: TaxInfo;
  paymentMethods?: PaymentMethods;
};

const ReceiptWrapper = styled.div`
  font-family: monospace;
  white-space: pre;
  background-color: white;
  padding: 10px;
  border: 1px solid black;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 600px) {
    width: 400px;
  }
`;

const ReceiptStoreName = styled.div`
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ReceiptLabel = styled.span`
  display: inline-block;
  width: 80px;
  margin-right: 10px;
`;

const ReceiptValue = styled.span`
  text-align: right;
  display: inline-block;
  width: 100px;
`;

const ReceiptDivider = styled.div`
  border-top: 1px dashed black;
  margin: 10px 0;
`;

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(amount);
};

const Receipt: React.FC<ReceiptProps> = ({
  data,
  storeName = '',
  taxInfo = { label: '消費税', rate: 0.1 },
  paymentMethods = {},
}) => {
  const { date, items, subtotal, tax, total } = data;

  return (
    <ReceiptWrapper>
      {storeName && <ReceiptStoreName>{storeName}</ReceiptStoreName>}
      <div>
        <ReceiptLabel>日付:</ReceiptLabel>
        <ReceiptValue>{date}</ReceiptValue>
      </div>

      <ReceiptDivider />

      {items.map((item) => (
        <div key={item.id}>
          <ReceiptLabel>{item.name}</ReceiptLabel>
          <ReceiptValue>{formatCurrency(item.price)}</ReceiptValue>
        </div>
      ))}

      <ReceiptDivider />

      <div>
        <ReceiptLabel>小計:</ReceiptLabel>
        <ReceiptValue>{formatCurrency(subtotal)}</ReceiptValue>
      </div>
      <div>
        <ReceiptLabel>{taxInfo.label}:</ReceiptLabel>
        <ReceiptValue>{formatCurrency(tax)}</ReceiptValue>
      </div>
      <div>
        <ReceiptLabel>合計:</ReceiptLabel>
        <ReceiptValue>{formatCurrency(total)}</ReceiptValue>
      </div>

      {Object.keys(paymentMethods).length > 0 && (
        <>
          <ReceiptDivider />
          <div>お預かり:</div>
          {Object.entries(paymentMethods).map(([amount, { count }]) => (
            <div key={amount}>
              <ReceiptLabel>{formatCurrency(Number(amount))}円札:</ReceiptLabel>
              <ReceiptValue>
                {formatCurrency(Number(amount) * count)} ({count}枚)
              </ReceiptValue>
            </div>
          ))}
          <div>
            <ReceiptLabel>お釣り:</ReceiptLabel>
            <ReceiptValue>{formatCurrency(Object.entries(paymentMethods).reduce((acc, [amount, {count}]) => acc + Number(amount) * count, 0) - total)}</ReceiptValue>
          </div>
        </>
      )}
    </ReceiptWrapper>
  );
};

// Usage example
const receiptData: ReceiptData = {
  date: '2021-08-29',
  items: [
    { id: '1', name: '商品A', price: 1000 },
    { id: '2', name: '商品B', price: 500 },
  ],
  subtotal: 1500,
  tax: 150,
  total: 1650,
};

const paymentMethods: PaymentMethods = {
  1000: { amount: 1000, count: 1 },
  500: { amount: 500, count: 1 },
  100: { amount: 100, count: 1 },
};

const ExampleReceipt: React.FC = () => {
  return (
    <Receipt
      data={receiptData}
      storeName="サンプルストア"
      taxInfo={{ label: '消費税', rate: 0.1 }}
      paymentMethods={paymentMethods}
    />
  );
};

export default ExampleReceipt;