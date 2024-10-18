以下は、Next.js + TypeScriptを使用して、指定された画像をもとにしたコンポーネントの実装例です。

import React from 'react';
import styled from '@emotion/styled';

interface EconomicConditionFormProps {
  workMonth: string;
  onSubmit: (data: {
    beforeTaxIncome: number;
    isSelfEmployed: boolean;
    isWithholdingRequired: boolean;
    isInsured: boolean;
    isTaxRequired: boolean;
  }) => void;
}

const EconomicConditionForm: React.FC<EconomicConditionFormProps> = ({ workMonth, onSubmit }) => {
  const [beforeTaxIncome, setBeforeTaxIncome] = React.useState('');
  const [isSelfEmployed, setIsSelfEmployed] = React.useState(false);
  const [isWithholdingRequired, setIsWithholdingRequired] = React.useState(false);
  const [isInsured, setIsInsured] = React.useState(false);
  const [isTaxRequired, setIsTaxRequired] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Perform validation
    if (!beforeTaxIncome) {
      alert('Please enter before tax income');
      return;
    }

    onSubmit({
      beforeTaxIncome: parseInt(beforeTaxIncome),
      isSelfEmployed,
      isWithholdingRequired,
      isInsured,
      isTaxRequired,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>経営状況表作成</Title>
      <WorkMonth>{workMonth}</WorkMonth>
      
      <InputGroup>
        <Label>作業月</Label>
        <Input type="number" value={beforeTaxIncome} onChange={(e) => setBeforeTaxIncome(e.target.value)} required />
        <Unit>円</Unit>
      </InputGroup>
      
      <CheckboxGroup>
        <CheckboxLabel>
          <input type="checkbox" checked={isSelfEmployed} onChange={(e) => setIsSelfEmployed(e.target.checked)} />
          前年度当月決算と比較
        </CheckboxLabel>
        <CheckboxLabel>
          <input type="checkbox" checked={isWithholdingRequired} onChange={(e) => setIsWithholdingRequired(e.target.checked)} />
          当月予算と比較
        </CheckboxLabel>
      </CheckboxGroup>

      <CheckboxGroup>
        <CheckboxLabel>
          <input type="checkbox" checked={isInsured} onChange={(e) => setIsInsured(e.target.checked)} />
          円単位
        </CheckboxLabel>
        <CheckboxLabel>
          <input type="checkbox" checked={isTaxRequired} onChange={(e) => setIsTaxRequired(e.target.checked)} />
          千円単位
        </CheckboxLabel>
      </CheckboxGroup>

      <ButtonGroup>
        <Button type="submit">終了</Button>
        <Button type="button">クリア</Button>
        <SubmitButton type="submit">OK</SubmitButton>
      </ButtonGroup>
    </Form>
  );
};

// Styled components
const Form = styled.form`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
`;

const Title = styled.h2`
  margin: 0 0 16px;
  font-size: 18px;
`;

const WorkMonth = styled.div`
  margin-bottom: 16px;
  font-weight: bold;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Label = styled.label`
  margin-right: 8px;
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 120px;
`;

const Unit = styled.span`
  margin-left: 4px;
`;

const CheckboxGroup = styled.div`
  margin-bottom: 16px;
`;

const CheckboxLabel = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const ButtonGroup = styled.div`
  text-align: center;
`;

const Button = styled.button`
  margin: 0 8px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #ccc;
  cursor: pointer;

  &:hover {
    background-color: #aaa;
  }
`;

const SubmitButton = styled(Button)`
  background-color: #007bff;
  color: #fff;

  &:hover {
    background-color: #0056b3;
  }
`;

// Usage example
const App: React.FC = () => {
  const handleSubmit = (data: any) => {
    console.log(data);
    // Handle form submission
  };

  return <EconomicConditionForm workMonth="平成29年09月04日" onSubmit={handleSubmit} />;
};

export default App;