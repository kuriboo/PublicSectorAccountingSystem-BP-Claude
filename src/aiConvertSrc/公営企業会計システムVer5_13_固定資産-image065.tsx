以下は、指定された条件に基づいて作成したNext.js + TypeScriptのコンポーネントです。

import React from 'react';
import styled from 'styled-components';

// 自動仕訳作成処理のPropsの型定義
type AutoJournalEntryProps = {
  startDate: string;
  endDate: string;
  closeDate: string;
  isMonthly: boolean;
  note: string;
  onClickBack: () => void;
  onClickOk: () => void;
  onClickCancel: () => void;
};

// 自動仕訳作成処理のコンポーネント
const AutoJournalEntry: React.FC<AutoJournalEntryProps> = ({
  startDate,
  endDate,
  closeDate,
  isMonthly,
  note,
  onClickBack,
  onClickOk,
  onClickCancel,
}) => {
  return (
    <Container>
      <Title>自動仕訳作成処理</Title>
      <DateWrapper>
        <DateLabel>処理対象年月日</DateLabel>
        <DateValue>{startDate}</DateValue>
        <DateValue>{endDate}</DateValue>
      </DateWrapper>
      <DateWrapper>
        <DateLabel>平成29年04月01日</DateLabel>
        <DateValue>{closeDate}</DateValue>
      </DateWrapper>
      <RadioWrapper>
        <RadioLabel>作成区分</RadioLabel>
        <label>
          <input type="radio" checked={isMonthly} readOnly /> 月次
        </label>
        <label>
          <input type="radio" checked={!isMonthly} readOnly /> 期間
        </label>
      </RadioWrapper>
      <NoteWrapper>
        <NoteLabel>処理概要</NoteLabel>
        <NoteValue>{note}</NoteValue>
      </NoteWrapper>
      <ButtonWrapper>
        <Button onClick={onClickBack}>戻る</Button>
        <Button onClick={onClickOk}>OK</Button>
        <Button onClick={onClickCancel}>終了</Button>
      </ButtonWrapper>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  width: 450px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const DateWrapper = styled.div`
  margin-bottom: 8px;
`;

const DateLabel = styled.span`
  font-weight: bold;
  margin-right: 8px;
`;

const DateValue = styled.span`
  margin-right: 16px;
`;

const RadioWrapper = styled.div`
  margin-bottom: 8px;
`;

const RadioLabel = styled.span`
  font-weight: bold;
  margin-right: 8px;
`;

const NoteWrapper = styled.div`
  margin-bottom: 16px;
`;

const NoteLabel = styled.div`
  font-weight: bold;
`;

const NoteValue = styled.div`
  background-color: white;
  padding: 8px;
  border: 1px solid #ccc;
`;

const ButtonWrapper = styled.div`
  text-align: center;
`;

const Button = styled.button`
  margin: 0 8px;
  padding: 4px 16px;
  font-size: 14px;
`;

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  const handleClickBack = () => {
    console.log('Back button clicked');
  };

  const handleClickOk = () => {
    console.log('OK button clicked');
  };

  const handleClickCancel = () => {
    console.log('Cancel button clicked');
  };

  return (
    <AutoJournalEntry
      startDate="平成29年04月01日"
      endDate="平成30年03月31日"
      closeDate="平成29年09月12日"
      isMonthly={false}
      note="当年度の減価償却について科目別に仕訳を作成します。
作成するのは当年度に増減したものみです。それ以外の仕訳については作成されません。"
      onClickBack={handleClickBack}
      onClickOk={handleClickOk}
      onClickCancel={handleClickCancel}
    />
  );
};

export default AutoJournalEntry;