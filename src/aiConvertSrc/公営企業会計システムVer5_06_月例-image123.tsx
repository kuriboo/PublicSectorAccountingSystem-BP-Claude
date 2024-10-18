import React from 'react';
import styled from 'styled-components';

// 日付入力フィールドのプロパティ型定義
type DateFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

// 日付入力フィールドコンポーネント
const DateField: React.FC<DateFieldProps> = ({ label, value, onChange }) => {
  return (
    <FieldWrapper>
      <FieldLabel>{label}</FieldLabel>
      <DateInput
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="0000000000000000"
      />
    </FieldWrapper>
  );
};

// ラジオボタングループのプロパティ型定義
type RadioGroupProps = {
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

// ラジオボタングループコンポーネント 
const RadioGroup: React.FC<RadioGroupProps> = ({ options, value, onChange }) => {
  return (
    <RadioGroupWrapper>
      {options.map((option) => (
        <RadioLabel key={option}>
          <RadioInput
            type="radio"
            value={option}
            checked={value === option}
            onChange={() => onChange(option)}
          />
          {option}
        </RadioLabel>
      ))}
    </RadioGroupWrapper>
  );
};

// チェックボックスのプロパティ型定義
type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

// チェックボックスコンポーネント
const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <CheckboxWrapper>
      <CheckboxInput type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <CheckboxLabel>{label}</CheckboxLabel>
    </CheckboxWrapper>
  );
};

// 総合定義設定EUCコンポーネント
const SettingsEUC: React.FC = () => {
  // 状態管理するフィールドの初期値
  const [fromDate, setFromDate] = React.useState('');
  const [toDate, setToDate] = React.useState('');
  const [collectionType, setCollectionType] = React.useState('全体');
  const [flagPowerCollect, setFlagPowerCollect] = React.useState(false);
  const [flagSearchDetail, setFlagSearchDetail] = React.useState(false);

  return (
    <Wrapper>
      <Title>総合定内訳簿EUC</Title>
      <FieldsWrapper>
        <DateField label="作表日" value={fromDate} onChange={setFromDate} />
        <DateField label="仕訳科目" value={toDate} onChange={setToDate} />
        <RadioGroup
          options={['全体', 'ブロック', 'セグメント']}
          value={collectionType}
          onChange={setCollectionType}
        />
        <Checkbox
          label="㈱東の分保存）のみの伝票を出力する"
          checked={flagPowerCollect}
          onChange={setFlagPowerCollect}
        />
        <Checkbox
          label="遺格請求書発行事業者以外ｌのみの伝票を出力する"
          checked={flagSearchDetail}
          onChange={setFlagSearchDetail}
        />
      </FieldsWrapper>
      <ButtonsWrapper>
        <Button>ＣＳＶ出力</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonsWrapper>
    </Wrapper>
  );
};

// スタイリング用のコンポーネント
const Wrapper = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const FieldsWrapper = styled.div`
  margin-bottom: 16px;
`;

const FieldWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const FieldLabel = styled.label`
  width: 120px;
`;

const DateInput = styled.input`
  padding: 4px;
  width: 150px;
`;

const RadioGroupWrapper = styled.div`
  margin-bottom: 8px;
`;

const RadioLabel = styled.label`
  margin-right: 16px;
`;

const RadioInput = styled.input`
  margin-right: 4px;
`;

const CheckboxWrapper = styled.div`
  margin-bottom: 8px;
`;

const CheckboxInput = styled.input`
  margin-right: 4px;
`;

const CheckboxLabel = styled.label``;

const ButtonsWrapper = styled.div`
  text-align: center;
`;

const Button = styled.button`
  margin: 0 8px;
  padding: 8px 16px;
  font-size: 16px;
`;

export default SettingsEUC;

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>総合定内訳簿EUC設定画面</h1>
      <SettingsEUC />
    </div>
  );
};