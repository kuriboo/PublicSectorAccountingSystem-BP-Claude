// RankingTable.tsx
import React from 'react';
import styled from '@emotion/styled';

type RankingTableProps = {
  data: {
    name: string;
    value: number;
  }[];
};

const RankingTable: React.FC<RankingTableProps> = ({ data }) => {
  return (
    <TableContainer>
      <Table>
        <TableHeader>
          <TableHeaderCell>項目名</TableHeaderCell>
          <TableHeaderCell>職員数</TableHeaderCell>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const TableContainer = styled.div`
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background-color: #f0f0f0;
`;

const TableHeaderCell = styled.th`
  padding: 10px;
  text-align: left;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableCell = styled.td`
  padding: 10px;
`;

// ValueInput.tsx
import React from 'react';
import styled from '@emotion/styled';

type ValueInputProps = {
  label: string;
  value: number;
  onChange: (value: number) => void;
};

const ValueInput: React.FC<ValueInputProps> = ({ label, value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseInt(e.target.value, 10);
    onChange(isNaN(inputValue) ? 0 : inputValue);
  };

  return (
    <InputContainer>
      <Label>{label}</Label>
      <Input type="number" value={value} onChange={handleChange} />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

// SampleComponent.tsx
import React, { useState } from 'react';
import RankingTable from './RankingTable';
import ValueInput from './ValueInput';

const SampleComponent: React.FC = () => {
  const [data, setData] = useState([
    { name: '一般継手配水管技能者', value: 50 },
    { name: '耐震継手配水管技能者', value: 30 },
  ]);

  const handleValueChange = (index: number, value: number) => {
    const newData = [...data];
    newData[index].value = value;
    setData(newData);
  };

  return (
    <div>
      <RankingTable data={data} />
      <ValueInput
        label="職員種別"
        value={0}
        onChange={(value) => console.log('職員種別:', value)}
      />
      <ValueInput
        label="職員数"
        value={data[0].value}
        onChange={(value) => handleValueChange(0, value)}
      />
    </div>
  );
};

export default SampleComponent;