import React from 'react';
import styled from '@emotion/styled';

type MeetingMinutesData = {
  id: string;
  name: string;
  department: string;
  position: string;
  content: string;
}[];

type MeetingMinutesTableProps = {
  data: MeetingMinutesData;
};

const MeetingMinutesTable: React.FC<MeetingMinutesTableProps> = ({ data }) => {
  return (
    <TableContainer>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>会議区分コード</TableHeaderCell>
            <TableHeaderCell>会議区分名称</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={item.id}>
              <TableCell>{`0${index}`}</TableCell>
              <TableCell>{item.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonContainer>
    </TableContainer>
  );
};

// Styled components
const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.thead`
  background-color: #f0f0f0;
`;

const TableHeaderCell = styled.th`
  padding: 10px;
  text-align: left;
  border: 1px solid #ccc;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ccc;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin-left: 10px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

// Sample data
const sampleData: MeetingMinutesData = [
  { id: '01', name: '予定員担当品', department: '', position: '', content: '' },
  { id: '02', name: '予定員担工事', department: '', position: '', content: '' },
  { id: '03', name: '負担行為内示', department: '', position: '', content: '' },
  { id: '04', name: '負担行為工事', department: '', position: '', content: '' },
  { id: '06', name: '予定契約担当', department: '', position: '', content: '' },
  { id: '07', name: '負担契約担当', department: '', position: '', content: '' },
  { id: '10', name: '設計書用', department: '', position: '', content: '' },
  { id: '30', name: '決裁', department: '', position: '', content: '' },
  { id: '50', name: '流用用合議', department: '', position: '', content: '' },
];

const App: React.FC = () => {
  return (
    <div>
      <h1>会議区分検索</h1>
      <MeetingMinutesTable data={sampleData} />
    </div>
  );
};

export default App;