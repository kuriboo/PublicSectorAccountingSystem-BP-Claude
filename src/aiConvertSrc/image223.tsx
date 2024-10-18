import React from 'react';
import styled from 'styled-components';

// 型定義
type WorkReportFormProps = {
  year: number;
  department: string;
  employeeNumber: string;
  date: string;
  referenceNumber?: string;
  cases?: number;
  price?: number;
  table: {
    date: string;
    cases: number;
    item: string;
    price: number;
    remarks: string;
  }[];
  remarks?: string;
  onSubmit: () => void;
  onCancel: () => void;
};

// スタイル定義
const Container = styled.div`
  font-family: sans-serif;
  padding: 20px;
`;

const InputRow = styled.div`
  display: flex;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;

  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.th`
  background-color: #f0f0f0;
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ccc;
`;

const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #eee;
`;

const ButtonGroup = styled.div`
  text-align: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  cursor: pointer;

  ${({ type }) => type === 'submit' && `
    background-color: #007BFF;
    color: white;
  `}

  ${({ type }) => type === 'cancel' && `
    background-color: #6c757d;
    color: white;
  `}
`;

// コンポーネント定義
const WorkReportForm: React.FC<WorkReportFormProps> = ({
  year,
  department,
  employeeNumber,
  date,
  referenceNumber = '',
  cases = 0,
  price = 0,
  table,
  remarks = '',
  onSubmit,
  onCancel,
}) => {
  return (
    <Container>
      <InputRow>
        <InputGroup>
          <Label>平成29年度</Label>
          <Input type="number" value={year} readOnly />
        </InputGroup>
        <InputGroup>
          <Label>処理日</Label>
          <Input type="text" value={date} readOnly />
        </InputGroup>
        <InputGroup>
          <Label>起案所属</Label>
          <Input type="text" value={department} readOnly />
        </InputGroup>
      </InputRow>

      <InputRow>
        <InputGroup>
          <Label>節</Label>
          <Input type="text" value={employeeNumber} readOnly />
        </InputGroup>
        <InputGroup>
          <Label>細節</Label>
          <Input type="text" value={referenceNumber} readOnly />
        </InputGroup>
        <InputGroup>
          <Label>予定額</Label>
          <Input type="number" value={price} readOnly />
        </InputGroup>
        <InputGroup>
          <Label>明細金額</Label>
          <Input type="number" value={cases} readOnly />
        </InputGroup>
      </InputRow>

      <InputRow>
        <InputGroup style={{ width: '100%' }}>
          <Label>摘要・工事名等所</Label>
          <Input type="text" value={remarks} readOnly />
        </InputGroup>
      </InputRow>

      <Table>
        <thead>
          <tr>
            <TableHeader>処理日</TableHeader>
            <TableHeader>予定番号</TableHeader>
            <TableHeader>支払種別</TableHeader>
            <TableHeader>予定額</TableHeader>
            <TableHeader>摘要</TableHeader>
          </tr>
        </thead>
        <tbody>
          {table.map((row, index) => (
            <tr key={index}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.cases}</TableCell>
              <TableCell>{row.item}</TableCell>
              <TableCell>{row.price.toLocaleString()}</TableCell>
              <TableCell>{row.remarks}</TableCell>
            </tr>
          ))}
        </tbody>
      </Table>

      <ButtonGroup>
        <Button type="button" onClick={onCancel}>クリア</Button>
        <Button type="submit" onClick={onSubmit}>OK</Button>
        <Button type="button">キャンセル</Button>
      </ButtonGroup>
    </Container>
  );
};

// サンプルデータ
const sampleData: WorkReportFormProps = {
  year: 29,
  department: '工事',
  employeeNumber: '68',
  date: '平成29年6月17日',
  referenceNumber: '000000',
  cases: 999999999,
  price: 999999999999,
  table: [
    { date: '29/06/17', cases: 69, item: '水道管工事', price: 50000, remarks: '' },
    { date: '29/06/17', cases: 70, item: '10000電気工事', price: 10000, remarks: '' },
    { date: '29/06/17', cases: 71, item: '20000舗装管理科', price: 20000, remarks: '' },
    { date: '29/06/17', cases: 72, item: '10000配管研修用図書', price: 10000, remarks: '' },
    { date: '29/06/17', cases: 73, item: '25000舗装管理科', price: 25000, remarks: '' },
    { date: '29/06/17', cases: 74, item: '11000図書館', price: 11000, remarks: '' },
    { date: '29/06/17', cases: 75, item: '1800電話料金', price: 1800, remarks: '' },
    { date: '29/06/17', cases: 76, item: '100000水道管工事', price: 100000, remarks: '' },
  ],
  remarks: '摘要・工事名等所',
  onSubmit: () => alert('Submit'),
  onCancel: () => alert('Cancel'),
};

// 表示用コンポーネント
export const WorkReportFormSample: React.FC = () => {
  return <WorkReportForm {...sampleData} />;
};
