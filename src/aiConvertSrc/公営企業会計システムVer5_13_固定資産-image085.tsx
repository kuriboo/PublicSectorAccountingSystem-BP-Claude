import React from 'react';
import styled from '@emotion/styled';

// 定数定義
const JOB_TYPES = ['設計', '施工'];
const TAX_RATE = 0.1;

// 型定義
interface ConstructionOrderProps {
  documentNumber?: string;
  documentName?: string;
  orderDate?: string;
  deliveryDate?: string;
  documentSubject?: string;
  clientName?: string;
  projectName?: string;
  jobType?: string;
  taxRate?: number;
}

// スタイル定義
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 8px;
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

const Select = styled.select`
  padding: 4px;
  border-radius: 4px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  padding-top: 8px;
  border-top: 1px solid #ccc;
`;

const TaxInfo = styled.div`
  display: flex;
  align-items: center;
`;

const TaxLabel = styled.div`
  margin-right: 8px;
`;

const TotalLabel = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const TotalValue = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #ff0000;
`;

// メインコンポーネント
const ConstructionOrder: React.FC<ConstructionOrderProps> = ({
  documentNumber = '',
  documentName = '事務連絡表',
  orderDate = '',
  deliveryDate = '',
  documentSubject = '',
  clientName = '',
  projectName = '',
  jobType = '設計',
  taxRate = TAX_RATE,
}) => {
  // 金額計算
  const totalAmount = 200000;
  const taxAmount = Math.floor(totalAmount * taxRate);
  const billingAmount = totalAmount + taxAmount;

  return (
    <Container>
      <Title>工事受注</Title>
      <Row>
        <Label>文書番号</Label>
        <Value>{documentNumber || '600200'}</Value>
      </Row>
      <Row>
        <Label>節</Label>
        <Value>{documentName}</Value>
      </Row>
      <Row>
        <Label>日付</Label>
        <Value>{orderDate}</Value>
      </Row>
      <Row>
        <Label>件名</Label>
        <Value>{documentSubject}</Value>
      </Row>
      <Row>
        <Label>施工箇所</Label>
        <Value>{projectName}</Value>
      </Row>
      <Row>
        <Label>施工種別</Label>
        <Select value={jobType}>
          {JOB_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </Select>
      </Row>
      <Row>
        <Label>得意先</Label>
        <Value>{clientName}</Value>
      </Row>
      <BottomContainer>
        <TaxInfo>
          <TaxLabel>消費税：</TaxLabel>
          <div>{taxRate * 100}%</div>
        </TaxInfo>
        <div>
          <TotalLabel>請求金額：</TotalLabel>
          <TotalValue>¥{billingAmount.toLocaleString()}</TotalValue>
        </div>
      </BottomContainer>
    </Container>
  );
};

// サンプルデータを用いた表示用コンポーネント
const App: React.FC = () => {
  const sampleData: ConstructionOrderProps = {
    documentNumber: '6010801',
    orderDate: '平成29年7月27日',
    deliveryDate: '平成29年7月27日',
    documentSubject: '○○地区詰所修繕工事',
    clientName: '○○地区',
    projectName: '市内一円',
  };

  return (
    <div>
      <h1>工事受注</h1>
      <ConstructionOrder {...sampleData} />
    </div>
  );
};

export default App;