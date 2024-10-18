import React from 'react';
import styled from 'styled-components';

interface DateRangePickerProps {
  mode?: 'day' | 'week' | 'month' | 'quarter' | 'half' | 'year';
  startDate: string;
  endDate: string;
  closed?: boolean;
  segment?: 'all' | 'block' | 'segment';
  segmentOption?: string;
  onSubmit?: () => void;
  onCancel?: () => void;
  onExecute?: () => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  mode = 'day',
  startDate,
  endDate,
  closed = false,
  segment = 'all',
  segmentOption = '20',
  onSubmit,
  onCancel,
  onExecute,
}) => {
  // 例外処理: 開始日・終了日が入力されていない場合はエラーメッセージを表示
  if (!startDate || !endDate) {
    return <ErrorMessage>開始日と終了日を入力してください</ErrorMessage>;
  }

  return (
    <Container>
      <Title>収入予算差引簿作成</Title>
      <ModeSelection>
        <ModeButton selected={mode === 'day'}>日</ModeButton>
        <ModeButton selected={mode === 'week'}>週間</ModeButton>
        <ModeButton selected={mode === 'month'}>月間</ModeButton>
        <ModeButton selected={mode === 'quarter'}>所属部門</ModeButton>
        <ModeButton selected={mode === 'half'}>所属課間</ModeButton>
        <ModeButton selected={mode === 'year'}>所属係間</ModeButton>
      </ModeSelection>
      <DateInputs>
        <DateLabel>範囲指定</DateLabel>
        <DateInput value={startDate} readOnly />
        <Spacer>〜</Spacer>
        <DateInput value={endDate} readOnly />
        <DateNote>所属</DateNote>
        <DateNote>所属</DateNote>
      </DateInputs>
      <SegmentSelection>
        <SegmentButton selected={segment === 'all'}>全体</SegmentButton>
        <SegmentButton selected={segment === 'block'}>ブロック</SegmentButton>
        <SegmentButton selected={segment === 'segment'}>セグメント</SegmentButton>
        {segment === 'segment' && (
          <SegmentOptionSelect value={segmentOption}>
            <option value="20">20</option>
            <option value="30">30</option>
          </SegmentOptionSelect>
        )}
      </SegmentSelection>
      <ButtonGroup>
        <ExecuteButton onClick={onExecute}>前月繰越行のみで行う</ExecuteButton>
      </ButtonGroup>
      <ButtonGroup>
        <SubmitButton onClick={onSubmit}>OK</SubmitButton>
        <CancelButton onClick={onCancel}>クリア</CancelButton>
        <CloseButton disabled={closed}>終了</CloseButton>
      </ButtonGroup>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  margin: 0 0 16px;
`;

const ModeSelection = styled.div`
  margin-bottom: 16px;
`;

const ModeButton = styled.button<{ selected?: boolean }>`
  padding: 4px 8px;
  margin-right: 8px;
  border: none;
  background-color: ${({ selected }) => (selected ? '#007bff' : '#f0f0f0')};
  color: ${({ selected }) => (selected ? '#fff' : '#333')};
  cursor: pointer;
`;

const DateInputs = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const DateLabel = styled.span`
  margin-right: 8px;
`;

const DateInput = styled.input`
  padding: 4px;
  margin-right: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Spacer = styled.span`
  margin: 0 8px;
`;

const DateNote = styled.span`
  margin-left: 8px;
  color: #888;
`;

const SegmentSelection = styled.div`
  margin-bottom: 16px;
`;

const SegmentButton = styled.button<{ selected?: boolean }>`
  padding: 4px 8px;
  margin-right: 8px;
  border: none;
  background-color: ${({ selected }) => (selected ? '#007bff' : '#f0f0f0')};
  color: ${({ selected }) => (selected ? '#fff' : '#333')};
  cursor: pointer;
`;

const SegmentOptionSelect = styled.select`
  padding: 4px;
  margin-left: 8px;
`;

const ButtonGroup = styled.div`
  margin-bottom: 16px;
`;

const ExecuteButton = styled.button`
  padding: 8px 16px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  padding: 8px 16px;
  margin-right: 8px;
  border: none;
  background-color: #28a745;
  color: #fff;
  cursor: pointer;
`;

const CancelButton = styled.button`
  padding: 8px 16px;
  margin-right: 8px;
  border: none;
  background-color: #dc3545;
  color: #fff;
  cursor: pointer;
`;

const CloseButton = styled.button`
  padding: 8px 16px;
  border: none;
  background-color: #6c757d;
  color: #fff;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 16px;
`;

// 使用例
const App: React.FC = () => {
  const handleSubmit = () => {
    console.log('Form submitted');
  };

  const handleCancel = () => {
    console.log('Form cancelled');
  };

  const handleExecute = () => {
    console.log('Execute button clicked');
  };

  return (
    <DateRangePicker
      startDate="2022-01-01"
      endDate="2022-12-31"
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      onExecute={handleExecute}
    />
  );
};

export default App;