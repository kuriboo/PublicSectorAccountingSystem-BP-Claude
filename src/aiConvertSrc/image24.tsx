import React from 'react';
import styled from 'styled-components';

// 型定義
type FormInputType = '10加入負担率' | '口径変数';
type PriceListType = {
  diameter: number;
  length: string;
  price: number;
}[];

// スタイル定義
const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
`;

const InputGroup = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: inline-block;
  width: 100px;
`;

const Select = styled.select`
  width: 200px;
  padding: 5px;
`;

const Input = styled.input`
  width: 100px;
  padding: 5px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 10px;
`;

const TableHeader = styled.th`
  border: 1px solid #ccc;
  padding: 5px;
  text-align: center;
`;

const TableCell = styled.td`
  border: 1px solid #ccc;
  padding: 5px;
  text-align: right;
`;

const Result = styled.div`
  text-align: right;
  margin-bottom: 10px;
`;

const ButtonGroup = styled.div`
  text-align: center;
`;

const Button = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
`;

// メインコンポーネント
const PriceCalculator: React.FC = () => {
  // 状態管理
  const [formInputType, setFormInputType] = React.useState<FormInputType>('10加入負担率');
  const [pipeChangeType, setPipeChangeType] = React.useState<string>('30給水管口径変更工事');
  const [priceList, setPriceList] = React.useState<PriceListType>([
    { diameter: 13, length: '13mm', price: 157500 },
    { diameter: 20, length: '20mm', price: 210000 },
    { diameter: 25, length: '25mm', price: 420000 },
    { diameter: 30, length: '30mm', price: 525000 },
    { diameter: 40, length: '40mm', price: 1050000 },
    { diameter: 50, length: '50mm', price: 1575000 },
  ]);
  const [selectedDiameter, setSelectedDiameter] = React.useState<number>(50);
  const [count, setCount] = React.useState<number>(1);
  const [discountRate, setDiscountRate] = React.useState<number>(0);

  // 選択された口径の単価を取得
  const selectedPrice = priceList.find((item) => item.diameter === selectedDiameter)?.price ?? 0;

  // 消費税計算
  const taxRate = 0.1;
  const taxAmount = Math.round(selectedPrice * count * (1 - discountRate / 100) * taxRate);

  // 合計金額計算
  const totalPrice = selectedPrice * count * (1 - discountRate / 100) + taxAmount;

  return (
    <Container>
      <InputGroup>
        <Label>納付方式</Label>
        <Select value={formInputType} onChange={(e) => setFormInputType(e.target.value as FormInputType)}>
          <option value="10加入負担率">10加入負担率</option>
          <option value="口径変数">口径変数</option>
        </Select>
      </InputGroup>
      <InputGroup>
        <Label>口径選択</Label>
        <Select value={pipeChangeType} onChange={(e) => setPipeChangeType(e.target.value)}>
          <option value="30給水管口径変更工事">30給水管口径変更工事</option>
        </Select>
      </InputGroup>
      <Table>
        <thead>
          <tr>
            <TableHeader>形状コード</TableHeader>
            <TableHeader>形状名称</TableHeader>
            <TableHeader>単価</TableHeader>
          </tr>
        </thead>
        <tbody>
          {priceList.map((item) => (
            <tr key={item.diameter}>
              <TableCell>{item.diameter}</TableCell>
              <TableCell>{item.length}</TableCell>
              <TableCell>{item.price.toLocaleString()}</TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
      <InputGroup>
        <Label>形状</Label>
        <Input
          type="number"
          value={selectedDiameter}
          onChange={(e) => setSelectedDiameter(Number(e.target.value))}
        />
      </InputGroup>
      <InputGroup>
        <Label>数量</Label>
        <Input type="number" value={count} onChange={(e) => setCount(Number(e.target.value))} />
      </InputGroup>
      <InputGroup>
        <Label>金額</Label>
        <Input type="number" value={selectedPrice * count} readOnly />
      </InputGroup>
      <InputGroup>
        <Label>消費税率</Label>
        <Input type="number" value={taxRate * 100} readOnly />
      </InputGroup>
      <InputGroup>
        <Label>%</Label>
        <Input
          type="number"
          value={discountRate}
          onChange={(e) => setDiscountRate(Number(e.target.value))}
        />
      </InputGroup>
      <Result>
        <Label>消費税額</Label>
        <span>{taxAmount.toLocaleString()}</span>
      </Result>
      <Result>
        <Label>税込</Label>
        <span>{totalPrice.toLocaleString()}</span>
      </Result>
      <ButtonGroup>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonGroup>
    </Container>
  );
};

export default PriceCalculator;