import React from 'react';
import styled from 'styled-components';

// 収納登録コンポーネントの型定義
type RegistrationProps = {
  date: string;
  accountNumber: string;
  branchCode: string;
  amount: number;
  tax: number;
  sectionCode: string;
  onSubmit: () => void;
  onCancel: () => void;
  onClear: () => void;
};

// スタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: 100%;
  max-width: 300px;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ccc;
`;

const TableData = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ccc;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// 収納登録コンポーネント
const Registration: React.FC<RegistrationProps> = ({
  date,
  accountNumber,
  branchCode,
  amount,
  tax,
  sectionCode,
  onSubmit,
  onCancel,
  onClear,
}) => {
  return (
    <Container>
      <Title>収納登録</Title>
      <FormGroup>
        <Label>年月日</Label>
        <Input type="text" value={date} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>預金者</Label>
        <Input type="text" value={accountNumber} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>適用者</Label>
        <Input type="text" value={branchCode} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>納入期限</Label>
        <Input type="text" value={date} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>工事店</Label>
        <Input type="text" />
      </FormGroup>
      <Table>
        <thead>
          <tr>
            <TableHeader>節</TableHeader>
            <TableHeader>細節</TableHeader>
            <TableHeader>明細</TableHeader>
            <TableHeader>税</TableHeader>
            <TableHeader>納定金額</TableHeader>
            <TableHeader>内消費税額</TableHeader>
            <TableHeader>特定収入</TableHeader>
            <TableHeader>収納金額</TableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableData>{sectionCode}</TableData>
            <TableData>0000</TableData>
            <TableData>現金</TableData>
            <TableData>課税</TableData>
            <TableData>{amount}</TableData>
            <TableData>{tax}</TableData>
            <TableData>0</TableData>
            <TableData>{amount}</TableData>
          </tr>
        </tbody>
      </Table>
      <ButtonGroup>
        <Button onClick={onSubmit}>確定</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onClear}>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// サンプルデータを用いた使用例
const SampleData: React.FC = () => {
  const handleSubmit = () => {
    // 確定ボタンが押された時の処理
    console.log('確定ボタンが押されました');
  };

  const handleCancel = () => {
    // クリアボタンが押された時の処理
    console.log('クリアボタンが押されました');
  };

  const handleClear = () => {
    // 終了ボタンが押された時の処理
    console.log('終了ボタンが押されました');
  };

  return (
    <Registration
      date="平成30年02月27日"
      accountNumber="5677890123456789012"
      branchCode="5677890123456789012"
      amount={157800}
      tax={0}
      sectionCode="0530"
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      onClear={handleClear}
    />
  );
};

export default SampleData;