import React from 'react';
import styled from '@emotion/styled';

type AutomaticPaymentFormProps = {
  onSubmit: (formData: {
    bankName: string;
    branchName: string;
    accountType: string;
    accountNumber: string;
    accountHolderType: string;
    accountHolderName: string;
    accountHolderNameKana: string;
  }) => void;
};

const AutomaticPaymentForm: React.FC<AutomaticPaymentFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // フォームの値を取得して、onSubmitを呼び出す処理を実装する
    // ...
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>千円単位自動丸め処理</Title>
      <FormGroup>
        <Label>自動丸め</Label>
        <div>
          <Input type="radio" name="rounding" value="切り上げ" defaultChecked /> 切り上げ
          <Input type="radio" name="rounding" value="切り捨て" /> 切り捨て
          <Select name="roundingDigit">
            <option value="1">当初予算</option>
            {/* その他のオプションを追加 */}
          </Select>
          <Input type="number" name="digit" min={0} defaultValue={1} />
          <span>回数</span>
        </div>
      </FormGroup>
      <FormGroup>
        <Label>仕訳金額調整</Label>
        <p>
          2. 円単位と千円単位の仕訳金額を調整する事ができます。（発明図）
          下のそれぞれの調整額（金額）を入力し、[調整開始ボタン]を押して下さい。
        </p>
        <table>
          <tbody>
            <tr>
              <td>
                <Label>本体仕訳</Label>
              </td>
              <td>
                <Input type="number" name="adjustment1" defaultValue={0} />
                <span>消費税</span>
              </td>
            </tr>
            <tr>
              <td>
                <Label>本体仕訳</Label>
              </td>
              <td>
                <Input type="number" name="adjustment2" defaultValue={0} />
                <span>消費税</span>
              </td>
            </tr>
            <tr>
              <td>
                <Label>本体仕訳</Label>
              </td>
              <td>
                <Input type="number" name="adjustment3" defaultValue={0} />
                <span>消費税</span>
              </td>
            </tr>
          </tbody>
        </table>
        <p>調整方法は、それぞれの仕訳パターンの中で千円未満の端数の大きい順番に「1千円」づつ調整していきます。</p>
        <p>端数が同額の場合は、仕訳コードの昇順になります。</p>
        <Button type="button">調整開始</Button>
      </FormGroup>
      <FormFooter>
        <Button type="button" variant="back">戻る</Button>
        <Button type="submit">終了</Button>
      </FormFooter>
    </Form>
  );
};

// スタイリング用のコンポーネント
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button<{ variant?: 'back' | 'submit' }>`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: ${({ variant }) => (variant === 'back' ? '#ccc' : '#007bff')};
  color: #fff;
  cursor: pointer;
`;

const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

// サンプルデータを用いた使用例
const sampleData = {
  bankName: 'サンプル銀行',
  branchName: 'サンプル支店',
  accountType: '普通預金',
  accountNumber: '1234567',
  accountHolderType: '本人',
  accountHolderName: 'サンプル太郎',
  accountHolderNameKana: 'サンプルタロウ',
};

const App: React.FC = () => {
  const handleSubmit = (formData: typeof sampleData) => {
    console.log(formData);
    // フォームデータを送信する処理を実装する
    // ...
  };

  return <AutomaticPaymentForm onSubmit={handleSubmit} />;
};

export default App;