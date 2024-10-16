import React from 'react';
import styled from '@emotion/styled';

type OrderItemType = {
  id: string;
  title: string;
  amount: string;
  schedule: string;
};

type OrderDetailProps = {
  order: OrderItemType;
  onEdit: () => void;
  onCancel: () => void;
};

const OrderDetailWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 4px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h4`
  font-size: 18px;
  margin-bottom: 10px;
`;

const InfoTable = styled.table`
  width: 100%;
  margin-bottom: 20px;

  th {
    text-align: left;
    padding: 5px;
    width: 30%;
  }

  td {
    padding: 5px;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 80px;
  resize: none;
  margin-bottom: 10px;
`;

const ButtonGroup = styled.div`
  text-align: right;

  button {
    margin-left: 10px;
  }
`;

const OrderDetail: React.FC<OrderDetailProps> = ({ order, onEdit, onCancel }) => {
  // 注文情報が未定義の場合の処理
  if (!order) {
    return <div>注文情報がありません。</div>;
  }

  return (
    <OrderDetailWrapper>
      <Title>所属担当者情報設定</Title>
      <InfoTable>
        <tbody>
          <tr>
            <th>所属</th>
            <td>{order.id}</td>
          </tr>
          <tr>
            <th>担当</th>
            <td>{order.title}</td>
          </tr>
          <tr>  
            <th>職員</th>
            <td>{order.amount}</td>
          </tr>
          <tr>
            <th>初期値</th>
            <td>{order.schedule}</td>
          </tr>
        </tbody>
      </InfoTable>
      <TextArea placeholder="当初予算/前回補正の精算基礎明細等の修正可否" readOnly />
      <ButtonGroup>
        <button onClick={onEdit}>行確定</button>
        <button onClick={onCancel}>行キャンセル</button>
      </ButtonGroup>
    </OrderDetailWrapper>
  );
};

// サンプルデータ
const sampleOrder: OrderItemType = {
  id: '000002',
  title: '001',
  amount: '',
  schedule: '0',
};

const OrderDetailSample: React.FC = () => {
  const handleEdit = () => {
    console.log('Edit clicked');
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
  };

  return (
    <OrderDetail 
      order={sampleOrder}
      onEdit={handleEdit}
      onCancel={handleCancel}
    />
  );
};

export default OrderDetailSample;