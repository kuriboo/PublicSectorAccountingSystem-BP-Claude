import React from 'react';
import styled from 'styled-components';

// 水道料金計算の入力フォームを表すPropsの型定義
type WaterBillingFormProps = {
  onSubmit: (data: WaterBillingData) => void;
};

// 水道料金計算に必要なデータの型定義
type WaterBillingData = {
  meterNumber: string;
  previousReading: string;
  currentReading: string;
  billKind: 'estimate' | 'actual' | 'both';
};

// 水道料金計算の入力フォームコンポーネント
const WaterBillingForm: React.FC<WaterBillingFormProps> = ({ onSubmit }) => {
  // フォームの状態管理用のstate
  const [formData, setFormData] = React.useState<WaterBillingData>({
    meterNumber: '',
    previousReading: '',
    currentReading: '',
    billKind: 'estimate',
  });

  // フォームの入力値が変更された時のハンドラ
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // フォームがサブミットされた時のハンドラ
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Label>水道料金業務パターン</Label>
        <Input type="text" name="meterNumber" value={formData.meterNumber} onChange={handleChange} required />
      </Row>
      <Row>
        <Label>水道料金集計区分</Label>
        <Select name="billKind" value={formData.billKind} onChange={handleChange}>
          <option value="estimate">概算</option>
          <option value="actual">請求</option>
          <option value="both">請除</option>
        </Select>
      </Row>
      <Row>
        <Label>会計年度</Label>
        <Input type="text" name="previousReading" value={formData.previousReading} onChange={handleChange} required />
        <Label>年度</Label>
      </Row>
      <Row>
        <Label>水道料金業務パターン</Label>
        <Input type="text" value="00000000" readOnly />
        <Label>水道料金集計区分</Label>
        <Input type="text" value="016" readOnly />
      </Row>
      <Row>
        <InlineButton>会計仕訳</InlineButton>
        <Input type="text" value="00000" readOnly />
        <Label>水道料金の調定/集合調定</Label>
      </Row>
      <Row>
        <RadioButton type="radio" name="category" value="regular" checked={true} readOnly />
        <Label>振替伝票</Label>
        <RadioButton type="radio" name="category" value="transfer" readOnly />
        <Label>収入伝票</Label>
      </Row>
      <ButtonRow>
        <SubmitButton type="submit">OK</SubmitButton>
        <Button type="button">クリア</Button>
        <Button type="button">終了</Button>
      </ButtonRow>
    </Form>
  );
};

// 水道料金計算結果を表示するコンポーネント
const WaterBillingResult: React.FC = () => {
  return (
    <Table>
      <thead>
        <tr>
          <Th>水道料金業務パターン</Th>
          <Th>水道料金集計区分</Th>
          <Th>会計仕訳</Th>
          <Th>伝票</Th>
          <Th>仕訳内容</Th>
          <Th>借方勘定節</Th>
          <Th>貸方勘定節</Th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Td>0000000000</Td>
          <Td>001</Td>
          <Td>045001</Td>
          <Td>振替</Td>
          <Td>(会計)通常調定(使用料)</Td>
          <Td>0520208060の他未収金</Td>
          <Td>0010104131下水道使用料等</Td>
        </tr>
        <tr>
          <Td>0000000009</Td>
          <Td>001</Td>
          <Td>045002</Td>
          <Td>収入</Td>
          <Td>(会計)未収金収納(使用料)</Td>
          <Td>0520101011現金</Td>
          <Td>0520208960の他未収金</Td>
        </tr>
      </tbody> 
    </Table>
  );
};

// 水道料金計算のメインコンポーネント
const WaterBilling: React.FC = () => {
  // 入力されたデータを受け取るハンドラ
  const handleSubmit = (data: WaterBillingData) => {
    console.log('Submitted data:', data);
    // ここで水道料金の計算処理などを行う
  };

  return (
    <Container>
      <Title>水道料金会計システム</Title>
      <WaterBillingForm onSubmit={handleSubmit} />
      <WaterBillingResult />
    </Container>
  );
};

// スタイリング用のコンポーネント
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const RadioButton = styled.input`
  margin-right: 5px;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #ccc;
  cursor: pointer;
`;

const SubmitButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
`;

const InlineButton = styled(Button)`
  padding: 5px 10px;
  font-size: 14px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const Th = styled.th`
  padding: 10px;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
`;

const Td = styled.td`
  padding: 10px;
  border: 1px solid #ccc;
`;

export default WaterBilling;