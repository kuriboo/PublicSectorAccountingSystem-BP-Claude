import React from 'react';
import styled from '@emotion/styled';

interface FinancialIndicatorFormProps {
  onSubmit: (data: FinancialIndicatorData) => void;
}

interface FinancialIndicatorData {
  date: string;
  openingPrice: number;
  closingPrice: number;
  tradingVolume: number;
  marketSegment: string;
  industryCategory: string;
  resultsForecast: string;
  releaseTimingOfResults: string;
  fiscalPeriod: string;
  codeNumber: string;
}

const FinancialIndicatorForm: React.FC<FinancialIndicatorFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // フォームの値を取得し、onSubmitを呼び出す処理を実装する
    // ...
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>作表年月日</Label>
        <Input type="date" name="date" required />
      </FormGroup>
      <FormGroup>
        <Label>作表開始年度</Label>
        <Input type="number" name="openingPrice" required min={0} />
      </FormGroup>
      <FormGroup>
        <Label>作表終了年度</Label>
        <Input type="number" name="closingPrice" required min={0} />
      </FormGroup>
      <FormGroup>
        <Label>会計区分</Label>
        <div>
          <Input type="radio" id="individual" name="accountingSegment" value="個別" required />
          <Label htmlFor="individual">個別</Label>
        </div>
        <div>
          <Input type="radio" id="consolidated" name="accountingSegment" value="連結" required />
          <Label htmlFor="consolidated">連結</Label>
        </div>
      </FormGroup>
      <FormGroup>
        <Label>作表区分</Label>
        <div>
          <Input type="radio" id="general" name="reportType" value="総括表" required />
          <Label htmlFor="general">総括表</Label>
        </div>
        <div>
          <Input type="radio" id="detailed" name="reportType" value="明細表" required />
          <Label htmlFor="detailed">明細表</Label>
        </div>
      </FormGroup>
      <FormGroup>
        <Label>規模区分</Label>
        <div>
          <Input type="radio" id="beforeAudit" name="scaleSegment" value="監査前" />
          <Label htmlFor="beforeAudit">監査前</Label>
          <Input type="radio" id="auditOpinion" name="scaleSegment" value="監査意見" />
          <Label htmlFor="auditOpinion">監査意見</Label>
          <Input type="radio" id="amendment" name="scaleSegment" value="修正別" />
          <Label htmlFor="amendment">修正別</Label>
          <Input type="radio" id="afterAudit" name="scaleSegment" value="監査後" />
          <Label htmlFor="afterAudit">監査後</Label>
        </div>
      </FormGroup>
      <FormGroup>
        <Label>財務コード</Label>
        <Input type="number" name="codeNumber" required min={0} max={99} />
      </FormGroup>
      <Button type="submit">終了</Button>
    </Form>
  );
};

// スタイリング
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: #f0f0f0;
  border-radius: 4px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// サンプルデータを使用した表示用コンポーネント
const SampleFinancialIndicatorForm: React.FC = () => {
  const handleSubmit = (data: FinancialIndicatorData) => {
    console.log('Submitted data:', data);
  };

  return (
    <div>
      <h2>Financial Indicator Form</h2>
      <FinancialIndicatorForm onSubmit={handleSubmit} />
    </div>
  );
};

export default SampleFinancialIndicatorForm;