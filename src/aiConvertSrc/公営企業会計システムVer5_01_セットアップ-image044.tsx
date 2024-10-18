import React from 'react';
import styled from '@emotion/styled';

// 管理区分チェックリストの型定義
type ManagementDivisionChecklistProps = {
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

// 範囲指定の型定義
type RangeSpecificationProps = {
  startDate: string;
  endDate: string;
  onStartDateChange: (value: string) => void;
  onEndDateChange: (value: string) => void;
};

// 管理区分チェックリストコンポーネント
const ManagementDivisionChecklist: React.FC<ManagementDivisionChecklistProps> = ({
  options,
  value,
  onChange,
}) => {
  return (
    <Container>
      <Title>出力帳票</Title>
      {options.map((option) => (
        <Label key={option}>
          <Input
            type="radio"
            value={option}
            checked={value === option}
            onChange={() => onChange(option)}
          />
          {option}
        </Label>
      ))}
    </Container>
  );
};

// 範囲指定コンポーネント 
const RangeSpecification: React.FC<RangeSpecificationProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => {
  return (
    <Container>
      <Title>範囲指定</Title>
      <Row>
        <Label>
          科目コード
          <Input
            type="text"
            value={startDate}
            onChange={(e) => onStartDateChange(e.target.value)}
          />
          ～
          <Input
            type="text"
            value={endDate}
            onChange={(e) => onEndDateChange(e.target.value)}
          />
        </Label>
      </Row>
      <Row>
        <Label>
          管理区分 or
          <Select>
            <option>セグメント</option>
          </Select>
        </Label>
      </Row>
      <Row>
        <Label>
          <Input type="radio" checked readOnly />
          全て
        </Label>
        <Label>
          <Input type="radio" readOnly />
          未設定のみ
        </Label>
        <Label>
          <Input type="radio" readOnly />
          未設定を含まない
        </Label>
      </Row>
    </Container>
  );
};

// サンプルデータ
const managementDivisionOptions = [
  '予算科目別管理チェックリスト',
  '仕訳科目別管理チェックリスト',
  '仕訳科目別管理チェックリスト',
  '管理名称マスタチェックリスト',
];

// 使用例コンポーネント
const UsageExample: React.FC = () => {
  const [selectedOption, setSelectedOption] = React.useState(managementDivisionOptions[0]);
  const [startDate, setStartDate] = React.useState('00000000');
  const [endDate, setEndDate] = React.useState('99999999');

  return (
    <div>
      <ManagementDivisionChecklist
        options={managementDivisionOptions}
        value={selectedOption}
        onChange={setSelectedOption}
      />
      <RangeSpecification
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
      />
    </div>
  );
};

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media (max-width: 600px) {
    padding: 8px;
  }
`;

const Title = styled.div`
  font-weight: bold;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Input = styled.input`
  padding: 4px;
`;

const Select = styled.select`
  padding: 4px;
`;

const Row = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export default UsageExample;