import React from 'react';
import styled from '@emotion/styled';

type InputResultType = {
  tanka: string;
  gensenKingaku: string;
  koujyo: string;
};

type Props = {
  inputResult: InputResultType;
};

const InputResult: React.FC<Props> = ({ inputResult }) => {
  const { tanka, gensenKingaku, koujyo } = inputResult;

  return (
    <Container>
      <Title>入札結果取込更新処理</Title>
      <Row>
        <Label>単価</Label>
        <Value>{tanka}</Value>
      </Row>
      <Row>
        <Label>受付区分</Label>
        <Value>工事</Value>
      </Row>
      <Row>
        <Label>物件</Label>
        <Value>{gensenKingaku}</Value>
      </Row>
      <Row>
        <Label>全選択</Label>
        <Value>{koujyo}</Value>
      </Row>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border: 1px solid #ccc;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Label = styled.div`
  width: 100px;
  font-weight: bold;
`;

const Value = styled.div`
  flex: 1;
`;

const ButtonContainer = styled.div`
  margin-top: 16px;
  text-align: center;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin: 0 4px;
`;

// Usage example
const App: React.FC = () => {
  const sampleData: InputResultType = {
    tanka: '1234',
    gensenKingaku: '429100012017-010-429100012017-010-429100022017-010-429100022017-010-429100022017-010-SMI',
    koujyo: '429100022017-010-429100022-SMI',
  };

  return (
    <div>
      <h1>Input Result Example</h1>
      <InputResult inputResult={sampleData} />
    </div>
  );
};

export default App;