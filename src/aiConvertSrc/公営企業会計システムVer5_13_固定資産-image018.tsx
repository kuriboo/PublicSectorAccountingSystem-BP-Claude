import React from 'react';
import styled from 'styled-components';

type FixedTermContractFormProps = {
  startDate: string;
  endDate: string;
  workType: 'full-time' | 'part-time' | 'contract';
  workArea: 'office' | 'sales';
  annualSalary: number;
  monthlySalary: number;
  overtimePay: number;
  nightPay: number;
  onSubmit: (formData: FixedTermContractFormData) => void;
};

type FixedTermContractFormData = {
  startDate: string;
  endDate: string;
  workType: 'full-time' | 'part-time' | 'contract';
  workArea: 'office' | 'sales';
  annualSalary: number;
  monthlySalary: number;
  overtimePay: number;
  nightPay: number;
};

const FixedTermContractForm: React.FC<FixedTermContractFormProps> = ({
  startDate,
  endDate,
  workType,
  workArea,
  annualSalary,
  monthlySalary,
  overtimePay,
  nightPay,
  onSubmit,
}) => {
  // State to store form data
  const [formData, setFormData] = React.useState<FixedTermContractFormData>({
    startDate,
    endDate,
    workType,
    workArea,
    annualSalary,
    monthlySalary,
    overtimePay,
    nightPay,
  });

  // Event handler for form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  // Event handler for input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormSection>
        <label>
          作業年月日
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
          ～
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
        </label>
      </FormSection>
      <FormSection>
        <label>
          作業区分
          <select
            name="workType"
            value={formData.workType}
            onChange={handleChange}
            required
          >
            <option value="full-time">全デー夕</option>
            <option value="part-time">異動入力分</option>
            <option value="contract">情報修了分</option>
          </select>
        </label>
      </FormSection>
      <FormSection>
        <label>
          会計区分
          <select
            name="workArea"
            value={formData.workArea}
            onChange={handleChange}
            required
          >
            <option value="office">印字しない</option>
            <option value="sales">会計区分別</option>
          </select>
        </label>
      </FormSection>
      <FormSection>
        <label>
          固定資産科目
          <input
            type="number"
            name="annualSalary"
            value={formData.annualSalary || ''}
            onChange={handleChange}
          />
          ～
          <input
            type="number"
            name="monthlySalary"  
            value={formData.monthlySalary || ''}
            onChange={handleChange}
          />
        </label>
        <label>
          資産番号
          <input
            type="number"
            name="overtimePay"
            value={formData.overtimePay || 0}
            onChange={handleChange}
          />
          ～
          <input
            type="number"
            name="nightPay"
            value={formData.nightPay || ''}
            onChange={handleChange}
          />
        </label>
      </FormSection>
      <FormSection>
        <label>
          取得年月日
          <input
            type="date"
            name="acquisitionStartDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
          ～
          <input
            type="date"  
            name="acquisitionEndDate"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
        </label>
      </FormSection>
      <ButtonContainer>
        <button type="button">ｷｬﾝｾﾙ</button>
        <button type="button">ｸﾘｱ</button>
        <button type="submit">終了</button>
      </ButtonContainer>
    </StyledForm>
  );
};

// Sample usage of the component
const SampleUsage: React.FC = () => {
  const handleSubmit = (formData: FixedTermContractFormData) => {
    console.log('Form submitted:', formData);
    // Perform any necessary actions with the form data
  };

  return (
    <FixedTermContractForm
      startDate="2022-09-01"
      endDate="2022-09-11" 
      workType="full-time"
      workArea="office"
      annualSalary={10000000}
      monthlySalary={500000}
      overtimePay={5000}
      nightPay={8000}
      onSubmit={handleSubmit}
    />
  );
};

// Styled components
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  input,
  select {
    padding: 0.25rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;

  button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export default FixedTermContractForm;