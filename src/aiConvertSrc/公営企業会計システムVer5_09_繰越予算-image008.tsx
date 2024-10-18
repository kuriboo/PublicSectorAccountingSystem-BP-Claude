import React from 'react';
import styled from '@emotion/styled';

type RowData = {
  id: string;
  nenrei: number;
  shinsotsu: string;
  keiken: string;
  gakureki: string;
  shiryonendo: number;
  hokenryo: number;
  bikou: string;
};

type Props = {
  data: RowData[];
  title?: string;
  description?: string;
};

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
`;

const TableHeader = styled.th`
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
  font-weight: bold;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
`;

const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 100%;
  overflow-x: auto;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
`;

const DataTable: React.FC<Props> = ({ data, title, description }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      {description && <Description>{description}</Description>}
      <Table>
        <thead>
          <tr>
            <TableHeader>予定年度予定番号負担年度負担番号</TableHeader>
            <TableHeader>予算節</TableHeader>
            <TableHeader>予算細節</TableHeader>
            <TableHeader>予算明細</TableHeader>
            <TableHeader>年次理由</TableHeader>
            <TableHeader>議題額</TableHeader>
            <TableHeader>講師料</TableHeader>
            <TableHeader>業者名</TableHeader>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.nenrei}</TableCell>
              <TableCell>{row.shinsotsu}</TableCell>
              <TableCell>{row.keiken}</TableCell>
              <TableCell>{row.gakureki}</TableCell>
              <TableCell>{row.shiryonendo.toLocaleString()}</TableCell>
              <TableCell>{row.hokenryo.toLocaleString()}</TableCell>
              <TableCell>{row.bikou}</TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

// サンプル使用例
const sampleData: RowData[] = [
  {
    id: '平成29　 64 平成29　 13B',
    nenrei: 障害・給料',
    shinsotsu: '給料',
    keiken: '1,000,000',
    gakureki: '1,200,000',
    shiryonendo: 1000000,
    hokenryo: 1200000,
    bikou: '健診受診 きょうせい工業',
  },
];

const App: React.FC = () => {
  return (
    <DataTable
      data={sampleData}
      title="縁故採用系"
      description="縁想確定の解除処理を行います。画面指定年度のデータが対象となります。次年度に〈戻に処理が進んでいまうている場合は解除できません。"
    />
  );
};

export default App;