import React from 'react';
import styled from '@emotion/styled';

type PublicationCompanyFormProps = {
  companyName: string;
  zipCode1: string;
  zipCode2: string;
  phoneNumber1: string;
  phoneNumber2: string;
  publicationCategory: 'all' | 'book' | 'magazine';
  isConfirmed: boolean;
  isPublicationStopped: boolean;
  onSubmit: () => void;
  onCancel: () => void;
  onEnd: () => void;
};

const PublicationCompanyForm: React.FC<PublicationCompanyFormProps> = ({
  companyName,
  zipCode1,
  zipCode2,
  phoneNumber1,
  phoneNumber2,
  publicationCategory,
  isConfirmed,
  isPublicationStopped,
  onSubmit,
  onCancel,
  onEnd,
}) => {
  return (
    <Container>
      <Title>棚卸結果表作成</Title>
      <Section>
        <Label>棚卸結果表範囲入力</Label>
        <InputGroup>
          <InputLabel>決算区分</InputLabel>
          <InputText value={companyName} readOnly />
        </InputGroup>
        <InputGroup>
          <InputLabel>棚卸年月</InputLabel>
          <InputText value="平成30年09月" readOnly />
        </InputGroup>
        <InputRow>
          <InputGroup>
            <InputLabel>保管場所</InputLabel>
            <InputText value={zipCode1} readOnly />
            <InputConnector>〜</InputConnector>
            <InputText value={zipCode2} readOnly />
          </InputGroup>
          <InputGroup>
            <InputLabel>品番</InputLabel>
            <InputText value={phoneNumber1} readOnly />
            <InputConnector>〜</InputConnector>
            <InputText value={phoneNumber2} readOnly />
          </InputGroup>
        </InputRow>
      </Section>
      
      <Section>
        <Label>棚卸増減区分</Label>
        <RadioGroup>
          <RadioButton
            type="radio"
            checked={publicationCategory === 'all'}
            readOnly
          />
          <RadioLabel>すべて</RadioLabel>
          <RadioButton
            type="radio"
            checked={publicationCategory === 'book'}
            readOnly
          />
          <RadioLabel>増加のみ</RadioLabel>
          <RadioButton
            type="radio"
            checked={publicationCategory === 'magazine'}
            readOnly
          />
          <RadioLabel>減少のみ</RadioLabel>
        </RadioGroup>
      </Section>

      <Section>
        <Checkbox
          type="checkbox"
          checked={isConfirmed}
          readOnly
        />
        <CheckboxLabel>棚卸明細に増減のない品番を印字</CheckboxLabel>
      </Section>

      <Section>
        <Checkbox
          type="checkbox"
          checked={isPublicationStopped}
          readOnly
        />
        <CheckboxLabel>廃番現在高、棚卸高のない品番を印字</CheckboxLabel>
      </Section>

      <ButtonGroup>
        <Button onClick={onSubmit}>終了</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onEnd}>OK</Button>
      </ButtonGroup>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-family: sans-serif;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const InputLabel = styled.div`
  width: 100px;
`;

const InputText = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 150px;
  margin-right: 10px;
`;

const InputRow = styled.div`
  display: flex;
`;

const InputConnector = styled.span`
  margin: 0 10px;
`;

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
`;

const RadioButton = styled.input`
  margin-right: 5px;
`;

const RadioLabel = styled.label`
  margin-right: 20px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const CheckboxLabel = styled.label`
  font-weight: normal;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Sample usage
const SampleUsage: React.FC = () => {
  const handleSubmit = () => {
    console.log('Form submitted');
  };

  const handleCancel = () => {
    console.log('Form canceled');
  };

  const handleEnd = () => {
    console.log('Form ended');
  };

  return (
    <PublicationCompanyForm
      companyName="管理部 予物"
      zipCode1="000000"
      zipCode2="999999"
      phoneNumber1="000000000"
      phoneNumber2="9999999999"
      publicationCategory="all"
      isConfirmed={false}
      isPublicationStopped={false}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      onEnd={handleEnd}
    />
  );
};

export default PublicationCompanyForm;