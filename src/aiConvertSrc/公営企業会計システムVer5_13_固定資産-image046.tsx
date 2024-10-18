import React from 'react';
import styled from 'styled-components';

type FinancialDataProps = {
  total: number;
  debt: number;
  rows: {
    key: string;
    financeName: string;
    amount: number;
    debt: number;
    total: number;
  }[];
  onFinancialAmountChange: (key: string, amount: number) => void;
  onDebtChange: (key: string, debt: number) => void;
  onAddRow: () => void;
  onCancel: () => void;
};

const FinancialData: React.FC<FinancialDataProps> = ({
  total,
  debt,
  rows,
  onFinancialAmountChange,
  onDebtChange,
  onAddRow,
  onCancel,
}) => {
  return (
    <Container>
      <Header>
        <Title>取得予定財源入力</Title>
        <AmountWrapper>
          <AmountLabel>取得価額</AmountLabel>
          <Amount>{total.toLocaleString()}</Amount>
          <AmountLabel>債権外額</AmountLabel>
          <Amount>{debt.toLocaleString()}</Amount>
        </AmountWrapper>
      </Header>
      
      <Table>
        <TableHeader>
          <HeaderCell>財源ｺｰﾄﾞ</HeaderCell>
          <HeaderCell>財源名称</HeaderCell>
          <HeaderCell>債源名称</HeaderCell>
          <HeaderCell>債権区分</HeaderCell>
          <HeaderCell>財源金額</HeaderCell>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.key}>
              <Cell>{row.key}</Cell>  
              <Cell>{row.financeName}</Cell>
              <Cell>
                <Select>
                  <option>自己財源</option>
                </Select>  
              </Cell>
              <Cell>
                <input 
                  type="number"
                  value={row.debt}
                  onChange={(e) => onDebtChange(row.key, Number(e.target.value))}
                />
              </Cell>
              <Cell>
                <input
                  type="number"
                  value={row.amount}  
                  onChange={(e) => onFinancialAmountChange(row.key, Number(e.target.value))}
                />
              </Cell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      <TotalWrapper>
        <TotalLabel>財源金額計</TotalLabel>  
        <TotalAmount>{total.toLocaleString()}</TotalAmount>
      </TotalWrapper>
      
      <Footer>
        <AddButton onClick={onAddRow}>財源追加</AddButton>
        <ExecuteButton>行キャンセル</ExecuteButton>  
        <ExecuteButton primary onClick={onCancel}>OK</ExecuteButton>
      </Footer>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  font-family: sans-serif;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const AmountWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const AmountLabel = styled.div`
  margin-right: 8px;
`;

const Amount = styled.div`
  margin-right: 16px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
`;

const TableHeader = styled.tr`
  background-color: #f0f0f0;
`;

const HeaderCell = styled.th`
  padding: 8px;
  text-align: center;
  border: 1px solid #ccc;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const Cell = styled.td`
  padding: 8px;
  border: 1px solid #ccc;
  text-align: center;
  
  input {
    width: 100px;
  }
`;

const Select = styled.select``;

const TotalWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;
`;

const TotalLabel = styled.div`
  margin-right: 8px;
`;

const TotalAmount = styled.div`
  font-weight: bold;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const AddButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-right: 8px;
`;

const ExecuteButton = styled.button<{primary?: boolean}>`
  padding: 8px 16px;
  background-color: ${({primary}) => primary ? '#28a745' : '#dc3545'};
  color: #fff;
  border: none;  
  cursor: pointer;
  margin-left: 8px;
`;

// Sample usage
const SampleData: React.FC = () => {
  const [data, setData] = React.useState({
    total: 500000,
    debt: 0,
    rows: [
      {
        key: '01',
        financeName: '自己財源',
        amount: 500000,
        debt: 1,
        total: 500000,
      },
    ],
  });

  const handleFinancialAmountChange = (key: string, amount: number) => {
    const updatedRows = data.rows.map((row) =>
      row.key === key ? {...row, amount} : row,
    );
    const total = updatedRows.reduce((sum, row) => sum + row.amount, 0);
    setData({...data, rows: updatedRows, total});
  };

  const handleDebtChange = (key: string, debt: number) => {
    const updatedRows = data.rows.map((row) =>
      row.key === key ? {...row, debt} : row,
    );
    setData({...data, rows: updatedRows});
  };

  const handleAddRow = () => {
    const newRow = {
      key: String(data.rows.length + 1).padStart(2, '0'),
      financeName: '',
      amount: 0,
      debt: 1,
      total: 0,
    };
    setData({...data, rows: [...data.rows, newRow]});
  };

  const handleCancel = () => {
    // キャンセル処理
  };

  return (
    <FinancialData
      total={data.total}
      debt={data.debt}
      rows={data.rows}
      onFinancialAmountChange={handleFinancialAmountChange}
      onDebtChange={handleDebtChange}
      onAddRow={handleAddRow}
      onCancel={handleCancel}
    />
  );
};

export default FinancialData;