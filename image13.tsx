import React from 'react';
import styled from '@emotion/styled';

// 貨借区分の型定義
type BorrowingLendingType = '借方' | '貸方';

// コンポーネントのプロパティの型定義
interface FormProps {
  borrowingLending: BorrowingLendingType;
  subAccountTitle: string;
  detailedAccountTitle: string;
  taxRate: number;
  bsDate: string;
}

// スタイル定義
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-width: 400px;
  margin: 0 auto;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Select = styled.select`
  padding: 5px;
`;

const Input = styled.input`
  padding: 5px;
`;

// メインのフォームコンポーネント
const AccountingForm: React.FC<FormProps> = ({
  borrowingLending,
  subAccountTitle,
  detailedAccountTitle,
  taxRate,
  bsDate,
}) => {
  return (
    <FormWrapper>
      {/* 貸借区分 */}
      <RadioGroup>
        <RadioLabel>
          <input
            type="radio"
            name="borrowingLending"
            value="借方"
            checked={borrowingLending === '借方'}
            readOnly
          />
          借方
        </RadioLabel>
        <RadioLabel>
          <input
            type="radio"
            name="borrowingLending"
            value="貸方"
            checked={borrowingLending === '貸方'}
            readOnly
          />
          貸方
        </RadioLabel>
      </RadioGroup>

      {/* 勘定区分 */}
      <div>
        <Select value={subAccountTitle}>
          <option value="">勘定科目区分</option>
          {/* 勘定科目区分のオプションを追加 */}
        </Select>
      </div>

      {/* 細節決算区分 */}
      <div>
        <Select value={detailedAccountTitle}>
          <option value="">細節決算区分</option>
          {/* 細節決算区分のオプションを追加 */}
        </Select>
      </div>

      {/* 税率区分 */}
      <div>
        <Input type="text" value={taxRate} readOnly />
      </div>

      {/* BS科目締日 */}
      <div>
        <Input type="text" value={bsDate} readOnly />
      </div>
    </FormWrapper>
  );
};

// サンプルデータ
const sampleData: FormProps = {
  borrowingLending: '借方',
  subAccountTitle: '現預金',
  detailedAccountTitle: 'その他',
  taxRate: 10,
  bsDate: '',
};

// 使用例
const UsageExample: React.FC = () => {
  return (
    <div>
      <h2>AccountingForm 使用例</h2>
      <AccountingForm {...sampleData} />
    </div>
  );
};

export default AccountingForm;