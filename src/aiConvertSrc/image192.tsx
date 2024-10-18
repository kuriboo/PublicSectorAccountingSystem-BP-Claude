import React from 'react';

import { useState } from 'react';
import styled from '@emotion/styled';

type PasswordPolicyMasterProps = {
  onSubmit: (data: PasswordPolicyMasterData) => void;
};

type PasswordPolicyMasterData = {
  expirationDate: string;
  reminderDate: number;
  validity: boolean;
  maxAttempts: number;
};

const PasswordPolicyMaster = ({ onSubmit }: PasswordPolicyMasterProps) => {
  const [formData, setFormData] = useState<PasswordPolicyMasterData>({
    expirationDate: '',
    reminderDate: 0,
    validity: false,
    maxAttempts: 5,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>有効期限</Label>
        <Input
          type="text"
          name="expirationDate"
          value={formData.expirationDate}
          onChange={handleChange}
        />
        <Description>
          パスワード変更後の有効期限を設定します。
          0日間を設定した場合、有効期限のチェックを行いません。
        </Description>
      </FormGroup>
      <FormGroup>
        <Label>変更催促</Label>
        <Input
          type="number"
          name="reminderDate"
          value={formData.reminderDate}
          onChange={handleChange}
        />
        <Description>
          有効期限までの日数が指定した日数よりも近くなった際、
          パスワードの変更を促すメッセージを表示します。
        </Description>
      </FormGroup>
      <FormGroup>
        <CheckboxLabel>
          <Checkbox
            type="checkbox"
            name="validity"
            checked={formData.validity}
            onChange={handleChange}
          />
          半角英字と数値の混合を必須とする。
        </CheckboxLabel>
      </FormGroup>
      <FormGroup>
        <Label>桁数</Label>
        <Input
          type="number"
          name="maxAttempts"
          value={formData.maxAttempts}
          onChange={handleChange}
        />
        <Description>
          パスワードの最低桁数を入力します。
          桁数を0で設定した場合、桁数のチェックは行いません。
        </Description>
      </FormGroup>
      <ButtonGroup>
        <Button type="button">クリア</Button>
        <SubmitButton type="submit">終了</SubmitButton>
      </ButtonGroup>
    </Form>
  );
};

// Styles
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Description = styled.p`
  font-size: 0.8rem;
  color: #666;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Checkbox = styled.input`
  margin: 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: none;
  background-color: #ccc;
  color: #fff;
  cursor: pointer;
`;

const SubmitButton = styled(Button)`
  background-color: #007bff;
`;

// Sample usage
const App = () => {
  const handleSubmit = (data: PasswordPolicyMasterData) => {
    console.log('Submitted data:', data);
    // Perform further actions with the submitted data
  };

  return (
    <div>
      <h1>Password Policy Master</h1>
      <PasswordPolicyMaster onSubmit={handleSubmit} />
    </div>
  );
};

export default App;