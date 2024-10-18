import React from 'react';
import styled from '@emotion/styled';

type ReservationFormProps = {
  onSubmit: (data: ReservationData) => void;
};

type ReservationData = {
  reservationType: string;
  expectedNumber: number;
  isCourseSelected: boolean;
  paymentMethod: string;
  reservationDate: string;
  arrivalTime: string;
  departureTime: string;
  isNoSmoking: boolean;
  isCourseMenu: boolean;
  remarks: string;
};

const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  const [reservationData, setReservationData] = React.useState<ReservationData>({
    reservationType: '当日予約',
    expectedNumber: 1,
    isCourseSelected: false,
    paymentMethod: '予算見積要求書(所属別)',
    reservationDate: '',
    arrivalTime: '',
    departureTime: '',
    isNoSmoking: true,
    isCourseMenu: false,
    remarks: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setReservationData(prevData => ({ ...prevData, [name]: newValue }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(reservationData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Label>予算種成区分</Label>
        <Select
          name="reservationType"
          value={reservationData.reservationType}
          onChange={handleChange}
        >
          <option value="当日予算">当日予算</option>
          <option value="年度">年度</option>
        </Select>
        <Input
          type="number"
          name="expectedNumber"
          min={1}
          value={reservationData.expectedNumber}
          onChange={handleChange}
        />
        <span>人数</span>
      </Row>

      <Row>
        <span>最終査定値</span>
        <label>
          <input
            type="radio"
            name="isCourseSelected"
            checked={reservationData.isCourseSelected}
            onChange={handleChange}
          />
          査定額
        </label>
        <label>
          <input
            type="radio"
            name="isCourseSelected"
            checked={!reservationData.isCourseSelected}
            onChange={handleChange}
          />
          見積要求額
        </label>
        <Input type="number" disabled />
        <span>円</span>
      </Row>

      <Row>
        <Label>帳票種別</Label>
        <Select
          name="paymentMethod"
          value={reservationData.paymentMethod}
          onChange={handleChange}
        >
          <option value="予算見積要求書(所属別)">予算見積要求書(所属別)</option>
          <option value="予算見積要求書(科目別)">予算見積要求書(科目別)</option>
        </Select>
      </Row>

      <Row>
        <Label>決算額印字</Label>
        <Input
          type="text"
          name="settlementPrintText"
          value={reservationData.remarks}
          onChange={handleChange}
        />
      </Row>

      <Row>
        <Label>範囲指定</Label>
        <div>
          <span>所属</span>
          <Input type="text" name="affiliation" />
          <span>～</span>
          <Input type="text" name="affiliationTo" />
        </div>
        <div>
          <span>予算科目</span>
          <Input type="text" name="budgetItem" />
          <span>～</span>
          <Input type="text" name="budgetItemTo" />
        </div>
        <div>
          <label>
            <input type="checkbox" name="isIntegrated" />
            統合
          </label>
          <label>
            <input type="checkbox" name="isDetailed" />
            明細
          </label>
          <label>
            <input type="checkbox" name="isNew" />
            新規
          </label>
        </div>
      </Row>

      <Row>
        <Label>集計対象</Label>
        <label>
          <input
            type="radio"
            name="isMainJob"
            checked={reservationData.isNoSmoking}
            onChange={handleChange}
          />
          主体
        </label>
        <label>
          <input
            type="radio"
            name="isMainJob"
            checked={!reservationData.isNoSmoking}
            onChange={handleChange}
          />
          プロジェクト
        </label>
        <label>
          <input
            type="radio"
            name="isBudget"
            checked={reservationData.isCourseMenu}
            onChange={handleChange}
          />
          セグメント
        </label>
      </Row>

      <SubmitButton type="submit">OK</SubmitButton>
      <ClearButton type="button">クリア</ClearButton>
      <FinishButton type="button">終了</FinishButton>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Select = styled.select`
  padding: 0.5rem;
  border-radius: 4px;
`;

const Input = styled.input`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

const ClearButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: #6c757d;
  color: white;
  border: none;
  cursor: pointer;
`;

const FinishButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: #dc3545;
  color: white;
  border: none;
  cursor: pointer;
`;

// Usage example
const App: React.FC = () => {
  const handleSubmit = (data: ReservationData) => {
    console.log('Submitted data:', data);
  };

  return (
    <div>
      <h1>Reservation Form</h1>
      <ReservationForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;