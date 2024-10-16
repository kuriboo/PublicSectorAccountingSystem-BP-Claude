import React from 'react';
import styled from '@emotion/styled';

type FormData = {
  fromDate: string;
  toDate: string;
  companyCode: string;
  bankCode: string;
  isOtpSelected: boolean;
  isPrechargeSelected: boolean;
  isAlertSelected: boolean;
};

type Props = {
  onSubmit: (data: FormData) => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 5px;
  margin-bottom: 10px;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const EucSettingForm: React.FC<Props> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // フォームの値を取得
    const fromDate = (e.currentTarget.elements.namedItem('fromDate') as HTMLInputElement).value;
    const toDate = (e.currentTarget.elements.namedItem('toDate') as HTMLInputElement).value;
    const companyCode = (e.currentTarget.elements.namedItem('companyCode') as HTMLInputElement).value;
    const bankCode = (e.currentTarget.elements.namedItem('bankCode') as HTMLInputElement).value;
    const isOtpSelected = (e.currentTarget.elements.namedItem('isOtpSelected') as HTMLInputElement).checked;
    const isPrechargeSelected = (e.currentTarget.elements.namedItem('isPrechargeSelected') as HTMLInputElement).checked;
    const isAlertSelected = (e.currentTarget.elements.namedItem('isAlertSelected') as HTMLInputElement).checked;

    // フォームのデータをオブジェクトにまとめる
    const formData: FormData = {
      fromDate,
      toDate,
      companyCode,
      bankCode,
      isOtpSelected,
      isPrechargeSelected,
      isAlertSelected,
    };

    // フォームのデータを親コンポーネントに渡す
    onSubmit(formData);
  };

  return (
    <Container>
      <Title>総勘定元帳EUC</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          伝票日付
          <Input type="date" name="fromDate" required />
          〜
          <Input type="date" name="toDate" required />
        </Label>
        <Label>
          仕訳科目
          <Input type="text" name="companyCode" required />
          〜
          <Input type="text" name="bankCode" required />
        </Label>
        <Label>
          <Checkbox type="checkbox" name="isOtpSelected" />
          繰越金額がOPの繰越行のみで出力する
        </Label>
        <Label>
          <Checkbox type="checkbox" name="isPrechargeSelected" />
          「繰越のみ保存」のみの伝票を出力する
        </Label>
        <Label>
          <Checkbox type="checkbox" name="isAlertSelected" />
          「適格請求書発行事業者以外」のみの伝票を出力する
        </Label>
        <Button type="submit">実行</Button>
      </Form>
    </Container>
  );
};

// サンプルデータを用いたコンポーネントの使用例
const App: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log(data);
    // フォームのデータを処理するロジックをここに実装
  };

  return (
    <div>
      <EucSettingForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;