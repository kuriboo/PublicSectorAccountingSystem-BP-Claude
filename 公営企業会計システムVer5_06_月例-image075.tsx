import React from 'react';
import styled from '@emotion/styled';

type TaxType = '節' | '細節' | '明細';
type AggregateBy = '全体' | 'ブロック' | 'セグメント';
type Block = '10' | '指定ブロック';

interface TaxReportFormProps {
  onSubmit: (data: FormData) => void;
}

interface FormData {
  startDate: string;
  endDate: string;
  taxType: TaxType;
  taxRate: number;
  aggregateBy: AggregateBy;
  block: Block;
  applyToCostOfSales: boolean;
  applyToMiscExpenses: boolean;
  deductFromSalesTax: boolean;
  deductFromPurchaseTax: boolean;
  deductionRate: number;
}

const TaxReportForm: React.FC<TaxReportFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<FormData>({
    startDate: '',
    endDate: '',
    taxType: '節',
    taxRate: 0,
    aggregateBy: '全体',
    block: '10',
    applyToCostOfSales: false,
    applyToMiscExpenses: false,
    deductFromSalesTax: false,
    deductFromPurchaseTax: false,
    deductionRate: 0,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Label>作表年月</Label>
        <Input
          type="text"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          required
        />
        <span>～</span>
        <Input
          type="text"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          required
        />
      </Row>
      <Row>
        <Label>予算科目</Label>
        <Input
          type="text"
          name="startBudget"
          value={formData.startDate.replace(/-/g, '')}
          readOnly
        />
        <span>～</span>
        <Input
          type="text"
          name="endBudget"
          value={formData.endDate.replace(/-/g, '')}
          readOnly
        />
      </Row>
      <Row>
        <Label>作表区分</Label>
        <input
          type="radio"
          name="taxType"
          value="節"
          checked={formData.taxType === '節'}
          onChange={handleChange}
        />
        <span>節</span>
        <input
          type="radio"
          name="taxType"
          value="細節"
          checked={formData.taxType === '細節'}
          onChange={handleChange}
        />
        <span>細節</span>
        <input
          type="radio"
          name="taxType"
          value="明細"
          checked={formData.taxType === '明細'}
          onChange={handleChange}
        />
        <span>明細</span>
      </Row>
      <Row>
        <Label>税率</Label>
        <Input type="number" name="taxRate" value={formData.taxRate} onChange={handleChange} />%
        <CheckboxLabel>
          <input type="checkbox" name="applyTaxRate" />
          軽減税率
        </CheckboxLabel>
      </Row>
      <Row>
        <Label>集計対象</Label>
        <Select name="aggregateBy" value={formData.aggregateBy} onChange={handleChange}>
          <option value="全体">全体</option>
          <option value="ブロック">ブロック</option>
          <option value="セグメント">セグメント</option>
        </Select>
        {formData.aggregateBy === 'ブロック' && (
          <Select name="block" value={formData.block} onChange={handleChange}>
            <option value="10">10</option>
            <option value="指定ブロック">指定ブロック</option>
          </Select>
        )}
      </Row>
      <Row>
        <CheckboxLabel>
          <input
            type="checkbox"
            name="applyToCostOfSales"
            checked={formData.applyToCostOfSales}
            onChange={handleChange}
          />
          「課税標準額調整人力」で登録した伝票も出力する
        </CheckboxLabel>
      </Row>
      <Row>
        <CheckboxLabel>
          <input
            type="checkbox"
            name="applyToMiscExpenses"
            checked={formData.applyToMiscExpenses}
            onChange={handleChange}
          />
          「軽減のみ保存」のみの伝票を出力する
        </CheckboxLabel>
      </Row>
      <Row>
        <CheckboxLabel>
          <input
            type="checkbox"
            name="deductFromSalesTax"
            checked={formData.deductFromSalesTax}
            onChange={handleChange}
          />
          「連結請求書発行事業者」のみの伝票を出力する
        </CheckboxLabel>
      </Row>
      <Row>
        <CheckboxLabel>
          <input
            type="checkbox"
            name="deductFromPurchaseTax"
            checked={formData.deductFromPurchaseTax}
            onChange={handleChange}
          />
          「連結請求書発行事業者以外」のみの伝票を出力する
        </CheckboxLabel>
        <Label>控除割合</Label>
        <Input
          type="number"
          name="deductionRate"
          value={formData.deductionRate}
          onChange={handleChange}
        />
        %
      </Row>
      <ButtonRow>
        <Button type="submit">終了</Button>
        <Button type="button">クリア</Button>
        <Button type="button">終了</Button>
      </ButtonRow>
    </Form>
  );
};

// Sample usage
const SampleTaxReportForm: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log(data);
  };

  return <TaxReportForm onSubmit={handleSubmit} />;
};

// Styles
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Label = styled.label`
  width: 120px;
`;

const Input = styled.input`
  padding: 0.5rem;
`;

const Select = styled.select`
  padding: 0.5rem;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
`;

export default SampleTaxReportForm;