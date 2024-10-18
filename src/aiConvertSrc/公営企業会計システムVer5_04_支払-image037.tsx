import React from 'react';
import styled from 'styled-components';

// 契約情報の型定義
type ContractInfo = {
  contractName: string;
  dateOfContract: string;
  period: number;
  completionDate: string;
  paymentMethod: string;
  paymentDate: string;
  amountOfContract: number;
};

// プロパティの型定義
type ContractFormProps = {
  contractInfo?: ContractInfo;
  onSubmit: (contractInfo: ContractInfo) => void;
  onCancel: () => void;
};

// スタイル定義
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: 100%;
`;

const FormLabel = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const FormInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormSelect = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  border: none;
  border-radius: 4px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const ContractForm: React.FC<ContractFormProps> = ({
  contractInfo = {
    contractName: '',
    dateOfContract: '',
    period: 0,
    completionDate: '',
    paymentMethod: '',
    paymentDate: '',
    amountOfContract: 0,
  },
  onSubmit,
  onCancel,
}) => {
  // フォーム送信処理
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(contractInfo);
  };

  return (
    <FormContainer>
      <FormTitle>契約情報</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>契約名称</FormLabel>
          <FormInput
            type="text"
            value={contractInfo.contractName}
            onChange={(e) =>
              onSubmit({ ...contractInfo, contractName: e.target.value })
            }
            required
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>契約年月日</FormLabel>
          <FormInput
            type="date"
            value={contractInfo.dateOfContract}
            onChange={(e) =>
              onSubmit({ ...contractInfo, dateOfContract: e.target.value })
            }
            required
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>期間</FormLabel>
          <FormInput
            type="number"
            value={contractInfo.period}
            onChange={(e) =>
              onSubmit({ ...contractInfo, period: Number(e.target.value) })
            }
            required
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>完了年月日</FormLabel>
          <FormInput
            type="date"
            value={contractInfo.completionDate}
            onChange={(e) =>
              onSubmit({ ...contractInfo, completionDate: e.target.value })
            }
            required
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>支払回数</FormLabel>
          <FormSelect
            value={contractInfo.paymentMethod}
            onChange={(e) =>
              onSubmit({ ...contractInfo, paymentMethod: e.target.value })
            }
            required
          >
            <option value="">選択してください</option>
            <option value="一括">一括</option>
            <option value="分割">分割</option>
          </FormSelect>
        </FormGroup>
        <FormGroup>
          <FormLabel>支払年月日</FormLabel>
          <FormInput
            type="date"
            value={contractInfo.paymentDate}
            onChange={(e) =>
              onSubmit({ ...contractInfo, paymentDate: e.target.value })
            }
            required
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>契約保証人</FormLabel>
          <FormInput
            type="text"
            value={contractInfo.amountOfContract}
            onChange={(e) =>
              onSubmit({
                ...contractInfo,
                amountOfContract: Number(e.target.value),
              })
            }
            required
          />
        </FormGroup>
        <ButtonGroup>
          <Button type="button" onClick={onCancel}>
            キャンセル
          </Button>
          <Button type="submit">OK</Button>
        </ButtonGroup>
      </form>
    </FormContainer>
  );
};

// サンプルデータ
const sampleContractInfo: ContractInfo = {
  contractName: '開発案件契約',
  dateOfContract: '2023-04-15',
  period: 16,
  completionDate: '2023-04-30',
  paymentMethod: '一括',
  paymentDate: '2023-04-30',
  amountOfContract: 0,
};

// 使用例
const App: React.FC = () => {
  const handleSubmit = (contractInfo: ContractInfo) => {
    console.log('契約情報が送信されました:', contractInfo);
  };

  const handleCancel = () => {
    console.log('キャンセルされました');
  };

  return (
    <div>
      <h1>契約情報入力フォーム</h1>
      <ContractForm
        contractInfo={sampleContractInfo}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default App;