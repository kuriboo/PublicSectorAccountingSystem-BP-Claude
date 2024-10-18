import React from 'react';
import styled from '@emotion/styled';

interface TaxWithholdingProps {
  effectiveDate: string; // 課税期間
  endDate: string; // 令和○年○月○日
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: sans-serif;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th, td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
  }
`;

const Button = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
`;

const TaxWithholding: React.FC<TaxWithholdingProps> = ({ effectiveDate, endDate }) => {
  return (
    <Container>
      <Title>源泉課税等対価額算出</Title>
      <Table>
        <tbody>
          <tr>
            <th>範囲指定</th>
            <td>
              {effectiveDate ? effectiveDate : '----年--月--日'} ～ {endDate || '令和○年○月○日'}
            </td>
          </tr>
          <tr>
            <th>計算方法</th>
            <td>
              税額計算方法(売上) <Button>割賦</Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <div>
        <Button>OK</Button>
        <Button>終了</Button>
      </div>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <h1>税額計算システム</h1>
      <TaxWithholding 
        effectiveDate="平成31年04月01日"
        endDate="令和02年01月29日"
      />
    </div>
  );
}

export default App;