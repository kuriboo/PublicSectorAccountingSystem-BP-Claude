import React from 'react';
import styled from '@emotion/styled';

type TaxAllocationProps = {
  data: {
    type: string;
    amount: number;
    taxRate: number;
    taxAmount: number;
  }[];
  date: string;
  branch: string;
  allocationType: 'proportional' | 'fixed';
};

const TaxAllocation: React.FC<TaxAllocationProps> = ({ data, date, branch, allocationType }) => {
  return (
    <Container>
      <Header>
        <Title>予算税区分集計額調整</Title>
        <Info>
          <Label>部門指定</Label>
          <Value>{branch} 当初予算 査定額 1回</Value>
          <Label>調整対象</Label>
          <Value>
            <input type="radio" id="proportional" name="allocation" value="proportional" checked={allocationType === 'proportional'} readOnly />
            <label htmlFor="proportional">集計値から調整</label>
            <input type="radio" id="fixed" name="allocation" value="fixed" checked={allocationType === 'fixed'} readOnly />
            <label htmlFor="fixed">集計値以外から調整</label>
          </Value>
        </Info>
      </Header>
      
      <Table>
        <thead>
          <tr>
            <Th>科目検索</Th>
            <Th>予算節</Th>
            <Th>税区分</Th>
            <Th>消費税区分他方消費税率</Th>
            <Th>消費税率</Th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <Td>{item.type}</Td>
              <Td>{item.amount.toLocaleString()}</Td>
              <Td>{item.taxRate.toLocaleString()}</Td>
              <Td>
                <input type="number" value={10} readOnly /> %
              </Td>
              <Td>
                <input type="number" value={item.taxRate} readOnly /> %
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Footer>
        <DateLabel>令和02年11月25日</DateLabel>
        <ButtonContainer>
          <Button>OK</Button>
          <Button>クリア</Button>
          <Button>終了</Button>
        </ButtonContainer>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  font-family: sans-serif;
  padding: 16px;
`;

const Header = styled.div`
  margin-bottom: 16px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

const Label = styled.div`
  margin-right: 8px;
`;

const Value = styled.div`
  margin-right: 16px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  border: 1px solid #ccc;
  padding: 8px;
  text-align: center;
  background-color: #f2f2f2;
`;

const Td = styled.td`
  border: 1px solid #ccc;
  padding: 8px;
  text-align: right;

  input {
    width: 60px;
    text-align: right;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

const DateLabel = styled.div`
  font-size: 14px;
`;

const ButtonContainer = styled.div`
  button {
    margin-left: 8px;
  }
`;

const Button = styled.button`
  padding: 4px 8px;
`;

// Usage example
const sampleData = [
  {
    type: '課税売上',
    amount: 185000000,
    taxRate: 10,
    taxAmount: 18500000,
  },
  {
    type: '貸倒引当',
    amount: 0,
    taxRate: 0,
    taxAmount: 0,
  },
];

const TaxAllocationExample: React.FC = () => {
  return (
    <TaxAllocation 
      data={sampleData} 
      date="令和02年11月25日" 
      branch="本社" 
      allocationType="proportional"
    />
  );
};

export default TaxAllocationExample;