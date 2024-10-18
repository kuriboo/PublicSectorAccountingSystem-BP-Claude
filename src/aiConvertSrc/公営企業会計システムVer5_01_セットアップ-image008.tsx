import React from 'react';
import styled from 'styled-components';

// 指定工事店マスタの型定義
type ShopMasterProps = {
  code: string;
  name: string;
  address: string;
  phone: string;
};

// 指定工事店コンポーネント
const ShopMaster: React.FC<ShopMasterProps> = ({ code, name, address, phone }) => {
  return (
    <Container>
      <Title>指定工事店マスタ</Title>
      <Form>
        <Label>
          指定工事店コード
          <Input type="text" value={code} readOnly />
        </Label>
        <Label>
          名称
          <Input type="text" value={name} readOnly />
        </Label>
        <Label>
          略名
          <Input type="text" value={address} readOnly />
        </Label>
      </Form>
      <Table>
        <thead>
          <tr>
            <Th>指定工事店コード</Th>
            <Th>名称</Th>
            <Th>略称</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>{code}</Td>
            <Td>{name}</Td>
            <Td>{address}</Td>
          </tr>
        </tbody>
      </Table>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータを用いた使用例
const SampleShopMaster = () => {
  const sampleData: ShopMasterProps = {
    code: '000001',
    name: 'さょうせい',
    address: 'さょうせい',
    phone: 'さょうせい',
  };

  return <ShopMaster {...sampleData} />;
};

// スタイリング
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 8px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 16px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Input = styled.input`
  padding: 4px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
`;

const Th = styled.th`
  background-color: #ddd;
  padding: 8px;
  text-align: left;
`;

const Td = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ccc;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default SampleShopMaster;