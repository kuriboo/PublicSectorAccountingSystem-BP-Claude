import React from 'react';
import styled from 'styled-components';

// 区分コンポーネントの型定義
type DivisionProps = {
  value: number;
  onChange: (value: number) => void;
};

// 区分コンポーネント
const Division: React.FC<DivisionProps> = ({ value, onChange }) => {
  return (
    <DivisionWrapper>
      <DivisionLabel>区分</DivisionLabel>
      <DivisionSelect value={value} onChange={e => onChange(Number(e.target.value))}>
        <option value={1}>1行改行</option>
        <option value={0}>改行なし</option>
      </DivisionSelect>
    </DivisionWrapper>
  );
};

// 区分コンポーネントのスタイル
const DivisionWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const DivisionLabel = styled.label`
  margin-right: 10px;
`;

const DivisionSelect = styled.select`
  padding: 5px;
`;

// 集計番号コンポーネントの型定義
type NumberProps = {
  value: number;
  onChange: (value: number) => void;
};

// 集計番号コンポーネント 
const Number: React.FC<NumberProps> = ({ value, onChange }) => {
  return (
    <NumberWrapper>
      <NumberLabel>集計番号</NumberLabel>
      <NumberInput
        type="number"
        value={value}
        onChange={e => onChange(Number(e.target.value))}
      />
    </NumberWrapper>
  );
};

// 集計番号コンポーネントのスタイル
const NumberWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const NumberLabel = styled.label`
  margin-right: 10px;
`;

const NumberInput = styled.input`
  padding: 5px;
`;

// 項目名称コンポーネントの型定義
type ItemNameProps = {
  value: string;
  onChange: (value: string) => void;
};

// 項目名称コンポーネント
const ItemName: React.FC<ItemNameProps> = ({ value, onChange }) => {
  return (
    <ItemNameWrapper>
      <ItemNameLabel>項目名称1</ItemNameLabel>
      <ItemNameInput
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </ItemNameWrapper>
  );
};

// 項目名称コンポーネントのスタイル
const ItemNameWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ItemNameLabel = styled.label`
  margin-right: 10px;
`;

const ItemNameInput = styled.input`
  padding: 5px;
`;

// CF区分コンポーネントの型定義
type CFDivisionProps = {
  value: string;
  onChange: (value: string) => void;
};

// CF区分コンポーネント
const CFDivision: React.FC<CFDivisionProps> = ({ value, onChange }) => {
  return (
    <CFDivisionWrapper>
      <CFDivisionLabel>CF区分</CFDivisionLabel>
      <CFDivisionSelect value={value} onChange={e => onChange(e.target.value)}>
        <option value="1">業務活動によるキャッシュフロー</option>
      </CFDivisionSelect>
    </CFDivisionWrapper>
  );
};

// CF区分コンポーネントのスタイル
const CFDivisionWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const CFDivisionLabel = styled.label`
  margin-right: 10px;
`;

const CFDivisionSelect = styled.select`
  padding: 5px;
`;

// 金額PF区分コンポーネントの型定義
type AmountPFDivisionProps = {
  value: string;
  onChange: (value: string) => void;
};

// 金額PF区分コンポーネント
const AmountPFDivision: React.FC<AmountPFDivisionProps> = ({ value, onChange }) => {
  return (
    <AmountPFDivisionWrapper>
      <AmountPFDivisionLabel>金額PF区分</AmountPFDivisionLabel>
      <AmountPFDivisionSelect value={value} onChange={e => onChange(e.target.value)}>
        <option value="1">名称CP</option>
      </AmountPFDivisionSelect>
    </AmountPFDivisionWrapper>
  );
};

// 金額PF区分コンポーネントのスタイル
const AmountPFDivisionWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const AmountPFDivisionLabel = styled.label`
  margin-right: 10px;
`;

const AmountPFDivisionSelect = styled.select`
  padding: 5px;
`;

// 改行挿入コンポーネントの型定義
type LineBreakProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

