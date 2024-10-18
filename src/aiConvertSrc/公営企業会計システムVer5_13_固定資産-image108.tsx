import React from 'react';
import styled from '@emotion/styled';

interface ReservationInfo {
  fromAccountNo: string;
  toAccountNo: string;
  fromAmount: number;
  toAmount: number;
  fromCurrency: string;
  toCurrency: string;
}

interface ReservationProps {
  info: ReservationInfo;
  onCancel: () => void;
  onSubmit: () => void;
}

const ReservationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    width: 400px;
    margin: 0 auto;
  }
`;

const ReservationLabel = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
`;

const ReservationInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ReservationSelect = styled.select`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ReservationButton = styled.button`
  padding: 8px 16px;
  margin-right: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`;

const Reservation: React.FC<ReservationProps> = ({ info, onCancel, onSubmit }) => {
  return (
    <ReservationContainer>
      <ReservationLabel>振込指定</ReservationLabel>
      <ReservationInput type="text" value={info.fromAccountNo} readOnly />
      <ReservationInput type="text" value={info.toAccountNo} readOnly />
      <ReservationInput type="number" value={info.fromAmount} readOnly />
      <ReservationInput type="number" value={info.toAmount} readOnly />
      <ReservationInput type="text" value={info.fromCurrency} readOnly />
      <ReservationInput type="text" value={info.toCurrency} readOnly />
      <div>
        <ReservationSelect>
          <option>予測用</option>
        </ReservationSelect>
        <ReservationSelect>
          <option>予測用</option>
        </ReservationSelect>
      </div>
      <div>
        <ReservationButton onClick={onCancel}>キャンセル</ReservationButton>
        <ReservationButton onClick={onSubmit}>実行</ReservationButton>
      </div>
    </ReservationContainer>
  );
};

// サンプルデータと使用例
const sampleData: ReservationInfo = {
  fromAccountNo: '00000000',
  toAccountNo: '9999999999',
  fromAmount: 0,
  toAmount: 9999999999,
  fromCurrency: '部門',
  toCurrency: '部門',
};

const App: React.FC = () => {
  const handleCancel = () => {
    // キャンセル処理
  };

  const handleSubmit = () => {
    // 実行処理  
  };

  return (
    <div>
      <h1>公募企業会計システム</h1>
      <Reservation info={sampleData} onCancel={handleCancel} onSubmit={handleSubmit} />
    </div>
  );
};

export default App;