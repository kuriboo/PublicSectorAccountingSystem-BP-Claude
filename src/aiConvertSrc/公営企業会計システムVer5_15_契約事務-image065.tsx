import React from 'react';
import styled from '@emotion/styled';

type MasterMaintenanceFormProps = {
  onSubmit: (text: string) => void;
};

const MasterMaintenanceForm: React.FC<MasterMaintenanceFormProps> = ({ onSubmit }) => {
  const [text, setText] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(text);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>文章マスタ保守</Title>
      <TextField
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="文章を入力してください"
      />
      <ButtonContainer>
        <Button type="button">行確定</Button>
        <Button type="button" cancel>
          キャンセル
        </Button>
        <Button type="submit">終了</Button>
      </ButtonContainer>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const TextField = styled.textarea`
  width: 100%;
  min-height: 200px;
  margin-bottom: 20px;
  padding: 10px;
  box-sizing: border-box;
  resize: vertical;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Button = styled.button<{ cancel?: boolean }>`
  padding: 10px 20px;
  background-color: ${(props) => (props.cancel ? '#ccc' : '#007bff')};
  color: white;
  border: none;
  cursor: pointer;
  width: 100%;
  max-width: 150px;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

// Usage example
const App: React.FC = () => {
  const handleSubmit = (text: string) => {
    console.log('Submitted text:', text);
  };

  return (
    <div>
      <h1>Master Maintenance</h1>
      <MasterMaintenanceForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;