import React from 'react';
import styled from 'styled-components';

// 施設決済セグメントの型定義
type Segment = {
  code: string;
  name: string;
  count: string;
};

// 決算金額の型定義
type Total = {
  total: number;
  tax: number;
};

// 施設決済セグメントコンポーネントのプロパティ型定義
type SegmentListProps = {
  segments: Segment[];
  total: Total;
};

// 施設決済セグメントコンポーネント
const SegmentList: React.FC<SegmentListProps> = ({ segments, total }) => {
  return (
    <Container>
      <Heading>施設決済セグメント全締調整（仕訳科目）</Heading>
      <SegmentTable>
        <thead>
          <tr>
            <HeaderCell colSpan={2}>令和02年度</HeaderCell>
            <HeaderCell colSpan={4}>性質</HeaderCell>
          </tr>
          <tr>
            <HeaderCell>振替</HeaderCell>
            <HeaderCell>業務</HeaderCell>
            <HeaderCell>公共下水道</HeaderCell>
            <HeaderCell>下水道事業収益</HeaderCell>
            <HeaderCell>営業収益</HeaderCell>
            <HeaderCell>下水道使用料</HeaderCell>
          </tr>
        </thead>
        <tbody>
          {segments.map((segment, index) => (
            <tr key={index}>
              <Cell>{segment.code}</Cell>
              <Cell>{segment.name}</Cell>
              <Cell>{segment.count}</Cell>
            </tr>
          ))}
          <tr>
            <Cell colSpan={2}>決算金額</Cell>
            <TotalCell>{total.total.toLocaleString()}</TotalCell>
            <TaxCell>千円</TaxCell>
          </tr>
        </tbody>
      </SegmentTable>
      <BottomContainer>
        <div>
          <Input type="radio" id="all" name="output" value="all" defaultChecked />
          <Label htmlFor="all">全額</Label>
          <Input type="radio" id="minus" name="output" value="minus" />
          <Label htmlFor="minus">構成比率</Label>
        </div>
        <InputTable>
          <tbody>
            <tr>
              <InputLabelCell>合計</InputLabelCell>
              <InputValueCell>{total.total.toLocaleString()}</InputValueCell>
              <InputTaxCell>{(total.tax / 10000).toLocaleString()}</InputTaxCell>
            </tr>
          </tbody>
        </InputTable>
      </BottomContainer>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <CancelButton>キャンセル</CancelButton>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータ
const sampleData = {
  segments: [
    { code: '171000011', name: '汚水', count: '107,840' },
    { code: '171000012', name: '雨水', count: '0' },
  ],
  total: {
    total: 107840,
    tax: 1000000,
  },
};

// 表示用コンポーネント
const App: React.FC = () => {
  return (
    <SegmentList segments={sampleData.segments} total={sampleData.total} />
  );
};

export default App;

// styled-components によるスタイリング
const Container = styled.div`
  font-family: sans-serif;
  padding: 20px;
`;

const Heading = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const SegmentTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const HeaderCell = styled.th`
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
`;

const Cell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: right;
`;

const TotalCell = styled(Cell)`
  font-weight: bold;
`;

const TaxCell = styled(Cell)`
  font-size: 12px;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Input = styled.input`
  margin-right: 5px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const InputTable = styled.table`
  border-collapse: collapse;
`;

const InputLabelCell = styled.td`
  padding: 5px;
  text-align: right;
`;

const InputValueCell = styled.td`
  padding: 5px;
  text-align: right;
  min-width: 100px;
`;

const InputTaxCell = styled.td`
  padding: 5px;
  text-align: right;
  font-size: 12px;
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

const Button = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  font-size: 14px;
`;

const CancelButton = styled(Button)`
  background-color: #f0f0f0;
  color: #333;
`;