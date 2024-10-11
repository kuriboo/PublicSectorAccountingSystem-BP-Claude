import React from 'react';
import styled from 'styled-components';

// 契約台帳の型定義
interface Contract {
  contractNumber: string; // 契約番号
  contractType: '有' | '無'; // 落札者印
  taxDivision: '課税' | '非課税' | '免税'; // 課税区分
  contractorCode: string; // 受付番号
  contractStartDate: string; // 契約年月日(開始)
  contractEndDate: string; // 契約年月日(終了)
}

// コンポーネントのProps型定義
interface ContractFormProps {
  contract: Contract;
  onSubmit: (contract: Contract) => void;
  onCancel: () => void;
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

const FormLabel = styled.label`
  font-weight: bold;
`;

const FormInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const FormSelect = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const FormButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;

const FormButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 3px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// 契約台帳フォームコンポーネント
const ContractForm: React.FC<ContractFormProps> = ({ contract, onSubmit, onCancel }) => {
  // フォーム送信ハンドラ
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(contract);
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <div>
          <FormLabel>契約番号:</FormLabel>
          <FormInput type="text" value={contract.contractNumber} readOnly />
        </div>
        <div>
          <FormLabel>落札者印:</FormLabel>
          <FormSelect value={contract.contractType}>
            <option value="有">有</option>
            <option value="無">無</option>
          </FormSelect>
        </div>
        <div>
          <FormLabel>課税区分:</FormLabel>
          <FormSelect value={contract.taxDivision}>
            <option value="課税">課税</option>
            <option value="非課税">非課税</option>
            <option value="免税">免税</option>
          </FormSelect>
        </div>
        <div>
          <FormLabel>受付番号:</FormLabel>
          <FormInput type="text" value={contract.contractorCode} readOnly />
        </div>
        <div>
          <FormLabel>契約年月日(開始):</FormLabel>
          <FormInput type="date" value={contract.contractStartDate} readOnly />
        </div>
        <div>
          <FormLabel>契約年月日(終了):</FormLabel>
          <FormInput type="date" value={contract.contractEndDate} readOnly />
        </div>
        <FormButtonWrapper>
          <FormButton type="submit">OK</FormButton>
          <FormButton type="button" onClick={onCancel}>クリア</FormButton>
          <FormButton type="button">終了</FormButton>
        </FormButtonWrapper>
      </form>
    </FormWrapper>
  );
};

// サンプルデータ
const sampleContract: Contract = {
  contractNumber: '1234567890',
  contractType: '有',
  taxDivision: '課税',
  contractorCode: 'ABC123',
  contractStartDate: '2023-04-01',
  contractEndDate: '2023-03-31',
};

// 使用例
const App: React.FC = () => {
  const handleSubmit = (contract: Contract) => {
    console.log('Submitted:', contract);
  };

  const handleCancel = () => {
    console.log('Cancelled');
  };

  return (
    <div>
      <h1>契約台帳</h1>
      <ContractForm contract={sampleContract} onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  );
};

export default App;