import React from 'react';
import styled from '@emotion/styled';

type Segment = {
  id: string;
  name: string;
  taxExcludedAmount: number;
  taxIncludedAmount: number;
};

type Props = {
  segments: Segment[];
  taxRate: number;
  onAmountChange: (id: string, amount: number) => void;
  onSubmit: () => void;
  onCancel: () => void;
};

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }
`;

const TotalRow = styled.tr`
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  margin-top: 16px;
  text-align: center;
`;

const Button = styled.button`
  margin: 0 8px;
`;

const SegmentAllocationTable: React.FC<Props> = ({ segments, taxRate, onAmountChange, onSubmit, onCancel }) => {
  // 合計を計算
  const totalTaxExcluded = segments.reduce((sum, seg) => sum + seg.taxExcludedAmount, 0);
  const totalTaxIncluded = segments.reduce((sum, seg) => sum + seg.taxIncludedAmount, 0);

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>セグメント</th>
            <th>略称</th>
            <th>調整額(課税標準額)</th>
            <th>調整額(仮払消費税額)</th>
          </tr>
        </thead>
        <tbody>
          {segments.map((segment) => (
            <tr key={segment.id}>
              <td>{segment.id}</td>
              <td>{segment.name}</td>
              <td>
                <input
                  type="number"
                  value={segment.taxExcludedAmount}
                  onChange={(e) => onAmountChange(segment.id, Number(e.target.value))}
                />
              </td>
              <td>{segment.taxIncludedAmount}</td>
            </tr>
          ))}
          <TotalRow>
            <td colSpan={2}>総合計</td>
            <td>{totalTaxExcluded}</td>
            <td>{totalTaxIncluded}</td>
          </TotalRow>
        </tbody>
      </Table>
      <div>
        消費税率: {taxRate}%
      </div>
      <ButtonContainer>
        <Button onClick={onSubmit}>OK</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onCancel}>キャンセル</Button>
      </ButtonContainer>
    </>
  );
};

// Usage example
const App: React.FC = () => {
  const sampleData: Segment[] = [
    { id: '01', name: '管理区分A', taxExcludedAmount: 10000, taxIncludedAmount: 0 },
    { id: '02', name: '管理区分B', taxExcludedAmount: 0, taxIncludedAmount: 0 },
  ];

  const handleAmountChange = (id: string, amount: number) => {
    // Handle amount change logic here
  };

  const handleSubmit = () => {
    // Handle form submission logic here
  };

  const handleCancel = () => {
    // Handle cancel logic here
  };

  return (
    <SegmentAllocationTable
      segments={sampleData}
      taxRate={10}
      onAmountChange={handleAmountChange}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
    />
  );
};

export default App;