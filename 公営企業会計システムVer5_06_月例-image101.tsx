import React from 'react';
import styled from '@emotion/styled';

interface FormProps {
  fromDate: string;
  toDate: string;
  workCode: string;
  absenceType: '全体' | 'ブロック' | 'セグメント';
  includeTransfer?: boolean;
  includeAbsence?: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-width: 400px;
  margin: 0 auto;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Form: React.FC<FormProps> = ({
  fromDate,
  toDate,
  workCode,
  absenceType,
  includeTransfer = false,
  includeAbsence = false,
}) => {
  return (
    <Container>
      <Label>範囲指定</Label>
      <div>
        <Label>
          From: 
          <Input type="date" value={fromDate} readOnly />
        </Label>
        <Label>
          To: 
          <Input type="date" value={toDate} readOnly />
        </Label>
      </div>
      <div>
        <Label>
          仕訳科目: 
          <Input type="text" value={workCode} readOnly />
        </Label>
      </div>
      <div>
        <Label>Absence Type:</Label>
        <Select value={absenceType}>
          <option value="全体">全体</option>
          <option value="ブロック">ブロック</option>
          <option value="セグメント">セグメント</option>
        </Select>
      </div>
      <div>
        <Label>
          <Checkbox type="checkbox" checked={includeTransfer} readOnly />
          転籍のみ保存
        </Label>
      </div>
      <div>
        <Label>
          <Checkbox type="checkbox" checked={includeAbsence} readOnly />
          歯格請求書発行事業者以外のみの伝票
        </Label>
      </div>
      <SubmitButton>終了</SubmitButton>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  return (
    <Form
      fromDate="2023-04-01"
      toDate="2023-08-31" 
      workCode="99999"
      absenceType="全体"
      includeTransfer={true}
    />
  );
};

export default App;