import React from 'react';
import styled from 'styled-components';

// 科目別性質管理保守の型定義
type SubjectMaintenanceProps = {
  accountYear: string;
  table: {
    subjectCode: string;
    segment: string;
  }[];
  onAdd: () => void;
  onConfirm: () => void;
  onCancel: () => void;
};

// スタイル定義
const Container = styled.div`
  font-family: 'メイリオ', Meiryo, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const InputSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Select = styled.select`
  padding: 5px;
  font-size: 14px;
`;

const Input = styled.input`
  padding: 5px;
  font-size: 14px;
`;

const Table = styled.table`
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.th`
  border: 1px solid #ccc;
  padding: 10px;
  background-color: #f0f0f0;
`;

const TableCell = styled.td`
  border: 1px solid #ccc;
  padding: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  margin-left: 10px;
  cursor: pointer;
`;

// 科目別性質管理保守コンポーネント
const SubjectMaintenance: React.FC<SubjectMaintenanceProps> = ({
  accountYear,
  table,
  onAdd,
  onConfirm,
  onCancel,
}) => {
  return (
    <Container>
      <Title>科目別性質管理保守</Title>
      <div>
        <Label>会計年度</Label>
        <span>{accountYear}</span>
      </div>
      <InputSection>
        <Label>会計区分</Label>
        <Select>
          <option>--</option>
        </Select>
        <Input type="text" placeholder="管理区分" />
      </InputSection>
      <Table>
        <thead>
          <tr>
            <TableHeader>科目コード</TableHeader>
            <TableHeader>セグメント</TableHeader>
          </tr>
        </thead>
        <tbody>
          {table.map((row, index) => (
            <tr key={index}>
              <TableCell>{row.subjectCode}</TableCell>
              <TableCell>{row.segment}</TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        <Button onClick={onAdd}>科目</Button>
        <Button onClick={onConfirm}>確定</Button>
        <Button onClick={onCancel}>終了</Button>
      </div>
    </Container>
  );
};

// サンプルデータを用いた使用例
const SampleSubjectMaintenance: React.FC = () => {
  const sampleData = {
    accountYear: '平成29年06月31日',
    table: [
      { subjectCode: '001', segment: '管理名称' },
    ],
  };

  const handleAdd = () => {
    console.log('科目ボタンがクリックされました');
  };

  const handleConfirm = () => {
    console.log('確定ボタンがクリックされました');
  };

  const handleCancel = () => {
    console.log('終了ボタンがクリックされました');
  };

  return (
    <SubjectMaintenance
      accountYear={sampleData.accountYear}
      table={sampleData.table}
      onAdd={handleAdd}
      onConfirm={handleConfirm}
      onCancel={handleCancel}
    />
  );
};

export default SampleSubjectMaintenance;