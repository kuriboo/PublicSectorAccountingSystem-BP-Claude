import React from 'react';
import styled from '@emotion/styled';

interface CompanySearchProps {
  companyNumber: string;
  companyName: string;
  fiscalYear: number;
  startDate: string;
  endDate: string;
}

const CompanySearch: React.FC<CompanySearchProps> = ({ companyNumber, companyName, fiscalYear, startDate, endDate }) => {
  return (
    <Container>
      <Title>指名業者一覧表</Title>
      <DateRange>
        <DateItem>登録番号: {companyNumber}</DateItem>
        <DateItem>予算・会計担当: ぎょうせい太郎</DateItem>
        <DateItem>平成29年09月05日</DateItem>
      </DateRange>
      <CompanyInfo>
        <CompanyItem>
          <Label>平成</Label>
          <Value>{fiscalYear}</Value>
          <Label>年度</Label>
          <Value>委付区分</Value>
          <Dropdown>
            <option>工事</option>
          </Dropdown>
        </CompanyItem>
        <CompanyItem>
          <Label>委付番号</Label>
          <Value>{companyNumber}</Value>
          <Label> - </Label>
          <Value>{companyNumber}</Value>
        </CompanyItem>
      </CompanyInfo>
      <DateInfo>
        <DateItem>登録年月日</DateItem>
        <DateItem>平成{startDate.slice(0,2)}年{startDate.slice(2,4)}月{startDate.slice(4,6)}日 〜</DateItem>
        <DateItem>平成{endDate.slice(0,2)}年{endDate.slice(2,4)}月{endDate.slice(4,6)}日</DateItem>
      </DateInfo>
      <ButtonGroup>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  font-family: 'Meiryo UI';
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const DateRange = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
`;

const DateItem = styled.div`
  font-size: 14px;
`;

const CompanyInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
`;

const CompanyItem = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.span`
  font-size: 14px;
  margin-right: 5px;
`;

const Value = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
`;

const Dropdown = styled.select`
  font-size: 14px;
  padding: 5px;
`;

const DateInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  font-size: 14px;
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  border-radius: 4px;
  background-color: #0066cc;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0052a3;
  }
`;

// Usage example
const App: React.FC = () => {
  return (
    <CompanySearch 
      companyNumber="0000000"
      companyName="委付区分"
      fiscalYear={29}
      startDate="290401"
      endDate="300331"
    />
  );
};

export default App;