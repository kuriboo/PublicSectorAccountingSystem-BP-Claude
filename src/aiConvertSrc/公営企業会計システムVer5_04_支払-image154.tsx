import React from 'react';
import styled from 'styled-components';

// 工事前払振替入力フォームのプロパティ型定義
type KojiMaebaraiInputProps = {
  paymentDate: string;
  dueDate: string;
  paymentAmount: number;
  transferFee: number;
  totalAmount: number;
  note: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onNoteChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

// 工事前払振替入力フォームコンポーネント
const KojiMaebaraiInput: React.FC<KojiMaebaraiInputProps> = ({
  paymentDate,
  dueDate,
  paymentAmount,
  transferFee,
  totalAmount,
  note,
  onInputChange,
  onNoteChange,
}) => {
  return (
    <Container>
      <Title>工事前払振替入力</Title>

      <InputWrapper>
        <Label>予払日</Label>
        <Input type="date" name="paymentDate" value={paymentDate} onChange={onInputChange} />
      </InputWrapper>

      <InputWrapper>
        <Label>支払日</Label>
        <Input type="date" name="dueDate" value={dueDate} onChange={onInputChange} />
      </InputWrapper>

      <InputWrapper>
        <Label>支払先</Label>
        <Input type="text" name="payee" onChange={onInputChange} />
      </InputWrapper>

      <InputWrapper>
        <Label>支払額</Label>
        <Input type="number" name="paymentAmount" value={paymentAmount} onChange={onInputChange} />
      </InputWrapper>

      <InputWrapper>
        <Label>振替済額</Label>
        <Input type="number" name="transferredAmount" value={0} readOnly />
      </InputWrapper>

      <InputWrapper>
        <Label>通常請求書発行事業者払分</Label>
        <Input type="number" name="transferFee" value={transferFee} onChange={onInputChange} />
      </InputWrapper>

      <InputWrapper>
        <Label>控除額合計</Label>
        <Input type="number" name="totalAmount" value={totalAmount} readOnly />
      </InputWrapper>

      <NoteWrapper>
        <Label>備考</Label>
        <Textarea name="note" value={note} onChange={onNoteChange} />
      </NoteWrapper>

    </Container>
  );
};

// サンプルデータを使用した工事前払振替入力フォームの表示例
const SampleKojiMaebaraiInput: React.FC = () => {
  const [formData, setFormData] = React.useState({
    paymentDate: '2022-12-25',
    dueDate: '2022-12-20',
    paymentAmount: 440000,
    transferFee: 40000,
    totalAmount: 400000,
    note: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <KojiMaebaraiInput
      paymentDate={formData.paymentDate}
      dueDate={formData.dueDate}
      paymentAmount={formData.paymentAmount}
      transferFee={formData.transferFee}
      totalAmount={formData.paymentAmount - formData.transferFee}
      note={formData.note}
      onInputChange={handleInputChange}
      onNoteChange={handleNoteChange}
    />
  );
};

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  background-color: #f0f0f0;
  border-radius: 8px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Label = styled.label`
  flex: 0 0 120px;
  font-weight: bold;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const NoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Textarea = styled.textarea`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export default SampleKojiMaebaraiInput;