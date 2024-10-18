import React from 'react';
import styled from '@emotion/styled';

interface FinanceRegistrationFormProps {
  onSubmit: (data: FinanceRegistrationFormData) => void;
}

interface FinanceRegistrationFormData {
  bankCode: string;
  branch: string;
  accountType: string;
  accountNumber: string;
  accountHolderType: string;
  accountHolderName: string;
  isAutoSavings: boolean;
  isPrintPassbook: boolean;
  validDate: string;
  code: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
`;

const Label = styled.label`
  margin-right: 10px;
  min-width: 100px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 1;
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 1;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-end;
`;

const FinanceRegistrationForm: React.FC<FinanceRegistrationFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // フォームの値を取得し、onSubmitコールバックを呼び出す
    const data: FinanceRegistrationFormData = {
      bankCode: '0010',
      branch: '001',
      accountType: '普通',
      accountNumber: '123456',
      accountHolderType: '1',
      accountHolderName: 'ぎょうせい太郎',
      isAutoSavings: false,
      isPrintPassbook: true,
      validDate: '9999/12/31',
      code: '1',
    };
    onSubmit(data);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>銀行コード</Label>
          <Input type="text" defaultValue="0010" />
        </FormGroup>
        <FormGroup>
          <Label>支店</Label>
          <Input type="text" defaultValue="001" />
        </FormGroup>
        <FormGroup>
          <Label>預金種別コード</Label>
          <Select defaultValue="普通">
            <option value="普通">普通</option>
            {/* 他の選択肢 */}
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>口座番号</Label>
          <Input type="text" defaultValue="123456" />
        </FormGroup>
        <FormGroup>
          <Label>振込依頼人コード</Label>
          <Select defaultValue="1">
            <option value="1">顧問先</option>
            {/* 他の選択肢 */}
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>振込依頼顧客口座名義</Label>
          <Input type="text" defaultValue="ぎょうせい太郎" />
        </FormGroup>
        {/* 他の入力項目 */}
        <Button type="submit">登録</Button>
      </form>
    </Container>
  );
};

// サンプル使用例
const SampleUsage: React.FC = () => {
  const handleSubmit = (data: FinanceRegistrationFormData) => {
    console.log('Submitted data:', data);
    // フォームの送信処理
  };

  return (
    <div>
      <h2>指定金融機関登録マスタ</h2>
      <FinanceRegistrationForm onSubmit={handleSubmit} />
    </div>
  );
};

export default SampleUsage;