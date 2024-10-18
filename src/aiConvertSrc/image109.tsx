import React from 'react';
import styled from '@emotion/styled';

type InternalCode = '001001';

type Appointment = {
  internalCode: InternalCode;
  name: string;
  reservationDate: string;
  time: string;
  content: string;
};

type Props = {
  appointments: Appointment[];
  onPrev: () => void;
  onNext: () => void;
  onOk: () => void;
  onCancel: () => void;
  onFinish: () => void;
};

const Container = styled.div`
  font-family: sans-serif;
  background: #f0f0f0;
  padding: 16px;
  width: 100%;
  box-sizing: border-box;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 8px;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Label = styled.label`
  margin-right: 8px;
  min-width: 100px;

  @media (max-width: 600px) {
    margin-bottom: 4px;
  }
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 1;
`;

const Select = styled.select`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;

  button {
    margin-left: 8px;
  }
`;

const AppointmentInput: React.FC<Props> = ({ 
  appointments,
  onPrev,
  onNext,
  onOk,
  onCancel,
  onFinish
}) => {
  const currentAppointment = appointments[0]; // Assuming only one appointment for simplicity

  if (!currentAppointment) {
    return <div>No appointment data.</div>;
  }

  return (
    <Container>
      <h2>予約事項修正</h2>
      <Row>
        <Label>内部コード</Label>
        <div>{currentAppointment.internalCode}</div>
      </Row>
      <Row>
        <Label>自由設定項目コード</Label>
        <Input type="text" value="8002200" readOnly />
      </Row>
      <Row>
        <Label>内容</Label>
        <TextArea value={currentAppointment.content} rows={3} readOnly />
      </Row>
      <table>
        <thead>
          <tr>
            <th>自由設定項目コード</th>
            <th>内容</th>
            <th>予約番号1</th>
            <th>内容</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>001001</td>
            <td>{currentAppointment.name}</td>
            <td>{currentAppointment.reservationDate}</td>
            <td>{currentAppointment.content}</td>
          </tr>
        </tbody>
      </table>
      <ButtonRow>
        <button onClick={onPrev}>前データ</button>
        <button onClick={onNext}>次データ</button>
        <button onClick={onOk}>OK</button>
        <button onClick={onCancel}>クリア</button>
        <button onClick={onFinish}>終了</button>
      </ButtonRow>
    </Container>
  );
};

// Usage example
const sampleAppointments: Appointment[] = [
  {
    internalCode: '001001',
    name: '田中太郎',
    reservationDate: '29年09月12日',
    time: '08:30',
    content: '◯◯医院へ電話連絡',
  },
];

const AppointmentInputExample: React.FC = () => {
  const handlePrev = () => {
    console.log('Previous');
  };

  const handleNext = () => {
    console.log('Next');
  };

  const handleOk = () => {
    console.log('OK');
  };

  const handleCancel = () => {
    console.log('Cancel');
  };

  const handleFinish = () => {
    console.log('Finish');
  };

  return (
    <AppointmentInput
      appointments={sampleAppointments}
      onPrev={handlePrev}
      onNext={handleNext}
      onOk={handleOk}
      onCancel={handleCancel}
      onFinish={handleFinish}
    />
  );
};

export default AppointmentInputExample;