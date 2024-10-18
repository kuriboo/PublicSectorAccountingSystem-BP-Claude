import React from 'react';
import styled from 'styled-components';

// 型定義
interface FixedAssetLoanHistoryFormProps {
  startDate: string;
  endDate: string;
  serialNumberFrom: string;
  serialNumberTo: string;
  productNumberFrom: string;
  productNumberTo: string;
}

// スタイル定義
const FormContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const FormTitle = styled.h2`
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const FormLabel = styled.div`
  margin-bottom: 5px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const FormActions = styled.div`
  text-align: right;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;

  &:first-child {
    margin-left: 0;
  }
`;

// コンポーネント定義
const FixedAssetLoanHistoryForm: React.FC<FixedAssetLoanHistoryFormProps> = ({
  startDate,
  endDate,
  serialNumberFrom,
  serialNumberTo,
  productNumberFrom,
  productNumberTo,
}) => {
  return (
    <FormContainer>
      <FormTitle>固定資産借却履歴一覧表作成</FormTitle>
      <FormGroup>
        <FormLabel>作成年月日</FormLabel>
        <FormInput type="text" value={`${startDate} ~ ${endDate}`} readOnly />
      </FormGroup>
      <FormGroup>
        <FormLabel>範囲指定</FormLabel>
        <div>
          <FormLabel>固定資産番号</FormLabel>
          <FormInput
            type="text"
            value={serialNumberFrom}
            readOnly
            style={{ marginRight: '10px' }}
          />
          〜
          <FormInput type="text" value={serialNumberTo} readOnly />
        </div>
        <div>
          <FormLabel>資産番号</FormLabel>
          <FormInput
            type="text"
            value={productNumberFrom}
            readOnly
            style={{ marginRight: '10px' }}
          />
          〜
          <FormInput type="text" value={productNumberTo} readOnly />
        </div>
      </FormGroup>
      <FormGroup>
        <FormLabel>取得年月日</FormLabel>
        <FormInput type="text" value={`${startDate} ~ ${endDate}`} readOnly />
      </FormGroup>
      <FormActions>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </FormActions>
    </FormContainer>
  );
};

// サンプルデータ
const sampleData: FixedAssetLoanHistoryFormProps = {
  startDate: '平成29年09月12日',
  endDate: '平成29年09月12日', 
  serialNumberFrom: '00000000',
  serialNumberTo: '99999999',
  productNumberFrom: '0',
  productNumberTo: '9999999999',
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>固定資産貸借システム</h1>
      <FixedAssetLoanHistoryForm {...sampleData} />
    </div>
  );
};

export default App;