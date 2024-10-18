import React from 'react';
import styled from 'styled-components';

// Define types for component props
type MasterDataProps = {
  char: string;
  varchar2?: string;
  date?: string;
  number?: number;
};

// Define styled components
const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableHeader = styled.th`
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

const TableData = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

// Main component
const MasterDataTable: React.FC<MasterDataProps> = ({ char, varchar2, date, number }) => {
  return (
    <Table>
      <thead>
        <tr>
          <TableHeader>Column Name</TableHeader>
          <TableHeader>Data Type</TableHeader>
        </tr>
      </thead>
      <tbody>
        {char && (
          <tr>
            <TableData>{char}</TableData>
            <TableData>char</TableData>
          </tr>
        )}
        {varchar2 && (
          <tr>
            <TableData>{varchar2}</TableData>
            <TableData>varchar2</TableData>
          </tr>
        )}
        {date && (
          <tr>
            <TableData>{date}</TableData>
            <TableData>date</TableData>
          </tr>
        )}
        {number && (
          <tr>
            <TableData>{number}</TableData>
            <TableData>number</TableData>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

// Sample usage
const SampleUsage: React.FC = () => {
  const sampleData = {
    char: 'sample char',
    varchar2: 'sample varchar2',
    date: '2023-06-13',
    number: 123,
  };

  return (
    <div>
      <h2>1051 AT&T 相手先マスタ</h2>
      <MasterDataTable {...sampleData} />

      <h2>1056 BKMT 銀行マスタ</h2>
      <MasterDataTable char="BNM : varchar2" varchar2="FFDRNM1 : char" />

      <h2>1059 WCSEMT 消金営業マスタ</h2>
      <MasterDataTable char="CPRODUCTCD : char" varchar2="HM : varchar2" />

      <h2>1077 STMT 支店マスタ</h2>
      <MasterDataTable char="CPROCD : char" varchar2="CTCD : varchar2" number={123} />

      <h2>1093 SHEKISMT 支払分類拡張マスタ</h2> 
      <MasterDataTable
        char="CPRODFATCD : char"
        varchar2="ATCD : char"
      />

      <h2>1092 ATDRKTMT 相手先適格区分マスタ</h2>
      <MasterDataTable
        char="CPROJHATFG : char"
        varchar2="CPOD : char"
        date="FSTCD : char"
        number={123}
      />

      <h2>1128 STKYKKTRMT 指定金融機関受益マスタ</h2>
      <MasterDataTable
        char="CPROCD : char"
        varchar2="CPROAFSTMD : Date"
        date="FQNUM : char"
        number={123}
      />
    </div>
  );
};

export default SampleUsage;