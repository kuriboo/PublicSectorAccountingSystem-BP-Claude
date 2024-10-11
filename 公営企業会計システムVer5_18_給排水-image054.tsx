import React from 'react';
import styled from '@emotion/styled';

// 形状オプションの型定義
type Shape = '丸棒' | '異形';

// 納付方法オプションの型定義
type PaymentMethod = 'TO加入負担金' | '口座振替'; 

interface PriceCalculatorProps {
  shape?: Shape;
  paymentMethod?: PaymentMethod;
}

// 価格表の型定義
interface PriceData {
  shape: Shape;
  size: number;
  length: string;
  price: number;
}

const PriceCalculator: React.FC<PriceCalculatorProps> = ({ 
  shape = '丸棒',
  paymentMethod = 'TO加入負担金',
}) => {
  // 価格表データ
  const priceData: PriceData[] = [
    { shape: '丸棒', size: 13, length: '13mm', price: 157500 },
    { shape: '丸棒', size: 20, length: '20mm', price: 210000 },
    { shape: '丸棒', size: 25, length: '25mm', price: 420000 },
    { shape: '丸棒', size: 30, length: '30mm', price: 525000 },
    { shape: '丸棒', size: 40, length: '40mm', price: 1050000 },
    { shape: '丸棒', size: 50, length: '50mm', price: 1575000 },
  ];

  // 選択されたサイズ
  const [selectedSize, setSelectedSize] = React.useState<number>(13);

  // サイズ変更ハンドラ
  const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSize(Number(event.target.value));
  };

  // 選択されたサイズの価格を取得
  const selectedPrice = priceData.find(data => data.size === selectedSize)?.price || 0;

  return (
    <Container>
      <Title>納付分類</Title>
      <Row>
        <Label>＜口座選択＞</Label>
        <Select>
          <option>形状名称</option>
        </Select>
        <span>→</span>
        <Select value={selectedSize} onChange={handleSizeChange}>
          {priceData.map(data => (
            <option key={data.size} value={data.size}>{data.length}</option>
          ))}
        </Select>
      </Row>
      <Row>
        <Label>形状</Label>
        <ShapeButton active={shape === '丸棒'}>丸棒</ShapeButton>
        <ShapeButton active={shape === '異形'}>異形</ShapeButton>
      </Row>
      <Row>
        <Label>単価</Label>
        <Price>{selectedPrice.toLocaleString()}</Price>
        <Label>数量</Label>
        <Input type="number" defaultValue={1} />
      </Row>
      <Row>
        <Label>金額</Label>
        <Price>{selectedPrice.toLocaleString()}</Price>
        <Label>消費税率</Label>
        <span>%</span>
      </Row>
      <Row>
        <Label>消費税額</Label>
        <div>0</div>
      </Row>
      <Buttons>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button primary>キャンセル</Button>
      </Buttons>
    </Container>
  );
};

// サンプルデータを使用した表示用のコンポーネント
const App: React.FC = () => {
  return (
    <div>
      <h1>価格計算コンポーネント</h1>
      <PriceCalculator shape="丸棒" paymentMethod="TO加入負担金" />
    </div>
  );
};

export default App;

// スタイリングコンポーネント
const Container = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Select = styled.select`
  padding: 5px;
  margin-right: 10px;
`;

const ShapeButton = styled.button<{ active: boolean }>`
  padding: 5px 10px;
  margin-right: 10px;
  background-color: ${({ active }) => (active ? '#007bff' : '#fff')};
  color: ${({ active }) => (active ? '#fff' : '#000')};
  border: 1px solid #007bff;
  border-radius: 5px;
  cursor: pointer;
`;

const Price = styled.span`
  font-weight: bold;
  margin-right: 20px;
`;

const Input = styled.input`
  padding: 5px;
  margin-right: 10px;
`;

const Buttons = styled.div`
  margin-top: 20px;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 8px 15px;
  margin-right: 10px;
  background-color: ${({ primary }) => (primary ? '#dc3545' : '#007bff')};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;