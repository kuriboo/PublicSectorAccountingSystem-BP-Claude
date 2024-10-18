import React from 'react';
import styled from '@emotion/styled';

type Props = {
  applicationMaster: string;
  todayYear: number;
  todayCode: string;
  officeCode: string;
  apGroupCode: string;
  districtData: {
    column1: string;
    allData: string;
    registrationData: string;
    midtermData: string;
    businessReportData: string;
    annualReportData: string;
    reportData: string;
  }[];
};

const ApplicationMasterForm: React.FC<Props> = ({
  applicationMaster,
  todayYear,
  todayCode,
  officeCode,
  apGroupCode,
  districtData,
}) => {
  return (
    <Container>
      <Title>アプリケーション権限マスタ</Title>
      <Subtitle>行政市水道事業会計 総務課 予算・会計担当 ぎょうせい太郎 平成29年09月05日</Subtitle>

      <FormGroup>
        <Label>平成29</Label>
        <Value>年度</Value>
      </FormGroup>

      <FormGroup>
        <Label>所属コード</Label>
        <Value>0000001</Value>
      </FormGroup>

      <FormGroup>
        <Label>担当コード</Label>
        <Value>001</Value>
      </FormGroup>  

      <FormGroup>
        <Label>APグループコード</Label>  
        <Value>00000001</Value>
      </FormGroup>

      <Table>
        <thead>
          <tr>
            <Th>権限区分</Th>
            <Th>なし</Th>
            <Th>全データ</Th>
            <Th>所属大分類データ</Th>
            <Th>所属中分類データ</Th>
            <Th>所属小分類データ</Th>
            <Th>個別照会</Th>
          </tr>
        </thead>
        <tbody>
          {districtData.map((row, i) => (
            <tr key={i}>
              <Td>{row.column1}</Td>
              <Td>{row.allData}</Td>
              <Td>{row.registrationData}</Td>
              <Td>{row.midtermData}</Td>
              <Td>{row.businessReportData}</Td>
              <Td>{row.annualReportData}</Td>
              <Td>{row.reportData}</Td>
            </tr>
          ))}
        </tbody>
      </Table>

      <ButtonGroup>
        <Button>前データ</Button>
        <Button>次データ</Button>
        <Button primary>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// Sample data for testing
const sampleData = {
  applicationMaster: 'アプリケーション権限マスタ',
  todayYear: 29, 
  todayCode: '年度',
  officeCode: '0000001',
  apGroupCode: '00000001',
  districtData: [
    {
      column1: '登録', 
      allData: '〇',
      registrationData: '〇', 
      midtermData: '〇',
      businessReportData: '〇',
      annualReportData: '〇', 
      reportData: '〇',
    },
    {
      column1: '削除',
      allData: '〇',
      registrationData: '〇',
      midtermData: '〇', 
      businessReportData: '〇',
      annualReportData: '〇',
      reportData: '〇',  
    },
    {
      column1: '参照',
      allData: '〇', 
      registrationData: '〇',
      midtermData: '〇',
      businessReportData: '〇',
      annualReportData: '〇',
      reportData: '〇',
    },
  ],
};

// Usage example
const UsageExample: React.FC = () => {
  return (
    <ApplicationMasterForm
      applicationMaster={sampleData.applicationMaster}
      todayYear={sampleData.todayYear}
      todayCode={sampleData.todayCode} 
      officeCode={sampleData.officeCode}
      apGroupCode={sampleData.apGroupCode}
      districtData={sampleData.districtData}
    />
  );
};

export default UsageExample;

// Styled components
const Container = styled.div`
  font-family: 'メイリオ', Meiryo, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 14px;
  text-align: right;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.div`
  width: 150px;
  font-weight: bold;
`;

const Value = styled.div`
  width: 150px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f0f0f0;
  }
`;

const Th = styled.th``;

const Td = styled.td``;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 6px 12px;
  border: 1px solid ${({ primary }) => (primary ? '#007bff' : '#6c757d')};
  border-radius: 4px;
  background-color: ${({ primary }) => (primary ? '#007bff' : '#fff')};
  color: ${({ primary }) => (primary ? '#fff' : '#6c757d')};
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: ${({ primary }) => (primary ? '#0056b3' : '#e2e6ea')};
  }
`;