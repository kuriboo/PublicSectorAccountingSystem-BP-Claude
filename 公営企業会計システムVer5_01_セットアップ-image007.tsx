import React from 'react';
import styled from '@emotion/styled';

interface CompanyInfoFormProps {
  companyNumber?: string;
  companyName?: string;
  companyLocation?: string;
  onPrev?: () => void;
  onNext?: () => void;
  onSubmit?: () => void;
  onCancel?: () => void;
  onEnd?: () => void;
}

const CompanyInfoForm: React.FC<CompanyInfoFormProps> = ({
  companyNumber = '',
  companyName = '',
  companyLocation = '',
  onPrev,
  onNext,
  onSubmit,
  onCancel,
  onEnd,
}) => {
  return (
    <Container>
      <Title>工事名場所マスタ</Title>
      <Subtitle>行政市水道事業会計 総務課 予算・会計担当 ぜよう せい太郎 平成29年06月30日</Subtitle>
      <FormGroup>
        <Label>登録</Label>
        <RadioGroup>
          <Radio type="radio" name="registrationType" value="新規" defaultChecked /> 新規
          <Radio type="radio" name="registrationType" value="訂正" /> 訂正
          <Radio type="radio" name="registrationType" value="削除" /> 削除
        </RadioGroup>
      </FormGroup>
      <FormGroup>
        <Label>工事名場所</Label>
        <Input type="text" value={companyNumber} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>工事名称</Label>
        <Input type="text" defaultValue={companyName} />
      </FormGroup>
      <FormGroup>
        <Label>工事場所</Label>
        <Input type="text" defaultValue={companyLocation} />  
      </FormGroup>
      <ButtonGroup>
        <Button onClick={onPrev}>前データ</Button>
        <Button onClick={onNext}>次データ</Button>
        <Button onClick={onSubmit} primary>OK</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onEnd}>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// Styles
const Container = styled.div`
  font-family: sans-serif;
  padding: 20px;
  background-color: #f0f0f0;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  margin: 0 0 10px;
  font-size: 20px;
`;

const Subtitle = styled.p`
  margin: 0 0 20px;
  font-size: 14px;
  color: #666;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.div`
  margin-bottom: 5px;
  font-weight: bold;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Radio = styled.input`
  margin-right: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px;
  font-size: 16px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 8px 15px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  background-color: ${props => (props.primary ? '#007bff' : '#ccc')};
  color: ${props => (props.primary ? '#fff' : '#333')};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

// Usage example
const CompanyInfoFormExample: React.FC = () => {
  return (
    <CompanyInfoForm
      companyNumber="656513"
      companyName="一丁目地区配水管改良工事"
      companyLocation="一丁目"
      onPrev={() => console.log('Previous')} 
      onNext={() => console.log('Next')}
      onSubmit={() => console.log('Submit')}
      onCancel={() => console.log('Cancel')}
      onEnd={() => console.log('End')}
    />
  );
};

export default CompanyInfoForm;