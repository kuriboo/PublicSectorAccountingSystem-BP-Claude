import React from 'react';
import styled from 'styled-components';

// 車両情報の型定義
type VehicleInfo = {
  code: string;
  name: string;
  maker: string;
  price: number;
  registrationYear: number;
  mileage: number;
};

// スタイル定義
const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Label = styled.span`
  font-weight: bold;
`;

const Value = styled.span``;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
  margin: 20px 0;
`;

const Price = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: right;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-right: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

// 車両情報コンポーネント
const VehicleInfoComponent: React.FC<{ info: VehicleInfo }> = ({ info }) => {
  // 値が存在しない場合のデフォルト値を設定
  const {
    code = '',
    name = '',
    maker = '',
    price = 0,
    registrationYear = 0,
    mileage = 0,
  } = info;

  return (
    <Container>
      <Row>
        <Label>車両コード</Label>
        <Value>{code}</Value>
      </Row>
      <Row>
        <Label>車両名称</Label>
        <Value>{name}</Value>
      </Row>
      <Row>
        <Label>車両規格</Label>
        <Value>{maker}</Value>
      </Row>
      <Divider />
      <Row>
        <Label>適用開始年月日</Label>
        <Value>{registrationYear}年04月01日</Value>
      </Row>
      <Row>
        <Label>車価</Label>
        <Price>{price.toLocaleString()}円</Price>
      </Row>
      <ButtonContainer>
        <Button>前データ</Button>
        <Button>次データ</Button>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータ
const sampleVehicleInfo: VehicleInfo = {
  code: '00001',
  name: '派特塩素',
  maker: '1トンハイブリッド',
  price: 1200000,
  registrationYear: 2022,
  mileage: 5000,
};

// 使用例
const VehicleInfoExample: React.FC = () => {
  return <VehicleInfoComponent info={sampleVehicleInfo} />;
};

export default VehicleInfoExample;