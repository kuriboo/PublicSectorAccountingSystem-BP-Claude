import React from 'react';
import styled from '@emotion/styled';

type Params = {
  industry: string[];
  fromCode: string;
  fromName: string;
  toCode: string;
  toName: string;
  taxType: '全て' | '通路請求書発行事業者' | '通路請求書発行事業者以外';
  prefectures: string[];
  startDate: string;
  endDate: string;
  closingDate: string;
  systemEffectiveDate: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  @media (min-width: 768px) {
    max-width: 800px;
    margin: 0 auto;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
`;

const Section = styled.div`
  margin-bottom: 24px;
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 8px;
`;

const IndustryCheckboxes = styled.div`
  display: flex;
  gap: 8px;
`;

const CodeInput = styled.input`
  padding: 4px;
  margin-right: 8px;
  width: 100px;
`;

const RadioButton = styled.input`
  margin-right: 4px;
`;

const PrefectureSelect = styled.select`
  padding: 4px;
  margin-right: 8px;
`;

const DateInput = styled.input`
  padding: 4px;
  margin-right: 8px;
  width: 150px;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 1rem;
  margin-right: 8px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const BusinessNameModal = ({ params }: { params: Params }) => {
  return (
    <Container>
      <Title>業種別業者名簿(工事)</Title>
      <Form>
        <Section>
          <SectionTitle>令和04年</SectionTitle>
        </Section>

        <Section>
          <IndustryCheckboxes>
            <label><input type="checkbox" />業種別</label>
            <label><input type="checkbox" />業種地区別</label>
            <label><input type="checkbox" />業者別</label>
            <label><input type="checkbox" />地区業者別</label>
          </IndustryCheckboxes>
        </Section>

        <Section>
          <CodeInput type="text" value={params.fromCode} readOnly />
          ～
          <CodeInput type="text" value={params.toCode} readOnly />
          <br />
          <CodeInput type="text" value={params.fromName} readOnly />
          ～ 
          <CodeInput type="text" value={params.toName} readOnly />
        </Section>

        <Section>
          <SectionTitle>課税業者</SectionTitle>
          <label>
            <RadioButton type="radio" checked={params.taxType === '全て'} readOnly />
            全て
          </label>
          <label>
            <RadioButton type="radio" checked={params.taxType === '通路請求書発行行事業者'} readOnly />
            通路請求書発行事業者
          </label>
          <label>
            <RadioButton type="radio" checked={params.taxType === '通路請求書発行事業者以外'} readOnly />
            通路請求書発行事業者以外
          </label>
        </Section>
        
        <Section>
          <PrefectureSelect>
            {params.prefectures.map((prefecture) => (
              <option key={prefecture}>{prefecture}</option>
            ))}
          </PrefectureSelect>
          ～
          <PrefectureSelect>
            {params.prefectures.map((prefecture) => (
              <option key={prefecture}>{prefecture}</option>
            ))}
          </PrefectureSelect>
        </Section>

        <Section>
          <DateInput type="date" value={params.startDate} readOnly />
          ～
          <DateInput type="date" value={params.endDate} readOnly />
        </Section>
        
        <Section>
          <DateInput type="date" value={params.closingDate} readOnly />時点
        </Section>

        <Section>
          令和04年12月13日まで
        </Section>

        <div>
          <Button type="button">OK</Button>
          <Button type="button">クリア</Button>
          <Button type="button">終了</Button>
        </div>
      </Form>
    </Container>
  );
};

// Usage example:
const businessNameParams: Params = {
  industry: ['業種別', '業種地区別', '業者別', '地区業者別'],   
  fromCode: '000',
  fromName: '○○○○○○○○○○',
  toCode: '999',
  toName: '△△△△△△△△△△△',
  taxType: '全て',
  prefectures: ['東京', '大阪', '北海道'],
  startDate: '2022-01-01',
  endDate: '2022-12-31',
  closingDate: '2022-12-13',
  systemEffectiveDate: '令和04年12月13日',
};

const App: React.FC = () => {
  return (
    <div>
      <h1>Business Name Modal Example</h1>
      <BusinessNameModal params={businessNameParams} />
    </div>
  );
};

export default App;