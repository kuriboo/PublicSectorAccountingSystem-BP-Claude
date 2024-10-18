import React from 'react';
import styled from 'styled-components';

// 型定義
type EntryDetail = {
  date: string;
  unit: number;
  inTax: number;
  noTax: number;
};

type Props = {
  companyCode: string;
  companyName: string;
  storageLocationCode: string;
  storageLocationName: string;
  currency: string;
  taxRate: number;
  unit: string;
  entries: EntryDetail[];
  total: number;
};

// スタイル定義
const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const CompanyInfo = styled.div`
  margin-bottom: 20px;
`;

const InfoRow = styled.div`
  margin-bottom: 5px;
`;

const Label = styled.span`
  font-weight: bold;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: right;
  }

  th {
    background-color: #f0f0f0;
  }
`;

const TotalRow = styled.tr`
  font-weight: bold;
`;

// コンポーネント定義
const DailyBreakdown: React.FC<Props> = ({
  companyCode,
  companyName,
  storageLocationCode,
  storageLocationName,
  currency,
  taxRate,
  unit,
  entries,
  total,
}) => {
  return (
    <Container>
      <Title>入庫日別在庫照会</Title>
      <CompanyInfo>
        <InfoRow>
          <Label>保管場所：</Label>
          {storageLocationCode}
        </InfoRow>
        <InfoRow>
          <Label>品番：</Label>
          {companyCode}
        </InfoRow>
        <InfoRow>
          <Label>品名：</Label>
          {companyName}
        </InfoRow>
        <InfoRow>
          <Label>規格：</Label>
          {currency === 'DIP(AT)' ? 'DIP(AT)鋼管管' : currency}
        </InfoRow>
        <InfoRow>
          <Label>単位：</Label>
          {unit}
        </InfoRow>
      </CompanyInfo>
      <Table>
        <thead>
          <tr>
            <th>入庫日</th>
            <th>単価</th>
            <th>在庫数</th>
            <th>在庫金額</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td>{entry.date}</td>
              <td>{entry.unit.toFixed(2)}</td>
              <td>{entry.inTax.toFixed(2)}</td>
              <td>{entry.noTax.toFixed(2)}</td>
            </tr>
          ))}
          <TotalRow>
            <td colSpan={3}>合計</td>
            <td>{total.toFixed(2)}</td>
          </TotalRow>
        </tbody>
      </Table>
    </Container>
  );
};

export default DailyBreakdown;

// 使用例
const sampleData: Props = {
  companyCode: '00001',
  companyName: '保管場所A',
  storageLocationCode: '000988000',
  storageLocationName: 'DIP(AT)鋼管管',
  currency: 'DIP(AT)',
  taxRate: 0.75,
  unit: '本',
  entries: [
    { date: '2017/08/15', unit: 100.00, inTax: 2.00, noTax: 200 },
    { date: '2017/08/15', unit: 100.00, inTax: 31.00, noTax: 3100 },
    { date: '2017/08/15', unit: 100.00, inTax: -2.00, noTax: -200 },
    { date: '2017/08/15', unit: 100.00, inTax: 10.00, noTax: 1000 },
  ],
  total: 4100,
};

const App: React.FC = () => {
  return (
    <div>
      <DailyBreakdown {...sampleData} />
    </div>
  );
};

export default App;