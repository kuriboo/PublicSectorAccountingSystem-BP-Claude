import React from 'react';
import styled from '@emotion/styled';

interface ContractDetailProps {
  contractNo?: string; // 契約番号
  processingYear?: number; // 処理年度
  redemptionDate?: string; // 負担処理日
  amount?: number; // 金額
  deductFromProcessingYear?: boolean; // 処理年度への繰越データを印字する
}

const Container = styled.div`
  font-family: sans-serif;
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const Label = styled.div`
  font-weight: bold;
`;

const Value = styled.div`
  text-align: right;
`;

const ContractDetail: React.FC<ContractDetailProps> = ({
  contractNo = '',
  processingYear = 0,
  redemptionDate = '',
  amount = 0,
  deductFromProcessingYear = false,
}) => {
  return (
    <Container>
      <Row>
        <Label>契約番号</Label>
        <Value>{contractNo}</Value>
      </Row>
      <Row>
        <Label>処理年度</Label>
        <Value>{processingYear} 年度</Value>
      </Row>
      <Row>
        <Label>負担処理日</Label>
        <Value>{redemptionDate}</Value>
      </Row>
      <Row>
        <Label>金額</Label>
        <Value>{amount.toLocaleString()} 円以上</Value>
      </Row>
      {deductFromProcessingYear && (
        <Row>処理年度への繰越データを印字する</Row>
      )}
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <h1>契約詳細</h1>
      <ContractDetail
        contractNo="00 - 99"
        processingYear={28}
        redemptionDate="平成29年08月17日"
        amount={10000}
        deductFromProcessingYear
      />
    </div>
  );
};

export default App;