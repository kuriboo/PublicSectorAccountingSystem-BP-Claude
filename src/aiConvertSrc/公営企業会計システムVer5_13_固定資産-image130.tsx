import React from 'react';
import styled from '@emotion/styled';

type FinancialReportProps = {
  data: {
    date: string;
    financialCode: string;
    description: string;
    amount: number;
    financialSource: string;
  }[];
};

const FinancialReportTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f2f2f2;
  }
  @media (max-width: 600px) {
    font-size: 14px;
    th, td {
      padding: 6px;
    }
  }
`;

const FinancialReportForm = styled.div`
  margin-top: 20px;
  .form-group {
    margin-bottom: 10px;
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  input, select {
    width: 200px;
    padding: 5px;
  }
`;

const FinancialReport: React.FC<FinancialReportProps> = ({ data }) => {
  return (
    <div>
      <FinancialReportTable>
        <thead>
          <tr>
            <th>日付</th>
            <th>財源コード</th>
            <th>財源名称</th>
            <th>増加額</th>
            <th>財源金額</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.financialCode}</td>
              <td>{item.description}</td>
              <td>{item.amount.toLocaleString()}</td>
              <td>{item.financialSource}</td>
            </tr>
          ))}
        </tbody>
      </FinancialReportTable>
      
      <FinancialReportForm>
        <div className="form-group">
          <label htmlFor="date">異動年月日</label>
          <input type="date" id="date" />
        </div>
        <div className="form-group">
          <label htmlFor="financialCode">財源コード</label>
          <select id="financialCode">
            <option value="1">自己財源</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="amount">増加額</label>
          <input type="number" id="amount" />
        </div>
        <div className="form-group">
          <label htmlFor="financialSource">財源金額</label>
          <input type="text" id="financialSource" value="8000000" readOnly />
        </div>
      </FinancialReportForm>
    </div>
  );
};

// Usage example
const ExampleData = [
  {
    date: '2018-03-31',
    financialCode: '01',
    description: '自己財源',
    amount: 5000000,
    financialSource: '5,000,000',
  },
];

const App: React.FC = () => {
  return (
    <div>
      <h1>財務財源保守</h1>
      <FinancialReport data={ExampleData} />
    </div>
  );
};

export default App;