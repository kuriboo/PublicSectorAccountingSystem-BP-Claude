import React from 'react';
import styled from 'styled-components';

// 株式構成比率マスタの型定義
type StockCompositionMaster = {
  code: string;
  name: string;
  compositionRatio: number;
};

// 株式構成比率コンポーネントのプロパティの型定義
type StockCompositionRatioProps = {
  stockCompositionMasters: StockCompositionMaster[];
  totalCompositionRatio: number;
  onChangeCompositionRatio: (code: string, compositionRatio: number) => void;
};

// 株式構成比率コンポーネント
const StockCompositionRatio: React.FC<StockCompositionRatioProps> = ({
  stockCompositionMasters,
  totalCompositionRatio,
  onChangeCompositionRatio,
}) => {
  // 構成比率の変更ハンドラ
  const handleChangeCompositionRatio = (
    event: React.ChangeEvent<HTMLInputElement>,
    code: string
  ) => {
    const compositionRatio = Number(event.target.value);
    onChangeCompositionRatio(code, compositionRatio);
  };

  return (
    <Container>
      <Title>予算科目コード・按分率設定</Title>
      <Table>
        <thead>
          <tr>
            <TableHeader>科目コード</TableHeader>
            <TableHeader>科目名称</TableHeader>
            <TableHeader>構成比率</TableHeader>
          </tr>
        </thead>
        <tbody>
          {stockCompositionMasters.map((master) => (
            <TableRow key={master.code}>
              <TableData>{master.code}</TableData>
              <TableData>{master.name}</TableData>
              <TableData>
                <CompositionRatioInput
                  type="number"
                  value={master.compositionRatio}
                  onChange={(event) =>
                    handleChangeCompositionRatio(event, master.code)
                  }
                />
                %
              </TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>
      <TotalCompositionRatio>
        合計構成比率: {totalCompositionRatio.toFixed(4)}%
      </TotalCompositionRatio>
    </Container>
  );
};

// サンプルデータ
const sampleStockCompositionMasters: StockCompositionMaster[] = [
  { code: '0020101310101001', name: '本部)消耗品', compositionRatio: 35.2145 },
  { code: '0020101310101002', name: '本部)備品', compositionRatio: 45.0 },
  { code: '0020102131010001', name: '本部)消耗品', compositionRatio: 19.7855 },
];

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  const [stockCompositionMasters, setStockCompositionMasters] = React.useState(
    sampleStockCompositionMasters
  );

  const totalCompositionRatio = stockCompositionMasters.reduce(
    (total, master) => total + master.compositionRatio,
    0
  );

  const handleChangeCompositionRatio = (code: string, compositionRatio: number) => {
    setStockCompositionMasters((prevMasters) =>
      prevMasters.map((master) =>
        master.code === code ? { ...master, compositionRatio } : master
      )
    );
  };

  return (
    <StockCompositionRatio
      stockCompositionMasters={stockCompositionMasters}
      totalCompositionRatio={totalCompositionRatio}
      onChangeCompositionRatio={handleChangeCompositionRatio}
    />
  );
};

// スタイリング
const Container = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ccc;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableData = styled.td`
  padding: 8px;
`;

const CompositionRatioInput = styled.input`
  width: 80px;
`;

const TotalCompositionRatio = styled.div`
  margin-top: 16px;
  font-weight: bold;
`;

export default SampleUsage;