// 改行挿入コンポーネント
const LineBreak: React.FC<LineBreakProps> = ({ checked, onChange }) => {
  return (
    <LineBreakWrapper>
      <LineBreakCheckbox
        type="checkbox"
        checked={checked}
        onChange={e => onChange(e.target.checked)}
      />
      <LineBreakLabel>改行挿入</LineBreakLabel>
    </LineBreakWrapper>
  );
};

// 改行挿入コンポーネントのスタイル
const LineBreakWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const LineBreakCheckbox = styled.input`
  margin-right: 5px;
`;

const LineBreakLabel = styled.label``;

// インデントコンポーネントの型定義 
type IndentProps = {
  value: number;
  onChange: (value: number) => void;
};

// インデントコンポーネント
const Indent: React.FC<IndentProps> = ({ value, onChange }) => {
  return (
    <IndentWrapper>
      <IndentLabel>インデント</IndentLabel>
      <IndentInput
        type="number"
        value={value}
        onChange={e => onChange(Number(e.target.value))}
      />
    </IndentWrapper>
  );
};

// インデントコンポーネントのスタイル
const IndentWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const IndentLabel = styled.label`
  margin-right: 10px;
`;

const IndentInput = styled.input`
  padding: 5px;
`;

// フォームコンポーネントの型定義
type FormProps = {
  number: number;
  onNumberChange: (value: number) => void;
  itemName: string;
  onItemNameChange: (value: string) => void;
  cfDivision: string;
  onCFDivisionChange: (value: string) => void;
  amountPFDivision: string;
  onAmountPFDivisionChange: (value: string) => void;
  division: number; 
  onDivisionChange: (value: number) => void;
  indent: number;
  onIndentChange: (value: number) => void;
  lineBreak: boolean;
  onLineBreakChange: (checked: boolean) => void;
};

// フォームコンポーネント
const Form: React.FC<FormProps> = ({
  number,
  onNumberChange,
  itemName,
  onItemNameChange,
  cfDivision,
  onCFDivisionChange,
  amountPFDivision,
  onAmountPFDivisionChange,
  division,
  onDivisionChange,
  indent,
  onIndentChange,
  lineBreak,
  onLineBreakChange,
}) => {
  return (
    <FormWrapper>
      <Number value={number} onChange={onNumberChange} />
      <ItemName value={itemName} onChange={onItemNameChange} />
      <CFDivision value={cfDivision} onChange={onCFDivisionChange} />
      <AmountPFDivision value={amountPFDivision} onChange={onAmountPFDivisionChange} />
      <Division value={division} onChange={onDivisionChange} />
      <Indent value={indent} onChange={onIndentChange} />
      <LineBreak checked={lineBreak} onChange={onLineBreakChange} />
      <ButtonWrapper>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonWrapper>
    </FormWrapper>
  );
};

// フォームコンポーネントのスタイル
const FormWrapper = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// サンプルデータ
const sampleData = {
  number: 910,
  itemName: 'その他',
  cfDivision: '1',
  amountPFDivision: '1',
  division: 1,
  indent: 0,
  lineBreak: false,
};

// 使用例コンポーネント
const Example: React.FC = () => {
  const [formData, setFormData] = React.useState(sampleData);

  const handleChange = (field: keyof typeof sampleData, value: typeof sampleData[typeof field]) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <Form
      number={formData.number}
      onNumberChange={value => handleChange('number', value)}
      itemName={formData.itemName}
      onItemNameChange={value => handleChange('itemName', value)}
      cfDivision={formData.cfDivision}
      onCFDivisionChange={value => handleChange('cfDivision', value)}
      amountPFDivision={formData.amountPFDivision}
      onAmountPFDivisionChange={value => handleChange('amountPFDivision', value)}
      division={formData.division}
      onDivisionChange={value => handleChange('division', value)}
      indent={formData.indent}
      onIndentChange={value => handleChange('indent', value)}
      lineBreak={formData.lineBreak}
      onLineBreakChange={value => handleChange('lineBreak', value)}
    />
  );
};

export default Example;