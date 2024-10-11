import React from 'react';
import styled from '@emotion/styled';

type SupportPeriodType = 'new' | 'renewal';
type SupportBookingType = 'book' | 'notBook';
type DeadlineType = '8end' | '16end';

interface FormData {
  supportPeriodType: SupportPeriodType;
  supportBookingType: SupportBookingType;
  deadlineType: DeadlineType;
  startDate: Date;
  endDate: Date;
}

interface Props {
  formData: FormData;
  onInputChange: (name: string, value: string | boolean | Date) => void;
}

const PublicSupportApplicationForm: React.FC<Props> = ({ formData, onInputChange }) => {
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;
    onInputChange(name, inputValue);
  };

  return (
    <FormWrapper>
      <FormSection>
        <FormLabel>発行区分</FormLabel>
        <RadioButtonsWrapper>
          <RadioButton
            type="radio"
            id="new"
            name="supportPeriodType"
            value="new"
            checked={formData.supportPeriodType === 'new'}
            onChange={handleInputChange}
          />
          <RadioButtonLabel htmlFor="new">新規</RadioButtonLabel>
          <RadioButton
            type="radio"
            id="renewal"
            name="supportPeriodType"
            value="renewal"
            checked={formData.supportPeriodType === 'renewal'}
            onChange={handleInputChange}
          />
          <RadioButtonLabel htmlFor="renewal">再発行</RadioButtonLabel>
        </RadioButtonsWrapper>
      </FormSection>

      <FormSection>
        <FormLabel>発行対象</FormLabel>
        <div>
          <DateInput
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate.toISOString().split('T')[0]}
            onChange={handleInputChange}
          />
          <span> 〜 </span>
          <DateInput
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate.toISOString().split('T')[0]}
            onChange={handleInputChange}
          />
        </div>
      </FormSection>

      <FormSection>
        <FormLabel>負担行為同意</FormLabel>
        <CheckboxWrapper>
          <Checkbox
            type="checkbox"
            id="supportBookingType"
            name="supportBookingType"
            checked={formData.supportBookingType === 'book'}
            onChange={handleInputChange}
          />
          <CheckboxLabel htmlFor="supportBookingType">
            出力する
          </CheckboxLabel>
          <Checkbox
            type="checkbox"
            id="supportBookingType"
            name="supportBookingType"
            checked={formData.supportBookingType === 'notBook'}
            onChange={handleInputChange}
          />
          <CheckboxLabel htmlFor="supportBookingType">
            出力しない
          </CheckboxLabel>
        </CheckboxWrapper>
      </FormSection>

      <FormSection>
        <FormLabel>伝票印字用自由設定項目</FormLabel>
        <RadioButtonsWrapper>
          <RadioButton
            type="radio"
            id="8end"
            name="deadlineType"
            value="8end"
            checked={formData.deadlineType === '8end'}
            onChange={handleInputChange}
          />
          <RadioButtonLabel htmlFor="8end">8年保有版</RadioButtonLabel>
          <RadioButton
            type="radio"
            id="16end"
            name="deadlineType"
            value="16end"
            checked={formData.deadlineType === '16end'}
            onChange={handleInputChange}
          />
          <RadioButtonLabel htmlFor="16end">16年保有版</RadioButtonLabel>
        </RadioButtonsWrapper>
      </FormSection>

      <ButtonsWrapper>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonsWrapper>
    </FormWrapper>
  );
};

// サンプルデータ
const sampleFormData: FormData = {
  supportPeriodType: 'new',
  supportBookingType: 'book',
  deadlineType: '8end',
  startDate: new Date('2023-04-01'),
  endDate: new Date('2023-09-06'),
};

const SampleUsage: React.FC = () => {
  const [formData, setFormData] = React.useState<FormData>(sampleFormData);

  const handleInputChange = (name: string, value: string | boolean | Date) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <PublicSupportApplicationForm
      formData={formData}
      onInputChange={handleInputChange}
    />
  );
};

export default PublicSupportApplicationForm;

// styles
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormLabel = styled.label`
  font-weight: bold;
`;

const RadioButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const RadioButton = styled.input`
  margin-right: 0.5rem;
`;

const RadioButtonLabel = styled.label`
  cursor: pointer;
`;

const DateInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

const CheckboxLabel = styled.label`
  cursor: pointer;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
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