import React from 'react';
import styled from '@emotion/styled';

interface PublicApprovalFormProps {
  onSubmit: (data: { startDate: string; endDate: string; approvalType: string }) => void;
}

const PublicApprovalForm: React.FC<PublicApprovalFormProps> = ({ onSubmit }) => {
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');
  const [approvalType, setApprovalType] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ startDate, endDate, approvalType });
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Title>控除額支出命令書発行</Title>
      <FormGroup>
        <Label>発行区分</Label>
        <RadioGroup>
          <Radio
            type="radio"
            name="approvalType"
            value="新規"
            checked={approvalType === '新規'}
            onChange={(e) => setApprovalType(e.target.value)}
          />
          <RadioLabel>新規</RadioLabel>
          <Radio
            type="radio"
            name="approvalType"
            value="再発行"
            checked={approvalType === '再発行'}
            onChange={(e) => setApprovalType(e.target.value)}
          />
          <RadioLabel>再発行</RadioLabel>
        </RadioGroup>
      </FormGroup>
      <FormGroup>
        <Label>発行対象</Label>
        <Input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <Separator>~</Separator>
        <Input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </FormGroup>
      <ButtonGroup>
        <Button type="submit">OK</Button>
        <Button type="button">クリア</Button>
        <Button type="button">終了</Button>
      </ButtonGroup>
    </FormWrapper>
  );
};

// スタイリング
const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Label = styled.label`
  margin-right: 10px;
  min-width: 80px;
`;

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
`;

const Radio = styled.input`
  margin-right: 5px;
`;

const RadioLabel = styled.label`
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
`;

const Separator = styled.span`
  margin: 0 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 0 5px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// 使用例
const SampleUsage = () => {
  const handleSubmit = (data: {
    startDate: string;
    endDate: string;
    approvalType: string;
  }) => {
    console.log('Form submitted:', data);
  };

  return <PublicApprovalForm onSubmit={handleSubmit} />;
};

export default SampleUsage;