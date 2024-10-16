import React from 'react';
import styled from '@emotion/styled';

interface FormProps {
  title: string;
  fiscalYear: number;
  month: number;
  department: string;
  numberOfContract: number;
  contractNumbers: string[];
  onSubmit: () => void;
  onCancel: () => void;
  onClose: () => void;
}

const Form: React.FC<FormProps> = ({
  title,
  fiscalYear,
  month,
  department,
  numberOfContract,
  contractNumbers,
  onSubmit,
  onCancel,
  onClose,
}) => {
  return (
    <FormWrapper>
      <FormTitle>{title}</FormTitle>
      <FormRow>
        <FormLabel>負担年度</FormLabel>
        <FormValue>{`平成${fiscalYear}年度`}</FormValue>
      </FormRow>
      <FormRow>
        <FormLabel>契約年月日</FormLabel>
        <FormValue>{`平成${fiscalYear}年${month}月16日`}</FormValue>
        <FormLabel>契約方法</FormLabel>
        <FormValue>随意契約</FormValue>
      </FormRow>
      <FormRow>
        <FormLabel>納期年月日</FormLabel>
        <FormValue>{`平成${fiscalYear}年6月16日`}</FormValue>
        <FormLabel>契約番号</FormLabel>
        <FormValue>{numberOfContract}</FormValue>
      </FormRow>
      <FormRow>
        <FormLabel>自由設定内容</FormLabel>
        <FormTextarea value={contractNumbers.join('\n')} readOnly />
      </FormRow>
      <FormRow>
        <FormLabel>摘要</FormLabel>
        <div>
          <FormValue>週用1</FormValue>
          <FormValue>週用2</FormValue>
        </div>
      </FormRow>
      <FormRow>
        <FormLabel>相手先</FormLabel>
        <FormValue>{department}</FormValue>
      </FormRow>
      <FormButtonGroup>
        <FormButton onClick={onSubmit}>OK</FormButton>
        <FormButton onClick={onCancel}>クリア</FormButton>
        <FormButton onClick={onClose}>終了</FormButton>
      </FormButtonGroup>
    </FormWrapper>
  );
};

// Styled components
const FormWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
`;

const FormTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const FormLabel = styled.label`
  width: 120px;
  font-weight: bold;
`;

const FormValue = styled.span`
  margin-right: 16px;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  height: 80px;
  resize: none;
`;

const FormButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const FormButton = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Sample usage
const SampleForm: React.FC = () => {
  const handleSubmit = () => {
    // Handle form submission
  };

  const handleCancel = () => {
    // Handle form cancellation
  };

  const handleClose = () => {
    // Handle form closing
  };

  return (
    <Form
      title="契約報告入力(物品)"
      fiscalYear={29}
      month={6}
      department="ぎょうせい工務店"
      numberOfContract={143}
      contractNumbers={[]}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      onClose={handleClose}
    />
  );
};

export default SampleForm;