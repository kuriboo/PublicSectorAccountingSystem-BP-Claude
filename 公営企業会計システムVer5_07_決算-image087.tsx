import React from 'react';
import styled from '@emotion/styled';

interface TaxSumProps {
  taxSum1: string;
  taxSum2: string;
  electricityCharge: string;
  tax30Checkbox: boolean;
  tax33Checkbox: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const TaxSum: React.FC<TaxSumProps> = ({
  taxSum1,
  taxSum2,
  electricityCharge,
  tax30Checkbox,
  tax33Checkbox,
}) => {
  return (
    <Container>
      <Title>税理士情報</Title>
      <InputContainer>
        <Label>税理士署名1</Label>
        <Input type="text" value={taxSum1} />
      </InputContainer>
      <InputContainer>
        <Label>税理士署名2</Label>
        <Input type="text" value={taxSum2} />
      </InputContainer>
      <InputContainer>
        <Label>電話番号</Label>
        <Input type="text" value={electricityCharge} />
      </InputContainer>
      <CheckboxContainer>
        <Checkbox type="checkbox" checked={tax30Checkbox} />
        <Label>税理士法30条の書面提出有</Label>
      </CheckboxContainer>
      <CheckboxContainer>
        <Checkbox type="checkbox" checked={tax33Checkbox} />
        <Label>税理士法33条の20書面提出有</Label>
      </CheckboxContainer>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータを用いた使用例
const App: React.FC = () => {
  return (
    <TaxSum
      taxSum1="山田太郎"
      taxSum2="佐藤花子"
      electricityCharge="03-1234-5678"
      tax30Checkbox={true}
      tax33Checkbox={false}
    />
  );
};

export default App;