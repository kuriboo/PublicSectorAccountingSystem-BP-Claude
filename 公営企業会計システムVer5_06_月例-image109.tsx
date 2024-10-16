import React from 'react';
import styled from 'styled-components';

// 契約定合計表コンポーネントのProps型定義
type TotalContractProps = {
  fromDate: string;
  toDate: string;
  workType: '日' | '節' | '細節' | '明細';
  isClosed: boolean;
  collectType: '全体' | 'ブロック' | 'セグメント';
};

// 契約定合計表コンポーネント
const TotalContract: React.FC<TotalContractProps> = ({
  fromDate = '',
  toDate = '',
  workType = '日',
  isClosed = false,
  collectType = '全体',
}) => {
  // 日付の形式をチェック
  const isValidDate = (dateString: string) => {
    const regex = /^\d{4}年\d{2}月\d{2}日$/;
    return regex.test(dateString);
  };

  // 日付が未入力の場合のデフォルト値
  const defaultFromDate = 'YYYYMMDD';
  const defaultToDate = '99999999';

  // 日付が未入力または不正な形式の場合はデフォルト値を使用
  const formattedFromDate = isValidDate(fromDate) ? fromDate : defaultFromDate;
  const formattedToDate = isValidDate(toDate) ? toDate : defaultToDate;

  return (
    <Container>
      <Title>総勘定合計表</Title>
      <DateRange>
        <span>範囲指定</span>
        <DateInput value={formattedFromDate} readOnly />
        <span>〜</span>
        <DateInput value={formattedToDate} readOnly />
      </DateRange>
      <WorkType>
        <span>作表区分</span>
        <input type="radio" id="daily" name="workType" checked={workType === '日'} readOnly />
        <label htmlFor="daily">日</label>
        <input type="radio" id="section" name="workType" checked={workType === '節'} readOnly />
        <label htmlFor="section">節</label>
        <input type="radio" id="subsection" name="workType" checked={workType === '細節'} readOnly />
        <label htmlFor="subsection">細節</label>
        <input type="radio" id="detail" name="workType" checked={workType === '明細'} readOnly />
        <label htmlFor="detail">明細</label>
      </WorkType>
      <ClosedFlag>
        <span>決算仕訳</span>
        <input type="radio" id="notClosed" name="isClosed" checked={!isClosed} readOnly />
        <label htmlFor="notClosed">含む</label>
        <input type="radio" id="closed" name="isClosed" checked={isClosed} readOnly />
        <label htmlFor="closed">含まない</label>
      </ClosedFlag>
      <CollectType>
        <span>集計対象</span>
        <input type="radio" id="all" name="collectType" checked={collectType === '全体'} readOnly />
        <label htmlFor="all">全体</label>
        <input type="radio" id="block" name="collectType" checked={collectType === 'ブロック'} readOnly />
        <label htmlFor="block">ブロック</label>
        <input type="radio" id="segment" name="collectType" checked={collectType === 'セグメント'} readOnly />
        <label htmlFor="segment">セグメント</label>
      </CollectType>
    </Container>
  );
};

// サンプルデータ
const sampleData: TotalContractProps = {
  fromDate: '令和04年04月01日',
  toDate: '令和06年08月31日',
  workType: '日',
  isClosed: false,
  collectType: '全体',
};

// 表示用コンポーネント
const App: React.FC = () => {
  return (
    <div>
      <h1>契約定合計表</h1>
      <TotalContract {...sampleData} />
    </div>
  );
};

// スタイリング
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const DateRange = styled.div`
  margin-bottom: 10px;

  span {
    margin-right: 5px;
  }
`;

const DateInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 120px;
`;

const WorkType = styled.div`
  margin-bottom: 10px;

  span {
    margin-right: 5px;
  }

  input[type='radio'] {
    margin-right: 3px;
  }

  label {
    margin-right: 10px;
  }
`;

const ClosedFlag = styled.div`
  margin-bottom: 10px;

  span {
    margin-right: 5px;
  }

  input[type='radio'] {
    margin-right: 3px;
  }

  label {
    margin-right: 10px;
  }
`;

const CollectType = styled.div`
  span {
    margin-right: 5px;
  }

  input[type='radio'] {
    margin-right: 3px;
  }

  label {
    margin-right: 10px;
  }
`;

export default App;