// 銀行別預金別資金残高表示カマスタコンポーネント
import React from 'react';
import styled from 'styled-components';

// 型定義
type BankBalanceProps = {
  bankCode: string;
  bankName: string;
  futsuu: string;
  kariire: string; 
  torikeshi: string;
  zenKikanKashikabuKariire: string;
  zenKikanKashikabuGendo: string;
};

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
  
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  max-width: 600px;
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: right;
  }

  th {
    background-color: #f2f2f2;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin: 0 5px;
  font-size: 14px;
`;

// コンポーネント実装
const BankBalance: React.FC<BankBalanceProps> = ({
  bankCode,
  bankName,
  futsuu,
  kariire,
  torikeshi,
  zenKikanKashikabuKariire,
  zenKikanKashikabuGendo
}) => {
  return (
    <Container>
      <Title>銀行別預金別資金残高表示カマスタ</Title>
      <Table>
        <tbody>
          <tr>
            <th>会計年度</th>
            <td>平成29年度</td>
          </tr>
          <tr>
            <th>仕訳節</th>
            <td>0001仕訳</td>
          </tr>
          <tr>
            <th>仕訳細節</th>
            <td>0001仕訳</td>
          </tr>
          <tr>
            <th>仕訳明細</th>
            <td>0001仕訳</td>
          </tr>
          <tr>
            <th>資金残高預金残高別コード</th>
            <td>04(普通預金)</td>
          </tr>
          <tr>
            <th>資金残高預金種類別コード</th>
            <td>04(普通預金)</td>
          </tr>
        </tbody>
      </Table>
      
      <ButtonContainer>
        <Button>前データ</Button>
        <Button>次データ</Button>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};



// 使用例
const SampleData: BankBalanceProps = {
  bankCode: '平成29',
  bankName: '年度',
  futsuu: '0001',
  kariire: '0001',
  torikeshi: '0001',
  zenKikanKashikabuKariire: '04 (普通預金)',
  zenKikanKashikabuGendo: '04 (普通預金)',
};

const App: React.FC = () => {
  return (
    <div>
      <h1>銀行別預金別資金残高表示カマスタ</h1>
      <BankBalance {...SampleData} />
    </div>
  );  
};

export default App;