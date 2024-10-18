import React from 'react';
import styled from 'styled-components';

// 当初予算事項別明細書作成画面のプロパティ型定義
interface InitialBudgetBreakdownProps {
  fiscalYear: number; // 年度
  accountTitle: string; // 会計種別
  budgetType: 'regular' | 'supplementary'; // 当初別・補正別
  fiscalPeriod: {
    from: string; // 期間指定開始日
    to: string;   // 期間指定終了日
  };
  dayPeriod: 'daily' | 'monthly' | 'yearly'; // 日単位、月単位、年単位の選択
  unit: 'thousand' | 'yen'; // 円単位か千円単位か
  title: string; // タイトル
  subtitle: string; // サブタイトル
  styles?: string; // 出力する帳票のスタイル
  outputPages: number; // 出力ページ数
  segment?: string; // セグメント
}

// スタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Select = styled.select`
  padding: 5px;
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 5px;
  margin-right: 10px;
  width: 100px;
`;

const RadioGroup = styled.div`
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin-right: 10px;
`;

// 当初予算事項別明細書作成コンポーネント
const InitialBudgetBreakdown: React.FC<InitialBudgetBreakdownProps> = ({
  fiscalYear = new Date().getFullYear(),
  accountTitle = '',
  budgetType = 'regular',
  fiscalPeriod = { from: '', to: '' },
  dayPeriod = 'daily',
  unit = 'yen',
  title = '',
  subtitle = '',
  styles = '',
  outputPages = 1,
  segment = '',
}) => {
  return (
    <Container>
      <Title>当初予算事項別明細書作成</Title>
      <div>
        <Label>年度</Label>
        <span>{fiscalYear}</span>
      </div>
      <div>
        <Label>会計種別</Label>
        <Select value={accountTitle}>
          <option value=""></option>
          {/* 会計種別のオプションを追加 */}
        </Select>
      </div>
      <RadioGroup>
        <Label>
          <input
            type="radio"
            checked={budgetType === 'regular'}
            value="regular"
          />
          当初別
        </Label>
        <Label>
          <input
            type="radio"
            checked={budgetType === 'supplementary'}
            value="supplementary"
          />
          補正別
        </Label>
      </RadioGroup>
      <div>
        <Label>期間指定</Label>
        <Input type="date" value={fiscalPeriod.from} />
        〜
        <Input type="date" value={fiscalPeriod.to} />
      </div>
      <div>
        <Label>日単位</Label>
        <Select value={dayPeriod}>
          <option value="daily">日</option>
          <option value="monthly">月</option>
          <option value="yearly">年</option>
        </Select>
        {dayPeriod === 'monthly' && <Input type="number" min={1} max={12} />}
      </div>
      <RadioGroup>
        <Label>
          <input type="radio" checked={unit === 'yen'} value="yen" />
          円単位
        </Label>
        <Label>
          <input type="radio" checked={unit === 'thousand'} value="thousand" />
          千円単位
        </Label>
      </RadioGroup>
      <div>
        <Label>タイトル</Label>
        <Input type="text" value={title} />
      </div>
      <div>
        <Label>サブタイトル</Label>
        <Input type="text" value={subtitle} />
      </div>
      <div>
        <Label>様式</Label>
        <Input type="text" value={styles} />
      </div>
      <div>
        <Label>セグメント</Label>
        <Select value={segment}>
          <option value=""></option>
          {/* セグメントのオプションを追加 */}
        </Select>
      </div>
      <div>
        <Label>出力ページ数</Label>
        <Input type="number" min={1} value={outputPages} />
      </div>
      <div>
        <Button>Excel出力</Button>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </div>
    </Container>
  );
};



// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>予算管理システム</h1>
      <InitialBudgetBreakdown
        accountTitle="一般会計"
        budgetType="regular"
        title="令和5年度当初予算事項別明細書"
        outputPages={10}
      />
    </div>
  );
};

export default App;