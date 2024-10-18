import React from 'react';
import styled from 'styled-components';

// 比較指示計算書のプロパティ型定義
type ComparativeStatementProps = {
  period: string;
  fiscalYear: string;
  executionDate: string;
};

// 範囲指定のプロパティ型定義
type RangeSelectionProps = {
  label: string;
  fromCode: string;
  toCode: string;
};

// 比較指示計算書コンポーネント
const ComparativeStatement: React.FC<ComparativeStatementProps> = ({
  period,
  fiscalYear,
  executionDate,
}) => {
  // ラジオボタンの選択状態を管理するstate
  const [selectedOption, setSelectedOption] = React.useState('範囲指定');

  return (
    <Container>
      <Header>
        <Title>比較指示計算書</Title>
        <ExecutionInfo>
          <span>行政市水道事業会計</span>
          <span>総務課 予算・会計担当 ぎょうせい太郎</span>
          <span>平成29年09月04日</span>
        </ExecutionInfo>
      </Header>
      
      <RangeSelection label="作表年度" fromCode="" toCode="" />
      <RangeSelection label="作表対象" fromCode="全体" toCode="範囲指定" />
      
      <Description>
        過去4年分の金額と構成比率を算出した収益費用科目の比較表を閲覧金額で作成します。
        作表対象を全体とした場合、作表年度に執行している科目も出力対象とします。
        作表対象を範囲指定とした場合、作表年度に執行している科目のみを出力対象とします。
      </Description>
      
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// 範囲指定コンポーネント
const RangeSelection: React.FC<RangeSelectionProps> = ({ label, fromCode, toCode }) => {
  return (
    <RangeContainer>
      <RangeLabel>{label}</RangeLabel>
      <RangeInputContainer>
        <span>前コード</span>
        <RangeInput value={fromCode} readOnly />
        <span>~</span>
        <span>前コード</span>
        <RangeInput value={toCode} readOnly />
      </RangeInputContainer>
    </RangeContainer>
  );
};

// スタイリング
const Container = styled.div`
  padding: 20px;
  font-family: sans-serif;
`;

const Header = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const ExecutionInfo = styled.div`
  font-size: 14px;
  
  span {
    margin-right: 10px;
  }
`;

const RangeContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const RangeLabel = styled.span`
  margin-right: 10px;
`;

const RangeInputContainer = styled.div`
  display: flex;
  align-items: center;
  
  span {
    margin: 0 5px;
  }
`;

const RangeInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100px;
`;

const Description = styled.p`
  margin-top: 20px;
  font-size: 14px;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 0 5px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
`;

// 使用例
const App: React.FC = () => {
  return (
    <ComparativeStatement
      period="平成29"
      fiscalYear="年度"
      executionDate="平成29年09月04日"
    />
  );
};

export default App;