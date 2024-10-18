import React from 'react';
import styled from '@emotion/styled';

type SupportDetailProps = {
  contractDate: string;
  yearOfContract: number;
  numberOfTimes: number;
  daysUsed: number;
  paidDaysLeft: number;
  premiumList: {
    date: string;
    startDate: string;
    endDate: string;
    premiumAmount: number;
  }[];
  benefitsList: {
    date: string;
    benefit: string;
    amount: number;
  }[];
};

const SupportDetailWrapper = styled.div`
  font-family: sans-serif;

  table {
    border-collapse: collapse;
    width: 100%;

    th, td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }

    th {
      background-color: #f2f2f2;
    }

    tr:nth-of-type(even) {
      background-color: #f9f9f9;
    }
  }

  @media (max-width: 600px) {
    font-size: 14px;

    table {
      th, td {
        padding: 6px;
      }
    }
  }
`;

const SupportDetail: React.FC<SupportDetailProps> = ({
  contractDate,
  yearOfContract,
  numberOfTimes,
  daysUsed,
  paidDaysLeft,
  premiumList,
  benefitsList,
}) => {
  return (
    <SupportDetailWrapper>
      <h2>支払台帳データ照会</h2>
      <p>
        契約年月日: {contractDate}<br />
        契約年数: {yearOfContract} 年<br />
        予定回数: {numberOfTimes}<br />
        とりまとめ回数: {daysUsed}<br />
        負担区分: 一般
      </p>
      <table>
        <thead>
          <tr>
            <th>処理</th>
            <th>受払日</th>
            <th>決定番号</th>
            <th>支払額</th>
          </tr>
        </thead>
        <tbody>
          {premiumList.map((premium, index) => (
            <tr key={index}>
              <td>{premium.date}</td>
              <td>{premium.startDate}</td>
              <td>{premium.endDate}</td>
              <td>{premium.premiumAmount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>変更日</th>
            <th>支払日</th>
            <th>完了日</th>
            <th>金額</th>
          </tr>
        </thead>
        <tbody>
          {benefitsList.map((benefit, index) => (
            <tr key={index}>
              <td>{benefit.date}</td>
              <td></td>
              <td></td>
              <td>{benefit.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </SupportDetailWrapper>
  );
};

// サンプルデータを用いた表示例
const SampleSupportDetail: React.FC = () => {
  const sampleData: SupportDetailProps = {
    contractDate: '平成29年06月17日', 
    yearOfContract: 4,
    numberOfTimes: 73,
    daysUsed: 4,
    paidDaysLeft: 146,
    premiumList: [
      {
        date: '29/06/17',
        startDate: '29/06/17',
        endDate: '30/05/17',
        premiumAmount: 20000,
      },
      {
        date: '29/06/17',
        startDate: '30/06/17',
        endDate: '31/05/17',
        premiumAmount: 5000,
      },
    ],
    benefitsList: [
      {
        date: '29/06/17',
        benefit: '支払額',
        amount: 5000,
      },
      {
        date: '29/06/17',
        benefit: '変更',
        amount: 0,
      },
    ],
  };

  return <SupportDetail {...sampleData} />;
};

export default SampleSupportDetail;