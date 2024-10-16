import React from 'react';
import styled from '@emotion/styled';

interface DecisionReportFormProps {
  fromDate: string;
  toDate: string;
  forecastDate: string;
  forecastEndDate: string;
  executionInterval: '8' | 'A';
  collectType: 'C' | 'S';
  processingType: 'G' | 'T';
  renderButton?: JSX.Element;
}

const DecisionReportForm: React.FC<DecisionReportFormProps> = ({
  fromDate,
  toDate,
  forecastDate,
  forecastEndDate,
  executionInterval,
  collectType,
  processingType,
  renderButton,
}) => {
  return (
    <Container>
      <Title>決算報告明細書</Title>
      <DateInputs>
        <DateInput>
          <DateLabel>作表日付</DateLabel>
          {/* fromDate, toDateが空の場合はデフォルト値を表示 */}
          <DateValue>{fromDate || '令和04年04月01日'}</DateValue>
          <DateDelimiter>〜</DateDelimiter>
          <DateValue>{toDate || '令和06年08月31日'}</DateValue>
        </DateInput>
        <DateInput>
          <DateLabel>予算科目</DateLabel>
          {/* forecastDate, forecastEndDateが空の場合はデフォルト値を表示 */}
          <DateValue>{forecastDate || '00000000'}</DateValue>
          <DateDelimiter>〜</DateDelimiter>
          <DateValue>{forecastEndDate || '99999999'}</DateValue>
        </DateInput>
      </DateInputs>
      
      <RadioInputs>
        <RadioInput>
          <RadioLabel>細節印字</RadioLabel>
          <RadioButton
            type="radio"
            name="executionInterval"
            value="8"
            checked={executionInterval === '8'}
            readOnly
          />
          <RadioButtonLabel>あり</RadioButtonLabel>
          <RadioButton
            type="radio"
            name="executionInterval"
            value="A"
            checked={executionInterval === 'A'}
            readOnly
          />
          <RadioButtonLabel>なし</RadioButtonLabel>
        </RadioInput>
        
        <RadioInput>
          <RadioLabel>集計区分</RadioLabel>
          <RadioButton
            type="radio"
            name="collectType"
            value="C"
            checked={collectType === 'C'}
            readOnly
          />
          <RadioButtonLabel>税込</RadioButtonLabel>
          <RadioButton
            type="radio"
            name="collectType"
            value="S"
            checked={collectType === 'S'}
            readOnly
          /> 
          <RadioButtonLabel>税抜</RadioButtonLabel>
        </RadioInput>
      </RadioInputs>
      
      <BottomSection>
        <Description>決算報告明細書を作成します。</Description>
        <PrintDate>令和04年06月29日 19時55分</PrintDate>
        {renderButton}
      </BottomSection>
    </Container>
  );
};

// サンプルデータを用いたコンポーネントの使用例
const SampleUsage: React.FC = () => {
  return (
    <DecisionReportForm
      fromDate="令和04年04月01日"
      toDate="令和06年08月31日" 
      forecastDate="00000000"
      forecastEndDate="99999999"
      executionInterval="A"
      collectType="C"
      processingType="G"
      renderButton={<button>Excel出力</button>}
    />
  );
};

// スタイリング
const Container = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  font-family: sans-serif;
`;

const Title = styled.h2`
  margin-top: 0;
  text-align: center;
`;

const DateInputs = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const DateInput = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const DateLabel = styled.span`
  min-width: 80px;
  font-weight: bold;
`;

const DateValue = styled.span`
  padding: 5px 10px;
  border: 1px solid #ccc;
  background-color: white;
`;

const DateDelimiter = styled.span`
  margin: 0 5px;
`;

const RadioInputs = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 20px;
  
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
  }  
`;

const RadioInput = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const RadioLabel = styled.span`
  min-width: 80px;
  font-weight: bold;
`;

const RadioButton = styled.input`
  margin-right: 5px;
`;

const RadioButtonLabel = styled.label`
  margin-right: 10px;
`;

const BottomSection = styled.div`
  margin-top: 30px;
`;

const Description = styled.p`
  margin-bottom: 10px;
`;

const PrintDate = styled.div`
  text-align: right;
  margin-bottom: 20px;
`;

export default DecisionReportForm;