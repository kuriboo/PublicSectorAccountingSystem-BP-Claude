import React from 'react';
import styled from '@emotion/styled';

type CompanyType = {
  code: string;
  name: string;
};

type IndustryType = {
  code: string;
  name: string;
};

type ReservationSearchFormProps = {
  companies: CompanyType[];
  industries: IndustryType[];
  onSubmit: (data: {
    company: string;
    industry: string;
    startDate: string;
    endDate: string;
    isPublic: boolean;
    taxExcluded: boolean;
  }) => void;
};

const ReservationSearchForm: React.FC<ReservationSearchFormProps> = ({
  companies,
  industries,
  onSubmit,
}) => {
  const [company, setCompany] = React.useState('');
  const [industry, setIndustry] = React.useState('');
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');
  const [isPublic, setIsPublic] = React.useState(false);
  const [taxExcluded, setTaxExcluded] = React.useState(false);

  const handleSubmit = () => {
    onSubmit({
      company,
      industry,
      startDate,
      endDate,
      isPublic,
      taxExcluded,
    });
  };

  return (
    <Container>
      <Title>予約市水道事業会計</Title>
      <HeaderRow>
        <span>総務課 予算・会計担当 ぎょうせい太郎</span>
        <span>平成29年09月05日</span>
      </HeaderRow>
      <FormRow>
        <Label>年度</Label>
        <select value={industry} onChange={(e) => setIndustry(e.target.value)}>
          <option value="">工事</option>
          {industries.map((industry) => (
            <option key={industry.code} value={industry.code}>
              {industry.name}
            </option>
          ))}
        </select>
      </FormRow>
      <FormRow>
        <Label>出力順序</Label>
        <CheckboxGroup>
          <span>予算担当課順・受付番号順</span>
        </CheckboxGroup>
      </FormRow>
      <FormRow>
        <Label>業種</Label>
        <CheckboxGroup>
          <Checkbox
            type="checkbox"
            value="001"
            checked={true}
            readOnly={true}
          />
          <span>土木一式工事</span>
          <Checkbox
            type="checkbox"
            value="002"
            checked={true}
            readOnly={true}
          />
          <span>建築一式工事</span>
          <Checkbox type="checkbox" value="003" />
          <span>大工工事</span>
          <Checkbox type="checkbox" value="004" />
          <span>左官工事</span>
          <Checkbox type="checkbox" value="005" />
          <span>とび・土工・コンクリート工事</span>
          <Checkbox type="checkbox" value="006" />
          <span>石工事</span>
          <Checkbox type="checkbox" value="007" />
          <span>屋根工事</span>
          <Checkbox type="checkbox" value="008" />
          <span>電気工事</span>
          <Checkbox type="checkbox" value="009" />
          <span>管工事</span>
          <Checkbox type="checkbox" value="010" />
          <span>タイル・れんが・ブロック工事</span>
        </CheckboxGroup>
      </FormRow>

      <FormRow>
        <Button type="button" onClick={handleSubmit}>
          所属
        </Button>
        <Input value={company} readOnly />
        <span>総務課</span>
      </FormRow>
      
      <DateRangeRow>
        <Label>登録年月日</Label>
        <Input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <span>〜</span>
        <Input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </DateRangeRow>
      
      <FormRow>
        <Label>受付番号</Label>
        <Input value={company} readOnly />
        <Label>〜</Label>
        <Input value={company} readOnly />
      </FormRow>
      
      <FormRow>
        <Checkbox
          type="checkbox"
          checked={isPublic}
          onChange={() => setIsPublic(!isPublic)}
        />
        <span>設計金額(税込)の印字</span>
      </FormRow>

      <ButtonRow>
        <Button type="button">OK</Button>
        <Button type="button">クリア</Button>
        <Button type="button">終了</Button>
      </ButtonRow>
      
    </Container>
  );
};

const Container = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Label = styled.label`
  margin-right: 8px;
`;

const Input = styled.input`
  padding: 4px;
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  > * {
    margin-right: 8px;
  }
`;

const Checkbox = styled.input`
  margin-right: 4px;
`;

const DateRangeRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  > * {
    margin-right: 8px;
  }
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-right: 8px;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

// Usage example
const companies = [
  { code: '1', name: 'Company 1' },
  { code: '2', name: 'Company 2' },
];
const industries = [
  { code: '1', name: 'Industry 1' },
  { code: '2', name: 'Industry 2' },
];

const ExampleUsage: React.FC = () => {
  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <ReservationSearchForm
      companies={companies}
      industries={industries}
      onSubmit={handleSubmit}
    />
  );
};

export default ExampleUsage;