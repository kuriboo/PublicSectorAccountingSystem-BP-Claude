import React from 'react';
import styled from '@emotion/styled';

interface BookingFormProps {
  onSubmit: (data: BookingData) => void;
}

interface BookingData {
  name: string;
  kana: string;
  tel: string;
  email: string;
  checkInDate: string;
  checkInTime: string;
  checkOutDate: string;
  roomType: string;
  paymentMethod: string;
  couponCode: string;
  note: string;
}

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Form = styled.form`
  display: grid;
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

const TextArea = styled.textarea`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const BookingForm: React.FC<BookingFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: BookingData = {
      name: formData.get('name') as string,
      kana: formData.get('kana') as string,
      tel: formData.get('tel') as string,
      email: formData.get('email') as string,
      checkInDate: formData.get('checkInDate') as string,
      checkInTime: formData.get('checkInTime') as string,
      checkOutDate: formData.get('checkOutDate') as string,
      roomType: formData.get('roomType') as string,
      paymentMethod: formData.get('paymentMethod') as string,
      couponCode: formData.get('couponCode') as string,
      note: formData.get('note') as string,
    };
    onSubmit(data);
  };

  return (
    <Container>
      <h2>決算報告書ファイル保守</h2>
      <Form onSubmit={handleSubmit}>
        <Label>
          集計番号
          <Input type="number" name="aggregationNumber" defaultValue={10} required />
        </Label>
        <Label>
          項目番号 上
          <Input type="text" name="itemNumberTop" defaultValue="第1款 水道事業収益" required />
        </Label>
        <Label>
          項目番号 下
          <Input type="text" name="itemNumberBottom" required />
        </Label>
        <Label>
          予算区分
          <Select name="budgetCategory" defaultValue="3条収入" required>
            <option value="3条収入">3条収入</option>
            <option value="4条収入">4条収入</option>
          </Select>
        </Label>
        <Label>
          改行区分
          <Select name="lineBreakCategory" defaultValue="1" required>
            <option value="0">0</option>
            <option value="1">1</option>
          </Select>
        </Label>
        <Label>
          備考印字番号
          <Input type="text" name="noteNumber" />
        </Label>
        <Label>
          金額印字区分
          <Select name="amountPrintCategory" defaultValue="金額・金額印字せず" required>
            <option value="金額・金額印字せず">金額・金額印字せず</option>
            <option value="金額のみ印字">金額のみ印字</option>
            <option value="金額・金額印字">金額・金額印字</option>
          </Select>  
        </Label>
        <Label>
          科目コード
          <Input type="text" name="subjectCode" defaultValue="001" required />
        </Label>
        <Label>
          名称
          <Input type="text" name="name" defaultValue="水道事業収益" required />
        </Label>
        <SubmitButton type="submit">登録</SubmitButton>
        <SubmitButton type="button">行削除</SubmitButton>
        <SubmitButton type="button">終了</SubmitButton>
      </Form>
    </Container>
  );
};

export default BookingForm;

// Sample usage
const MyPage: React.FC = () => {
  const handleSubmit = (data: BookingData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div>
      <h1>Booking Form</h1>
      <BookingForm onSubmit={handleSubmit} />
    </div>
  );
};