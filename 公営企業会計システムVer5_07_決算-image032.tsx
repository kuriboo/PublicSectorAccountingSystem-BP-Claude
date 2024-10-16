import React from 'react';
import styled from '@emotion/styled';

type HighRiskUpdateProps = {
  data: {
    processingDate: string;
    updateStatus: string;
    expirationDate: string;
    newExpirationDate: string;
  };
};

const HighRiskUpdate: React.FC<HighRiskUpdateProps> = ({ data }) => {
  const {
    processingDate,
    updateStatus,
    expirationDate,
    newExpirationDate,
  } = data;

  return (
    <Container>
      <Title>繰越残高更新処理</Title>
      <Table>
        <tbody>
          <tr>
            <th>本年度</th>
            <td>{updateStatus === '令和03' ? '○' : ''} 年度</td>
            <th>新年度</th>
            <td>令和03 年度</td>
          </tr>
        </tbody>
      </Table>
      <ProcessingText>
        指定した本年度から、新年度への繰越値を更新します。
        ※残算絞り枠に○の処理を行わないと、新年度に以下の処理が正しく出力されません。
      </ProcessingText>
      <ProcessingList>
        <li>月次合計残高試算表</li>
        <li>総勘定合計表</li>
        <li>資金予算表</li>
        <li>銀行預金別資金残高表</li>
        <li>銀行預金別入出金明細表</li>
        <li>総勘定元帳</li>
        <li>補助元帳</li>
        <li>月次損益計算書</li>
        <li>月次貸借対照表</li>
        <li>調定収入月計表</li>
        <li>作表制御集計表(仕訳科目を設定している場合)</li>
      </ProcessingList>
      <Text>※何回でも実行可能です。</Text>
      <DateText>
        繰越更新日時 令和02年12月6日 19時42分<br />
        令和02年度 → 令和03年度
      </DateText>
    </Container>
  );
};

// Usage example
const data = {
  processingDate: '令和02年12月25日',
  updateStatus: '令和03',
  expirationDate: '令和02年度',
  newExpirationDate: '令和03年度',
};

const App: React.FC = () => {
  return (
    <div>
      <h1>High Risk Update Example</h1>
      <HighRiskUpdate data={data} />
    </div>
  );
};

export default App;

// Styles
const Container = styled.div`
  font-family: sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th,
  td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
  }
`;

const ProcessingText = styled.p`
  margin-bottom: 10px;
`;

const ProcessingList = styled.ul`
  margin-bottom: 20px;
  padding-left: 20px;
`;

const Text = styled.p`
  margin-bottom: 10px;
`;

const DateText = styled.p`
  text-align: right;
`;