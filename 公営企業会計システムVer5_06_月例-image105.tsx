import React from 'react';
import styled from '@emotion/styled';

type FormValues = {
  date: string;
  toCompany: string;
  toNumber: string;
  fromCompany: string;
  fromNumber: string;
  workType: string;
};

type PreviewFormProps = {
  formValues: FormValues;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  background-color: #f0f0f0;
  font-family: sans-serif;

  @media (min-width: 768px) {
    max-width: 600px;
    margin: 0 auto;
  }
`;

const Title = styled.h2`
  margin-bottom: 24px;
`;

const FormItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
`;

const Label = styled.span`
  font-weight: bold;
`;

const Value = styled.span``;

const PreviewForm: React.FC<PreviewFormProps> = ({ formValues }) => {
  const { date, toCompany, toNumber, fromCompany, fromNumber, workType } = formValues;

  return (
    <Container>
      <Title>予算額内訳表</Title>
      <FormItem>
        <Label>作成日</Label>
        <Value>{date || '----年--月--日'}</Value>
      </FormItem>
      <FormItem>
        <Label>所属</Label>
        <Value>{toCompany || '--------'}</Value>
      </FormItem>
      <FormItem>
        <Label>所属</Label>
        <Value>{toNumber || '--------'}</Value>
      </FormItem>
      <FormItem>
        <Label>予算科目</Label>
        <Value>{fromCompany || '----------'}</Value>
      </FormItem>
      <FormItem>
        <Label>予算科目</Label>
        <Value>{fromNumber || '----------'}</Value>
      </FormItem>
      <FormItem>
        <Label>作業区分</Label>
        <Value>{workType || '未選択'}</Value>
      </FormItem>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const sampleData: FormValues = {
    date: '令和5年07月24日',
    toCompany: '〇〇〇〇〇〇',
    toNumber: '8888888',
    fromCompany: '〇〇〇〇〇〇〇〇',
    fromNumber: '999999999',
    workType: '日',
  };

  return (
    <div>
      <h1>予算額内訳表プレビュー</h1>
      <PreviewForm formValues={sampleData} />
    </div>
  );
};

export default App;