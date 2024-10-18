import React from 'react';
import styled from '@emotion/styled';

// 入力フィールドのPropsの型定義
interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  regex?: RegExp;
}

// 入力フィールドコンポーネント
const InputField: React.FC<InputFieldProps> = ({ label, value, onChange, regex }) => {
  // 入力値のバリデーションチェック
  const validateInput = (inputValue: string) => {
    if (regex && !regex.test(inputValue)) {
      alert('入力形式が正しくありません');
      return;
    }
    onChange(inputValue);
  };

  return (
    <InputFieldWrapper>
      <Label>{label}</Label>
      <Input
        type="text"
        value={value}
        onChange={(e) => validateInput(e.target.value)}
      />
    </InputFieldWrapper>
  );
};

// スタイリング
const InputFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

// 収益費用明細備考内容マスタリスト作成コンポーネント
const MasterListCreation: React.FC = () => {
  // サンプルデータ
  const startDateSample = '00000000';
  const endDateSample = '99999999';
  const valueSample = '0';

  return (
    <div>
      <h2>収益費用明細備考内容マスタリスト作成</h2>
      <div>
        <InputField
          label="仕訳科目"
          value={valueSample}
          onChange={(value) => console.log(`仕訳科目: ${value}`)}
          regex={/^\d+$/}
        />
        <div>
          <InputField
            label="仕訳科目"
            value={startDateSample}
            onChange={(value) => console.log(`仕訳科目開始: ${value}`)}
            regex={/^\d{8}$/}
          />
          <span> 〜 </span>
          <InputField
            label="仕訳科目"  
            value={endDateSample}
            onChange={(value) => console.log(`仕訳科目終了: ${value}`)}
            regex={/^\d{8}$/}
          />
        </div>
        <InputField
          label="備考明細番号"
          value={valueSample}
          onChange={(value) => console.log(`備考明細番号: ${value}`)}
          regex={/^\d+$/}
        />
      </div>
    </div>
  );
};

export default MasterListCreation;