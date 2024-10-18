import React, { useState, useCallback } from 'react';
import styled from '@emotion/styled';

type FormData = {
  rangeType: 'date' | 'month' | 'year' | 'arbitrary';
  startDate: Date;
  endDate: Date;
  startYear: number;
  endYear: number;
  arbitraryPeriod: string;
  showNenkinSeigen: boolean;
  showMitsumorihyo: boolean;
};

type FormErrors = {
  [K in keyof FormData]?: string;
};

type FormProps = {
  initialData?: Partial<FormData>;
  onSubmit: (data: FormData) => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f5f5f5;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  border: none;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 0.8rem;
`;

const RadioButton: React.FC<{
  name: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}> = ({ name, value, checked, onChange, label }) => (
  <Label>
    <Input type="radio" name={name} value={value} checked={checked} onChange={onChange} />
    {label}
  </Label>
);

const IndemnityReferenceForm: React.FC<FormProps> = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState<FormData>(() => ({
    rangeType: initialData?.rangeType ?? 'date',
    startDate: initialData?.startDate ?? new Date(),
    endDate: initialData?.endDate ?? new Date(),
    startYear: initialData?.startYear ?? new Date().getFullYear(),
    endYear: initialData?.endYear ?? new Date().getFullYear(),
    arbitraryPeriod: initialData?.arbitraryPeriod ?? '',
    showNenkinSeigen: initialData?.showNenkinSeigen ?? false,
    showMitsumorihyo: initialData?.showMitsumorihyo ?? false,
  }));

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = useCallback(() => {
    const newErrors: FormErrors = {};

    if (formData.rangeType === 'date' || formData.rangeType === 'month') {
      if (formData.startDate > formData.endDate) {
        newErrors.startDate = '開始日は終了日より前である必要があります';
      }
    }

    if (formData.rangeType === 'year') {
      if (formData.startYear > formData.endYear) {
        newErrors.startYear = '開始年は終了年以前である必要があります';
      }
      if (formData.startYear < 1900 || formData.startYear > 9999) {
        newErrors.startYear = '開始年は1900から9999の間である必要があります';
      }
      if (formData.endYear < 1900 || formData.endYear > 9999) {
        newErrors.endYear = '終了年は1900から9999の間である必要があります';
      }
    }

    if (formData.rangeType === 'arbitrary' && formData.arbitraryPeriod.trim() === '') {
      newErrors.arbitraryPeriod = '任意の期間を入力してください';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleRangeTypeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, rangeType: e.target.value as FormData['rangeType'] }));
    setErrors({});
  }, []);

  const handleDateChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: new Date(value) }));
  }, []);

  const handleYearChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const yearValue = parseInt(value, 10);
    if (!isNaN(yearValue)) {
      setFormData(prev => ({ ...prev, [name]: yearValue }));
    }
  }, []);

  const handleArbitraryPeriodChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, arbitraryPeriod: e.target.value }));
  }, []);

  const handleCheckboxChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  }, [formData, onSubmit, validateForm]);

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>範囲指定</Label>
          <FieldSet>
            {['date', 'month', 'year', 'arbitrary'].map((type) => (
              <RadioButton
                key={type}
                name="rangeType"
                value={type}
                checked={formData.rangeType === type}
                onChange={handleRangeTypeChange}
                label={type === 'date' ? '調定日' : type === 'month' ? '収納日' : type === 'year' ? '伝票番号' : '任意'}
              />
            ))}
          </FieldSet>
        </FormGroup>

        {(formData.rangeType === 'date' || formData.rangeType === 'month') && (
          <FormGroup>
            <Label>{formData.rangeType === 'date' ? '調定日' : '収納日'}</Label>
            <Input
              type="date"
              name="startDate"
              value={formData.startDate.toISOString().slice(0, 10)}
              onChange={handleDateChange}
            />
            <span>～</span>
            <Input
              type="date"
              name="endDate"
              value={formData.endDate.toISOString().slice(0, 10)}
              onChange={handleDateChange}
            />
            {errors.startDate && <ErrorMessage>{errors.startDate}</ErrorMessage>}
          </FormGroup>
        )}

        {formData.rangeType === 'year' && (
          <FormGroup>
            <Label>伝票番号</Label>
            <Input type="number" name="startYear" value={formData.startYear} onChange={handleYearChange} min="1900" max="9999" />
            <span>年度</span>
            <span>～</span>
            <Input type="number" name="endYear" value={formData.endYear} onChange={handleYearChange} min="1900" max="9999" />
            {errors.startYear && <ErrorMessage>{errors.startYear}</ErrorMessage>}
            {errors.endYear && <ErrorMessage>{errors.endYear}</ErrorMessage>}
          </FormGroup>
        )}

        {formData.rangeType === 'arbitrary' && (
          <FormGroup>
            <Label>任意の期間</Label>
            <Input
              type="text"
              name="arbitraryPeriod"
              value={formData.arbitraryPeriod}
              onChange={handleArbitraryPeriodChange}
            />
            {errors.arbitraryPeriod && <ErrorMessage>{errors.arbitraryPeriod}</ErrorMessage>}
          </FormGroup>
        )}

        <FormGroup>
          <Label>
            <Checkbox type="checkbox" name="showNenkinSeigen" checked={formData.showNenkinSeigen} onChange={handleCheckboxChange} />
            未納額ありのみ対象
          </Label>
          <Label>
            <Checkbox type="checkbox" name="showMitsumorihyo" checked={formData.showMitsumorihyo} onChange={handleCheckboxChange} />
            調定増減：分割収納分のみを対象
          </Label>
        </FormGroup>

        <Button type="submit" disabled={Object.keys(errors).length > 0}>OK</Button>
      </form>
    </Container>
  );
};

const UsageExample: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Indemnity Reference Form Example</h1>
      <IndemnityReferenceForm onSubmit={handleSubmit} />
    </div>
  );
};

export default UsageExample;