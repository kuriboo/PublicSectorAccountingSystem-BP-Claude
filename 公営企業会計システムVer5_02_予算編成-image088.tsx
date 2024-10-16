import React from 'react';
import styled from '@emotion/styled';

type TaxFileFormProps = {
  companyName?: string;
  fiscalYear?: string;
  taxType?: string;
  lastFilingDate?: string;
  frequency?: number;
  preparer?: string;
  checker?: string;
  removal?: string;
  requirement?: string;
}

const TaxFileForm: React.FC<TaxFileFormProps> = ({
  companyName = '令和○○年度',
  fiscalYear = '令和○○年度',
  taxType = '当初予算',
  lastFilingDate = '査定額',
  frequency = 1,
  preparer = '割振計算',
  checker = '積上計算',
  removal = '個別内応方式',
  requirement = '必要',
}) => {
  return (
    <Container>
      <Title>予算納付税額算出</Title>
      <CompanyInfo>
        <Row>
          <Label>会計年度</Label>
          <Value>{fiscalYear}</Value>
        </Row>
        <Row>
          <Label>予算編成区分</Label>
          <Value>{taxType}</Value>
        </Row>
        <Row>
          <Label>最終査定値</Label>
          <Value>{lastFilingDate}</Value>
        </Row>
        <Row>
          <Label>頻度</Label>
          <Value>{frequency}回</Value>
        </Row>
      </CompanyInfo>
      
      <TaxInfo>
        <Row>
          <Label>税額計算(仕入)</Label>
          <Value>{preparer}</Value>
        </Row>
        <Row>
          <Label>税額計算(売上)</Label>
          <Value>{checker}</Value>
        </Row>
        <Row>
          <Label>仕入控除税額計算</Label>
          <Value>{removal}</Value>
        </Row>
        <Row>
          <Label>特定収入による仕入控除額の調整</Label>
          <Value>{requirement}</Value>
        </Row>
      </TaxInfo>
      
      <Footer>
        <CancelButton>キャンセル</CancelButton>
        <SubmitButton>終了</SubmitButton>
      </Footer>
    </Container>
  );
};

// Sample usage
const SampleUsage: React.FC = () => {
  return (
    <TaxFileForm 
      fiscalYear="令和02年11月26日" 
      lastFilingDate="査定額" 
    />
  );  
}

// Styling with emotion/styled
const Container = styled.div`
  font-family: sans-serif;
  background-color: #f0f0f0;
  padding: 16px;
  width: 400px;
  margin: 0 auto;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 24px;
`;

const CompanyInfo = styled.div`
  background-color: white;
  padding: 16px;
  margin-bottom: 24px;
`;

const TaxInfo = styled.div`
  background-color: white;  
  padding: 16px;
  margin-bottom: 24px;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const Label = styled.div`
  width: 200px;
  font-weight: bold;
`;

const Value = styled.div`
  flex: 1;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CancelButton = styled.button`
  margin-right: 8px;
`;

const SubmitButton = styled.button`
  color: white;
  font-weight: bold;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
`;

export default TaxFileForm;