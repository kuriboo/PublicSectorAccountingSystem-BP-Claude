import React, { useState, useCallback } from 'react';
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
    accountLevel?: '節' | '項' | '款' | '部門';
  };
  onSubmit: (values: TaxWithholdingFormProps['initialValues']) => void;
};

type FormErrors = {
  [K in keyof TaxWithholdingFormProps['initialValues']]?: boolean;
};

const TaxWithholdingForm: React.FC<TaxWithholdingFormProps> = ({
  initialValues = {},
  onSubmit,
}) => {
  const [formValues, setFormValues] = useState<TaxWithholdingFormProps['initialValues']>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validateForm = useCallback(() => {
    const newErrors: FormErrors = {};
    let errorMessages: string[] = [];

    if (formValues.taxFreeAmount !== undefined && formValues.taxFreeAmount < 0) {
      errorMessages.push('非課税行数は0以上の値を入力してください');
    }

    if (formValues.yearlyIncome) {
      if (formValues.yearlyIncome.from > formValues.yearlyIncome.to) {
        errorMessages.push('範囲指定の開始値は終了値以下である必要があります');
      }
    }

    if (formValues.rateType === '指定する') {
      if (formValues.taxRate === undefined || formValues.taxRate < 0 || formValues.taxRate > 100) {
        errorMessages.push('税率は0から100の間の値を入力してください');
      }
    }

    setErrors(newErrors);
    setErrorMessage(errorMessages.length > 0 ? errorMessages.join('\n') : null);
    return Object.keys(newErrors).length === 0;
  }, [formValues]);

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = event.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (event.target as HTMLInputElement).checked : value,
    }));
  }, []);

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      onSubmit(formValues);
    }
  }, [formValues, onSubmit, validateForm]);

  return (
    <Form onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor="calculationType">予算編成区分</Label>
        <Select
          id="calculationType"
          name="calculationType"
          value={formValues.calculationType || '当初予算'}
          onChange={handleInputChange}
        >
          <option value="当初予算">当初予算</option>
          <option value="補正予算">補正予算</option>
        </Select>
        <CheckboxLabel>
          <Checkbox 
            type="checkbox" 
            name="nationalTax" 
            checked={formValues.nationalTax || false}
            onChange={handleInputChange}
          />
          今回補正額のみ
        </CheckboxLabel>
      </FormField>

      <FormField>
        <FieldSet>
          <Legend>金額種別</Legend>
          <RadioLabel>
            <input
              type="radio"
              name="fixedRate"
              value="見積要求額"
              checked={formValues.fixedRate !== true}
              onChange={handleInputChange}
            />
            見積要求額
          </RadioLabel>
          <RadioLabel>
            <input
              type="radio"
              name="fixedRate"
              value="査定額"
              checked={formValues.fixedRate === true}
              onChange={handleInputChange}
            />
            査定額
          </RadioLabel>
          <Input 
            type="number" 
            name="taxFreeAmount" 
            value={formValues.taxFreeAmount || ''}
            onChange={handleInputChange}
            min="0"
          />
          回
          {errors.taxFreeAmount && <FieldError>エラーがあります</FieldError>}
        </FieldSet>
      </FormField>

      <FormField>
        <Label>科目レベル</Label>
        {['節', '項', '款', '部門'].map((level) => (
          <RadioLabel key={level}>
            <input
              type="radio"
              name="accountLevel"
              value={level}
              checked={formValues.accountLevel === level}
              onChange={handleInputChange}
            />
            {level}
          </RadioLabel>
        ))}
      </FormField>

      <FormField>
        <Label>決算見込消費税額の千円丸め</Label>
        <RadioLabel>
          <input
            type="radio"
            name="round"
            value="する"
            checked={formValues.round !== 'しない'}
            onChange={handleInputChange}
          />
          する
        </RadioLabel>
        <RadioLabel>
          <input
            type="radio"
            name="round"
            value="しない"
            checked={formValues.round === 'しない'}
            onChange={handleInputChange}
          />
          しない
        </RadioLabel>
        <HelpText>「決算見込登録」画面で税込金額を千円丸めで入力しておく必要があります。</HelpText>
      </FormField>

      <FormField>
        <Label>範囲指定</Label>
        <Input
          type="number"
          name="yearlyIncome.from"
          value={formValues.yearlyIncome?.from || ''}
          onChange={handleInputChange}
        />
        ～
        <Input
          type="number"
          name="yearlyIncome.to"
          value={formValues.yearlyIncome?.to || ''}
          onChange={handleInputChange}
        />
        {errors.yearlyIncome && <FieldError>エラーがあります</FieldError>}
      </FormField>

      <FormField>
        <Label htmlFor="rateType">税率</Label>
        <Select
          id="rateType"
          name="rateType"
          value={formValues.rateType || '指定しない'}
          onChange={handleInputChange}
        >
          <option value="指定しない">指定しない</option>
          <option value="指定する">指定する</option>
        </Select>
        {formValues.rateType === '指定する' && (
          <>
            <Input
              type="number"
              name="taxRate"
              value={formValues.taxRate || ''}
              onChange={handleInputChange}
              min="0"
              max="100"
              step="0.1"
            />
            <Select
              name="flatRateType"
              value={formValues.flatRateType || '%'}
              onChange={handleInputChange}
            >
              <option value="%">%</option>
              <option value="軽減税率">軽減税率</option>
            </Select>
            {errors.taxRate && <FieldError>エラーがあります</FieldError>}
          </>
        )}
      </FormField>

      <ButtonGroup>
        <Button type="submit">終了</Button>
        <Button type="reset" onClick={() => {
          setFormValues(initialValues);
          setErrors({});
          setErrorMessage(null);
        }}>クリア</Button>
        <Button type="button" onClick={() => {
          if (validateForm()) {
            console.log('フォームは有効です');
          }
        }}>OK</Button>
      </ButtonGroup>

      {errorMessage && (
        <ErrorDialog>
          <ErrorMessage>{errorMessage}</ErrorMessage>
          <CloseButton onClick={() => setErrorMessage(null)}>閉じる</CloseButton>
        </ErrorDialog>
      )}
    </Form>
  );
};

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
`;

const FormField = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

const FieldSet = styled.fieldset`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
`;

const Legend = styled.legend`
  font-weight: bold;
`;

const RadioLabel = styled.label`
  display: inline-flex;
  align-items: center;
  margin-right: 15px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const HelpText = styled.div`
  font-size: 0.9em;
  color: #666;
  margin-top: 5px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

const FieldError = styled.div`
  color: #dc3545;
  font-size: 0.9em;
  margin-top: 5px;
`;

const ErrorDialog = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const ErrorMessage = styled.p`
  color: #dc3545;
  margin-bottom: 10px;
  white-space: pre-line;
`;

const CloseButton = styled.button`
  padding: 5px 10px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

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