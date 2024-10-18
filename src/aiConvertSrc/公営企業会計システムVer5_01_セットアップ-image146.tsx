import React from 'react';
import styled from '@emotion/styled';

type Range = '000' | '999';

interface MasterListFormProps {
  range: Range;
  onRangeChange: (range: Range) => void;
  onSubmit: () => void;
  onCancel: () => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin: 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 14px;
`;

const RadioButton = styled.input`
  margin-right: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const MasterListForm: React.FC<MasterListFormProps> = ({
  range,
  onRangeChange,
  onSubmit,
  onCancel,
}) => {
  return (
    <Container>
      <Title>決裁マスタリスト作成</Title>
      <InputContainer>
        <Label>範囲指定</Label>
        <div>
          <RadioButton
            type="radio"
            checked={range === '000'}
            onChange={() => onRangeChange('000')}
          />
          000 ～ 
          <RadioButton
            type="radio"
            checked={range === '999'}
            onChange={() => onRangeChange('999')}
          />
          999
        </div>
      </InputContainer>
      <ButtonContainer>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onSubmit}>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// Usage example
const MasterListFormExample: React.FC = () => {
  const [range, setRange] = React.useState<Range>('000');

  const handleSubmit = () => {
    console.log('Submitted with range:', range);
  };

  const handleCancel = () => {
    setRange('000');
  };

  return (
    <MasterListForm
      range={range}
      onRangeChange={setRange}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
    />
  );
};

export default MasterListForm;