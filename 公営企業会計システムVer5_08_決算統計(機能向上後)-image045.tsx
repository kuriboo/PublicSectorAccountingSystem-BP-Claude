import React from 'react';
import styled from 'styled-components';

// 施設決算セグメントの型定義
type SegmentData = {
  id: string;
  name: string;
  ratio: number;
};

// コンポーネントのProps型定義
type SegmentTableProps = {
  data: SegmentData[];
  onSegmentChange: (segment: SegmentData) => void;
};

// スタイル定義
const TableContainer = styled.div`
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 8px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  text-align: center;
`;

const TableCell = styled.td`
  padding: 8px;
  border: 1px solid #ccc;
  text-align: center;
`;

const RatioInput = styled.input`
  width: 60px;
`;

// 施設決算セグメントテーブルコンポーネント
const SegmentTable: React.FC<SegmentTableProps> = ({ data, onSegmentChange }) => {
  // 構成比の合計を計算
  const totalRatio = data.reduce((sum, segment) => sum + segment.ratio, 0);

  // 構成比の変更ハンドラ
  const handleRatioChange = (e: React.ChangeEvent<HTMLInputElement>, segment: SegmentData) => {
    const newRatio = Number(e.target.value);
    onSegmentChange({ ...segment, ratio: newRatio });
  };

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <TableHeader>施設決算セグメント</TableHeader>
            <TableHeader>施設決算セグメント名</TableHeader>
            <TableHeader>構成比率(%)</TableHeader>
          </tr>
        </thead>
        <tbody>
          {data.map((segment) => (
            <tr key={segment.id}>
              <TableCell>{segment.id}</TableCell>
              <TableCell>{segment.name}</TableCell>
              <TableCell>
                <RatioInput
                  type="number"
                  value={segment.ratio}
                  onChange={(e) => handleRatioChange(e, segment)}
                />
              </TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>構成比率合計: {totalRatio}%</div>
    </TableContainer>
  );
};

// サンプルデータ
const sampleData: SegmentData[] = [
  { id: '171 00011', name: '汚水', ratio: 0 },
  { id: '171 00012', name: '雨水', ratio: 0 },
];

// 使用例
const App: React.FC = () => {
  const handleSegmentChange = (segment: SegmentData) => {
    // セグメントの変更処理を行う
    console.log('Changed segment:', segment);
  };

  return (
    <div>
      <h2>施設決算セグメント設定編集</h2>
      <SegmentTable data={sampleData} onSegmentChange={handleSegmentChange} />
    </div>
  );
};

export default App;