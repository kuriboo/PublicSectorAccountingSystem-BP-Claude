import React from 'react';
import styled from 'styled-components';

// 管理者称マスタ保守コンポーネントのプロパティ型定義
type AdminNameMasterProps = {
  segment: string;
  name: string;
  nameReading: string;
};

// 管理者称マスタ保守コンポーネント
const AdminNameMaster: React.FC<AdminNameMasterProps> = ({ segment, name, nameReading }) => {
  return (
    <Container>
      <Title>管理者称マスタ保守</Title>
      <ButtonGroup>
        <Button>登録</Button>
        <Button>訂正</Button>
        <Button>削除</Button>
      </ButtonGroup>
      <InputGroup>
        <Label>セグメント</Label>
        <Input type="text" value={segment} readOnly />
      </InputGroup>
      <InputGroup>
        <Label>名称</Label>
        <Input type="text" value={name} />
      </InputGroup>
      <InputGroup>
        <Label>略名称</Label>
        <Input type="text" value={nameReading} />
      </InputGroup>
      <ButtonGroup>
        <Button primary>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// 管理者称マスタ保守コンポーネントのスタイリング
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 8px 16px;
  background-color: ${({ primary }) => (primary ? '#007bff' : '#fff')};
  color: ${({ primary }) => (primary ? '#fff' : '#007bff')};
  border: 1px solid #007bff;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ primary }) => (primary ? '#0056b3' : '#f0f0f0')};
  }
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Label = styled.label`
  width: 100px;
  margin-right: 8px;
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 1;
`;

// サンプルデータを用いた管理者称マスタ保守コンポーネントの使用例
const AdminNameMasterExample: React.FC = () => {
  const sampleData: AdminNameMasterProps = {
    segment: '01',
    name: '管理者称',
    nameReading: '管理者称',
  };

  return <AdminNameMaster {...sampleData} />;
};

export default AdminNameMasterExample;