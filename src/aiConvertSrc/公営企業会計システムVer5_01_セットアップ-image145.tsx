import React from 'react';
import styled from '@emotion/styled';

type PublicCompanyManageSystemFormProps = {
  code: string;
  isPublicCompany: boolean;
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f5f5f5;
`;

const Label = styled.label`
  font-weight: bold;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Checkbox = styled.input`
  margin: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const PublicCompanyManageSystemForm: React.FC<PublicCompanyManageSystemFormProps> = ({
  code,
  isPublicCompany,
}) => {
  return (
    <FormContainer>
      <Label>範囲指定</Label>
      <CheckboxContainer>
        <Checkbox type="checkbox" checked={isPublicCompany} />
        <span>決裁合議者コード: {code}</span>
      </CheckboxContainer>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </FormContainer>
  );
};

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  const sampleCode = '00 ~ 99';
  const sampleIsPublicCompany = true;

  return (
    <PublicCompanyManageSystemForm
      code={sampleCode}
      isPublicCompany={sampleIsPublicCompany}
    />
  );
};

export default SampleUsage;