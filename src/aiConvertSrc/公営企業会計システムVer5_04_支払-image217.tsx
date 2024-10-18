import React from 'react';
import styled from 'styled-components';

// 伝票番号の型定義
type VoucherNumber = {
  year: string;
  number: number;
};

// 仕訳データの型定義
type JournalEntry = {
  date: string;
  debitAccount: string;
  creditAccount: string;
  amount: number;
  remarks: string;
};

// コンポーネントのプロパティの型定義
type JournalEntryFormProps = {
  voucherNumber: VoucherNumber;
  onSubmit: (data: JournalEntry) => void;
  onCancel: () => void;
};

// スタイルコンポーネント
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const FormTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const FormTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th,
  td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ccc;
  }

  th {
    font-weight: bold;
    background-color: #f5f5f5;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;

  button {
    margin-left: 10px;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }

  @media (max-width: 600px) {
    button {
      font-size: 14px;
      padding: 8px 16px;
    }
  }
`;

// 仕訳入力フォームコンポーネント
const JournalEntryForm: React.FC<JournalEntryFormProps> = ({
  voucherNumber,
  onSubmit,
  onCancel,
}) => {
  // フォームの状態管理
  const [formData, setFormData] = React.useState<JournalEntry>({
    date: '',
    debitAccount: '',
    creditAccount: '',
    amount: 0,
    remarks: '',
  });

  // フォームの入力変更ハンドラ
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // フォーム送信ハンドラ
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <FormContainer>
      <FormTitle>仕訳入力</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormTable>
          <tbody>
            <tr>
              <th>伝票日</th>
              <td>{voucherNumber.year}</td>
            </tr>
            <tr>
              <th>伝票番号</th>
              <td>{voucherNumber.number}</td>
            </tr>
            <tr>
              <th>起票日</th>
              <td>
                <input
                  type="text"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <th>借方科目</th>
              <td>
                <input
                  type="text"
                  name="debitAccount"
                  value={formData.debitAccount}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <th>貸方科目</th>
              <td>
                <input
                  type="text"
                  name="creditAccount"
                  value={formData.creditAccount}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <th>金額</th>
              <td>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  min={0}
                  step={0.01}
                  required
                />
              </td>
            </tr>
            <tr>
              <th>摘要</th>
              <td>
                <textarea
                  name="remarks"
                  value={formData.remarks}
                  onChange={handleChange}
                ></textarea>
              </td>
            </tr>
          </tbody>
        </FormTable>
        <ButtonContainer>
          <button type="submit">登録</button>
          <button type="button" onClick={onCancel}>
            キャンセル
          </button>
        </ButtonContainer>
      </form>
    </FormContainer>
  );
};

// サンプルデータ
const sampleVoucherNumber: VoucherNumber = {
  year: '2021/11/25',
  number: 1,
};

const sampleOnSubmit = (data: JournalEntry) => {
  console.log('Submitted data:', data);
};

// 使用例
const App: React.FC = () => {
  return (
    <JournalEntryForm
      voucherNumber={sampleVoucherNumber}
      onSubmit={sampleOnSubmit}
      onCancel={() => console.log('Cancelled')}
    />
  );
};

export default App;