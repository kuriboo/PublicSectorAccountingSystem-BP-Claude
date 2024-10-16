import React from 'react';
import styled from 'styled-components';

// 特定収入割合の計算表のプロパティ
interface SpecialIncomeRatioProps {
  fiscalYear: string; // 会計年度
  period: string; // 課税期間
}

// 特定収入割合の計算表コンポーネント
const SpecialIncomeRatio: React.FC<SpecialIncomeRatioProps> = ({ fiscalYear, period }) => {
  return (
    <Container>
      <Title>特定収入割合の計算表(計算表3)</Title>
      <Subtitle>
        行政市水道事業会計 <br />
        管理者 経理担当、さわ荘史、太郎
      </Subtitle>
      <DateText>令和02年01月29日</DateText>
      <Form>
        <FormGroup>
          <Label>会計年度</Label>
          <Input type="text" value={fiscalYear} readOnly />
        </FormGroup>
        <FormGroup>
          <Label>課税期間</Label>
          <Input type="text" value={period} readOnly />
        </FormGroup>
      </Form>
    </Container>
  );
};

// サンプルデータ
const sampleData = {
  fiscalYear: '平成31',
  period: '平成31年04月01日　〜　令和02年03月31日',
};

// 表示用コンポーネント
const App: React.FC = () => {
  return (
    <SpecialIncomeRatio
      fiscalYear={sampleData.fiscalYear}
      period={sampleData.period}
    />
  );
};

// スタイリング
const Container = styled.div`
  font-family: sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
`;

const Subtitle = styled.div`
  text-align: right;
  font-size: 14px;
  margin-bottom: 5px;
`;

const DateText = styled.div`
  text-align: right;
  font-size: 14px;
  margin-bottom: 20px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Label = styled.label`
  flex: 0 0 100px;
  font-weight: bold;
`;

const Input = styled.input`
  flex: 1;
  padding: 5px;
  font-size: 16px;
`;

export default App;

// コメント
// - 特定収入割合の計算表のコンポーネントを定義
// - プロパティとして会計年度と課税期間を受け取る 
// - 各フォーム項目はreadOnlyで表示のみ
// - サンプルデータを使って実際の使用方法を示す表示用コンポーネントを定義
// - styled-componentsを使ってスタイリングを組み込む
// - レスポンシブ対応できるよう、最大幅を指定