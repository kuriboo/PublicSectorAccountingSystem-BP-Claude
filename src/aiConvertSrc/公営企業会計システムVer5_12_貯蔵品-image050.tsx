import React from 'react';
import styled from '@emotion/styled';

interface EntryStatusProps {
  title: string;
  reservationCode: string;
  processNumber: string;
  startDate: string;
  endDate: string;
}

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  border: none;
  border-radius: 3px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const EntryStatus: React.FC<EntryStatusProps> = ({
  title,
  reservationCode,
  processNumber,
  startDate,
  endDate,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <InputGroup>
        <Label>処理年月日</Label>
        <Input type="date" value={startDate} readOnly />
        <span>〜</span>
        <Input type="date" value={endDate} readOnly />
      </InputGroup>
      <InputGroup>
        <Label>予約場所</Label>
        <Input type="text" value={reservationCode} readOnly />
        <Label>保管場所A</Label>
      </InputGroup>
      <InputGroup>
        <Label>品番</Label>
        <Input type="text" value={processNumber} readOnly />
        <Label>〜</Label>
        <Input type="text" value="9999999999" readOnly />
      </InputGroup>
      <ActionButtons>
        <Button>CSV出力</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ActionButtons>
    </Container>
  );
};

// サンプル使用例
const SampleUsage: React.FC = () => {
  return (
    <EntryStatus
      title="入庫状況一覧"
      reservationCode="000001"
      processNumber="0000000000"
      startDate="2023-06-14"
      endDate="2023-08-14"
    />
  );
};

export default EntryStatus;