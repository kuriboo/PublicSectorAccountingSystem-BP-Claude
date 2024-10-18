import React from 'react';
import styled from '@emotion/styled';

type BarCodeInputProps = {
  className?: string;
  title: string;
  startDate: string;
  endDate: string;
  code1Placeholder: string;
  code2Placeholder: string;
  code1Label: string;
  code2Label: string;
  onCode1Change: (value: string) => void;
  onCode2Change: (value: string) => void;
  optionValues: string[];
  onOptionChange: (value: string) => void;
  onSubmit: () => void;
};

const Container = styled.div`
  font-family: sans-serif;
  padding: 16px;
  background: #f0f0f0;
  width: 100%;
  box-sizing: border-box;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const DateRange = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
`;

const InputRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const InputLabel = styled.label`
  margin-right: 8px;
  min-width: 100px;
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-width: 120px;
`;

const Select = styled.select`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-width: 120px;
  margin-right: 4px;
`;

const SubmitButton = styled.button`
  padding: 6px 16px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #0056b3;
  }
`;

const BarCodeInput: React.FC<BarCodeInputProps> = ({
  className,
  title,
  startDate,
  endDate,
  code1Placeholder,
  code2Placeholder,  
  code1Label,
  code2Label,
  onCode1Change,
  onCode2Change,
  optionValues,
  onOptionChange,
  onSubmit,
}) => {
  return (
    <Container className={className}>
      <Title>{title}</Title>
      <DateRange>
        {startDate} 〜 {endDate} まで
      </DateRange>
      <InputRow>
        <InputLabel>{code1Label}</InputLabel>
        <Input
          type="text"
          placeholder={code1Placeholder}
          onChange={(e) => onCode1Change(e.target.value)}
        />
        <span>〜</span>
        <Input
          type="text"
          placeholder={code2Placeholder}
          onChange={(e) => onCode2Change(e.target.value)}
        />
        <span>まで</span>
      </InputRow>
      <InputRow>
        <InputLabel>区分</InputLabel>
        <Select onChange={(e) => onOptionChange(e.target.value)}>
          {optionValues.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </Select>
      </InputRow>
      <SubmitButton onClick={onSubmit}>表示</SubmitButton>
    </Container>
  );
};

// Usage example
const UsageExample: React.FC = () => {
  return (
    <BarCodeInput
      title="出納受渡入力(バーコード)"
      startDate="令和03年12月22日"
      endDate="令和04年12月22日"
      code1Placeholder="令和03年12月22日"
      code2Placeholder="9999999"
      code1Label="支払予定日"
      code2Label="支払方法"
      onCode1Change={(value) => console.log(value)}
      onCode2Change={(value) => console.log(value)}
      optionValues={['オール', '座振', 'その他']}
      onOptionChange={(value) => console.log(value)}
      onSubmit={() => console.log('Submitted')}
    />
  );
};

export default UsageExample;