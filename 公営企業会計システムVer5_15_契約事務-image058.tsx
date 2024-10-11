import React from 'react';
import styled from '@emotion/styled';

interface PublicCompanySearchProps {
  companyCode?: string;
  companyName?: string;
  onSubmit?: (companyCode: string) => void;
}

const PublicCompanySearch: React.FC<PublicCompanySearchProps> = ({
  companyCode = '',
  companyName = '',
  onSubmit,
}) => {
  const [inputCompanyCode, setInputCompanyCode] = React.useState(companyCode);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(inputCompanyCode);
    }
  };

  return (
    <Container>
      <Title>公開会社検索（公開用）</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          コード
          <Input
            type="text"
            value={inputCompanyCode}
            onChange={(e) => setInputCompanyCode(e.target.value)}
          />
        </Label>
        <Label>
          会社区分
          <Select>
            <option value="">全て</option>
            {/* Add more options */}
          </Select>
        </Label>
        <InfoText>
          予定備考のEP予定数
          <InfoValue>未入力</InfoValue>
        </InfoText>
        <InfoText>
          落札予のEP予数
          <InfoValue>未入力</InfoValue>
        </InfoText>
        <Label>
          物件
          <Input type="text" value={companyCode} readOnly />
        </Label>
        <CheckboxLabel>
          <input type="checkbox" />
          会選択
        </CheckboxLabel>
        <ButtonGroup>
          <Button type="button">クリア</Button>
          <Button type="submit" primary>
            終了
          </Button>
          <Button type="button">検索</Button>
        </ButtonGroup>
      </Form>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  font-family: sans-serif;
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Form = styled.form`
  display: grid;
  grid-gap: 1rem;
`;

const Label = styled.label`
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const InfoText = styled.p`
  display: flex;
  align-items: center;
  margin: 0;
`;

const InfoValue = styled.span`
  margin-left: 1rem;
  color: #888;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  color: ${({ primary }) => (primary ? '#fff' : 'inherit')};
  background-color: ${({ primary }) => (primary ? '#007bff' : '#f0f0f0')};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

// Sample usage
const App: React.FC = () => {
  const handleSubmit = (companyCode: string) => {
    console.log('Submitted company code:', companyCode);
  };

  return (
    <PublicCompanySearch
      companyCode="4291100077"
      companyName="工事の受注会社"
      onSubmit={handleSubmit}
    />
  );
};

export default App;