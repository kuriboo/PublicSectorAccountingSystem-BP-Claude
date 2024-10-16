import React from 'react';
import styled from '@emotion/styled';

type Language = '01' | '000';
type Master = '000' | '0000';
type Name = '王 李' | '委託';
type Yomi = '物品' | '';

interface MasterData {
  language: Language;
  master: Master;
  name: Name;
  yomi: Yomi;
  address1?: string;
  address2?: string;
  address3?: string;
  address4?: string;
}

interface MasterTableProps {
  data: MasterData[];
  header1?: string;
  header2?: string;
  remarks?: string;
}

const MasterTable: React.FC<MasterTableProps> = ({
  data,
  header1 = '',
  header2 = '',
  remarks = '',
}) => {
  return (
    <Container>
      <Title>用語マスタ</Title>
      <Table>
        <thead>
          <tr>
            <HeaderCell>開語番号1</HeaderCell>
            <HeaderCell>開語番号2</HeaderCell>
            <HeaderCell>名称</HeaderCell>
            <HeaderCell>略名</HeaderCell>
            <HeaderCell>予備1</HeaderCell>
            <HeaderCell>予備2</HeaderCell>
            <HeaderCell>予備3</HeaderCell>
            <HeaderCell>予備4</HeaderCell>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <DataCell>{row.language}</DataCell>
              <DataCell>{row.master}</DataCell>
              <DataCell>{row.name}</DataCell>
              <DataCell>{row.yomi}</DataCell>
              <DataCell>{row.address1 ?? ''}</DataCell>
              <DataCell>{row.address2 ?? ''}</DataCell>
              <DataCell>{row.address3 ?? ''}</DataCell>
              <DataCell>{row.address4 ?? ''}</DataCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      <InputSection>
        <InputField placeholder="用語番号1" value={header1} readOnly />
        <InputField placeholder="用語番号2" value={header2} readOnly />
        <Remarks placeholder="備考" value={remarks} readOnly />
      </InputSection>
      <ButtonSection>
        <Button>行確定</Button>
        <Button>行キャンセル</Button>
        <Button primary>終了</Button>
      </ButtonSection>
    </Container>
  );
};

// Sample data for testing
const sampleData: MasterData[] = [
  {
    language: '01',
    master: '000',
    name: '王 李',
    yomi: '委託',
  },
  {
    language: '030',
    master: '000',
    name: '物品',
    yomi: '',
  },
];

// Component for displaying the MasterTable with sample data
const MasterTableExample: React.FC = () => {
  return (
    <MasterTable
      data={sampleData}
      header1="010"
      header2="030"
      remarks="Sample remarks"
    />
  );
};

// Styled components
const Container = styled.div`
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  text-align: center;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const HeaderCell = styled.th`
  background-color: #f2f2f2;
  padding: 8px;
  text-align: center;
  border: 1px solid #ddd;
`;

const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f9f9f9;
  }
`;

const DataCell = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
  text-align: center;
`;

const InputSection = styled.div`
  margin-bottom: 10px;
`;

const InputField = styled.input`
  padding: 5px;
  margin-right: 10px;
`;

const Remarks = styled.input`
  padding: 5px;
  width: 300px;
`;

const ButtonSection = styled.div`
  text-align: center;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 8px 16px;
  margin: 0 5px;
  background-color: ${({ primary }) => (primary ? '#007bff' : '#f2f2f2')};
  color: ${({ primary }) => (primary ? '#fff' : '#333')};
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export default MasterTableExample;