import React from 'react';
import styled from 'styled-components';

type PeriodType = '日' | '月' | '年' | '期間';
type PeriodClassificationType = 'する' | 'しない';

interface ScheduleDatePickerProps {
  startDate: string;
  endDate: string;
  periodType: PeriodType;
  executionClassification: PeriodClassificationType;
  collectionMethod: '全体' | 'ブロック' | 'セグメント';
  selectedBlock: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
`;

const Title = styled.h3`
  margin-bottom: 10px;
`;

const DateInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const DateInput = styled.input`
  margin-right: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const PeriodTypeSelect = styled.select`
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ExecutionClassificationRadio = styled.div`
  margin-bottom: 10px;
`;

const CollectionMethodRadio = styled.div`
  margin-bottom: 10px;
`;

const BlockSelect = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

/**
 * スケジュール日付ピッカーコンポーネント
 */
const ScheduleDatePicker: React.FC<ScheduleDatePickerProps> = ({
  startDate,
  endDate,
  periodType,
  executionClassification,
  collectionMethod,
  selectedBlock,
}) => {
  return (
    <Container>
      <Title>予算執行状況表3(科目別・執行内訳額)</Title>
      <DateInputContainer>
        <DateInput type="date" value={startDate} />
        〜
        <DateInput type="date" value={endDate} />
      </DateInputContainer>
      <PeriodTypeSelect value={periodType}>
        <option value="日">日</option>
        <option value="月">月</option>
        <option value="年">年</option>
        <option value="期間">期間</option>
      </PeriodTypeSelect>
      <ExecutionClassificationRadio>
        <label>
          <input type="radio" checked={executionClassification === 'する'} />
          する
        </label>
        <label>
          <input type="radio" checked={executionClassification === 'しない'} />
          しない
        </label>
      </ExecutionClassificationRadio>
      <CollectionMethodRadio>
        <label>
          <input type="radio" checked={collectionMethod === '全体'} />
          全体
        </label>
        <label>
          <input type="radio" checked={collectionMethod === 'ブロック'} />
          ブロック
        </label>
        <label>
          <input type="radio" checked={collectionMethod === 'セグメント'} />
          セグメント
        </label>
      </CollectionMethodRadio>
      {collectionMethod === 'ブロック' && (
        <BlockSelect value={selectedBlock}>
          <option value="10階北ブロック">10階北ブロック</option>
        </BlockSelect>
      )}
    </Container>
  );
};

// サンプルデータを使用した表示例
const SampleScheduleDatePicker: React.FC = () => {
  return (
    <ScheduleDatePicker
      startDate="2023-04-01"
      endDate="2023-09-30"
      periodType="期間"
      executionClassification="する"
      collectionMethod="ブロック"
      selectedBlock="10階北ブロック"
    />
  );
};

export default SampleScheduleDatePicker;