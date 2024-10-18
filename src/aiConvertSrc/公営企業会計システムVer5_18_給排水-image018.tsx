import React from 'react';
import styled from '@emotion/styled';

type RowData = {
  id: number;
  date: string;
  applicationNumber: string;
  workDescription: string;
  worker: string;
  requiredMaterials?: string;
  quantity?: number;
  unitPrice?: number;
  amount?: number;
  remarks?: string;
};

type TableProps = {
  data: RowData[];
};

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <TableWrapper>
      <TableHeader>
        <HeaderRow>
          <HeaderCell>受付日</HeaderCell>
          <HeaderCell>申請番号</HeaderCell>
          <HeaderCell>工事場所</HeaderCell>
          <HeaderCell>施工者</HeaderCell>
          <HeaderCell>必要材料名</HeaderCell>
          <HeaderCell>数量</HeaderCell>
          <HeaderCell>単価</HeaderCell>
          <HeaderCell>金額</HeaderCell>
          <HeaderCell>備考</HeaderCell>
        </HeaderRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <BodyRow key={row.id}>
            <BodyCell>{row.date}</BodyCell>
            <BodyCell>{row.applicationNumber}</BodyCell>
            <BodyCell>{row.workDescription}</BodyCell>
            <BodyCell>{row.worker}</BodyCell>
            <BodyCell>{row.requiredMaterials || '-'}</BodyCell>
            <BodyCell>{row.quantity || '-'}</BodyCell>
            <BodyCell>{row.unitPrice || '-'}</BodyCell>
            <BodyCell>{row.amount || '-'}</BodyCell>
            <BodyCell>{row.remarks || '-'}</BodyCell>
          </BodyRow>
        ))}
      </TableBody>
    </TableWrapper>
  );
};

// スタイリング
const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

const TableHeader = styled.thead`
  background-color: #f2f2f2;
`;

const HeaderRow = styled.tr``;

const HeaderCell = styled.th`
  padding: 10px;
  text-align: center;
  border: 1px solid #ddd;
`;

const TableBody = styled.tbody``;

const BodyRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f9f9f9;
  }
`;

const BodyCell = styled.td`
  padding: 10px;
  text-align: center;
  border: 1px solid #ddd;
`;

// サンプルデータを用いた使用例
const sampleData: RowData[] = [
  {
    id: 1,
    date: '26.4.1',
    applicationNumber: 'きょうせい東郷',
    workDescription: 'きょうせい市東郷区2.0㎡撤去きょうせいポンプ',
    worker: '26.4.1',
  },
  {
    id: 2,
    date: '26.4.2',
    applicationNumber: 'きょうせい三郎',
    workDescription: 'きょうせい市みどりまち区2.0きょうせいポンプ取替工事',
    worker: '26.4.2',
    requiredMaterials: '26.4.6',
    quantity: 1,
    unitPrice: 16000,
    amount: 16000,
  },
  // ... 他のサンプルデータ
];

const SampleUsage: React.FC = () => {
  return (
    <div>
      <h2>工事申請一覧</h2>
      <Table data={sampleData} />
    </div>
  );
};

export default SampleUsage;