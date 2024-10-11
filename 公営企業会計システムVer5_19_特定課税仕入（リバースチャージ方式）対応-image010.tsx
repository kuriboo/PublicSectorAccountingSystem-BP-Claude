import React from 'react';
import styled from '@emotion/styled';

type TaxWithholdingInputProps = {
  publishDate: string;
  taxRate: number;
  taxAmount: number;
  socialInsuranceAmount: number;
  employmentInsuranceAmount: number;
  deductionAmount: number;
  onChange: (value: Partial<TaxWithholdingInputProps>) => void;
};

const TaxWithholdingInput: React.FC<TaxWithholdingInputProps> = ({
  publishDate,
  taxRate,
  taxAmount,
  socialInsuranceAmount,
  employmentInsuranceAmount,
  deductionAmount,
  onChange,
}) => {
  const handleChange = (prop: keyof TaxWithholdingInputProps, value: string | number) => {
    onChange({ [prop]: value });
  };

  return (
    <Container>
      <Title>特定課税仕入伝票管理入力</Title>
      <PublishDate>
        <label>伝票日付</label>
        <input
          type="date"
          value={publishDate}
          onChange={(e) => handleChange('publishDate', e.target.value)}
        />
      </PublishDate>
      <TaxRateInput>
        <label>税率番号</label>
        <input
          type="number"
          value={taxRate}
          onChange={(e) => handleChange('taxRate', Number(e.target.value))}
        />
      </TaxRateInput>
      <Row>
        <Label>税込金額</Label>
        <InputNumber
          value={taxAmount}
          onChange={(e) => handleChange('taxAmount', Number(e.target.value))}
        />
      </Row>
      <Row>
        <Label>税抜金額</Label>
        <InputNumber
          value={socialInsuranceAmount}
          onChange={(e) => handleChange('socialInsuranceAmount', Number(e.target.value))}
        />
      </Row>
      <Row>
        <Label>消費税額</Label>
        <InputNumber
          value={employmentInsuranceAmount}
          onChange={(e) => handleChange('employmentInsuranceAmount', Number(e.target.value))}
        />
      </Row>
      <Row>
        <Label>摘要</Label>
        <input
          type="text"
          value={deductionAmount}
          onChange={(e) => handleChange('deductionAmount', e.target.value)}
        />
      </Row>
      <Buttons>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </Buttons>
    </Container>
  );
};

// Sample usage
const SampleTaxWithholdingInput = () => {
  const [inputValues, setInputValues] = React.useState<TaxWithholdingInputProps>({
    publishDate: '2023-03-27',
    taxRate: 43,
    taxAmount: 80000,
    socialInsuranceAmount: 80000,
    employmentInsuranceAmount: 0,
    deductionAmount: '電子書籍/税抜価格',
    onChange: () => {},
  });

  const handleChange = (values: Partial<TaxWithholdingInputProps>) => {
    setInputValues((prev) => ({ ...prev, ...values }));
  };

  return <TaxWithholdingInput {...inputValues} onChange={handleChange} />;
};

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  margin-bottom: 16px;
`;

const PublishDate = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  label {
    margin-right: 8px;
  }
`;

const TaxRateInput = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  label {
    margin-right: 8px;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Label = styled.label`
  width: 100px;
`;

const InputNumber = styled.input.attrs({ type: 'number' })`
  width: 120px;
  padding: 4px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const Button = styled.button`
  margin-left: 8px;
  padding: 8px 16px;
  background-color: #e0e0e0;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #d0d0d0;
  }
`;

export default TaxWithholdingInput;