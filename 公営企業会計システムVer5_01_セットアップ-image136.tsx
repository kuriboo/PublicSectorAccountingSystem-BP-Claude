import React from 'react';
import styled from '@emotion/styled';

interface MasterData {
  code: string;
  name: string;
  kana: string;
}

interface StoreProps {
  code: string;
  name: string;
  address: string;
  phone: string;
  masterData: MasterData[];
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
`;

const Row = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Label = styled.label`
  width: 100px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;

const Store: React.FC<StoreProps> = ({ code, name, address, phone, masterData }) => {
  return (
    <Container>
      <Row>
        <Label>コード</Label>
        <Input type="text" value={code} readOnly />
      </Row>
      <Row>  
        <Label>支店</Label>
        <Input type="text" defaultValue={name} />
      </Row>
      <Row>
        <Label>名称</Label>
        <Select defaultValue={address}>
          <option value="">選択してください</option>
          {masterData.map((data) => (
            <option key={data.code} value={data.code}>
              {data.name}
            </option>
          ))}
        </Select>
      </Row>
      <Row>
        <Label>FD用カナ名称</Label>
        <Input type="text" defaultValue={phone} />
      </Row>
      <ButtonGroup>
        <Button>前データ</Button>
        <Button>次データ</Button>
        <Button>確定</Button>
        <Button>行削除</Button>
        <Button>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// 使用例
const sampleData: MasterData[] = [
  { code: '001', name: '東京営業部', kana: 'トウキョウエイギョウブ' },
  { code: '005', name: '丸之内支店', kana: 'マルノウチシテン' },
  { code: '008', name: '神田駅前支店', kana: 'カンダエキマエシテン' },
  // ... 他のサンプルデータ
];

const SampleUsage: React.FC = () => {
  return (
    <Store
      code="0001"
      name="みずほ銀行"
      address="東京営業部"
      phone="トウキョウエイギョウブ"
      masterData={sampleData}
    />
  );
};

export default Store;