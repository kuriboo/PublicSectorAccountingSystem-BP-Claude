以下は、画像を元にNext.js + TypeScriptで実装したコンポーネントのコードです。

import React from 'react';
import styled from 'styled-components';

type FormData = {
  [key: string]: string;
};

type Props = {
  title?: string;
  data?: FormData;
  note?: string;
  onSubmit: (data: FormData) => void;
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 4px;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  flex: 1;
`;

const Input = styled.input`
  padding: 5px;
  flex: 2;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 6px 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const RegistrationForm: React.FC<Props> = ({ title = '収益費用明細書項目名称修正', data = {}, note = '', onSubmit }) => {
  const [formData, setFormData] = React.useState<FormData>(data);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <Container>
      <Title>{title}</Title>
      {Object.entries(formData).map(([key, value]) => (
        <Row key={key}>
          <Label>{key}</Label>
          <Input type="text" name={key} value={value} onChange={handleChange} />
        </Row>
      ))}
      <TextArea value={note} readOnly />
      <ButtonContainer>
        <Button type="button">終了</Button>
        <Button type="button">クリア</Button>
        <Button type="button" onClick={handleSubmit}>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log('Submitted data:', data);
  };

  const sampleData: FormData = {
    '仕訳勘定コード': '001',
    '名称1': '売上原価',
    '名称2': '',
    '名称3': '',
    '名称4': '',
  };

  return (
    <div>
      <RegistrationForm data={sampleData} onSubmit={handleSubmit} />
    </div>
  );
};

export default App;