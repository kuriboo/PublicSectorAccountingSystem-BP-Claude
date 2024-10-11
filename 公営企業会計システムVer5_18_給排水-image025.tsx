import React from 'react';
import styled from '@emotion/styled';

type WorkDetailProps = {
  workNumber: string;
  orderDate: string;
  representationNumber: string;
  representationNumber2: string;
  clientName: string;
  clientNameKana: string;
  postalCode: string;
  faxNumber: string;
  manager: string;
  accountingStaff: string;
  tempCustomerNumber: string;
  salesStaff: string;
  workHistory: {
    workDetailNumber: string;
    startDate: string;
    endDate: string;
    representationNumber: string;
    representationNumber2: string;
  }[];
}

const Container = styled.div`
  font-family: sans-serif;
  margin: 16px;

  @media (max-width: 600px) {
    margin: 8px;
  }
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const FieldLabel = styled.div`
  width: 200px;
  font-weight: bold;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const FieldValue = styled.div`
  flex: 1;
`;

const RadioButton = styled.input`
  margin-right: 8px;
`;

const Table = styled.table`
  width: 100%;
  margin-top: 16px;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ccc;
    padding: 4px;
  }

  th {
    background-color: #f0f0f0;
  }
`;

const WorkDetail: React.FC<WorkDetailProps> = ({
  workNumber,
  orderDate,
  representationNumber,
  representationNumber2,
  clientName,
  clientNameKana,
  postalCode,
  faxNumber,
  manager,
  accountingStaff,
  tempCustomerNumber,
  salesStaff,
  workHistory,
}) => {
  return (
    <Container>
      <h2>工事代理マスタ</h2>
      <Row>
        <FieldLabel>工事代理台</FieldLabel>
        <FieldValue>{workNumber}</FieldValue>
      </Row>
      <Row>
        <FieldLabel>適用開始年月日</FieldLabel>
        <FieldValue>{orderDate}</FieldValue>
      </Row>
      <Row>
        <FieldLabel>代表者名1</FieldLabel>
        <FieldValue>
          {representationNumber}
          <RadioButton type="radio" name="representation" value="登録" />
          登録
          <RadioButton type="radio" name="representation" value="訂正" />
          訂正
          <RadioButton type="radio" name="representation" value="削除" />
          削除
        </FieldValue>
      </Row>
      <Row>
        <FieldLabel>代表者名2</FieldLabel>
        <FieldValue>{representationNumber2}</FieldValue>
      </Row>
      <Row>
        <FieldLabel>顧客</FieldLabel>
        <FieldValue>
          {clientName}
          <RadioButton type="radio" name="clientName" value="検索" />
          検索
        </FieldValue>
      </Row>
      <Row>
        <FieldLabel>電話番号</FieldLabel>
        <FieldValue>{postalCode}</FieldValue>
      </Row>
      <Row>
        <FieldLabel>保持機材</FieldLabel>
        <FieldValue>{faxNumber}</FieldValue>
      </Row>
      <Row>
        <FieldLabel>主任技術者</FieldLabel>
        <FieldValue>{manager}</FieldValue>
      </Row>
      <Row>
        <FieldLabel>担当者電話番号</FieldLabel>
        <FieldValue>{accountingStaff}</FieldValue>
      </Row>
      <Row>
        <FieldLabel>資格</FieldLabel>
        <FieldValue>{tempCustomerNumber}</FieldValue>
      </Row>
      <h3>工事履歴</h3>
      <Table>
        <thead>
          <tr>
            <th>指定工事店番号</th>
            <th>適用開始年月日</th>
            <th>届出日</th>
            <th>代表者名1</th>
            <th>代表者名2</th>
          </tr>
        </thead>
        <tbody>
          {workHistory.map((history, index) => (
            <tr key={index}>
              <td>{history.workDetailNumber}</td>
              <td>{history.startDate}</td>
              <td>{history.endDate}</td>
              <td>{history.representationNumber}</td>
              <td>{history.representationNumber2}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

// Usage example
const sampleData: WorkDetailProps = {
  workNumber: '100000000',
  orderDate: '2023/11/29',
  representationNumber: '代表者名1',
  representationNumber2: '代表者名2',
  clientName: '顧客名称',
  clientNameKana: 'コキャクメイショウ',
  postalCode: '03-1234-56789',
  faxNumber: '03-1111-11111',
  manager: '保守機材テスト',
  accountingStaff: '主任技術者テスト',
  tempCustomerNumber: '090-1234-5678',  
  salesStaff: '営業担当',
  workHistory: [
    {
      workDetailNumber: '9000000000001',
      startDate: '2023/11/29',
      endDate: '2023/11/28',
      representationNumber: '代表者名1',
      representationNumber2: '代表者名2',
    },
    {
      workDetailNumber: '9000000000002',
      startDate: '2018/11/28',
      endDate: '2023/11/29',
      representationNumber: '代表者名1',
      representationNumber2: '',
    },
  ],
};

const App: React.FC = () => {
  return <WorkDetail {...sampleData} />;
};

export default App;