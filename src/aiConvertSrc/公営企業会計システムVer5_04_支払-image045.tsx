import React from 'react';
import styled from '@emotion/styled';

type ContractType = '登録' | '訂正' | '削除' | '中止';

interface ContractFormProps {
  contractDate: string;
  contractType: ContractType;
  contractNumber: number;
  companyName: string;
  contractorName: string;
  contractAmount: number;
  taxAmount: number;
  totalAmount: number;
  memo: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
`;

const ContractForm: React.FC<ContractFormProps> = ({
  contractDate,
  contractType,
  contractNumber,
  companyName,
  contractorName,
  contractAmount,
  taxAmount,
  totalAmount,
  memo,
  onSubmit,
}) => {
  return (
    <Container>
      <Title>変更予定負担行為入力（工事）</Title>
      <form onSubmit={onSubmit}>
        <FormGroup>
          <Label>予定処理日</Label>
          <Input type="text" value={contractDate} readOnly />
        </FormGroup>
        <FormGroup>
          <Label>予定年度</Label>
          <Input type="text" value="令和5年" readOnly />
        </FormGroup>
        <FormGroup>
          <Label>契約区分</Label>
          <Select value={contractType}>
            <option value="登録">登録</option>
            <option value="訂正">訂正</option>
            <option value="削除">削除</option>
            <option value="中止">中止</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>予定番号</Label>
          <Input type="number" value={contractNumber} readOnly />
        </FormGroup>
        <FormGroup>
          <Label>会社区分</Label>
          <Input type="text" value={companyName} readOnly />
        </FormGroup>
        <FormGroup>
          <Label>相手先</Label>
          <Input type="text" value={contractorName} readOnly />
        </FormGroup>
        <FormGroup>
          <Label>工事名称所</Label>
          <TextArea value={memo} readOnly />
        </FormGroup>
        <FormGroup>
          <Label>変更摘要</Label>
          <TextArea />
        </FormGroup>
        <FormGroup>
          <Label>変更後</Label>
          <div>
            <Label>前払金額</Label>
            <Input type="number" value={contractAmount} readOnly />
          </div>
          <div>
            <Label>支払済額</Label>
            <Input type="number" value={taxAmount} readOnly />
          </div>
          <div>
            <Label>前払金額計</Label>
            <Input type="number" value={totalAmount} readOnly />
          </div>
        </FormGroup>
        <SubmitButton type="submit">確定登録</SubmitButton>
      </form>
    </Container>
  );
};

// サンプルデータを使用した表示用コンポーネント
const SampleContractForm: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // フォーム送信時の処理を実装
  };

  return (
    <ContractForm
      contractDate="令和5年10月10日"
      contractType="登録"
      contractNumber={1}
      companyName="設計事務所"
      contractorName="鈴木建設"
      contractAmount={1100000}
      taxAmount={1650000}
      totalAmount={550000}
      memo="都水管布設工事"
      onSubmit={handleSubmit}
    />
  );
};

export default ContractForm;