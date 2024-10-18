import React from 'react';
import styled from 'styled-components';

// 支払決定の型定義
type Determination = {
  jyukyusaki: string;
  jyukyuKubun: string;
  keiyakuStart: string;
  price: number;
  jikoDofukin: number;
  jyukyuTax: number;
  total: number;
}

// コンポーネントのプロパティの型定義
type Props = {
  number: number;
  date: string;
  code: string;
  codeLabel: string;
  paymentSummary: {
    accountName: string;
    bankName: string;
    branchName: string;
    accountNumber: string;
    accountHolder: string;
  };
  determinationList: Determination[];
}

// スタイル定義
const Wrapper = styled.div`
  font-family: sans-serif;
  border: 1px solid #ccc;
  padding: 10px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

const SummaryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const SummaryItem = styled.div`
  flex: 1;
`;

const SummaryLabel = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const SummaryValue = styled.div``;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ccc;
    padding: 5px;
    text-align: center;
  }

  th {
    background-color: #f0f0f0;
  }
`;

// 支払決定一覧コンポーネント
const PaymentDetermination: React.FC<Props> = ({
  number,
  date,
  code,
  codeLabel,
  paymentSummary,
  determinationList,
}) => {
  return (
    <Wrapper>
      <Title>支払決定一覧</Title>
      <SummaryWrapper>
        <SummaryItem>
          <SummaryLabel>支出決定</SummaryLabel>
          <SummaryValue>
            平成19年度　　　番号　258
          </SummaryValue>
        </SummaryItem>
        <SummaryItem>
          <SummaryLabel>支払日</SummaryLabel>
          <SummaryValue>{date}</SummaryValue>
        </SummaryItem>
        <SummaryItem>
          <SummaryLabel>支払方法</SummaryLabel>
          <SummaryValue>口座振込</SummaryValue>
        </SummaryItem>
        <SummaryItem>
          <SummaryLabel>支払先</SummaryLabel>
          <SummaryValue>
            {code ? `${code} ${codeLabel}` : ''}  
          </SummaryValue>
        </SummaryItem>
      </SummaryWrapper>
      
      <SummaryWrapper>
        <SummaryItem>
          <SummaryLabel>預金種別</SummaryLabel>
          <SummaryValue>{paymentSummary.accountName}</SummaryValue>
        </SummaryItem>
        <SummaryItem>
          <SummaryLabel>銀行名</SummaryLabel>
          <SummaryValue>{paymentSummary.bankName}</SummaryValue>
        </SummaryItem>
        <SummaryItem>
          <SummaryLabel>支店名</SummaryLabel>
          <SummaryValue>{paymentSummary.branchName}</SummaryValue>
        </SummaryItem>
        <SummaryItem>
          <SummaryLabel>口座番号</SummaryLabel>
          <SummaryValue>{paymentSummary.accountNumber}</SummaryValue>
        </SummaryItem>
        <SummaryItem>
          <SummaryLabel>名義人</SummaryLabel>
          <SummaryValue>{paymentSummary.accountHolder}</SummaryValue>
        </SummaryItem>
        <SummaryItem>
          <SummaryLabel>決定額</SummaryLabel>
          <SummaryValue>
            {determinationList.reduce((sum, d) => sum + d.total, 0)}
          </SummaryValue>  
        </SummaryItem>
        <SummaryItem>
          <SummaryLabel>本体額</SummaryLabel>
          <SummaryValue>
            {determinationList.reduce((sum, d) => sum + d.price, 0)}
          </SummaryValue>
        </SummaryItem>
        <SummaryItem>
          <SummaryLabel>消費税額</SummaryLabel>
          <SummaryValue>
            {determinationList.reduce((sum, d) => sum + d.jyukyuTax, 0)}
          </SummaryValue>
        </SummaryItem>
      </SummaryWrapper>
      
      <Table>
        <thead>
          <tr>
            <th>支出節</th>
            <th>支出細節</th>
            <th>支出明細</th>
            <th>税</th>
            <th>決定額</th>
            <th>消費税額</th>
            <th>税抜金額</th>
          </tr>
        </thead>
        <tbody>
          {determinationList.map((d, i) => (
            <tr key={i}>
              <td>{d.jyukyusaki}</td>  
              <td>{d.jyukyuKubun}</td>
              <td>{d.keiyakuStart.replace(/(\d{2})(\d{2})/, '$1年$2月')}</td>
              <td>不課税</td>
              <td>{d.total.toLocaleString()}</td>
              <td>{d.jikoDofukin}</td>
              <td>{d.price.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>  
      </Table>
    </Wrapper>
  );
};

// コンポーネントの使用例
const DummyData: Props = {
  number: 258,
  date: '平成19年6月3日',
  code: '0000000004', 
  codeLabel: '株式会社 ぎょうせい',
  paymentSummary: {
    accountName: '普通預金',
    bankName: 'みずほ銀行',
    branchName: '本店',
    accountNumber: '1111111',
    accountHolder: 'カブシキガイシャギョウセイ',
  },
  determinationList: [
    {
      jyukyusaki: '手当-原水',  
      jyukyuKubun: '原・検査手当',
      keiyakuStart: '18年2007',
      price: 195000,
      jikoDofukin: 0, 
      jyukyuTax: 0,
      total: 195000,
    },
    {
      jyukyusaki: '手当-原水',
      jyukyuKubun: '原・住居手当',
      keiyakuStart: '18年2007',  
      price: 35000,
      jikoDofukin: 0,
      jyukyuTax: 0, 
      total: 35000,
    },
    {
      jyukyusaki: '手当-原水',
      jyukyuKubun: '原・通勤手当',
      keiyakuStart: '18年2007',
      price: 88000, 
      jikoDofukin: 0,
      jyukyuTax: 0,
      total: 88000,
    },
  ],
};

const App: React.FC = () => {
  return (
    <div>
      <PaymentDetermination {...DummyData} />  
    </div>
  );
}

export default App;