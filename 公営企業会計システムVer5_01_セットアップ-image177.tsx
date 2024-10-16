import React from 'react';
import styled from '@emotion/styled';

type WaterBillType = {
  date: string;
  locationName: string;
  locationCode: string;
  deposit: number;
  payment: number;
  balance: number;
};

type BillDisplayProps = {
  date: string;
  totalDeposit: number;
  totalPayment: number;
  company: string;
  data: WaterBillType[];
};

const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Company = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Date = styled.div`
  font-size: 18px;
`;

const TotalAmounts = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const TableContainer = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
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
`;

const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const BillDisplay: React.FC<BillDisplayProps> = ({ date, totalDeposit, totalPayment, company, data }) => {
  return (
    <Container>
      <Header>
        <Company>{company}</Company>
        <Date>{date}</Date>
      </Header>

      <TotalAmounts>
        <div>入金総計: {totalDeposit.toLocaleString()} 円</div>
        <div>出金総計: {totalPayment.toLocaleString()} 円</div>
      </TotalAmounts>

      <TableContainer>
        <Table>
          <thead>
            <tr>
              <th>明細</th>
              <th>仕訳細目名称</th>
              <th>仕訳明細名称</th>
              <th>借方金額</th>
              <th>貸方金額</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.locationCode}</td>
                <td>{item.locationName}</td>
                <td>{item.locationName}</td>
                <td>{item.deposit.toLocaleString()}</td>
                <td>{item.payment.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>

      <Detail>
        {data.map((item, index) => (
          <div key={index}>
            <div>仕訳細節 {item.locationCode} {item.locationName}</div>
            <div>仕訳明細 {item.locationCode} {item.locationName}</div>
            <div>借方金額 {item.deposit.toLocaleString()} 円</div>
            <div>貸方金額 {item.payment.toLocaleString()} 円</div>
          </div>
        ))}
      </Detail>
      
    </Container>
  );
};

// Usage example
const sampleData: WaterBillType[] = [
  {
    date: '05/21',
    locationName: '企業出納員保管小口資金',
    locationCode: '0001',
    deposit: 5000,
    payment: 0,
    balance: 7000,
  },
  {
    date: '05/21',
    locationName: '企業出納員保管小口資金',
    locationCode: '0001',
    deposit: 5000,
    payment: 0,
    balance: 7000,
  },
];

const BillDisplayExample: React.FC = () => {
  return (
    <BillDisplay
      date="平成29年度"
      totalDeposit={66042382337}
      totalPayment={65944201431}
      company="会計年度　平成29年度"
      data={sampleData}
    />
  );
};

export default BillDisplayExample;