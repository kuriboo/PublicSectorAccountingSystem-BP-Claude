// 予定登録コンポーネント
import React, { useState } from 'react';
import styled from '@emotion/styled';

type ScheduleInputProps = {
  onSubmit: (schedule: string) => void;
};

const ScheduleInput: React.FC<ScheduleInputProps> = ({ onSubmit }) => {
  const [schedule, setSchedule] = useState('');

  const handleSubmit = () => {
    if (schedule.trim() !== '') {
      onSubmit(schedule);
      setSchedule('');
    }
  };

  return (
    <Container>
      <Title>印刷対象帳票名</Title>
      <InputContainer>
        <Checkbox type="checkbox" id="bank-book" defaultChecked />
        <Label htmlFor="bank-book">予定負担行為伺書(一般)とりまとめ</Label>
      </InputContainer>
      <InputContainer>
        <Checkbox type="checkbox" id="general" />
        <Label htmlFor="general">予定負担行為伺書(一般)</Label>
      </InputContainer>
      <InputContainer>
        <Checkbox type="checkbox" id="sapporo-bid" />
        <Label htmlFor="sapporo-bid">入札執行依頼書(一般)</Label>
      </InputContainer>
      <ButtonContainer>
        <Button onClick={handleSubmit}>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  const handleScheduleSubmit = (schedule: string) => {
    console.log('Submitted schedule:', schedule);
  };

  return (
    <div>
      <h2>予定登録</h2>
      <ScheduleInput onSubmit={handleScheduleSubmit} />
    </div>
  );
};

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  background-color: #f0f0f0;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
`;

const Title = styled.h3`
  margin: 0 0 16px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Checkbox = styled.input`
  margin-right: 8px;
`;

const Label = styled.label`
  font-size: 14px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #0056b3;
  }
`;

export default SampleUsage;