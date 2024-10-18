import React from 'react';
import styled from 'styled-components';

// 振替予定日の型定義
type TransferDate = {
  date: string;
  reason?: string;
};

// プロパティの型定義
type Props = {
  companyName: string;
  taxId: string;
  personalId: string;
  address: string;
  transferDates: TransferDate[];
  totalAmount: number;
};

// スタイル定義
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
`;

const CompanyInfo = styled.div`
  p {
    margin: 5px 0;
  }
`;

const TaxInfo = styled.div`
  text-align: right;
  p {
    margin: 5px 0;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
`;

const TotalAmount = styled.div`
  text-align: right;
  font-weight: bold;
`;

// 源泉徴収票コンポーネント
const WithholdingSlip: React.FC<Props> = ({
  companyName,
  taxId,
  personalId,
  address,
  transferDates,
  totalAmount,
}) => {
  return (
    <Container>
      <Header>
        <CompanyInfo>
          <p>{companyName}</p>
          <p>税務署: {taxId}</p>
          <p>個人番号: {personalId}</p>
          <p>住所: {address}</p>
        </CompanyInfo>
        <TaxInfo>
          <p>所得の種類: 給与</p>
          <p>所得税額: {totalAmount.toLocaleString()}円</p>
        </TaxInfo>
      </Header>

      <Table>
        <thead>
          <tr>
            <th>支払年月日</th>
            <th>振替区分</th>
            <th>振替予定日</th>
            <th>摘要</th>
            <th>入力額</th>
          </tr>
        </thead>
        <tbody>
          {transferDates.map((date, index) => (
            <tr key={index}>
              <td>{date.date}</td>
              <td>振替</td>
              <td>{date.date}</td>
              <td>{date.reason || '-'}</td>
              <td>{(totalAmount / transferDates.length).toLocaleString()}円</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <TotalAmount>
        合計金額: {totalAmount.toLocaleString()}円
      </TotalAmount>
    </Container>
  );
};

// 使用例
const sampleData: Props = {
  companyName: '株式会社テスト',
  taxId: '9999999',
  personalId: '0000000',
  address: '東京都新宿区1-2-3',
  transferDates: [
    { date: '2029/05/30', reason: '支払決定' },
    { date: '2029/05/31', reason: '支払決定' },
    // 以下、転記元データに合わせたサンプルデータ
  ],
  totalAmount: 1500000,
};

const App: React.FC = () => {
  return (
    <div>
      <h1>源泉徴収票サンプル</h1>
      <WithholdingSlip {...sampleData} />
    </div>
  );
};

export default App;