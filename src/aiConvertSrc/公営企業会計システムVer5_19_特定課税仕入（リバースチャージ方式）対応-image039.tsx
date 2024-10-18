// 簡易的な住所入力フォームコンポーネント
import React, { useState } from 'react';
import styled from '@emotion/styled';

// 入力フィールドのスタイル定義
const InputField = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 16px;
`;

// セレクトボックスのスタイル定義
const SelectBox = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 16px;
`;

// ラベルのスタイル定義
const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
  display: block;
`;

type AddressFormProps = {
  onSubmit: (address: Address) => void;
};

type Address = {
  postalCode: string;
  prefecture: string;
  city: string;
  street: string;
  building: string;
};

const AddressForm: React.FC<AddressFormProps> = ({ onSubmit }) => {
  const [postalCode, setPostalCode] = useState('');
  const [prefecture, setPrefecture] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [building, setBuilding] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const address: Address = {
      postalCode,
      prefecture,
      city,
      street,
      building,
    };
    onSubmit(address);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Label>
        郵便番号
        <InputField
          type="text"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          required
        />
      </Label>
      <Label>
        都道府県
        <SelectBox value={prefecture} onChange={(e) => setPrefecture(e.target.value)} required>
          <option value="">選択してください</option>
          {/* 都道府県のオプションを追加 */}
        </SelectBox>
      </Label>
      <Label>
        市区町村
        <InputField type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
      </Label>
      <Label>
        番地
        <InputField
          type="text"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          required
        />
      </Label>
      <Label>
        建物名・部屋番号
        <InputField type="text" value={building} onChange={(e) => setBuilding(e.target.value)} />
      </Label>
      <button type="submit">送信</button>
    </form>
  );
};

// サンプルデータを使用した表示用コンポーネント
const App: React.FC = () => {
  const handleAddressSubmit = (address: Address) => {
    console.log('Submitted address:', address);
  };

  return (
    <div>
      <h1>住所入力フォーム</h1>
      <AddressForm onSubmit={handleAddressSubmit} />
    </div>
  );
};

export default App;