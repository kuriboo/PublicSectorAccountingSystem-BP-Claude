import React from 'react';
import styled from 'styled-components';

// 型定義
interface GeneralSettingFormProps {
  fromDate: string;
  toDate: string;
  workCode: string;
  preserveBreakTime: boolean;
  preserveOvertimeReason: boolean;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

// スタイル定義
const FormWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const FormTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// コンポーネント定義
const GeneralSettingForm: React.FC<GeneralSettingFormProps> = ({
  fromDate,
  toDate,
  workCode,
  preserveBreakTime,
  preserveOvertimeReason,
  onInputChange,
  onCheckboxChange,
  onSubmit,
}) => {
  return (
    <FormWrapper>
      <FormTitle>総勤定内訳簿作成</FormTitle>
      <form onSubmit={onSubmit}>
        <FormGroup>
          <Label>作業日</Label>
          <div>
            <Input
              type="text"
              name="fromDate"
              value={fromDate}
              onChange={onInputChange}
              placeholder="0000/00/00"
            />
            {' 〜 '}
            <Input
              type="text"
              name="toDate"
              value={toDate}
              onChange={onInputChange}
              placeholder="0000/00/00"
            />
          </div>
        </FormGroup>
        <FormGroup>
          <Label>集計対象</Label>
          <div>
            <label>
              <input
                type="radio"
                name="workCode"
                value="all"
                checked={workCode === 'all'}
                onChange={onInputChange}
              />{' '}
              全体
            </label>
            <label>
              <input
                type="radio"
                name="workCode"
                value="block"
                checked={workCode === 'block'}
                onChange={onInputChange}
              />{' '}
              ブロック
            </label>
            <label>
              <input
                type="radio"
                name="workCode"
                value="segment"
                checked={workCode === 'segment'}
                onChange={onInputChange}
              />{' '}
              セグメント
            </label>
          </div>
        </FormGroup>
        <FormGroup>
          <label>
            <Input
              type="checkbox"
              name="preserveBreakTime"
              checked={preserveBreakTime}
              onChange={onCheckboxChange}
            />
            {' '}
            「帳簿のみ保存」のみの伝票を出力する
          </label>
        </FormGroup>
        <FormGroup>
          <label>
            <Input
              type="checkbox"
              name="preserveOvertimeReason"
              checked={preserveOvertimeReason}
              onChange={onCheckboxChange}
            />
            {' '}
            「遅税請求書発行事業者以外」のみの伝票を出力する
          </label>
        </FormGroup>
        <SubmitButton type="submit">終了</SubmitButton>
      </form>
    </FormWrapper>
  );
};

export default GeneralSettingForm;

// 使用例
const ExampleUsage: React.FC = () => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // 入力変更の処理
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // チェックボックス変更の処理  
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // フォーム送信の処理
  };

  return (
    <GeneralSettingForm
      fromDate="2022/04/01"
      toDate="2023/03/31"
      workCode="all"
      preserveBreakTime={false}
      preserveOvertimeReason={false}
      onInputChange={handleInputChange}
      onCheckboxChange={handleCheckboxChange}
      onSubmit={handleSubmit}
    />
  );
};