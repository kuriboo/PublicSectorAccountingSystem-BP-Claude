import React from 'react';

import { useState } from 'react';
import styled from '@emotion/styled';

type CopyFormProps = {
  onSubmit: (text: string) => void;
};

const CopyForm = ({ onSubmit }: CopyFormProps) => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    onSubmit(text);
  };

  return (
    <Container>
      <Title>資本的収支明細書名称コピー</Title>
      <CopyText
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="指定した処理年度の資本的収支明細書の名称を複写処理します。"
      />
      <ButtonContainer>
        <SubmitButton onClick={handleSubmit}>OK</SubmitButton>
        <CancelButton>終了</CancelButton>
      </ButtonContainer>
    </Container>
  );
};

// Usage example
const App = () => {
  const handleCopySubmit = (copiedText: string) => {
    console.log('Copied text:', copiedText);
    // Perform further actions with the copied text
  };

  return (
    <div>
      <h1>Copy Form Example</h1>
      <CopyForm onSubmit={handleCopySubmit} />
    </div>
  );
};

export default App;

// Styles
const Container = styled.div`
  width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const CopyText = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

const ButtonContainer = styled.div`
  margin-top: 10px;
  text-align: right;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
`;

const SubmitButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
  margin-right: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const CancelButton = styled(Button)`
  background-color: #ccc;
  color: #333;

  &:hover {
    background-color: #999;
  }
`;