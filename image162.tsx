import React from 'react';
import styled from '@emotion/styled';

interface CompanyMasterProps {
  companyId: string;
  companyName: string;
  presidentName: string;
  capital: number;
  salesAmount: number;
  text: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;

  @media (min-width: 768px) {
    max-width: 600px;
    margin: 0 auto;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const Label = styled.label`
  margin-right: 10px;
  width: 120px;
`;

const Input = styled.input`
  padding: 5px;
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
    flex: 1;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 5px;
  resize: vertical;
  min-height: 100px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-right: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`;

const CompanyMaster: React.FC<CompanyMasterProps> = ({
  companyId,
  companyName,
  presidentName,
  capital,
  salesAmount,
  text,
}) => {
  return (
    <Container>
      <Title>文章マスタ保守</Title>
      <InputGroup>
        <Label>画面ID</Label>
        <Input type="text" value={companyId} readOnly />
      </InputGroup>
      <InputGroup>
        <Label>画面文章</Label>
        <Input type="text" value={companyName} />
      </InputGroup>
      <InputGroup>
        <Label>人乳科行何</Label>
        <Input type="text" value={presidentName} />
      </InputGroup>
      <InputGroup>
        <Label>出力位置</Label>
        <Input type="number" value={capital} />
      </InputGroup>
      <InputGroup>
        <Label>選択文章</Label>
        <Input type="number" value={salesAmount} />
      </InputGroup>
      <Label>文章</Label>
      <TextArea value={text} />
      <div>
        <Button>行複写</Button>
        <Button>削除</Button>
        <Button>終了</Button>
      </div>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const sampleData: CompanyMasterProps = {
    companyId: 'CM5610',
    companyName: '入礼科行何',
    presidentName: '',
    capital: 6,
    salesAmount: 1,
    text: '下記のとおり入礼を執行してよいでしょうか。',
  };

  return (
    <div>
      <CompanyMaster {...sampleData} />
    </div>
  );
};

export default App;