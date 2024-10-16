import React from 'react';
import styled from '@emotion/styled';

type TaxWithholdingFormProps = {
  initialValues?: {
    calculationType?: string;
    round?: string;
    nationalTax?: boolean;
    fixedRate?: boolean;
    taxFreeAmount?: number;
    yearlyIncome?: {
      from: number;
      to: number;
    };
    taxRate?: number;
    rateType?: '指定しない' | '指定する';
    flatRateType?: '%' | '軽減税率';
  };
  onSubmit: (values: TaxWithholdingFormProps['initialValues']) => void;
};

const TaxWithholdingForm: React.FC<TaxWithholdingFormProps> = ({
  initialValues = {},
  onSubmit,
}) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Implement form submission logic here
    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries()) as TaxWithholdingFormProps['initialValues'];
    onSubmit(values);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormField>
        <Label>予算編成区分</Label>
        <Select
          name="calculationType"
          defaultValue={initialValues.calculationType || '当初予算'}
        >
          <option value="当初予算">当初予算</option>
          {/* Add more options as needed */}
        </Select>
        <Checkbox type="checkbox" name="nationalTax" defaultChecked={initialValues.nationalTax}>
          今回補正額のみ
        </Checkbox>
      </FormField>

      <FormField>
        <FieldSet>
          <Legend>金額種別</Legend>
          <label>
            <input
              type="radio"
              name="fixedRate"
              value="見積要求額"
              defaultChecked={initialValues.fixedRate !== true}
            />{' '}
            見積要求額
          </label>
          <label>
            <input
              type="radio"
              name="fixedRate"
              value="査定額"
              defaultChecked={initialValues.fixedRate === true}
            />{' '}
            査定額
          </label>
          <input type="number" name="taxFreeAmount" defaultValue={initialValues.taxFreeAmount} />
          回
        </FieldSet>
      </FormField>

      <FormField>
        <Label>科目レベル</Label>
        <label>
          <input type="radio" name="accountLevel" value="節" defaultChecked /> 節
        </label>
        <label>
          <input type="radio" name="accountLevel" value="項" /> 項
        </label>
        <label>
          <input type="radio" name="accountLevel" value="款" /> 款
        </label>
        <label>
          <input type="radio" name="accountLevel" value="款" /> 部門
        </label>
      </FormField>

      <FormField>
        <Label>決算見込消費税額の千円丸め</Label>
        <label>
          <input type="radio" name="round" value="する" defaultChecked={initialValues.round !== 'しない'} /> する
        </label>
        <label>
          <input type="radio" name="round" value="しない" defaultChecked={initialValues.round === 'しない'} /> しない
        </label>
        <div>「決算見込登録」画面で税込金額を千円丸めで入力しておく必要があります。</div>
      </FormField>

      <FormField>
        <Label>範囲指定</Label>
        <input type="number" name="yearlyIncome.from" defaultValue={initialValues.yearlyIncome?.from} /> ～{' '}
        <input type="number" name="yearlyIncome.to" defaultValue={initialValues.yearlyIncome?.to} />
      </FormField>

      <FormField>
        <Label>税率</Label>
        <Select name="rateType" defaultValue={initialValues.rateType || '指定しない'}>
          <option value="指定しない">指定しない</option>
          <option value="指定する">指定する</option>
        </Select>
        {initialValues.rateType === '指定する' && (
          <>
            <input type="number" name="taxRate" defaultValue={initialValues.taxRate} />
            <Select name="flatRateType" defaultValue={initialValues.flatRateType || '%'}>
              <option value="%">%</option>
              <option value="軽減税率">軽減税率</option>
            </Select>
          </>
        )}
      </FormField>

      <div>
        <Button type="submit">終了</Button>
        <Button type="reset">クリア</Button>
        <Button type="button">OK</Button>
      </div>
    </Form>
  );
};

const Form = styled.form`
  /* Add your styles here */
`;

const FormField = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
`;

const Select = styled.select`
  /* Add your styles here */
`;

const Checkbox = styled.input`
  /* Add your styles here */
`;

const FieldSet = styled.fieldset`
  /* Add your styles here */
`;

const Legend = styled.legend`
  /* Add your styles here */
`;

const Button = styled.button`
  /* Add your styles here */
`;

// Usage example
const App: React.FC = () => {
  const handleSubmit = (values: TaxWithholdingFormProps['initialValues']) => {
    console.log(values);
  };

  return (
    <div>
      <h1>消費税額計算書作成</h1>
      <TaxWithholdingForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;