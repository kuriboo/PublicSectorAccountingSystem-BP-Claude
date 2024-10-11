import React from 'react';
import styled from '@emotion/styled';

interface TaxWithholdingFormProps {
  /**
   * 年度
   */
  year: number;
  /**
   * 所得税の支払予算額
   */
  incomeTaxBudget: number;
  /**
   * 住民税の支払予算額
   */
  residentTaxBudget: number;
  /**
   * 源泉徴収指定番号
   */
  taxWithholdingNumber?: string;
  /**
   * フォーム送信時のイベントハンドラ
   */
  onSubmit: (params: { year: number, incomeTaxBudget: number, residentTaxBudget: number, taxWithholdingNumber?: string  }) => void;
}

const TaxWithholdingForm: React.FC<TaxWithholdingFormProps> = ({
  year,
  incomeTaxBudget,
  residentTaxBudget,
  taxWithholdingNumber,
  onSubmit,
}) => {
  // フォーム送信ハンドラ
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({
      year,
      incomeTaxBudget,
      residentTaxBudget, 
      taxWithholdingNumber,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormHeader>
        <Label>特定課税仕入伝票管理入力</Label>
        <TaxOffice>行政市事業会計</TaxOffice>
        <Date>平成28年03月27日</Date>
      </FormHeader>
      <FormContent>
        <FormField>
          <Label>伝票日付</Label>
          <DateInput type="date" defaultValue={`${year}-03-01`} min={`${year}-03-01`} max={`${year}-03-31`} required />
          <Label>伝票番号</Label>
          <Input type="text" defaultValue={taxWithholdingNumber} />
        </FormField>
        <FormField>
          <Label>税控除額</Label>
          <Input type="number" defaultValue={incomeTaxBudget} required />
          <Label>税抜金額</Label>
          <Input type="number" defaultValue={residentTaxBudget} required />
        </FormField>
        <FormField>
          <Label>摘要</Label>
          <Input type="text" />
        </FormField>
      </FormContent>
      <FormFooter>
        <Button type="button">OK</Button>
        <Button type="button">クリア</Button>
        <SubmitButton type="submit">キャンセル</SubmitButton>
      </FormFooter>
    </Form>
  );
};

export default TaxWithholdingForm;

// サンプルデータを使用したコンポーネントの利用例
const SampleUsage: React.FC = () => {
  const handleSubmit = (params: { year: number, incomeTaxBudget: number, residentTaxBudget: number, taxWithholdingNumber?: string  }) => {
    console.log(params);
    // 送信処理を実装
  };

  return (
    <TaxWithholdingForm 
      year={2016}
      incomeTaxBudget={80000}
      residentTaxBudget={80000}
      taxWithholdingNumber="1234"
      onSubmit={handleSubmit}
    />
  );  
};

// スタイリング
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
`;

const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FormField = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  & > * {
    margin-right: 10px;
  }
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
`;

const DateInput = styled(Input)`
  width: 150px;
`;

const TaxOffice = styled.div`
  font-size: 14px;
`;

const Date = styled.div`
  font-size: 14px;
`;

const FormFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 5px 15px;
  margin-left: 10px;
  background-color: #eee;
  border: 1px solid #ccc;
  border-radius: 3px;
  cursor: pointer;
`;

const SubmitButton = styled(Button)`
  background-color: #2196f3;
  color: #fff;
  border-color: #2196f3;
`;