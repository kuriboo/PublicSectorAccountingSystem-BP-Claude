import React from 'react';
import styled from 'styled-components';

// 銀行預金別入出金明細表作成コンポーネントのプロパティ型定義
type BankStatementFormProps = {
  onSubmit: (params: { startDate: string; endDate: string; bank: string; branch: string; }) => void;
};

// 銀行預金別入出金明細表作成コンポーネント
const BankStatementForm: React.FC<BankStatementFormProps> = ({ onSubmit }) => {
  // フォーム送信ハンドラ
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // フォームの値を取得
    const startDate = event.currentTarget.startDate.value;
    const endDate = event.currentTarget.endDate.value;
    const bank = event.currentTarget.bank.value;
    const branch = event.currentTarget.branch.value;

    // プロパティの関数を呼び出して送信
    onSubmit({ startDate, endDate, bank, branch });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormField>
        <Label>作表年月</Label>
        <div>
          <Input type="text" name="startDate" defaultValue="令和29年08月" />
          <Span>〜</Span>
          <Input type="text" name="endDate" defaultValue="令和29年08月" />
        </div>
      </FormField>
      
      <FormField>
        <Label>銀行</Label>
        <Select name="bank" defaultValue="現　金">
          <option value="現　金">現　金</option>
        </Select>
        <Span>〜</Span>
        <Select name="branch" defaultValue="預金種別">
          <option value="預金種別">預金種別</option>
        </Select>
      </FormField>

      <FormField>
        <Label>預金種別</Label>
        <Select name="accountType" defaultValue="普通預金">
          <option value="普通預金">普通預金</option>
        </Select>
        <Span>〜</Span>
        <Select name="accountType2" defaultValue="普通定期">
          <option value="普通定期">普通定期</option>
        </Select>
      </FormField>

      <ButtonGroup>
        <Button type="submit">OK</Button>
        <Button type="button">クリア</Button>
        <Button type="button">終了</Button>
      </ButtonGroup>
    </Form>
  );
};

// スタイルコンポーネント
const Form = styled.form`
  padding: 16px;
`;

const FormField = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Label = styled.label`
  width: 100px;
`;

const Input = styled.input`
  padding: 4px;
  width: 120px;
`;

const Select = styled.select`
  padding: 4px;
  width: 120px;
`;

const Span = styled.span`
  margin: 0 8px;
`;

const ButtonGroup = styled.div`
  text-align: center;
  margin-top: 24px;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin: 0 8px;
`;

// 使用例
const SampleUsage: React.FC = () => {
  const handleSubmit = (params: { startDate: string; endDate: string; bank: string; branch: string; }) => {
    console.log('Submitted:', params);
  };

  return (
    <BankStatementForm onSubmit={handleSubmit} />
  );
};

export default BankStatementForm;