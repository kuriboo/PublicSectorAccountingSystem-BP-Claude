import React from 'react';
import styled from 'styled-components';

interface OrderData {
  予算節: string;
  予算細節: string;
  予算明細: string;
  税区分: string;
  単位: string;
  単価: number;
  数量: number;
  金額: number;
}

interface OrderSummaryProps {
  予算節: string;
  予算細節: string;
  予算明細: string;
  決定額: number;
  税抜金額: number;
  消費税額: number;
  orderData: OrderData[];
}

const OrderSummaryWrapper = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  span {
    margin-right: 10px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const OrderSummary: React.FC<OrderSummaryProps> = ({
  予算節,
  予算細節,
  予算明細,
  決定額,
  税抜金額,
  消費税額,
  orderData,
}) => {
  return (
    <OrderSummaryWrapper>
      <Header>
        <HeaderItem>
          <span>予算節:</span>
          {予算節}
        </HeaderItem>
        <HeaderItem>
          <span>予算細節:</span>
          {予算細節}
        </HeaderItem>
        <HeaderItem>
          <span>予算明細:</span>
          {予算明細}
        </HeaderItem>
      </Header>
      <Table>
        <thead>
          <tr>
            <th>単価名称</th>
            <th>規格名称</th>
            <th>数量</th>
            <th>単位</th>
            <th>単価</th>
            <th>金額</th>
          </tr>
        </thead>
        <tbody>
          {orderData.map((item, index) => (
            <tr key={index}>
              <td>{item.予算節}</td>
              <td>{item.予算細節}</td>
              <td>{item.数量}</td>
              <td>{item.単位}</td>
              <td>{item.単価.toLocaleString()}</td>
              <td>{item.金額.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Footer>
        <div>
          <span>決定額:</span>
          {決定額.toLocaleString()}
        </div>
        <div>
          <span>税抜金額:</span>
          {税抜金額.toLocaleString()}
        </div>
        <div>
          <span>消費税額:</span>
          {消費税額.toLocaleString()}
        </div>
      </Footer>
    </OrderSummaryWrapper>
  );
};

// Sample data for demonstration
const sampleData: OrderSummaryProps = {
  予算節: '0003-01-01',
  予算細節: '0002',
  予算明細: '0000',
  決定額: 10000,
  税抜金額: 9090,
  消費税額: 909,
  orderData: [
    {
      予算節: '機械',
      予算細節: '1.000',
      予算明細: '',
      税区分: '',
      単位: '式',
      単価: 10000,
      数量: 1,
      金額: 10000,
    },
  ],
};

const App: React.FC = () => {
  return <OrderSummary {...sampleData} />;
};

export default App;