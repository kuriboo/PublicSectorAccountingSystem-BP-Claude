// 仕訳明細件質コンポーネント
import React from 'react';
import styled from 'styled-components';

type DetailProps = {
  code: string;
  accountName: string;
  accountCode: string;
  debitAmount: number;
  creditAmount: number;
};

const Detail: React.FC<DetailProps> = ({
  code,
  accountName,
  accountCode,
  debitAmount,
  creditAmount,
}) => {
  return (
    <DetailRow>
      <DetailCell>{code}</DetailCell>
      <DetailCell>{accountName}</DetailCell>
      <DetailCell>{accountCode}</DetailCell>
      <DetailCell>{debitAmount.toLocaleString()}</DetailCell>
      <DetailCell>{creditAmount.toLocaleString()}</DetailCell>
    </DetailRow>
  );
};

// 仕訳明細件質リストコンポーネント 
type DetailsProps = {
  details: DetailProps[];
};

const Details: React.FC<DetailsProps> = ({ details }) => {
  return (
    <DetailsTable>
      <thead>
        <TableRow>
          <TableHeader>コード</TableHeader>
          <TableHeader>仕訳科目名</TableHeader>
          <TableHeader>仕訳前コード</TableHeader>
          <TableHeader>仕訳前借方金額</TableHeader>
          <TableHeader>仕訳前貸方金額</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        {details.map((detail, index) => (
          <Detail key={index} {...detail} />
        ))}
      </tbody>
    </DetailsTable>
  );
};

// スタイリング
const DetailsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableHeader = styled.th`
  background-color: #ddd;
  padding: 8px;
  text-align: left;
  border: 1px solid #ddd;
`;

const DetailRow = styled.tr`
  &:hover {
    background-color: #ddd;
  }
`;

const DetailCell = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
`;

// サンプルデータと使用例
const sampleData: DetailProps[] = [
  {
    code: '01',
    accountName: '仮受消費税科目',
    accountCode: '0621290-01',  
    debitAmount: 0,
    creditAmount: 0,
  },
  {
    code: '02',
    accountName: '仮払消費税科目',
    accountCode: '0621390-01',
    debitAmount: 0,
    creditAmount: 0,  
  },
  // ...他のサンプルデータ
];

const SampleUsage: React.FC = () => {
  return (
    <div>
      <h2>仕訳明細件質</h2>
      <Details details={sampleData} />
    </div>
  );  
};

export default SampleUsage;