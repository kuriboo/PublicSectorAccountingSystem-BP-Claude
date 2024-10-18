import React from 'react';
import styled from '@emotion/styled';

// 調整割合の計算式の型定義
type CalculationFormula = {
  company: string;
  fiscalYear: number;
  calculationPeriod: {
    from: string;
    to: string;
  };
};

// 調整割合の計算式コンポーネント
const CalculationFormulaComponent: React.FC<CalculationFormula> = ({
  company,
  fiscalYear,
  calculationPeriod,
}) => {
  return (
    <Container>
      <Title>調整割合の計算式(計算式4)</Title>
      <CompanyName>{company}</CompanyName>
      <FiscalYear>
        {`行政市水道事業会計
        管理者 経理担当 ぎょうせい 太郎
        令和02年01月24日`}
      </FiscalYear>
      <CalculationPeriod>
        <Label>範囲指定</Label>
        <div>
          <Label>会計年度</Label>
          <span>{`平成${fiscalYear}年度`}</span>
        </div>
        <div>
          <Label>課税期間</Label>
          <span>{`平成${fiscalYear}年04月01日 ～ 令和02年03月31日`}</span>
        </div>
      </CalculationPeriod>
      <Buttons>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </Buttons>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const CompanyName = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const FiscalYear = styled.div`
  font-size: 14px;
  margin-bottom: 16px;
  white-space: pre-wrap;
  text-align: center;
`;

const CalculationPeriod = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 16px;
`;

const Label = styled.span`
  font-weight: bold;
  margin-right: 8px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
`;

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  const sampleData: CalculationFormula = {
    company: '行政市水道事業会計',
    fiscalYear: 31,
    calculationPeriod: {
      from: '平成31年04月01日',
      to: '令和02年03月31日',
    },
  };

  return <CalculationFormulaComponent {...sampleData} />;
};

export default CalculationFormulaComponent;