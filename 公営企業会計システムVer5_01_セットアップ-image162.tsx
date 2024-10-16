import React from 'react';
import styled from '@emotion/styled';

type FormProps = {
  title: string;
  onSubmit: (value: string) => void;
  onCancel: () => void;
};

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  width: 300px;
  margin: 0 auto;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

const FormTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const FormButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Form: React.FC<FormProps> = ({ title, onSubmit, onCancel }) => {
  const [value, setValue] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(value);
  };

  return (
    <FormWrapper>
      <FormTitle>{title}</FormTitle>
      <FormInput
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="ここに入力してください"
      />
      <FormButtons>
        <FormButton onClick={handleSubmit}>行き先</FormButton>
        <FormButton onClick={onCancel}>キャンセル</FormButton>
      </FormButtons>
    </FormWrapper>
  );
};

export default Form;

// Usage example
const App: React.FC = () => {
  const handleSubmit = (value: string) => {
    console.log('Submitted value:', value);
  };

  const handleCancel = () => {
    console.log('Form cancelled');
  };

  return (
    <div>
      <h1>Sample Form</h1>
      <Form
        title="宛先"
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </div>
  );
};