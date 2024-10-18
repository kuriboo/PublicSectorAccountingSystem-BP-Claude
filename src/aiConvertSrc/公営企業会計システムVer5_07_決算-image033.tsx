import React from 'react';
import styled from '@emotion/styled';

interface CodeProps {
  code: string;
  date: string;
  dueDate: string;
  name: string;
  address: string;
}

const CodeTableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const CodeTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
  }
`;

const CodeComponent: React.FC<CodeProps> = ({ code, date, dueDate, name, address }) => {
  return (
    <CodeTableContainer>
      <CodeTable>
        <thead>
          <tr>
            <th>年度</th>
            <th>科目コード</th>
            <th>次年度科目コード</th>
            <th>略名</th>
            <th>閉室</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* Render table data if provided, otherwise show a dash */}
            <td>{code || '-'}</td>
            <td>{date || '-'}</td>
            <td>{dueDate || '-'}</td>
            <td>{name || '-'}</td>
            <td>{address || '-'}</td>
          </tr>
        </tbody>
      </CodeTable>
    </CodeTableContainer>
  );
};

// Example usage
const ExampleComponent: React.FC = () => {
  const sampleData: CodeProps = {
    code: '2023',
    date: 'ABC123',
    dueDate: 'DEF456', 
    name: 'Sample Name',
    address: 'Sample Address'
  };

  return (
    <div>
      <h2>Code Table Example</h2>
      <CodeComponent {...sampleData} />
    </div>
  );
};

export default ExampleComponent;