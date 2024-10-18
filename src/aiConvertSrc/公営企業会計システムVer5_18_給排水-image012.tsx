import React from 'react';
import styled from 'styled-components';

// 検索条件の型定義
type SearchConditionProps = {
  grade?: string;
  class?: string;
  department?: string;
  name?: string;
  admissionDate?: string;
  gender?: '本人金' | '入金済' | 'すべて';
};

// 検索条件のコンポーネント
const SearchCondition: React.FC<SearchConditionProps> = ({
  grade = '',
  class: className = '',
  department = '',
  name = '',
  admissionDate = '',
  gender = 'すべて',
}) => {
  return (
    <Container>
      <Title>検索条件設定</Title>
      <Row>
        <Label>学年</Label>
        <Input value={grade} readOnly />
        <Label>年度</Label>
        <Input value="" readOnly />
      </Row>
      <Row>
        <Label>調定番号</Label>
        <Input value={department} readOnly />
      </Row>
      <Row>
        <Label>節</Label>
        <Input value="" readOnly />
      </Row>
      <Row>
        <Label>摘要</Label>
        <LargeInput value="" readOnly />
      </Row>
      <Row>
        <Label>区分</Label>
        <RadioButton
          type="radio"
          checked={gender === '本人金'}
          readOnly
        /><span>本人金</span>
        <RadioButton
          type="radio"
          checked={gender === '入金済'}
          readOnly
        /><span>入金済</span>
        <RadioButton
          type="radio"
          checked={gender === 'すべて'}
          readOnly
        /><span>すべて</span>
      </Row>
      <ButtonRow>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonRow>
    </Container>
  );
};

// サンプルデータ
const sampleData: SearchConditionProps = {
  grade: '1年',
  class: 'A組',
  department: '国語',
  name: '山田太郎',
  admissionDate: '2023-04-01',
  gender: '本人金',
};

// 表示用のコンポーネント
const App: React.FC = () => {
  return (
    <div>
      <h1>検索条件設定</h1>
      <SearchCondition {...sampleData} />
    </div>
  );
};

export default App;

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  width: 100px;
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 5px;
  margin-right: 10px;
`;

const LargeInput = styled.input`
  padding: 5px;
  width: 300px;
`;

const RadioButton = styled.input`
  margin-right: 5px;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-right: 10px;
`;