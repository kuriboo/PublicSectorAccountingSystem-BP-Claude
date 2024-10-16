import React from 'react';
import styled from 'styled-components';

// 型定義
interface FiscalYearUpdateProps {
  currentFiscalYear: number;
  nextFiscalYear: number;
  updateDate: string;
  processingOverview: string;
  updateDate2: string;
}

// スタイル定義
const Wrapper = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  width: 400px;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 480px) {
    width: 90%;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const DateText = styled.p`
  margin-bottom: 10px;
`;

const OverviewBox = styled.div`
  background-color: white;
  padding: 10px;
  margin-bottom: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  padding: 5px 15px;
  margin: 0 10px;
`;

// メインコンポーネント
const FiscalYearUpdate: React.FC<FiscalYearUpdateProps> = ({
  currentFiscalYear,
  nextFiscalYear,
  updateDate,
  processingOverview,
  updateDate2,
}) => {
  return (
    <Wrapper>
      <Title>年次更新処理</Title>
      <DateText>
        当期{currentFiscalYear}年度 次期{nextFiscalYear}年度
      </DateText>
      <DateText>令和{updateDate.split('/')[0]}年{updateDate.split('/')[1]}月{updateDate.split('/')[2]}日</DateText>
      
      <OverviewBox>
        {processingOverview ? (
          <p>{processingOverview}</p>
        ) : (
          <p>処理概要が入力されていません。</p>
        )}
      </OverviewBox>

      <DateText>最終更新日時：{updateDate2}</DateText>

      <ButtonWrapper>
        <Button>エラー確認</Button>
        <Button>終了</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

// サンプルデータ
const sampleData: FiscalYearUpdateProps = {
  currentFiscalYear: 2,
  nextFiscalYear: 3,
  updateDate: '02/12/28',
  processingOverview: '当期会計年度から次期会計年度へ更新します。\n決算額を確定します。\n決算処理終了後に実行してください。',
  updateDate2: '令和2年12月24日 17時17分',
};

// 表示用コンポーネント
const App: React.FC = () => {
  return (
    <div>
      <FiscalYearUpdate {...sampleData} />
    </div>
  );
};

export default App;