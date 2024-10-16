import React from 'react';
import styled from '@emotion/styled';

type ContractDetailProps = {
  contractNumber: string;
  decisionNumber: string;
  GSB: string;
  contractPerson: string;
  tenant: string;
  rentDueDate: string;
  contractStartDate: string;
  contractEndDate: string;
  securityDeposit: number;
  repairReserveFund: number;
  renewalFee: number;
  rent: number;
  parkingFee: number;
  commonServiceFee: number;
  totalRent: number;
  payee: string;
  bankName: string;
  branchName: string;
  accountType: string;
  accountNumber: string;
  accountHolder: string;
};

const ContractDetail: React.FC<ContractDetailProps> = ({
  contractNumber,
  decisionNumber,
  GSB,
  contractPerson,
  tenant,
  rentDueDate,
  contractStartDate,
  contractEndDate,
  securityDeposit,
  repairReserveFund,
  renewalFee,
  rent,
  parkingFee,
  commonServiceFee,
  totalRent,
  payee,
  bankName,
  branchName,
  accountType,
  accountNumber,
  accountHolder,
}) => {
  return (
    <Container>
      <Header>
        <HeaderItem>
          <HeaderLabel>契約5年度</HeaderLabel>
          <HeaderValue>{contractNumber}</HeaderValue>
        </HeaderItem>
        <HeaderItem>
          <HeaderLabel>決定番号</HeaderLabel>
          <HeaderValue>{decisionNumber}</HeaderValue>
        </HeaderItem>
        <HeaderItem>
          <HeaderLabel>GSB</HeaderLabel>
          <HeaderValue>{GSB}</HeaderValue>
        </HeaderItem>
      </Header>

      <Section>
        <SectionItem>
          <SectionLabel>契約者</SectionLabel>
          <SectionValue>{contractPerson}</SectionValue>
        </SectionItem>
        <SectionItem>
          <SectionLabel>負担番号</SectionLabel>
          <SectionValue>{tenant}</SectionValue>
        </SectionItem>
        <SectionItem>
          <SectionLabel>決定処理日</SectionLabel>
          <SectionValue>{rentDueDate}</SectionValue>
        </SectionItem>
        <SectionItem>
          <SectionLabel>契約期間</SectionLabel>
          <SectionValue>
            {contractStartDate} ～ {contractEndDate}
          </SectionValue>
        </SectionItem>
      </Section>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderItem>契約者</TableHeaderItem>
            <TableHeaderItem>支払先</TableHeaderItem>
            <TableHeaderItem>口座番号</TableHeaderItem>
            <TableHeaderItem>口座名義</TableHeaderItem>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableData>{payee}</TableData>
            <TableData>{bankName}</TableData>
            <TableData>{branchName}</TableData>
            <TableData>{accountNumber}</TableData>
            <TableData>{accountHolder}</TableData>
          </TableRow>
        </TableBody>
      </Table>

      <CostTable>
        <TableRow>
          <CostLabel>保証金</CostLabel>
          <CostValue>{securityDeposit.toLocaleString()}</CostValue>
        </TableRow>
        <TableRow>
          <CostLabel>修繕積立金</CostLabel>
          <CostValue>{repairReserveFund.toLocaleString()}</CostValue>
        </TableRow>
        <TableRow>
          <CostLabel>更新料</CostLabel>
          <CostValue>{renewalFee.toLocaleString()}</CostValue>
        </TableRow>
        <TableRow>
          <CostLabel>家賃</CostLabel>
          <CostValue>{rent.toLocaleString()}</CostValue>
        </TableRow>
        <TableRow>
          <CostLabel>駐車料</CostLabel>
          <CostValue>{parkingFee.toLocaleString()}</CostValue>
        </TableRow>
        <TableRow>
          <CostLabel>共益費</CostLabel>
          <CostValue>{commonServiceFee.toLocaleString()}</CostValue>
        </TableRow>
        <TableRow>
          <CostLabel>合計</CostLabel>
          <CostValue>{totalRent.toLocaleString()}</CostValue>
        </TableRow>
      </CostTable>
    </Container>
  );
};

// Sample data for demo
const sampleData: ContractDetailProps = {
  contractNumber: '654',
  decisionNumber: '一般(負担番)',
  GSB: '658',
  contractPerson: '令和5年度',
  tenant: '令和6年度',
  rentDueDate: '令和6年04月01日',
  contractStartDate: '令和6年04月01日',
  contractEndDate: '0000000001',
  securityDeposit: 200000,
  repairReserveFund: 2000,
  renewalFee: 200,
  rent: 2000,
  parkingFee: 0,
  commonServiceFee: 2000,
  totalRent: 2200,
  payee: '(有)高瀬設計',
  bankName: '百五',
  branchName: '支店名',
  accountType: '当座',
  accountNumber: '0000000001',
  accountHolder: '高瀬 太郎',
};

// Demo component
const ContractDetailDemo: React.FC = () => {
  return <ContractDetail {...sampleData} />;
};

// Styled components
const Container = styled.div`
  font-family: sans-serif;
  padding: 1rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const HeaderItem = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderLabel = styled.div`
  font-weight: bold;
  margin-right: 0.5rem;
`;

const HeaderValue = styled.div``;

const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const SectionItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  margin-bottom: 0.5rem;
`;

const SectionLabel = styled.div`
  font-weight: bold;
  margin-right: 0.5rem;
`;

const SectionValue = styled.div``;

const Table = styled.table`
  width: 100%;
  margin-bottom: 1rem;
  border-collapse: collapse;
`;

const TableHeader = styled.thead``;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableHeaderItem = styled.th`
  padding: 0.5rem;
  border: 1px solid #ccc;
  text-align: center;
`;

const TableData = styled.td`
  padding: 0.5rem;
  border: 1px solid #ccc;
  text-align: center;
`;

const CostTable = styled.table`
  width: 100%;
`;

const CostLabel = styled.td`
  padding: 0.25rem;
  text-align: left;
`;

const CostValue = styled.td`
  padding: 0.25rem;
  text-align: right;
`;

export default ContractDetailDemo;