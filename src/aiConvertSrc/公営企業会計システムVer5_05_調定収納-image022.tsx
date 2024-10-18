import React from 'react';
import styled from '@emotion/styled';

interface CompanyRegistrationFormProps {
  companyNumber: string;
  companyName: string;
  representativeName: string;
  isPublicationFlag: boolean;
  onSubmit: () => void;
}

const CompanyRegistrationForm: React.FC<CompanyRegistrationFormProps> = ({
  companyNumber,
  companyName,
  representativeName,
  isPublicationFlag,
  onSubmit,
}) => {
  return (
    <FormWrapper>
      <FormTitle>調定収入額月計表作成</FormTitle>
      <FormSubtitle>香川県広域水道企業団 管理者 管理者 業者用 令和03年12月07日</FormSubtitle>

      <FormGroup>
        <FormLabel>範囲指定</FormLabel>
        <FormInput type="date" value={companyNumber} readOnly />
        <RadioGroup>
          <RadioButton type="radio" id="predefined" name="range" checked readOnly />
          <RadioLabel htmlFor="predefined">予算科目</RadioLabel>
          <RadioButton type="radio" id="arbitrary" name="range" readOnly />
          <RadioLabel htmlFor="arbitrary">任意科目</RadioLabel>
        </RadioGroup>
        <FormInput value={companyName} readOnly />
        <FormInput value={representativeName} readOnly />
      </FormGroup>

      <FormGroup>
        <FormLabel>過年度損印字</FormLabel>
        <RadioGroup>
          <RadioButton type="radio" id="printPreviousYears" name="printPreviousYears" checked={isPublicationFlag} readOnly />
          <RadioLabel htmlFor="printPreviousYears">無し</RadioLabel>
          <RadioButton type="radio" id="noPrintPreviousYears" name="printPreviousYears" checked={!isPublicationFlag} readOnly />
          <RadioLabel htmlFor="noPrintPreviousYears">有り</RadioLabel>
        </RadioGroup>
      </FormGroup>

      <FormGroup>
        <FormLabel>過年度益印字</FormLabel>
        <RadioGroup>
          <RadioButton type="radio" id="printPreviousYearsProfit" name="printPreviousYearsProfit" checked={isPublicationFlag} readOnly />
          <RadioLabel htmlFor="printPreviousYearsProfit">無し</RadioLabel>
          <RadioButton type="radio" id="noPrintPreviousYearsProfit" name="printPreviousYearsProfit" checked={!isPublicationFlag} readOnly />
          <RadioLabel htmlFor="noPrintPreviousYearsProfit">有り</RadioLabel>
        </RadioGroup>
      </FormGroup>

      <ButtonGroup>
        <SubmitButton onClick={onSubmit}>終了</SubmitButton>
        <CancelButton>クリア</CancelButton>
        <ConfirmButton>OK</ConfirmButton>
      </ButtonGroup>
    </FormWrapper>
  );
};



// Sample usage
const SampleUsage: React.FC = () => {
  const handleSubmit = () => {
    console.log('Submitting form');
  };

  return (
    <CompanyRegistrationForm
      companyNumber="令和03年12月07日"
      companyName="00000000"
      representativeName="999999999"
      isPublicationFlag={true}
      onSubmit={handleSubmit}
    />
  );
};

export default SampleUsage;

// Styled components
const FormWrapper = styled.div`
  width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f5f5f5;
`;

const FormTitle = styled.h2`
  margin-bottom: 10px;
`;

const FormSubtitle = styled.p`
  margin-bottom: 20px;
  font-size: 14px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const RadioGroup = styled.div`
  margin-top: 5px;
`;

const RadioButton = styled.input`
  margin-right: 5px;
`;

const RadioLabel = styled.label`
  margin-right: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  margin-left: 10px;

  &:first-of-type {
    margin-left: 0;
  }
`;

const SubmitButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
`;

const CancelButton = styled(Button)`
  background-color: #ccc;
`;

const ConfirmButton = styled(Button)`
  background-color: #28a745;
  color: #fff;
`;