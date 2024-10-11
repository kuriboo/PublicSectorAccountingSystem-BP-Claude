import React from 'react';
import styled from '@emotion/styled';

type RemovalRequestFormProps = {
  onSubmit: (formData: { removalType: string; startDate: Date; endDate: Date; }) => void;
};

const RemovalRequestForm: React.FC<RemovalRequestFormProps> = ({ onSubmit }) => {
  const [removalType, setRemovalType] = React.useState('');
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ removalType, startDate, endDate });
  };

  return (
    <FormContainer>
      <Title>控除額支出命令書発行</Title>
      <AccountInfo>
        <span>総務課</span>
        <span>予算・会計担当 ぎょうせい太郎</span>
        <span>平成29年09月19日</span>
      </AccountInfo>

      <FormGroup>
        <Label>発行区分</Label>
        <RadioGroup>
          <RadioButton
            type="radio"
            id="new"
            checked={removalType === '新規'}
            onChange={() => setRemovalType('新規')}
          />
          <RadioLabel htmlFor="new">新規</RadioLabel>
          <RadioButton
            type="radio"
            id="reissue"  
            checked={removalType === '再発行'}
            onChange={() => setRemovalType('再発行')}
          />
          <RadioLabel htmlFor="reissue">再発行</RadioLabel>
        </RadioGroup>
      </FormGroup>
      
      <FormGroup>
        <Label>発行対象</Label>
        <InputGroup>
          <DateInput
            type="date"
            value={startDate.toISOString().slice(0, 10)}
            onChange={e => setStartDate(new Date(e.target.value))}
          />
          <span>〜</span>
          <DateInput
            type="date"
            value={endDate.toISOString().slice(0, 10)}  
            onChange={e => setEndDate(new Date(e.target.value))}
          />
        </InputGroup>
      </FormGroup>

      <ButtonContainer>
        <SubmitButton type="submit" onClick={handleSubmit}>保存年度</SubmitButton>
        <Button type="button">クリア</Button>
        <Button type="button">終了</Button>
      </ButtonContainer>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  margin: 0 0 20px;
`;

const AccountInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 15px;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
`;

const RadioButton = styled.input`
  margin-right: 5px;
`;

const RadioLabel = styled.label`
  margin-right: 10px;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
`;

const DateInput = styled.input`
  margin: 0 10px;
  padding: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Button = styled.button`
  margin: 0 5px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #ccc;
  cursor: pointer;
`;

const SubmitButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
`;

// Usage example
const App: React.FC = () => {
  const handleFormSubmit = (formData: { removalType: string; startDate: Date; endDate: Date; }) => {
    console.log(formData);
    // Handle form submission
  };

  return (
    <div>
      <RemovalRequestForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;