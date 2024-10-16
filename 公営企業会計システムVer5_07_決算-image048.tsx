import React from 'react';
import styled from '@emotion/styled';

interface RequireFormProps {
  defaultAuthor?: string;
  defaultRequiredDate?: string;
  onSubmit: (author: string, requiredDate: string) => void;
}

const RequireForm: React.FC<RequireFormProps> = ({ defaultAuthor = '', defaultRequiredDate = '', onSubmit }) => {
  const [author, setAuthor] = React.useState(defaultAuthor);
  const [requiredDate, setRequiredDate] = React.useState(defaultRequiredDate);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(author, requiredDate);
  };

  return (
    <FormWrapper>
      <FormTitle>要素マスタリスト作成</FormTitle>
      <FormGroup>
        <Label>作表日</Label>
        <Input type="text" value={requiredDate} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>要素コード</Label>
        <Input type="text" value={author} onChange={e => setAuthor(e.target.value)} />
      </FormGroup>
      <SubmitText>要素マスタ入力内容チェックリストを作成します。</SubmitText>
      <ButtonGroup>
        <SubmitButton type="submit">OK</SubmitButton>
        <Button type="button">クリア</Button>
        <Button type="button">終了</Button>
      </ButtonGroup>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
`;

const FormTitle = styled.h2`
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
`;

const Label = styled.label`
  margin-right: 10px;
  width: 100px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 200px;
`;

const SubmitText = styled.p`
  margin-top: 20px;
  margin-bottom: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  background-color: #ccc;
  cursor: pointer;
`;

const SubmitButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
`;

// Usage example
const RequireFormExample: React.FC = () => {
  const handleSubmit = (author: string, requiredDate: string) => {
    console.log('Submitted:', author, requiredDate);
  };

  return (
    <RequireForm
      defaultAuthor="000 ~ 999"
      defaultRequiredDate="平成29年08月04日"
      onSubmit={handleSubmit}
    />
  );
};

export default RequireFormExample;