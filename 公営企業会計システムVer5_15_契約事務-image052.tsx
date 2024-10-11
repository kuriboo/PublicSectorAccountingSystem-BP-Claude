import React from 'react';

// 確認画面コンポーネント
import { FC } from 'react';
import styled from '@emotion/styled';

type ConfirmData = {
  code: string;
  name: string;
};

interface ConfirmationProps {
  data: ConfirmData;
  onOk: () => void;
  onCancel: () => void;
}

const Confirmation: FC<ConfirmationProps> = ({ data, onOk, onCancel }) => {
  const { code, name } = data;

  return (
    <Container>
      <Title>保証人</Title>
      <DataTable>
        <thead>
          <tr>
            <HeaderCell>コード</HeaderCell>
            <HeaderCell>名称</HeaderCell>
          </tr>
        </thead>
        <tbody>
          <tr>
            <DataCell>{code}</DataCell>
            <DataCell>{name}</DataCell>
          </tr>
        </tbody>
      </DataTable>
      <ButtonGroup>
        <Button onClick={onOk}>OK</Button>
        <Button onClick={onCancel}>クリア</Button>
        <CancelButton>キャンセル</CancelButton>
      </ButtonGroup>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const DataTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
`;

const HeaderCell = styled.th`
  background-color: #e0e0e0;
  padding: 8px;
  text-align: left;
`;

const DataCell = styled.td`
  padding: 8px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const CancelButton = styled(Button)`
  background-color: #6c757d;

  &:hover {
    background-color: #545b62;
  }
`;

// 使用例
const sampleData: ConfirmData = {
  code: '0000001',
  name: 'きょうせい理設',
};

const ConfirmationExample: FC = () => {
  const handleOk = () => {
    // OKボタンがクリックされた時の処理
    console.log('OKがクリックされました');
  };

  const handleCancel = () => {
    // クリアボタンがクリックされた時の処理 
    console.log('クリアがクリックされました');
  };

  return <Confirmation data={sampleData} onOk={handleOk} onCancel={handleCancel} />;
};

export default Confirmation;