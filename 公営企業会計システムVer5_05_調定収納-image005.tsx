import React from 'react';
import styled from 'styled-components';

// 型定義
type DateRangeProps = {
  startDate?: string;
  endDate?: string;
  onOk?: () => void;
  onCancel?: () => void;
  onClose?: () => void;
};

// スタイル定義
const Container = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 20px;
  width: 300px;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const DateRange = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const DateInput = styled.input`
  padding: 5px;
  width: 45%;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

// コンポーネント定義
const DateRangePicker: React.FC<DateRangeProps> = ({
  startDate = '',
  endDate = '',
  onOk,
  onCancel,
  onClose,
}) => {
  // OKボタンクリック時の処理
  const handleOk = () => {
    onOk?.();
  };

  // キャンセルボタンクリック時の処理 
  const handleCancel = () => {
    onCancel?.();
  };

  // 閉じるボタンクリック時の処理
  const handleClose = () => {
    onClose?.();
  };

  return (
    <Container>
      <Title>期間指定</Title>
      <DateRange>
        <DateInput type="date" defaultValue={startDate} />
        <span>〜</span>
        <DateInput type="date" defaultValue={endDate} />
      </DateRange>
      <ButtonGroup>
        <Button onClick={handleOk}>OK</Button>
        <Button onClick={handleCancel}>クリア</Button>
        <Button onClick={handleClose}>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// 使用例
const UsageSample = () => {
  return (
    <div>
      <h1>日付範囲選択の例</h1>
      <DateRangePicker
        startDate="2023-02-21"
        endDate="2023-03-31"
        onOk={() => alert('OKがクリックされました')}
        onCancel={() => alert('キャンセルがクリックされました')}
        onClose={() => alert('終了がクリックされました')}
      />
    </div>
  );
};

export default DateRangePicker;