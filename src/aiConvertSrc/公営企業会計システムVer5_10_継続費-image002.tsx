import React from 'react';
import styled from '@emotion/styled';

type BookingFormProps = {
  onSubmit: (data: { fiscalYear: number; startDate: string; endDate: string; }) => void;
};

const BookingForm: React.FC<BookingFormProps> = ({ onSubmit }) => {
  const currentYear = new Date().getFullYear();

  // フォームの送信ハンドラ
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      fiscalYear: parseInt(formData.get('fiscalYear') as string, 10),
      startDate: formData.get('startDate') as string,
      endDate: formData.get('endDate') as string,
    };
    onSubmit(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>債務負担行為に関する調書</Title>
      <FiscalYearInput
        type="number"
        name="fiscalYear"
        defaultValue={currentYear}
        min={currentYear}
      />
      年度
      <div>
        事業科目 <DateInput type="text" name="startDate" defaultValue="0000" /> ～{' '}
        <DateInput type="text" name="endDate" defaultValue="9999" />
      </div>
      <div>
        <SubmitButton type="submit">CSV出力</SubmitButton>
        <ClearButton type="reset">クリア</ClearButton>
        <PrintButton type="button">終了</PrintButton>
      </div>
    </Form>
  );
};

// サンプルデータを使用したBookingFormコンポーネントの使用例
const SampleUsage: React.FC = () => {
  const handleSubmit = (data: { fiscalYear: number; startDate: string; endDate: string; }) => {
    console.log('Submitted data:', data);
    // ここでフォームデータの送信処理を行う
  };

  return (
    <div>
      <h2>BookingFormサンプル</h2>
      <BookingForm onSubmit={handleSubmit} />
    </div>
  );
};

// スタイリング
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const FiscalYearInput = styled.input`
  width: 80px;
  margin-right: 5px;
  padding: 5px;
`;

const DateInput = styled.input`
  width: 60px;
  margin: 0 5px;
  padding: 5px;
`;

const SubmitButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ClearButton = styled.button`
  padding: 8px 16px;
  background-color: #6c757d;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
`;

const PrintButton = styled.button`
  padding: 8px 16px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
`;

export default BookingForm;