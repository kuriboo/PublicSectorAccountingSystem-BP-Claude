import React from 'react';
import styled from '@emotion/styled';

type WaterBillingProps = {
  company: string;
  startDate: string;
  endDate: string;
  notice: string;
};

const WaterBilling: React.FC<WaterBillingProps> = ({
  company,
  startDate,
  endDate,
  notice,
}) => {
  return (
    <Container>
      <Header>給与データ取込</Header>
      <CompanySection>
        <Label>会計区分</Label>
        <Value>{company}</Value>
      </CompanySection>
      <DateSection>
        <DateItem>
          <Label>支給日</Label>
          <Value>{startDate}</Value>
        </DateItem>
        <DateItem>
          <Label>起算日</Label>
          <Value>{endDate}</Value>
        </DateItem>
      </DateSection>
      <Notice>{notice}</Notice>
      <ButtonSection>
        <Button type="button">エラー確認</Button>
        <Button type="submit">取込み</Button>
        <Button type="button">終了</Button>
      </ButtonSection>
    </Container>
  );
};

// Styles
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  width: 400px;
`;

const Header = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const CompanySection = styled.div`
  margin-bottom: 8px;
`;

const DateSection = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const DateItem = styled.div`
  flex: 1;
`;

const Label = styled.div`
  font-weight: bold;
`;

const Value = styled.div`
  margin-top: 4px;
`;

const Notice = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 8px;
  margin-bottom: 16px;
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  margin-left: 8px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Usage example
const App: React.FC = () => {
  return (
    <WaterBilling
      company="01.行政市水道事業会計"
      startDate="平成29年09月25日"
      endDate="平成29年09月19日"
      notice="支給日とファイル内各データの支給日が同じ給与支給データを対象にして、給与データの取り込みを行います。また、支給日とファイル内各データの支給日が同じ健康データの取り込みも行います。決定データの設定日は、画面で登録した起算日となります。"
    />
  );
};

export default App;