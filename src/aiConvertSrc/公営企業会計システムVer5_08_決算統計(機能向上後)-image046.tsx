import React from 'react';
import styled from 'styled-components';

// 振替情報の型定義
type TransferInfo = {
  date: string;
  payeeName: string;
  payeeCode: string;
  amount: number;
  transferMethod: string;
  transferFee: number;
  netAmount: number;
  note: string;
};

// 振替入力フォームのプロパティ型定義
type TransferFormProps = {
  onSubmit: (data: TransferInfo) => void;
};

// 振替入力フォームコンポーネント
const TransferForm: React.FC<TransferFormProps> = ({ onSubmit }) => {
  // フォーム送信ハンドラ
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // フォームデータを収集
    const formData = new FormData(event.currentTarget);
    const data: TransferInfo = {
      date: formData.get('date') as string,
      payeeName: formData.get('payeeName') as string,
      payeeCode: formData.get('payeeCode') as string,
      amount: Number(formData.get('amount')),
      transferMethod: formData.get('transferMethod') as string,
      transferFee: Number(formData.get('transferFee')),
      netAmount: Number(formData.get('netAmount')),
      note: formData.get('note') as string,
    };
    // データを親コンポーネントに送信
    onSubmit(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Label>振替日</Label>
        <Input type="date" name="date" required />
      </Row>
      <Row>
        <Label>振替先</Label>
        <Input type="text" name="payeeName" required />
        <Input type="text" name="payeeCode" required />
      </Row>
      <Row>
        <Label>振替金額</Label>
        <Input type="number" name="amount" required />
      </Row>
      <Row>
        <Label>振替方法</Label>
        <Select name="transferMethod" required>
          <option value="全額">全額</option>
          <option value="構成比率">構成比率</option>
        </Select>
      </Row>
      <Row>
        <Label>振込手数料</Label>
        <Input type="number" name="transferFee" defaultValue={0} />
      </Row>
      <Row>
        <Label>差引金額</Label>
        <Input type="number" name="netAmount" readOnly />
      </Row>
      <Row>
        <Label>コメント</Label>
        <Input type="text" name="note" />
      </Row>
      <Button type="submit">登録</Button>
    </Form>
  );
};

// サンプルデータ
const sampleData: TransferInfo = {
  date: '2023-05-17',
  payeeName: '公共下水道事業収益',
  payeeCode: '0010',
  amount: 107839870,
  transferMethod: '全額',
  transferFee: 110,
  netAmount: 107839760,
  note: '5月振替',
};

// 振替情報表示用コンポーネント
const TransferInfoDisplay: React.FC = () => {
  return (
    <TransferInfoWrapper>
      <InfoRow>
        <InfoLabel>振替日</InfoLabel>
        <InfoValue>{sampleData.date}</InfoValue>
      </InfoRow>
      <InfoRow>
        <InfoLabel>振替先</InfoLabel>
        <InfoValue>{sampleData.payeeName}</InfoValue>
        <InfoValue>{sampleData.payeeCode}</InfoValue>
      </InfoRow>
      <InfoRow>
        <InfoLabel>振替金額</InfoLabel>
        <InfoValue>{sampleData.amount.toLocaleString()}円</InfoValue>
      </InfoRow>
      <InfoRow>
        <InfoLabel>振替方法</InfoLabel>
        <InfoValue>{sampleData.transferMethod}</InfoValue>
      </InfoRow>
      <InfoRow>
        <InfoLabel>振込手数料</InfoLabel>
        <InfoValue>{sampleData.transferFee.toLocaleString()}円</InfoValue>
      </InfoRow>
      <InfoRow>
        <InfoLabel>差引金額</InfoLabel>
        <InfoValue>{sampleData.netAmount.toLocaleString()}円</InfoValue>
      </InfoRow>
      {sampleData.note && (
        <InfoRow>
          <InfoLabel>コメント</InfoLabel>
          <InfoValue>{sampleData.note}</InfoValue>
        </InfoRow>
      )}
    </TransferInfoWrapper>
  );
};

// スタイリング
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  background-color: #f0f0f0;
  border-radius: 8px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Label = styled.label`
  min-width: 100px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const TransferInfoWrapper = styled.div`
  margin-top: 32px;
  padding: 16px;
  background-color: #f8f8f8;
  border-radius: 8px;
`;

const InfoRow = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`;

const InfoLabel = styled.div`
  min-width: 100px;
  font-weight: bold;
`;

const InfoValue = styled.div`
  flex: 1;
`;

export default TransferForm;