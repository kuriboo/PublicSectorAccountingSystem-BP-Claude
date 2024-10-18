import React from 'react';
import styled from '@emotion/styled';

// 入力フォームのプロパティの型定義
type InputFormProps = {
  accountTitle1?: string;
  accountTitle2?: string;
  accountNumber1?: string;
  transferLimit?: string;
  accountNumber2?: string;
  companyName?: string;
  companyAddress?: string;
  transferRequestNumber?: string;
  accountClassification?: string;
  transferDate?: string;
  requestedBy?: string;
  approvedBy?: string;
  paymentMethod?: 'cash' | 'check' | 'spaceMoney' | 'other' | 'bankTransfer';
  onSubmit: () => void;
};

// エラーメッセージを表示するコンポーネント
const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

// フォーム全体のスタイリング
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  max-width: 600px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

// 入力フィールドのスタイリング
const InputField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: 100%;

  label {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input, select {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    width: 100%;
    box-sizing: border-box;
  }
`;

// 送信ボタンのスタイリング 
const SubmitButton = styled.button`
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const InputForm: React.FC<InputFormProps> = ({
  accountTitle1 = '',
  accountTitle2 = '',
  accountNumber1 = '',
  transferLimit = '',
  accountNumber2 = '',
  companyName = '',
  companyAddress = '', 
  transferRequestNumber = '',
  accountClassification = '',
  transferDate = '',
  requestedBy = '',
  approvedBy = '',
  paymentMethod = 'cash',
  onSubmit,
}) => {
  // フォームの送信処理
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <InputField>
          <label>帳票タイトル</label>
          <input type="text" defaultValue={accountTitle1} required />
        </InputField>
        <InputField>
          <label>管理者番号</label>
          <input type="text" defaultValue={accountNumber1} required />
        </InputField>
        <InputField>
          <label>管理タイトル予備1</label>
          <input type="text" defaultValue={accountTitle2} />
        </InputField>
        <InputField>
          <label>管長期限</label>
          <input type="text" defaultValue={transferLimit} />
          {!transferLimit && <ErrorMessage>管長期限を入力してください</ErrorMessage>}
        </InputField>
        <InputField>
          <label>管理タイトル予備2</label>
          <input type="text" defaultValue={accountNumber2} />
        </InputField>
        <InputField>
          <label>会社名</label>
          <input type="text" defaultValue={companyName} />
        </InputField>
        <InputField>
          <label>住所</label>
          <input type="text" defaultValue={companyAddress} />
        </InputField>
        <InputField>
          <label>通帳請求書登録番号</label>
          <input type="text" defaultValue={transferRequestNumber} />
        </InputField>
        <InputField>
          <label>起案所属項目名</label>
          <input type="text" defaultValue={accountClassification} />
        </InputField>
        <InputField>
          <label>起案日項目名</label>
          <input type="text" defaultValue={transferDate} />
        </InputField>
        <InputField>
          <label>起案者</label>
          <input type="text" defaultValue={requestedBy} />
        </InputField>
        <InputField>
          <label>承認者</label>
          <input type="text" defaultValue={approvedBy} />
        </InputField>
        <InputField>
          <label>送金設定</label>
          <select defaultValue={paymentMethod}>
            <option value="cash">現金</option>
            <option value="check">小切手</option>
            <option value="spaceMoney">スペース金払</option>
            <option value="other">その他</option>
            <option value="bankTransfer">振込</option>
          </select>
        </InputField>
        <SubmitButton type="submit">登録</SubmitButton>
      </form>
    </FormWrapper>
  );
};

// サンプルデータを用いて入力フォームを表示するコンポーネント
const SampleInputForm = () => {
  const sampleData = {
    accountTitle1: '納入通知書マスタ',
    accountNumber1: 'SHI(A)タイプA',
    transferLimit: '0',
    companyName: 'きょうせい市長',
    requestedBy: '出納員',
    approvedBy: '公',
    paymentMethod: 'bankTransfer',
  };

  const handleSubmit = () => {
    // フォームの送信処理（ここでは単に送信されたことをコンソールに出力）
    console.log('Form submitted');
  };

  return <InputForm {...sampleData} onSubmit={handleSubmit} />;
};

export default SampleInputForm;