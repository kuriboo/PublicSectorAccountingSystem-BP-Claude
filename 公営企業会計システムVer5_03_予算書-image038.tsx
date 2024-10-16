import React from 'react';
import styled from 'styled-components';

type Props = {
  title: string;
  fiscalYear: string;
  fiscalPeriod: string;
  forecastType: string;
  targetDivision: string;
  forecastCategory: string;
  reviseAmount: number;
  originalAmount: number;
  note: string;
}

const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 100%;
  box-sizing: border-box;
`;

const Select = styled.select`
  padding: 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 100%;
  box-sizing: border-box;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 5px;
`;

const Textarea = styled.textarea`
  padding: 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 100%;
  box-sizing: border-box;
  resize: vertical;
`;

const ForecastForm: React.FC<Props> = ({
  title,
  fiscalYear,
  fiscalPeriod,
  forecastType,
  targetDivision,
  forecastCategory,
  reviseAmount,
  originalAmount,
  note,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      
      <Label>帳票種別</Label>
      <div>
        <label>
          <Checkbox defaultChecked /> 予算実績計画書
        </label>
        <label>
          <Checkbox /> 予算実績別明細書
        </label>
      </div>

      <Label>作成年度</Label>
      <Select defaultValue={fiscalYear}>
        <option value="2029">令和29</option>
        <option value="2028">令和28</option>
        {/* options for other fiscal years */}
      </Select>

      <Label>作成条件</Label>
      <Select defaultValue={fiscalPeriod}>
        <option value="cumulative">見積要求額</option>
        <option value="single">見積額</option>
      </Select>

      <Label>予算編成区分</Label>
      <div>
        <label>
          <Checkbox defaultChecked={targetDivision === '局'} />
          局
        </label>
        <label>
          <Checkbox defaultChecked={targetDivision === '課'} />
          課
        </label>
      </div>
      <div>
        <label>予算科目</label>
        <Select defaultValue={forecastCategory}>
          <option value="category1">予算科目1</option>
          <option value="category2">予算科目2</option>
          {/* options for other forecast categories */}
        </Select>
      </div>
      <div>
        <label>
          予算額（From）
          <Input type="number" defaultValue={originalAmount} />
        </label>
        &nbsp;&nbsp;~&nbsp;&nbsp;
        <label>
          予算額（To）
          <Input type="number" defaultValue={reviseAmount} />
        </label>
      </div>

      <Label>処理概要</Label>
      <Textarea defaultValue={note} rows={3} />
      
    </Container>
  );
};

// Usage example
const UsageExample: React.FC = () => {
  return (
    <ForecastForm
      title="実施計画書/事項別明細書"
      fiscalYear="2029"
      fiscalPeriod="cumulative" 
      forecastType="estimate"
      targetDivision="局"
      forecastCategory="category1"
      reviseAmount={9999999}
      originalAmount={0}
      note="予算実施計画書・予算事項別明細書を作成します。"
    />
  );
};

export default UsageExample;