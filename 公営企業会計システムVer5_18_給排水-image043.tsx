import React from 'react';
import styled from 'styled-components';

// 形状リストの型定義
type ShapeList = {
  text: string;
  value: number;
}[];

// コンポーネントのプロパティの型定義
type Props = {
  title: string;
  shapeList: ShapeList;
  defaultShape: number;
  onChangeShape: (value: number) => void;
  sizeList: { width: number; height: number; price: number }[];
  defaultSize: number;
  onChangeSize: (value: number) => void;
  defaultQuantity: number;
  onChangeQuantity: (value: number) => void;
  discountPercent: number;
  discountAmount: number;
  onClickOK: () => void;
  onClickClear: () => void;
  onClickCancel: () => void;
};

// スタイル定義
const Container = styled.div`
  font-family: sans-serif;
  background-color: #f0f0f0;
  padding: 16px;
  width: 400px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Label = styled.div`
  width: 100px;
`;

const Select = styled.select`
  width: 100px;
  height: 30px;
  margin-right: 8px;
`;

const Input = styled.input`
  width: 100px;
  height: 26px;
  margin-right: 8px;
`;

const Unit = styled.span`
  margin-left: 4px;
`;

const PriceText = styled.div`
  margin-top: 16px;
  text-align: right;
  font-size: 24px;
`;

const ButtonContainer = styled.div`
  margin-top: 16px;
  text-align: center;
`;

const Button = styled.button`
  font-size: 16px;
  padding: 8px 16px;
  margin: 0 8px;
`;

// メインコンポーネント
const PriceCalculator: React.FC<Props> = ({
  title,
  shapeList,
  defaultShape,
  onChangeShape,
  sizeList,
  defaultSize,
  onChangeSize,
  defaultQuantity,
  onChangeQuantity,
  discountPercent,
  discountAmount,
  onClickOK,
  onClickClear,
  onClickCancel,
}) => {
  const selectedSize = sizeList[defaultSize];
  const price = selectedSize ? selectedSize.price : 0;
  const totalPrice = price * defaultQuantity;
  const discountedPrice = totalPrice * (1 - discountPercent / 100) - discountAmount;

  return (
    <Container>
      <Title>{title}</Title>
      <Row>
        <Label>形状名称</Label>
        <Select
          value={defaultShape}
          onChange={(e) => onChangeShape(Number(e.target.value))}
        >
          {shapeList.map((shape, index) => (
            <option key={index} value={index}>
              {shape.text}
            </option>
          ))}
        </Select>
      </Row>
      <Row>
        <Label>形状寸法</Label>
        <Select
          value={defaultSize}
          onChange={(e) => onChangeSize(Number(e.target.value))}
        >
          {sizeList.map((size, index) => (
            <option key={index} value={index}>
              {size.width} × {size.height}
            </option>
          ))}
        </Select>
        <Unit>mm</Unit>
      </Row>
      <Row>
        <Label>単価</Label>
        <Input type="number" value={price} readOnly />
        <Unit>円</Unit>
      </Row>
      <Row>
        <Label>数量</Label>
        <Input
          type="number"
          value={defaultQuantity}
          onChange={(e) => onChangeQuantity(Number(e.target.value))}
        />
        <Unit>個</Unit>
      </Row>
      <Row>
        <Label>消費税率</Label>
        <Input type="number" value={discountPercent} readOnly />
        <Unit>%</Unit>
      </Row>
      <PriceText>金額 {Math.round(discountedPrice).toLocaleString()} 円</PriceText>
      <ButtonContainer>
        <Button onClick={onClickOK}>OK</Button>
        <Button onClick={onClickClear}>クリア</Button>
        <Button onClick={onClickCancel}>キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

export default PriceCalculator;

// 使用例
const sampleData = {
  title: '納付分類',
  shapeList: [
    { text: '〇形変更', value: 1 },
    { text: '□径変更', value: 2 },
  ],
  defaultShape: 0,
  sizeList: [
    { width: 13, height: 20, price: 210000 },
    { width: 20, height: 20, price: 210000 },
    { width: 25, height: 25, price: 420000 },
    { width: 30, height: 30, price: 525000 },
    { width: 40, height: 40, price: 1050000 },
    { width: 50, height: 50, price: 1575000 },
  ],
  defaultSize: 1,
  defaultQuantity: 1,
  discountPercent: 0,
  discountAmount: 0,
};

export const PriceCalculatorSample: React.FC = () => {
  const [shape, setShape] = React.useState(sampleData.defaultShape);
  const [size, setSize] = React.useState(sampleData.defaultSize);
  const [quantity, setQuantity] = React.useState(sampleData.defaultQuantity);

  return (
    <PriceCalculator
      title={sampleData.title}
      shapeList={sampleData.shapeList}
      defaultShape={shape}
      onChangeShape={setShape}
      sizeList={sampleData.sizeList}
      defaultSize={size}  
      onChangeSize={setSize}
      defaultQuantity={quantity}
      onChangeQuantity={setQuantity}
      discountPercent={sampleData.discountPercent}
      discountAmount={sampleData.discountAmount}
      onClickOK={() => alert('OK')}
      onClickClear={() => {
        setShape(sampleData.defaultShape);
        setSize(sampleData.defaultSize);
        setQuantity(sampleData.defaultQuantity);
      }}
      onClickCancel={() => alert('キャンセル')}
    />
  );
};