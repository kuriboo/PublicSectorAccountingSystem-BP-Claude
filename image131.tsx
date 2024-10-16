import React from 'react';
import styled from '@emotion/styled';

// 金額入力欄のプロパティ型定義
type AmountInputProps = {
  label: string;
  value: number;
  onChange: (value: number) => void;
};

// 金額入力欄コンポーネント
const AmountInput: React.FC<AmountInputProps> = ({ label, value, onChange }) => {
  // 金額をカンマ区切りの文字列に変換
  const formattedValue = value.toLocaleString();

  // 入力値の変更ハンドラ
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value.replace(/,/g, ''), 10);
    onChange(isNaN(newValue) ? 0 : newValue);
  };

  return (
    <AmountInputWrapper>
      <AmountLabel>{label}</AmountLabel>
      <AmountField type="text" value={formattedValue} onChange={handleChange} />
    </AmountInputWrapper>
  );
};

// 金額表示欄のプロパティ型定義
type AmountDisplayProps = {
  label: string;
  value: number;
};

// 金額表示欄コンポーネント 
const AmountDisplay: React.FC<AmountDisplayProps> = ({ label, value }) => {
  // 金額をカンマ区切りの文字列に変換
  const formattedValue = value.toLocaleString();

  return (
    <AmountDisplayWrapper>
      <AmountLabel>{label}</AmountLabel>
      <AmountValue>{formattedValue}</AmountValue>
    </AmountDisplayWrapper>
  );
};

// 金額入力フォームコンポーネント
const SalesForm: React.FC = () => {
  // 状態管理
  const [productPrice, setProductPrice] = React.useState(0);
  const [quantity, setQuantity] = React.useState(0);
  const [discount, setDiscount] = React.useState(0);
  const [discountedPrice, setDiscountedPrice] = React.useState(0);
  const [consumption, setConsumption] = React.useState(0);
  const [receivedAmount, setReceivedAmount] = React.useState(0);
  const [change, setChange] = React.useState(0);

  // 合計金額の計算
  const totalAmount = productPrice * quantity;

  // 値引き後の金額の計算
  React.useEffect(() => {
    setDiscountedPrice(totalAmount - discount);
  }, [totalAmount, discount]);

  // お釣りの計算
  React.useEffect(() => {
    setChange(receivedAmount - discountedPrice);
  }, [receivedAmount, discountedPrice]);

  return (
    <FormWrapper>
      <FormHeader>固定資産最新情報照会</FormHeader>
      <FormSection>
        <AmountInput label="本体価格" value={productPrice} onChange={setProductPrice} />
        <AmountInput label="数量" value={quantity} onChange={setQuantity} />
        <AmountDisplay label="金額" value={totalAmount} />
      </FormSection>

      <FormSection>
        <AmountInput label="値引" value={discount} onChange={setDiscount} />
        <AmountDisplay label="値引除外額" value={discountedPrice} />
      </FormSection>

      <FormTable>
        <tbody>
          <tr>
            <td>
              <AmountDisplay label="税込原価" value={0} />
            </td>
            <td>
              <AmountDisplay label="信却除外額" value={0} />
            </td>
            <td>
              <AmountDisplay label="信却対象額" value={0} />
            </td>
            <td>
              <AmountDisplay label="信却累計額" value={0} />
            </td>
          </tr>
        </tbody>
      </FormTable>
      
      <FormSection>
        <AmountInput label="財源" value={receivedAmount} onChange={setReceivedAmount} />
        <AmountDisplay label="財源計" value={receivedAmount} /> 
      </FormSection>
      
      <FormFooter>
        <div>
          <ActionButton>行確定</ActionButton>
          <ActionButton>行ｷｬﾝｾﾙ</ActionButton>
        </div>
        <div>
          <ActionButton primary>OK</ActionButton>
          <ActionButton>ｸﾘｱ</ActionButton>
          <ActionButton>終了</ActionButton>
        </div>
      </FormFooter>
    </FormWrapper>
  );
};

// スタイリング
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

const FormHeader = styled.h2`
  margin: 0 0 16px;
`;

const FormSection = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`;

const AmountInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const AmountLabel = styled.label`
  font-weight: bold;
`;

const AmountField = styled.input`
  padding: 4px;
`;

const AmountDisplayWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const AmountValue = styled.span`
  padding: 4px;
  border: 1px solid #ccc;
`;

const FormTable = styled.table`
  width: 100%;
  margin-bottom: 16px;
  th, td {
    padding: 4px;
    border: 1px solid #ccc;
  }
`;

const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ActionButton = styled.button<{ primary?: boolean }>`
  padding: 8px 16px;
  background-color: ${(props) => (props.primary ? '#007bff' : '#f0f0f0')};
  color: ${(props) => (props.primary ? '#fff' : '#333')};
  border: none;
  cursor: pointer;
`;

// 使用例
const UsageExample: React.FC = () => {
  return (
    <div>
      <h1>金額入力フォーム</h1>
      <SalesForm />
    </div>
  );
};

export default UsageExample;