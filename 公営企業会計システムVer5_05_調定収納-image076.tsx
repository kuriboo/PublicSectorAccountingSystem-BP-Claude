import React from 'react';
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

const IndemnityReferenceForm: React.FC<FormProps> = ({ initialData = {}, onSubmit }) => {
  // State to hold form data
  const [formData, setFormData] = React.useState<FormData>({
    rangeType: initialData.rangeType || 'date',
    startDate: initialData.startDate || new Date(),
    endDate: initialData.endDate || new Date(),
    startYear: initialData.startYear || new Date().getFullYear(),
    endYear: initialData.endYear || 999999,
    arbitraryPeriod: initialData.arbitraryPeriod || '',
    showNenkinSeigen: initialData.showNenkinSeigen || false,
    showMitsumorihyo: initialData.showMitsumorihyo || false,
  });

  // Event handlers
  const handleRangeTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, rangeType: e.target.value as FormData['rangeType'] }));
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: new Date(value) }));
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: parseInt(value, 10) }));
  };

  const handleArbitraryPeriodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, arbitraryPeriod: e.target.value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>範囲指定</Label>
          <FieldSet>
            <RadioButton
              name="rangeType"
              value="date"
              checked={formData.rangeType === 'date'}
              onChange={handleRangeTypeChange}
              label="調定日"
            />
            <RadioButton
              name="rangeType"
              value="month"
              checked={formData.rangeType === 'month'}
              onChange={handleRangeTypeChange}
              label="収納日"
            />
            <RadioButton
              name="rangeType"
              value="year"
              checked={formData.rangeType === 'year'}
              onChange={handleRangeTypeChange}
              label="伝票番号"
            />
            <RadioButton
              name="rangeType"
              value="arbitrary"
              checked={formData.rangeType === 'arbitrary'}
              onChange={handleRangeTypeChange}
              label="任意"
            />
          </FieldSet>
        </FormGroup>

        {formData.rangeType === 'date' && (
          <FormGroup>
            <Label>調定日</Label>
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
          </FormGroup>
        )}

        {formData.rangeType === 'month' && (
          <FormGroup>
            <Label>収納日</Label>
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
          </FormGroup>
        )}

        {formData.rangeType === 'year' && (
          <FormGroup>
            <Label>伝票番号</Label>
            <Input type="number" name="startYear" value={formData.startYear} onChange={handleYearChange} />
            <span>年度</span>
            <span>～</span>
            <Input type="number" name="endYear" value={formData.endYear} onChange={handleYearChange} />
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

        <Button type="submit">OK</Button>
      </form>
    </Container>
  );
};

// Usage example
const UsageExample = () => {
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