import React from 'react';
import styled from '@emotion/styled';

interface MasterListFormProps {
  mode: 'single' | 'range';
  onModeChange: (mode: 'single' | 'range') => void;
  fromCode?: string;
  toCode?: string;
  fromValue?: string;
  toValue?: string;
  onFromCodeChange: (code: string) => void;
  onToCodeChange: (code: string) => void;
  onFromValueChange: (value: string) => void;
  onToValueChange: (value: string) => void;
  onOkClick: () => void;
  onCancelClick: () => void;
  onClearClick: () => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ModeSelector = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const ModeButton = styled.button<{ active: boolean }>`
  padding: 5px 10px;
  background-color: ${({ active }) => (active ? '#ccc' : '#fff')};
  border: 1px solid #ccc;
  cursor: pointer;
`;

const RangeInputs = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr 100px 1fr;
  gap: 10px;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: #eee;
  border: 1px solid #ccc;
  cursor: pointer;
`;

const MasterListForm: React.FC<MasterListFormProps> = ({
  mode,
  onModeChange,
  fromCode,
  toCode,
  fromValue,
  toValue,
  onFromCodeChange,
  onToCodeChange,
  onFromValueChange,
  onToValueChange,
  onOkClick,
  onCancelClick,
  onClearClick,
}) => {
  return (
    <Container>
      <ModeSelector>
        <ModeButton active={mode === 'single'} onClick={() => onModeChange('single')}>
          所属別
        </ModeButton>
        <ModeButton active={mode === 'range'} onClick={() => onModeChange('range')}>
          範囲コード
        </ModeButton>
      </ModeSelector>
      {mode === 'range' && (
        <RangeInputs>
          <Label>所属</Label>
          <Input
            type="text"
            value={fromCode ?? ''}
            onChange={(e) => onFromCodeChange(e.target.value)}
          />
          <Label>〜</Label>
          <Input type="text" value={toCode ?? ''} onChange={(e) => onToCodeChange(e.target.value)} />
          <Label>単価</Label>
          <Input
            type="text"
            value={fromValue ?? ''}
            onChange={(e) => onFromValueChange(e.target.value)}
          />
          <Label>〜</Label>
          <Input
            type="text"
            value={toValue ?? ''}
            onChange={(e) => onToValueChange(e.target.value)}
          />
        </RangeInputs>
      )}
      <ButtonGroup>
        <Button onClick={onOkClick}>OK</Button>
        <Button onClick={onCancelClick}>クリア</Button>
        <Button onClick={onClearClick}>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const [mode, setMode] = React.useState<'single' | 'range'>('single');
  const [fromCode, setFromCode] = React.useState('');
  const [toCode, setToCode] = React.useState('');
  const [fromValue, setFromValue] = React.useState('');
  const [toValue, setToValue] = React.useState('');

  const handleOkClick = () => {
    // Handle OK button click
  };

  const handleCancelClick = () => {
    // Handle Cancel button click
    setFromCode('');
    setToCode('');
    setFromValue('');
    setToValue('');
  };

  const handleClearClick = () => {
    // Handle Clear button click
  };

  return (
    <MasterListForm
      mode={mode}
      onModeChange={setMode}
      fromCode={fromCode}
      toCode={toCode}
      fromValue={fromValue}
      toValue={toValue}
      onFromCodeChange={setFromCode}
      onToCodeChange={setToCode}
      onFromValueChange={setFromValue}
      onToValueChange={setToValue}
      onOkClick={handleOkClick}
      onCancelClick={handleCancelClick}
      onClearClick={handleClearClick}
    />
  );
};

export default App;