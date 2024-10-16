以下のようなNext.js + TypeScriptのコンポーネントを生成しました。

import React from 'react';
import styled from '@emotion/styled';

// Props型定義
type MasterListCreationProps = {
  onConfirm: () => void;
  onCancel: () => void;
  onClose: () => void;
};

// スタイル定義
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const RadioLabel = styled.label`
  margin-right: 10px;
`;

const DateInput = styled.input`
  margin-left: 10px;
  padding: 5px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }
`;

const OkButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
`;

const CancelButton = styled(Button)`
  background-color: #6c757d;
  color: #fff;
`;

const CloseButton = styled(Button)`
  background-color: #dc3545;
  color: #fff;
`;

// コンポーネント定義
const MasterListCreation: React.FC<MasterListCreationProps> = ({
  onConfirm,
  onCancel,
  onClose,
}) => {
  // ラジオボタンの状態管理
  const [selectedOption, setSelectedOption] = React.useState('');

  // 日付の状態管理 
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');
  
  // OKボタンクリック時の処理
  const handleConfirm = () => {
    if (!selectedOption || !startDate || !endDate) {
      alert('入力が不完全です。');
      return;
    }
    onConfirm();
  };

  return (
    <Container>
      <Title>相手先マスタリスト作成</Title>
      <div>範囲指定</div>
      <RadioGroup>
        <RadioLabel>
          <input
            type="radio"
            value="all"
            checked={selectedOption === 'all'}
            onChange={() => setSelectedOption('all')}
          />
          通常相手先
        </RadioLabel>
        <RadioLabel>
          <input
            type="radio"
            value="time"
            checked={selectedOption === 'time'}
            onChange={() => setSelectedOption('time')}
          />
          一時相手先
        </RadioLabel>
      </RadioGroup>
      {selectedOption === 'time' && (
        <div>
          <DateInput
            type="text"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          ～
          <DateInput
            type="text"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      )}
      <div>「 連格請求書登録請号未入力のみ</div>
      <ButtonGroup>
        <OkButton onClick={handleConfirm}>OK</OkButton>
        <CancelButton onClick={onCancel}>クリア</CancelButton>
        <CloseButton onClick={onClose}>終了</CloseButton>
      </ButtonGroup>
    </Container>
  );
};

export default MasterListCreation;

// 使用例
const UsageExample = () => {
  const handleConfirm = () => {
    console.log('Confirmed');
  };

  const handleCancel = () => {
    console.log('Canceled');
  };

  const handleClose = () => {
    console.log('Closed');
  };

  return (
    <MasterListCreation
      onConfirm={handleConfirm}
      onCancel={handleCancel}
      onClose={handleClose}
    />
  );
};