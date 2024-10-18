import React from 'react';
import styled from '@emotion/styled';

type Props = {
  title: string;
  term: {
    startDate: string;
    endDate: string;
  };
  onClickOk: () => void;
  onClickCancel: () => void;
  onClickClear: () => void;
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 4px;
  width: 300px;
`;

const Title = styled.h2`
  margin: 0 0 10px;
`;

const DateRange = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const DateSelect = styled.select`
  padding: 4px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  margin-left: 10px;
  padding: 6px 12px;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const DateRangePicker: React.FC<Props> = ({
  title,
  term,
  onClickOk,
  onClickCancel,
  onClickClear,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <DateRange>
        <DateSelect>
          <option>{term.startDate || '開始日選択'}</option>
        </DateSelect>
        〜
        <DateSelect>
          <option>{term.endDate || '終了日選択'}</option>
        </DateSelect>
      </DateRange>
      <ButtonGroup>
        <Button onClick={onClickOk}>OK</Button>
        <Button onClick={onClickCancel}>クリア</Button>
        <Button onClick={onClickClear}>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const handleOk = () => {
    console.log('OK clicked');
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
  };

  const handleClear = () => {
    console.log('Clear clicked');
  };

  return (
    <DateRangePicker
      title="掲載計算書貸借対照表マスタリスト作成"
      term={{
        startDate: '01',
        endDate: '06',
      }}
      onClickOk={handleOk}
      onClickCancel={handleCancel}
      onClickClear={handleClear}
    />
  );
};

export default App;