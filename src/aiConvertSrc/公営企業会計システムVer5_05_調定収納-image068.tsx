import React from 'react';
import styled from 'styled-components';

// 振替入力フォームのプロパティ型定義
interface TransferInputFormProps {
  onSubmit: (data: TransferData) => void;
}

// 振替データの型定義
interface TransferData {
  accountNumber: string;
  bankCode: string;
  branchCode: string;
  transferAmount: string;
}

// 振替入力フォームコンポーネント
const TransferInputForm: React.FC<TransferInputFormProps> = ({ onSubmit }) => {
  const [transferData, setTransferData] = React.useState<TransferData>({
    accountNumber: '',
    bankCode: '',
    branchCode: '',
    transferAmount: '',
  });

  // フォーム入力値の変更ハンドラ
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTransferData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // フォーム送信ハンドラ
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(transferData);
  };

  return (
    <TransferForm onSubmit={handleSubmit}>
      <TransferItem>
        <label>節</label>
        <input
          type="text"
          name="accountNumber"
          value={transferData.accountNumber}
          onChange={handleChange}
          placeholder="00260:000"
        />
        <button type="button">行確定</button>
      </TransferItem>
      <TransferItem>
        <label>細節</label>
        <input
          type="text"
          name="bankCode"
          value={transferData.bankCode}
          onChange={handleChange}
          placeholder="0001"
        />
        <label>営業店</label>
      </TransferItem>
      <TransferItem>
        <label>明細</label>
        <input
          type="text"
          name="branchCode"
          value={transferData.branchCode}
          onChange={handleChange}
          placeholder="0001"
        />
        <label>営業店リ金</label>
      </TransferItem>
      <TransferItem>
        <label>摘要</label>
        <input
          type="text"
          name="transferAmount"
          value={transferData.transferAmount}
          onChange={handleChange}
        />
      </TransferItem>
      <SubmitButton type="submit">振替</SubmitButton>
    </TransferForm>
  );
};

// サンプルデータ
const sampleTransferData: TransferData = {
  accountNumber: '00260:000',
  bankCode: '0001',
  branchCode: '0001',
  transferAmount: '100,000',
};

// 使用例
const TransferInputFormExample: React.FC = () => {
  const handleSubmit = (data: TransferData) => {
    console.log('Submitted data:', data);
  };

  return (
    <div>
      <h2>振替入力フォーム</h2>
      <TransferInputForm onSubmit={handleSubmit} />
      <h3>サンプルデータ:</h3>
      <pre>{JSON.stringify(sampleTransferData, null, 2)}</pre>
    </div>
  );
};

// スタイリング
const TransferForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const TransferItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  label {
    margin-right: 10px;
  }

  input {
    flex: 1;
    padding: 5px;
  }

  button {
    margin-left: 10px;
  }
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default TransferInputFormExample;