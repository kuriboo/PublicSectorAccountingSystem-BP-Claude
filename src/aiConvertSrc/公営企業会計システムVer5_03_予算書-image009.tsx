// 予算仕訳リストコンポーネント
import React from 'react';
import styled from '@emotion/styled';

type BudgetAllocationFormProps = {
  fiscalYear?: string;
  allocationDivision?: string;
  allocation?: number;
  remarks?: string;
  budgetType?: string;
  workStartDate?: string;
  workEndDate?: string;
  onSubmit?: () => void;
  onCancel?: () => void;
  onEnd?: () => void;
};

const BudgetAllocationForm: React.FC<BudgetAllocationFormProps> = ({
  fiscalYear = '',
  allocationDivision = '',
  allocation = 1,
  remarks = '',
  budgetType = '',
  workStartDate = '',
  workEndDate = '',
  onSubmit,
  onCancel,
  onEnd,
}) => {
  return (
    <StyledForm>
      <Title>予算仕訳リスト / 仕訳科目別作成</Title>
      <FormGroup>
        <Label>自動仕訳情報</Label>
        <Field>
          <Label>年度</Label>
          <Input type="text" value={fiscalYear} readOnly />
        </Field>
        <Field>
          <Label>予算編成区分</Label>
          <Select value={allocationDivision} disabled>
            <option value="決算見込">決算見込</option>
          </Select>
        </Field>
        <Field>
          <Label>回数</Label>
          <Input type="number" value={allocation} min={1} readOnly />
          <Span>決算見込1回目</Span>
        </Field>
        <Field>
          <Label>金額種別</Label>
          <Input type="text" value={remarks} readOnly />
        </Field>
      </FormGroup>
      <FormGroup>
        <Label>集計対象</Label>
        <CheckboxGroup>
          <Label>
            <input type="checkbox" checked={budgetType === '全体'} disabled /> 全体
          </Label>
          <Label>
            <input type="checkbox" checked={budgetType === 'ブロック'} disabled /> ブロック
          </Label>
          <Label>
            <input type="checkbox" checked={budgetType === 'セグメント'} disabled /> セグメント
          </Label>
        </CheckboxGroup>
      </FormGroup>
      <FormGroup>
        <Label>範囲指定</Label>
        <Field>
          <Label>仕訳科目</Label>
          <Input type="text" value={workStartDate} readOnly />
          <Span>～</Span>
          <Input type="text" value={workEndDate} readOnly />
        </Field>
      </FormGroup>
      <FormGroup>
        <Label>「調整入力分のみ出力」</Label>
      </FormGroup>
      <ButtonGroup>
        <Button onClick={onSubmit}>OK</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onEnd}>終了</Button>
      </ButtonGroup>
    </StyledForm>
  );
};

// スタイリング
const StyledForm = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  width: 600px;
`;

const Title = styled.h2`
  font-size: 18px;
  color: #333;
  margin-bottom: 24px;
`;

const FormGroup = styled.div`
  margin-bottom: 24px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Field = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 8px;
  flex: 1;
`;

const Select = styled.select`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 1;
`;

const Span = styled.span`
  margin: 0 8px;
`;

const CheckboxGroup = styled.div`
  display: flex;
`;

const ButtonGroup = styled.div`
  text-align: center;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  margin: 0 8px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  const handleSubmit = () => {
    console.log('Form submitted');
  };

  const handleCancel = () => {
    console.log('Form cleared');
  };

  const handleEnd = () => {
    console.log('Form ended');
  };

  return (
    <BudgetAllocationForm
      fiscalYear="令和02"
      allocationDivision="決算見込"
      allocation={1}
      remarks="見積要求"
      budgetType="ブロック"
      workStartDate="00000000"
      workEndDate="99999999"
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      onEnd={handleEnd}
    />
  );
};

export default SampleUsage;