import React from 'react';
import styled from '@emotion/styled';

interface InputFormProps {
  title: string;
  buttonText: string;
  onSubmit: () => void;
}

const InputForm: React.FC<InputFormProps> = ({ title, buttonText, onSubmit }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <InputContainer>
        <Input type="text" />
        <Button onClick={onSubmit}>{buttonText}</Button>
      </InputContainer>
      <Message>※一覧に直接書き込んで下さい。</Message>
      <Table>
        <thead>
          <tr>
            <TableHeader>行追加</TableHeader>
            <TableHeader>行削除</TableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableData></TableData>
          </tr>
        </tbody>
      </Table>
      <ButtonContainer>
        <SubmitButton>データ更新</SubmitButton>
        <ClearButton>クリア</ClearButton>
        <CloseButton>終了</CloseButton>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータとサンプル使用コンポーネント
const sampleData = {
  title: '入札結果取込更新処理',
  buttonText: '表示',
  onSubmit: () => console.log('Submitted'),
};

const SampleUsage: React.FC = () => {
  return (
    <div>
      <h2>入札結果取込更新処理のサンプル</h2>
      <InputForm {...sampleData} />
    </div>
  );
};

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: sans-serif;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 5px;
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const Message = styled.p`
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  margin-bottom: 20px;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
`;

const TableData = styled.td`
  padding: 10px;
  border: 1px solid #ccc;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const SubmitButton = styled(Button)`
  margin-right: 10px;
`;

const ClearButton = styled(Button)`
  margin-right: 10px;
`;

const CloseButton = styled(Button)``;

export default InputForm;