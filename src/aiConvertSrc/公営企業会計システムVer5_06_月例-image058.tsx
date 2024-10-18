import React from 'react';
import styled from 'styled-components';

type FormProps = {
  onSubmit: () => void;
};

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  return (
    <FormWrapper>
      <FormTitle>予算執行状況表（所属別）作成</FormTitle>
      
      <FormGroup>
        <Label>集計日付</Label>
        <InputGroup>
          <DateInput type="text" defaultValue="令和05年09月20日" />
          <Text>～</Text>
          <DateInput type="text" defaultValue="令和06年03月31日" />
        </InputGroup>
      </FormGroup>
      
      <FormGroup>
        <Label>所属</Label>
        <InputGroup>
          <NumberInput type="text" defaultValue="0000000" />
          <Text>～</Text>
          <NumberInput type="text" defaultValue="9999999" />
        </InputGroup>
      </FormGroup>

      <FormGroup>
        <Label>予算料目</Label>
        <InputGroup>
          <NumberInput type="text" defaultValue="00000000" />
          <Text>～</Text>  
          <NumberInput type="text" defaultValue="99999999" />
        </InputGroup>
      </FormGroup>

      <FormGroup>
        <Label>作表区分</Label>
        <RadioGroup>
          <RadioButton type="radio" name="type" value="day" defaultChecked />
          <RadioLabel>日</RadioLabel>
          <RadioButton type="radio" name="type" value="month" />  
          <RadioLabel>月</RadioLabel>
          <RadioButton type="radio" name="type" value="year" />
          <RadioLabel>年度</RadioLabel>
          <RadioButton type="radio" name="type" value="term" />
          <RadioLabel>期間</RadioLabel>
        </RadioGroup>
      </FormGroup>

      <FormGroup>
        <Label>端数処理</Label>
        <RadioGroup>  
          <RadioButton type="radio" name="rounding" value="round" defaultChecked />
          <RadioLabel>する</RadioLabel>
          <RadioButton type="radio" name="rounding" value="none" />
          <RadioLabel>しない</RadioLabel>
        </RadioGroup>
      </FormGroup>

      <ButtonGroup>
        <SubmitButton onClick={onSubmit}>OK</SubmitButton>
        <ClearButton>クリア</ClearButton> 
        <CloseButton>終了</CloseButton>
      </ButtonGroup>
    </FormWrapper>
  );
};

// Styled components
const FormWrapper = styled.div`
  padding: 20px;
  background-color: #f0f0f0; 
`;

const FormTitle = styled.h2`
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.div`
  margin-bottom: 5px;
  font-weight: bold;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
`;

const DateInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  width: 150px;
`;

const NumberInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  width: 100px;
`;

const Text = styled.span`
  margin: 0 10px;
`;

const RadioGroup = styled.div`
  display: flex;
`;

const RadioButton = styled.input`
  margin-right: 5px;
`;

const RadioLabel = styled.label`
  margin-right: 10px;
`;

const ButtonGroup = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  margin-right: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const ClearButton = styled.button`
  padding: 10px 20px;
  margin-right: 10px;
  background-color: #6c757d;
  color: #fff;  
  border: none;
  cursor: pointer;
`;

const CloseButton = styled.button`
  padding: 10px 20px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  cursor: pointer;  
`;

// Sample usage
const App: React.FC = () => {
  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

export default App;