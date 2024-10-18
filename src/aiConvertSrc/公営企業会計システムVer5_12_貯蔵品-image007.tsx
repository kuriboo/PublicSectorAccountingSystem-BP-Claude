import React from 'react';
import styled from 'styled-components';

// 入庫明細データの型定義
type InventoryData = {
  date: string;
  unit_price: number;
  quantity: number;
  total_price: number;
  age: number;
  age_in_days: number;
};

// コンポーネントのプロパティの型定義
type InventoryDetailProps = {
  data: InventoryData;
};

// スタイル定義
const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.th`
  text-align: left;
  background-color: #f2f2f2;
  padding: 8px;
  border: 1px solid #ddd;
`;

const TableData = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
`;

const Label = styled.span`
  font-weight: bold;
`;

// 入庫明細コンポーネント
const InventoryDetail: React.FC<InventoryDetailProps> = ({ data }) => {
  // 入庫明細データが存在するかチェック
  if (!data) {
    return <div>入庫明細データがありません。</div>;
  }

  return (
    <Container>
      <Title>入庫明細照会（先入先出）</Title>
      <Table>
        <tbody>
          <tr>
            <TableHeader>品番</TableHeader>
            <TableData>1000098000</TableData>
          </tr>
          <tr>
            <TableHeader>品名</TableHeader>
            <TableData>DIP(A1)精密管</TableData>
          </tr>
          <tr>
            <TableHeader>規格</TableHeader>
            <TableData>φ7.5</TableData>
          </tr>
        </tbody>
      </Table>
      <Table>
        <thead>
          <tr>
            <TableHeader>入庫日</TableHeader>
            <TableHeader>数量</TableHeader>
            <TableHeader>単価</TableHeader>
            <TableHeader>金額</TableHeader>
            <TableHeader>経過年数</TableHeader>
            <TableHeader>経過日数</TableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableData>{data.date}</TableData>
            <TableData>{data.quantity}</TableData>
            <TableData>{data.unit_price}</TableData>
            <TableData>{data.total_price}</TableData>
            <TableData>{data.age}</TableData>
            <TableData>{data.age_in_days}</TableData>
          </tr>
        </tbody>
      </Table>
      <div>
        <Label>当初入庫年度: </Label>
        平成28年
      </div>
      <div>
        <Label>当初入庫番号: </Label>
        62
      </div>
      <div>
        <Label>棚番: </Label>
        10.00
      </div>
      <div>
        <Label>単位: </Label>
        本
      </div>
      <div>
        <Label>金額: </Label>
        100.00
      </div>
      <div>
        <Label>入庫日: </Label>
        平成28年09月15日
      </div>
    </Container>
  );
};

// サンプルデータ
const sampleData: InventoryData = {
  date: '2017/09/15',
  unit_price: 10.00,
  quantity: 11.00,
  total_price: 100.00,
  age: 5,
  age_in_days: 60,
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <InventoryDetail data={sampleData} />
    </div>
  );
};

export default App;