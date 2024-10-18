import React from 'react';
import styled from '@emotion/styled';

interface EmployeeSkillTableProps {
  employeeNumber: string;
  employeeName: string;
  skills: {
    name: string;
    level: number;
  }[];
  note: string;
  certificationNumber: string;
  certificationName: string;
}

const EmployeeSkillTable: React.FC<EmployeeSkillTableProps> = ({
  employeeNumber,
  employeeName,
  skills,
  note,
  certificationNumber,
  certificationName,
}) => {
  return (
    <TableContainer>
      <TableHeader>
        <span>番号：{employeeNumber}</span>
        <span>氏名：{employeeName}</span>
      </TableHeader>
      <TableContent>
        <TableColumn>
          <TableColumnHeader>職員能別</TableColumnHeader>
          <TableColumnContent>
            {skills.map((skill, index) => (
              <TableRow key={index}>
                <TableCell>{skill.name}</TableCell>
                <TableCell>{skill.level}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell>主観点：ISO</TableCell>
              <TableCell>{note}</TableCell>
            </TableRow>
          </TableColumnContent>
        </TableColumn>
        <TableColumn>
          <TableColumnHeader>資格カテ</TableColumnHeader>
          <TableColumnContent>
            <TableRow>
              <TableCell>注記001</TableCell>
              <TableCell>{certificationNumber}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>注記名称</TableCell>
              <TableCell>{certificationName}</TableCell>
            </TableRow>
          </TableColumnContent>
        </TableColumn>
      </TableContent>
      <TableFooter>
        <CancelButton>キャンセル</CancelButton>
      </TableFooter>
    </TableContainer>
  );
};

const TableContainer = styled.div`
  font-family: Arial, sans-serif;
  border: 1px solid #ccc;
  padding: 16px;
`;

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const TableContent = styled.div`
  display: flex;
`;

const TableColumn = styled.div`
  flex: 1;
`;

const TableColumnHeader = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`;

const TableColumnContent = styled.div``;

const TableRow = styled.div`
  display: flex;
  margin-bottom: 4px;
`;

const TableCell = styled.div`
  flex: 1;
  padding: 4px;
  border: 1px solid #ccc;
`;

const TableFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const CancelButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
`;

// Usage example
const App: React.FC = () => {
  const employeeSkillData: EmployeeSkillTableProps = {
    employeeNumber: '00000100000',
    employeeName: '大分 花子',
    skills: [
      { name: '一般端末配水管技能者', level: 10 },
      { name: '耐震継手配水管技能者', level: 8 },
      { name: '主観点：ISO', level: 2 },
    ],
    note: 'ISO9000series',
    certificationNumber: '注記001',
    certificationName: '注記名称テスト×× ',
  };

  return (
    <div>
      <h1>Employee Skill Table</h1>
      <EmployeeSkillTable {...employeeSkillData} />
    </div>
  );
};

export default App;