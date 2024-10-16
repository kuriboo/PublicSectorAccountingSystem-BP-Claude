import React from 'react';
import styled from '@emotion/styled';

// 判定期間の選択肢の型定義
type PeriodOption = {
  label: string;
  value: number;
};

// コンポーネントのプロパティの型定義
type Props = {
  className?: string;
  fiscalYear: number;
  periodOptions: PeriodOption[];
  defaultPeriod: number;
  onChangePeriod: (period: number) => void;
};

// コンポーネント本体
const DecisionPeriodSelector: React.FC<Props> = ({
  className,
  fiscalYear,
  periodOptions,
  defaultPeriod,
  onChangePeriod,
}) => {
  // 判定期間の選択肢が空の場合はデフォルト値を設定
  const options = periodOptions.length > 0 ? periodOptions : [
    { label: '全体', value: 0 },
    { label: 'ブロック', value: 20 },
    { label: 'セグメント', value: 30 },
  ];

  return (
    <Container className={className}>
      <Title>決算損益計算書計処理</Title>
      <FiscalYear>
        行政市水道事業会計 管理者 予算科目登録稟議書 きょうせい太郎<br />
        平成30年04月06日
      </FiscalYear>
      <Description>
        決算損益計算書・決算管借対照表データを作成します。
      </Description>
      <PeriodSection>
        <PeriodRadios>
          <PeriodRadio>
            <input type="radio" id="all" name="period" value={0} 
              defaultChecked={defaultPeriod === 0}
              onChange={() => onChangePeriod(0)} 
            />
            <label htmlFor="all">全体</label>
          </PeriodRadio>
          <PeriodRadio>
            <input type="radio" id="block" name="period" value={20}
              defaultChecked={defaultPeriod === 20} 
              onChange={() => onChangePeriod(20)}
            />
            <label htmlFor="block">ブロック</label>
          </PeriodRadio>
          <PeriodRadio>
            <input type="radio" id="segment" name="period" value={30}
              defaultChecked={defaultPeriod === 30}
              onChange={() => onChangePeriod(30)} 
            />
            <label htmlFor="segment">セグメント</label>
          </PeriodRadio>
        </PeriodRadios>
        <PeriodSelect>
          <select value={defaultPeriod} onChange={e => onChangePeriod(Number(e.target.value))}>
            {options.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </PeriodSelect>
      </PeriodSection>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  font-family: sans-serif;
`;

const Title = styled.h2`
  font-size: 18px;
  margin: 0 0 8px;
`;

const FiscalYear = styled.div`
  color: #999;
  font-size: 12px;
  margin-bottom: 16px;
`;

const Description = styled.div`
  margin-bottom: 16px;
`;

const PeriodSection = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const PeriodRadios = styled.div`
  display: flex;
  margin-right: 16px;

  @media (max-width: 600px) {
    margin-bottom: 8px;
  }
`;

const PeriodRadio = styled.div`
  margin-right: 8px;
`;

const PeriodSelect = styled.div`
  display: flex;
  align-items: center;
`;

// 使用例
const App: React.FC = () => {
  const [period, setPeriod] = React.useState(0);

  return (
    <DecisionPeriodSelector 
      fiscalYear={2018}
      periodOptions={[
        { label: '〜20', value: 20 },
        { label: '〜30', value: 30 },
      ]}
      defaultPeriod={period}
      onChangePeriod={period => setPeriod(period)}
    />
  );
};

export default DecisionPeriodSelector;