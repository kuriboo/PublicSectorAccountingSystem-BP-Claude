import React from 'react';
import styled from '@emotion/styled';

type CompanyAccountingSystemData = {
  id: string;
  accountName: string;
  predayBalance: number;
  depositAmount: number;
  withdrawalAmount: number;
  todayBalance: number;
  monthEndBalance: number;
  remarks: string;
};

type CompanyAccountingSystemProps = {
  data: CompanyAccountingSystemData[];
  fiscalYear: string;
  fiscalTerm: string;
  startDate: string;
};

const CompanyAccountingSystem: React.FC<CompanyAccountingSystemProps> = ({
  data,
  fiscalYear,
  fiscalTerm,
  startDate,
}) => {
  return (
    <Wrapper>
      <Header>
        <Title>決算統計千円丸め処理</Title>
        <FiscalInfo>
          {fiscalYear}年度 {fiscalTerm === '上期' ? '上期' : '下期'}
          {startDate}
        </FiscalInfo>
      </Header>
      
      <Table>
        <thead>
          <tr>
            <Th>予算款</Th>
            <Th>予算款名称</Th>
            <Th>前日残高(円)</Th>
            <Th>当日入金額(円)</Th>  
            <Th>当日出金額(円)</Th>
            <Th>当日残高(千円)</Th>
            <Th>月末残高(千円)</Th>
            <Th>備考</Th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <Td>{item.id}</Td>
              <Td>{item.accountName}</Td>
              <Td>{item.predayBalance.toLocaleString()}</Td>
              <Td>{item.depositAmount.toLocaleString()}</Td>
              <Td>{item.withdrawalAmount.toLocaleString()}</Td>
              <Td>{Math.round(item.todayBalance / 1000).toLocaleString()}</Td>
              <Td>{Math.round(item.monthEndBalance / 1000).toLocaleString()}</Td>
              <Td>{item.remarks}</Td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Footer>
        {/* フッターの追加情報を表示 */}
      </Footer>
    </Wrapper>
  );
};

// スタイリング
const Wrapper = styled.div`
  font-family: sans-serif;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #ccc;
`;

const Title = styled.h2`
  margin: 0;
`;

const FiscalInfo = styled.div`
  font-size: 14px;
`;

const Table = styled.table`
  width: 100%;
  margin-top: 16px;
  border-collapse: collapse;

  th, td {
    padding: 8px;
    border: 1px solid #ccc;  
  }
`;

const Th = styled.th`
  background-color: #f0f0f0;
  font-weight: bold;
  text-align: center;
`;

const Td = styled.td`
  text-align: right;
`;

const Footer = styled.footer`
  margin-top: 16px;
  padding: 8px;
  border-top: 1px solid #ccc;
  font-size: 12px;
`;

// サンプルデータとコンポーネントの使用例
const sampleData: CompanyAccountingSystemData[] = [
  {
    id: '001',
    accountName: '公共下水道事業収益',
    predayBalance: 866624415,
    depositAmount: 20987544,  
    withdrawalAmount: 907311959,
    todayBalance: 866624,
    monthEndBalance: 20988,
    remarks: '29捻五入',
  },
  // ... 他のデータ
];

const CompanyAccountingSystemExample: React.FC = () => {
  return (
    <CompanyAccountingSystem
      data={sampleData}
      fiscalYear="令和03"
      fiscalTerm="下期"
      startDate="令和03年11月14日"
    />
  );  
};

export default CompanyAccountingSystem;