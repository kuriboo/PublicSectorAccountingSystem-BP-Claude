import React from 'react';
import styled from '@emotion/styled';

interface OrderProps {
  orderId: string;
  productName: string;
  unitPrice: number;
  quantity: number;
  taxRate: number;
  taxAmount: number;
  totalPrice: number;
  specialNotes?: string;
  entryPeriod: string;
}

const OrderContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  font-family: Arial, sans-serif;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const OrderTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const OrderTableHeader = styled.th`
  background-color: #e0e0e0;
  padding: 10px;
  text-align: left;
  font-weight: bold;
`;

const OrderTableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
`;

const OrderLabel = styled.span`
  font-weight: bold;
`;

const OrderInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 100%;
  box-sizing: border-box;
`;

const OrderTextarea = styled.textarea`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 100%;
  box-sizing: border-box;
`;

const OrderDateInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 150px;
`;

const OrderButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Order: React.FC<OrderProps> = ({
  orderId,
  productName,
  unitPrice,
  quantity,
  taxRate,
  taxAmount,
  totalPrice,
  specialNotes,
  entryPeriod,
}) => {
  return (
    <OrderContainer>
      <OrderTable>
        <tbody>
          <tr>
            <OrderTableHeader>単価名称コード</OrderTableHeader>
            <OrderTableHeader>物品名称</OrderTableHeader>
            <OrderTableHeader>単価規格コード</OrderTableHeader>
            <OrderTableHeader>物品規格名称</OrderTableHeader>
            <OrderTableHeader>単位</OrderTableHeader>
          </tr>
          <tr>
            <OrderTableCell>{orderId}</OrderTableCell>
            <OrderTableCell>{productName}</OrderTableCell>
            <OrderTableCell></OrderTableCell>
            <OrderTableCell></OrderTableCell>
            <OrderTableCell></OrderTableCell>
          </tr>
        </tbody>
      </OrderTable>
      
      <div>
        <OrderLabel>単価名称: </OrderLabel>
        <OrderInput type="text" value={productName} readOnly />
      </div>
      <div>
        <OrderLabel>規格名称: </OrderLabel>
        <OrderInput type="text" readOnly />
      </div>
      <div>
        <OrderLabel>数量: </OrderLabel>
        <OrderInput type="number" value={quantity} readOnly />
      </div>
      <div>
        <OrderLabel>単位: </OrderLabel>
        <OrderInput type="text" value="箱" readOnly />
      </div>
      <div>
        <OrderLabel>税込額: </OrderLabel>
        <OrderInput type="number" value={taxAmount} readOnly />
      </div>
      <div>
        <OrderLabel>税抜額: </OrderLabel>
        <OrderInput type="number" value={totalPrice - taxAmount} readOnly />
      </div>
      <div>
        <OrderLabel>消費税額: </OrderLabel>
        <OrderInput type="number" value={taxAmount} readOnly />
      </div>
      <div>
        <OrderLabel>納入場所: </OrderLabel>
        <OrderTextarea value={specialNotes} readOnly />
      </div>
      <div>
        <OrderLabel>納入期限: </OrderLabel>
        <OrderDateInput type="text" value={entryPeriod} readOnly />
      </div>
      <div>
        <OrderLabel>備考: </OrderLabel>
        <OrderTextarea readOnly />
      </div>

      <div>
        <OrderButton>行複写</OrderButton>
        <OrderButton>行キャンセル</OrderButton>
      </div>
    </OrderContainer>
  );
};

// サンプルデータを用いた使用例
const SampleOrder: React.FC = () => {
  const sampleData: OrderProps = {
    orderId: '000156',
    productName: '洋箪笥',
    unitPrice: 10000,
    quantity: 10,
    taxRate: 0.1,
    taxAmount: 1230,
    totalPrice: 12300,
    specialNotes: '中庭29年6月4日〜中庭29年6月4日',
    entryPeriod: '中庭29年6月4日〜中庭29年6月4日',
  };

  return <Order {...sampleData} />;
};

export default Order;