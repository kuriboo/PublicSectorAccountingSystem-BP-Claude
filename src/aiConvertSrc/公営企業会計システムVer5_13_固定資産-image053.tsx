import React from 'react';
import styled from '@emotion/styled';

interface EntryFormProps {
  onSubmit: (data: EntryFormData) => void;
}

interface EntryFormData {
  date: string;
  invoiceNumber: string;
  customer: string;
  registrationType: '受注請負' | '派遣請負';
  deliveryType: '配達（普通運賃）' | '配達以外';
  totalAmount: number;
  managementFee: number;
  salesPromotion: number;
  subtotal: number;
  consumptionTax: number;
  totalIncludingTax: number;
  depositDate: string;
  dueDate: string;
  paymentMethod: '現金' | '小切手' | '振込';
  remarks: string;
  conditions: string;
}

const FormContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const EntryForm: React.FC<EntryFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // フォームデータを取得
    const data: EntryFormData = {
      date: '2023-09-13', // 仮の日付
      invoiceNumber: '73664100',
      customer: '株式会社〇〇',
      registrationType: '受注請負',
      deliveryType: '配達（普通運賃）',
      totalAmount: 120000,
      managementFee: 60000,
      salesPromotion: 60000,
      subtotal: 40000,
      consumptionTax: 8000,
      totalIncludingTax: 160000, 
      depositDate: '2015-03-05',
      dueDate: '水道・メータ',
      paymentMethod: '振込',
      remarks: '備考',
      conditions: '定期法 他区市内*1円',
    };

    onSubmit(data);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>減損年月</Label>
          <Input type="text" value="平成30年 08月" readOnly />
        </FormGroup>
        <FormGroup>
          <Label>減損年度</Label>
          <Input type="text" value="平成29年度" readOnly />
        </FormGroup>
        <FormGroup>
          <Label>登録区分</Label>
          <Select>
            <option>受注請負</option>
            <option>派遣請負</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>入力区分</Label>
          <Select>
            <option>配達(普通運賃)</option>
            <option>配達以外</option>
          </Select>
        </FormGroup>
        {/* 残りのフィールドも同様に実装 */}

        <button type="submit">OK</button>
      </form>
    </FormContainer>
  );
};

// Usage example
const App: React.FC = () => {
  const handleSubmit = (data: EntryFormData) => {
    console.log(data);
    // フォームデータを送信する処理
  };

  return (
    <div>
      <h1>公事企業会計システム</h1>
      <EntryForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;