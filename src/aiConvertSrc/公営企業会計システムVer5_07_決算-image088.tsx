import React from 'react';
import styled from 'styled-components';

// 集計対象の選択肢
type AggregationTarget = '全体' | 'ブロック' | 'セグメント';

// 集計年度の選択肢
const FISCAL_YEAR_OPTIONS = ['20', '19', '18'] as const;
type FiscalYear = typeof FISCAL_YEAR_OPTIONS[number];

// コンポーネントのProps型定義
type Props = {
  onSubmit: (target: AggregationTarget, year: FiscalYear) => void;
};

// スタイル定義
const Container = styled.div`
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Select = styled.select`
  padding: 5px;
`;

const SubmitButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// コンポーネント定義
const AggregationForm: React.FC<Props> = ({ onSubmit }) => {
  // 集計対象と集計年度の状態管理
  const [target, setTarget] = React.useState<AggregationTarget>('全体');
  const [year, setYear] = React.useState<FiscalYear>('20');

  // フォーム送信時のハンドラ
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(target, year);
  };

  return (
    <Container>
      <Title>決算報告書集計処理</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>集計対象:</Label>
          <Select
            value={target}
            onChange={(e) => setTarget(e.target.value as AggregationTarget)}
          >
            <option value="全体">全体</option>
            <option value="ブロック">ブロック</option>
            <option value="セグメント">セグメント</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>集計年度:</Label>
          <Select
            value={year}
            onChange={(e) => setYear(e.target.value as FiscalYear)}
          >
            {FISCAL_YEAR_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </FormGroup>
        <SubmitButton type="submit">集計年度</SubmitButton>
      </Form>
    </Container>
  );
};

// サンプルデータ
const sampleData = {
  target: '全体',
  year: '20',
};

// 使用例
const App: React.FC = () => {
  const handleSubmit = (target: AggregationTarget, year: FiscalYear) => {
    // 送信処理の実装
    console.log('集計対象:', target);
    console.log('集計年度:', year);
  };

  return (
    <div>
      <h1>決算集計システム</h1>
      <AggregationForm onSubmit={handleSubmit} />
      <p>選択された集計対象: {sampleData.target}</p>
      <p>選択された集計年度: {sampleData.year}</p>
    </div>
  );
};

export default App;