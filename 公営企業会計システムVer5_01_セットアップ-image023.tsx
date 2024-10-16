import React from 'react';
import styled from '@emotion/styled';

interface WaterRegionFormProps {
  onSubmit: (values: WaterRegionFormValues) => void;
}

interface WaterRegionFormValues {
  region1: string;
  region2: string;
  region3: string;
  region4: string;
  region5: string;
  region6: string;
  region7: string;
  segment: number;
  usage: number;
}

const WaterRegionForm: React.FC<WaterRegionFormProps> = ({ onSubmit }) => {
  const [formValues, setFormValues] = React.useState<WaterRegionFormValues>({
    region1: '',
    region2: '',
    region3: '',
    region4: '',
    region5: '',
    region6: '',
    region7: '',
    segment: 0,
    usage: 0,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formValues);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormGrid>
        <Label>
          <span>予算1:</span>
          <Input
            type="text"
            name="region1"
            value={formValues.region1}
            onChange={handleChange}
          />
        </Label>
        {/* Repeat for region2 to region7 */}
        <Label>
          <span>予算区分:</span>
          <Select
            name="segment"
            value={formValues.segment}
            onChange={handleChange}
          >
            <option value={0}>3年収入</option>
            {/* Add more options */}
          </Select>
        </Label>
        <Label>
          <span>費用区分:</span>
          <Select name="usage" value={formValues.usage} onChange={handleChange}>
            <option value={0}>明細編集</option>
            {/* Add more options */}
          </Select>
        </Label>
      </FormGrid>
      <ButtonContainer>
        <Button type="button">キャンセル</Button>
        <Button type="submit">OK</Button>
      </ButtonContainer>
    </StyledForm>
  );
};

// Styled components
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: #f0f0f0;
  border-radius: 4px;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Input = styled.input`
  padding: 0.25rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 0.25rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
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

// Example usage
const ExampleUsage: React.FC = () => {
  const handleSubmit = (values: WaterRegionFormValues) => {
    console.log(values);
    // Handle form submission
  };

  return <WaterRegionForm onSubmit={handleSubmit} />;
};

export default WaterRegionForm;