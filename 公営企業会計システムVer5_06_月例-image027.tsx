import React from 'react';
import styled from 'styled-components';

// 作表制御表の型定義
type FormControlProps = {
  startYear: number;
  startMonth: number;
  endYear: number;
  endMonth: number;
  workType: string;
};

// 作表制御表のコンポーネント
const FormControl: React.FC<FormControlProps> = ({
  startYear,
  startMonth,
  endYear,
  endMonth,
  workType,
}) => {
  return (
    <Container>
      <Title>作表制御表集計</Title>
      <PeriodContainer>
        <Label>集計年月</Label>
        <Period>
          平成{startYear}年{startMonth}月 ～ 平成{endYear}年{endMonth}月
        </Period>
      </PeriodContainer>
      <WorkTypeContainer>
        <Label>作表制御区分</Label>
        <WorkType value={workType}>
          {workType === '001' ? '課用構成表(合計)' : workType}
        </WorkType>
      </WorkTypeContainer>
      <ButtonsContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonsContainer>
    </Container>
  );
};

// サンプルデータ
const sampleData: FormControlProps = {
  startYear: 29,
  startMonth: 4,
  endYear: 29,
  endMonth: 4,
  workType: '001',
};

// 表示用コンポーネント
const App: React.FC = () => {
  return (
    <div>
      <FormControl {...sampleData} />
    </div>
  );
};

// スタイリング
const Container = styled.div`
  font-family: 'メイリオ', Meiryo, sans-serif;
  background-color: #f0f0f0;
  padding: 16px;
  width: 100%;
  max-width: 500px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin: 0 0 16px;
`;

const PeriodContainer = styled.div`
  margin-bottom: 12px;
`;

const WorkTypeContainer = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const Period = styled.div`
  font-size: 16px;
  padding: 4px 8px;
  background-color: white;
`;

const WorkType = styled.div`
  font-size: 16px;
  padding: 4px 8px;
  background-color: white;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  font-size: 14px;
  padding: 6px 16px;
  margin-left: 8px;
  border: none;
  border-radius: 4px;

  &:last-child {
    margin-left: 0;
  }
`;

export default App;