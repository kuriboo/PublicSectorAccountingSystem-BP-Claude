import React from 'react';
import styled from 'styled-components';

// Define types for component props
type FormProps = {
  onSubmit: (data: FormData) => void;
};

type FormData = {
  name: string;
  nickname: string;
  gender: string;
};

// Styled components
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
  margin: 0 auto;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const FormLabel = styled.label`
  margin-bottom: 10px;
`;

const FormInput = styled.input`
  padding: 5px;
  margin-bottom: 10px;
  width: 100%;
`;

const FormSelect = styled.select`
  padding: 5px;
  margin-bottom: 10px;
  width: 100%;
`;

const FormButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

// Form component
const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData: FormData = {
      name: form.name.value,
      nickname: form.nickname.value,
      gender: form.gender.value,
    };
    onSubmit(formData);
    form.reset();
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormLabel>
          所属:
          <FormInput type="text" name="name" required />
        </FormLabel>
        <FormLabel>
          職名:
          <FormInput type="text" name="nickname" required />
        </FormLabel>
        <FormLabel>
          氏名:
          <FormInput type="text" name="gender" required />
        </FormLabel>
        <div>
          <FormButton type="submit">OK</FormButton>
          <FormButton type="reset">クリア</FormButton>
          <FormButton type="button">キャンセル</FormButton>
        </div>
      </form>
    </FormContainer>
  );
};

// Sample usage
const App: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log('Submitted data:', data);
  };

  return (
    <div>
      <h1>User Form</h1>
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

export default App;