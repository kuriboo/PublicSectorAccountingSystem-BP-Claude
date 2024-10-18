import React from 'react';
import styled from '@emotion/styled';

// 型定義
type ContractorInputFormProps = {
  onSubmit: (data: ContractorInputData) => void;
};

type ContractorInputData = {
  contractorType: '法人' | '個人';
  companyName?: string;
  departmentName?: string;
  postalCode?: string;
  address?: string;
  name: string;
  nameKana?: string;
  birthdate?: string;
  paymentDate?: string;
  paymentMethod?: string;
  bankName?: string;
  bankBranchName?: string;
  accountType?: '普通' | '当座';
  accountNumber?: string;
  accountName?: string;
};

// スタイル定義
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 600px;
  margin: 0 auto;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 16px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-weight: bold;
  }
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// コンポーネント定義
const ContractorInputForm: React.FC<ContractorInputFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<ContractorInputData>({
    contractorType: '法人',
    name: '',
  });

  // フォーム入力時の処理
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // フォーム送信時の処理
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <RadioGroup>
        <label>
          <input
            type="radio"
            name="contractorType"
            value="法人"
            checked={formData.contractorType === '法人'}
            onChange={handleChange}
          />
          法人
        </label>
        <label>
          <input
            type="radio"
            name="contractorType"
            value="個人"
            checked={formData.contractorType === '個人'}
            onChange={handleChange}
          />
          個人
        </label>
      </RadioGroup>

      {formData.contractorType === '法人' && (
        <>
          <FormGroup>
            <label>会社名</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName ?? ''}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label>部署名</label>
            <input
              type="text"
              name="departmentName"
              value={formData.departmentName ?? ''}
              onChange={handleChange}
            />
          </FormGroup>
        </>
      )}

      <FormGroup>
        <label>支払先</label>
        <FormGroup>
          <label>郵便番号</label>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode ?? ''}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label>住所</label>
          <input
            type="text"
            name="address"
            value={formData.address ?? ''}
            onChange={handleChange}
          />
        </FormGroup>
      </FormGroup>

      <FormGroup>
        <label>請求先担当者</label>
        <FormGroup>
          <label>氏名</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <label>氏名カナ</label>
          <input
            type="text"
            name="nameKana"
            value={formData.nameKana ?? ''}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label>生年月日</label>
          <input
            type="date"
            name="birthdate"
            value={formData.birthdate ?? ''}
            onChange={handleChange}
          />
        </FormGroup>
      </FormGroup>

      <FormGroup>
        <label>支払方法</label>
        <select name="paymentMethod" value={formData.paymentMethod ?? ''} onChange={handleChange}>
          <option value="">選択してください</option>
          <option value="bank">銀行振込</option>
          <option value="cash">現金支給</option>
        </select>
      </FormGroup>

      {formData.paymentMethod === 'bank' && (
        <FormGroup>
          <label>支払口座</label>
          <FormGroup>
            <label>銀行名</label>
            <input
              type="text"
              name="bankName"
              value={formData.bankName ?? ''}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label>支店名</label>
            <input
              type="text"
              name="bankBranchName"
              value={formData.bankBranchName ?? ''}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label>口座種別</label>
            <select name="accountType" value={formData.accountType ?? ''} onChange={handleChange}>
              <option value="">選択してください</option>  
              <option value="普通">普通</option>
              <option value="当座">当座</option>
            </select>
          </FormGroup>
          <FormGroup>
            <label>口座番号</label>
            <input
              type="text"
              name="accountNumber"
              value={formData.accountNumber ?? ''}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label>口座名義</label>
            <input
              type="text"
              name="accountName"
              value={formData.accountName ?? ''}
              onChange={handleChange}
            />
          </FormGroup>
        </FormGroup>
      )}

      <Button type="submit">登録</Button>
    </Form>
  );
};

// サンプル使用
const SampleUsage: React.FC = () => {
  const handleSubmit = (data: ContractorInputData) => {
    console.log(data);
  };

  return (
    <div>
      <h1>支出決定入力フォーム</h1>
      <ContractorInputForm onSubmit={handleSubmit} />
    </div>
  );
};

export default SampleUsage;