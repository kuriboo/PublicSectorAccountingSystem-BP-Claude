import React from 'react';
import styled from '@emotion/styled';

interface TaxReportFormProps {
  date: string;
  taxAmount: number;
  incomeTax: number;
  residentTax: number;
}

const TaxReportForm: React.FC<TaxReportFormProps> = ({ date, taxAmount, incomeTax, residentTax }) => {
  // 日付が入力されていない場合はデフォルト値を設定
  const formattedDate = date ? date : 'YYYY/MM/DD';

  return (
    <FormWrapper>
      <Title>消費税仕訳伝票仕訳</Title>
      <DateWrapper>
        <DateLabel>伝票日付</DateLabel>
        <DateValue>{formattedDate}</DateValue>
      </DateWrapper>
      <AmountWrapper>
        <AmountItem>
          <AmountLabel>税込金額</AmountLabel>
          <AmountValue>{taxAmount}</AmountValue>
        </AmountItem>
        <AmountItem>
          <AmountLabel>税抜金額</AmountLabel>
          <AmountValue>{taxAmount - incomeTax - residentTax}</AmountValue>
        </AmountItem>
        <AmountItem>
          <AmountLabel>消費税額</AmountLabel>
          <AmountValue>{incomeTax + residentTax}</AmountValue>
        </AmountItem>
      </AmountWrapper>
      <ButtonWrapper>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button primary>キャンセル</Button>
      </ButtonWrapper>
    </FormWrapper>
  );
};

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  return (
    <TaxReportForm 
      date="2023/05/01"
      taxAmount={1000}
      incomeTax={80}
      residentTax={20}
    />
  );
};

// スタイリング
const FormWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  width: 300px;
  box-sizing: border-box;
  
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  margin: 0 0 16px;
`;

const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const DateLabel = styled.span`
  margin-right: 8px;
`;

const DateValue = styled.span`
  font-weight: bold;
`;

const AmountWrapper = styled.div`
  margin-bottom: 16px;
`;

const AmountItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const AmountLabel = styled.span``;

const AmountValue = styled.span`
  font-weight: bold;
`;

const ButtonWrapper = styled.div`
  text-align: right;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 8px 16px;
  margin-left: 8px;
  background-color: ${props => props.primary ? '#007bff' : '#f0f0f0'};
  color: ${props => props.primary ? '#fff' : '#333'};
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default SampleUsage;