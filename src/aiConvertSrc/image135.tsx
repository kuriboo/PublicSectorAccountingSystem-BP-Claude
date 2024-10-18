import React from 'react';
import styled from 'styled-components';

// 土地明細編集用のプロパティ定義
type LandDetailEditProps = {
  landNumber: string;
  acreage: number;
  owner: string;
  address: string;
  acquiredDate: string;
  registrationNumber: string;
  pricePerTsubo: number;
  tsubo: number;
  totalPrice: number;
  finalPrice: number;
  note: string;
};

// 土地明細編集コンポーネント
const LandDetailEdit: React.FC<LandDetailEditProps> = ({
  landNumber,
  acreage,
  owner,
  address,
  acquiredDate,
  registrationNumber,
  pricePerTsubo,
  tsubo,
  totalPrice,
  finalPrice,
  note,
}) => {
  return (
    <Container>
      <Row>
        <Label>土地明細編集</Label>
      </Row>
      <Row>
        <ItemLabel>異動年月日</ItemLabel>
        <Input type="text" value={acquiredDate} readOnly />
      </Row>
      <Row>
        <ItemLabel>整理番号</ItemLabel>
        <Input type="number" value={landNumber} />
        <ItemLabel>枚番号</ItemLabel>
        <Input type="number" value={1} readOnly />
      </Row>
      <Row>
        <ItemLabel>取得地名称</ItemLabel>
        <Input type="text" value={registrationNumber} />
      </Row>
      <Row>  
        <ItemLabel>地番</ItemLabel>
        <Input type="text" value={address} />
        <ItemLabel>地目</ItemLabel>
        <Input type="text" value="宅地" readOnly />
      </Row>
      <Row>
        <ItemLabel>登記年月日</ItemLabel>
        <Input type="text" value={acquiredDate} readOnly /> 
      </Row>
      <Row>
        <ItemLabel>単勝年月日</ItemLabel>
        <Input type="number" value={pricePerTsubo} />
        <ItemLabel>元所有者氏名</ItemLabel>
        <Input type="text" value={owner} />
      </Row>
      <Row>
        <ItemLabel>異動価額</ItemLabel>
        <PriceContainer>
          <PriceItem>
            <PriceLabel>公団単価</PriceLabel>
            <PriceValue>{totalPrice.toLocaleString()}</PriceValue>
          </PriceItem>
          <PriceItem>  
            <PriceLabel>実測単価</PriceLabel>
            <PriceValue>{finalPrice.toLocaleString()}</PriceValue>
          </PriceItem>
          <PriceItem>
            <PriceLabel>異動価額</PriceLabel>
            <PriceValue>{(tsubo * pricePerTsubo).toLocaleString()}</PriceValue>
          </PriceItem>
        </PriceContainer>
      </Row>
      <Row>
        <ItemLabel>摘要</ItemLabel>
        <Input type="text" value={note} />
      </Row>
      <ButtonRow>
        <Button>行確定</Button>
        <CancelButton>キャンセル</CancelButton>  
      </ButtonRow>
    </Container>
  );
};

// サンプルデータを使用した表示用コンポーネント
const LandDetailEditSample: React.FC = () => {
  const sampleData: LandDetailEditProps = {
    landNumber: '1200',
    acreage: 71,
    owner: '鈴木一郎',
    address: '東京都千代田区永田町1-1-1',
    acquiredDate: '2017-08-12',
    registrationNumber: '東京都行政財産 A-123',
    pricePerTsubo: 5000000,
    tsubo: 11,
    totalPrice: 7000,
    finalPrice: 7100, 
    note: '特記事項なし',
  };

  return <LandDetailEdit {...sampleData} />;
};

export default LandDetailEditSample;

// スタイリング用のコンポーネント
const Container = styled.div`
  font-size: 14px;
  padding: 20px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.div`
  font-weight: bold;
`;

const ItemLabel = styled.div`
  width: 120px;
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 5px;
  margin-right: 10px;
`;

const PriceContainer = styled.div`
  display: flex;
`;

const PriceItem = styled.div`
  margin-right: 20px;
`;

const PriceLabel = styled.div`
  font-size: 12px;
`;

const PriceValue = styled.div`
  font-weight: bold;
`;

const ButtonRow = styled.div`
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 5px 20px;
  margin-right: 10px;
`;

const CancelButton = styled(Button)`
  background-color: #ccc;
`;