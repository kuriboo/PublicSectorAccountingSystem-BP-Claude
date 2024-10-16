import React from 'react';
import styled from 'styled-components';

interface CsvProperties {
  title?: string;
  text?: string;
  projectName?: string;
  author?: string;
  ok?: string;
  cancel?: string;
}

const CsvDialog: React.FC<CsvProperties> = ({
  title = '区切り文字',
  text = 'の有無',
  projectName = 'プロジェクト名',
  author = '著者',
  ok = 'OK',
  cancel = 'キャンセル',
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>
        <Label>
          <Input type="radio" name="delimiter" />
          <Text>カンマ</Text>
        </Label>
        <Label>
          <Input type="radio" name="delimiter" />
          <Text>タブ</Text>
        </Label>
        <Label>
          <Input type="radio" name="delimiter" />
          <Text>あり</Text>
          <SmallText>{text}</SmallText>
        </Label>
        <Label>
          <Input type="radio" name="delimiter" />
          <Text>なし</Text>
        </Label>
      </Content>
      <Content>
        <Label>
          <LabelText>{projectName}</LabelText>
          <Input type="text" />
        </Label>
        <Label>
          <LabelText>{author}</LabelText>
          <Input type="text" />
        </Label>
      </Content>
      <ButtonGroup>
        <Button>{ok}</Button>
        <Button>{cancel}</Button>
      </ButtonGroup>
    </Container>
  );
};

// Styles
const Container = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 1rem;
  width: 300px;
`;

const Title = styled.h2`
  margin: 0 0 1rem;
`;

const Content = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  margin-right: 0.5rem;
`;

const Text = styled.span`
  margin-right: 0.5rem;
`;

const SmallText = styled.small`
  color: #666;
`;

const LabelText = styled.span`
  display: inline-block;
  width: 100px;
`;

const ButtonGroup = styled.div`
  text-align: right;
`;

const Button = styled.button`
  margin-left: 0.5rem;
`;

// Sample usage
const App: React.FC = () => {
  return (
    <div>
      <h1>CSV設定</h1>
      <CsvDialog />
    </div>
  );
};

export default App;