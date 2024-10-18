import React from 'react';
import styled from 'styled-components';

// 型定義
type ReportRangeProps = {
  fromDate: string;
  toDate: string;
  onFromDateChange: (date: string) => void;
  onToDateChange: (date: string) => void;
};

type WorkTypeProps = {
  workType: '前' | '細前' | '明細' | string;
  onWorkTypeChange: (workType: string) => void;
};

type CollectionMethodProps = {
  collectionMethods: string[];
  selectedCollectionMethod: string;
  onCollectionMethodChange: (method: string) => void;
};

// 日付範囲コンポーネント
const ReportRange: React.FC<ReportRangeProps> = ({
  fromDate,
  toDate,
  onFromDateChange,
  onToDateChange,
}) => {
  return (
    <div>
      <label>
        作業日 
        <input type="text" value={fromDate} onChange={(e) => onFromDateChange(e.target.value)} /> 
        ～
        <input type="text" value={toDate} onChange={(e) => onToDateChange(e.target.value)} />
      </label>
    </div>
  );
};

// 作業区分コンポーネント  
const WorkType: React.FC<WorkTypeProps> = ({ workType, onWorkTypeChange }) => {
  return (
    <div>
      <label>
        作業区分
        <label>
          <input
            type="radio"
            value="前"
            checked={workType === '前'}
            onChange={() => onWorkTypeChange('前')}
          />{' '}
          前
        </label>
        <label>
          <input
            type="radio"
            value="細前"
            checked={workType === '細前'}
            onChange={() => onWorkTypeChange('細前')}
          />{' '}
          細前
        </label>
        <label>
          <input
            type="radio"
            value="明細"
            checked={workType === '明細'}
            onChange={() => onWorkTypeChange('明細')}
          />{' '}
          明細
        </label>
      </label>
    </div>
  );
};

// 集計対象コンポーネント
const CollectionMethod: React.FC<CollectionMethodProps> = ({
  collectionMethods,
  selectedCollectionMethod,
  onCollectionMethodChange,
}) => {
  return (
    <div>
      <label>
        集計対象
        <select
          value={selectedCollectionMethod}
          onChange={(e) => onCollectionMethodChange(e.target.value)}
        >
          {collectionMethods.map((method) => (
            <option key={method} value={method}>
              {method}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  border: 1px solid #ccc;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;

  button {
    margin-right: 10px;
  }
`;

// 使用例コンポーネント
const UsageExample: React.FC = () => {
  const [fromDate, setFromDate] = React.useState('00000000');
  const [toDate, setToDate] = React.useState('99999999');
  const [workType, setWorkType] = React.useState('前');
  const [selectedCollectionMethod, setSelectedCollectionMethod] = React.useState('');

  const collectionMethods = ['全体', 'ブロック', 'セグメント'];

  return (
    <Container>
      <Title>現預金出納簿</Title>
      <ReportRange
        fromDate={fromDate}
        toDate={toDate}
        onFromDateChange={setFromDate}
        onToDateChange={setToDate}
      />
      <WorkType workType={workType} onWorkTypeChange={setWorkType} />
      <CollectionMethod
        collectionMethods={collectionMethods}
        selectedCollectionMethod={selectedCollectionMethod}
        onCollectionMethodChange={setSelectedCollectionMethod}
      />

      <ButtonContainer>
        <button>OK</button>
        <button>クリア</button>
        <button>終了</button>
      </ButtonContainer>
    </Container>
  );
};

export default UsageExample;