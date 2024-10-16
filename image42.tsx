import React from 'react';
import styled from '@emotion/styled';

// 契約方法の選択肢
const contractMethods = ['随意契約', '企画競争・公募', '競争入札'] as const;
type ContractMethod = typeof contractMethods[number];

// プロパティの型定義
type ContractSelectorProps = {
  selectedMethod: ContractMethod;
  onMethodChange: (method: ContractMethod) => void;
};

// コンポーネントのスタイリング
const SelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const SelectorLabel = styled.label`
  font-size: 14px;
  
  @media (min-width: 768px) {
    margin-right: 16px;
  }
`;

const SelectorSelect = styled.select`
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  
  &:focus {
    border-color: #0070f3;
  }
`;

// 契約方法選択コンポーネント
const ContractSelector: React.FC<ContractSelectorProps> = ({ selectedMethod, onMethodChange }) => {
  // 契約方法変更時のハンドラ
  const handleMethodChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value as ContractMethod;
    onMethodChange(selectedValue);
  };

  return (
    <SelectorContainer>
      <SelectorLabel htmlFor="contractMethod">契約方法</SelectorLabel>
      <SelectorSelect id="contractMethod" value={selectedMethod} onChange={handleMethodChange}>
        {contractMethods.map((method) => (
          <option key={method} value={method}>
            {method}
          </option>
        ))}
      </SelectorSelect>
    </SelectorContainer>
  );
};

// サンプルデータと使用例
const SampleUsage: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = React.useState<ContractMethod>('随意契約');

  const handleMethodChange = (method: ContractMethod) => {
    setSelectedMethod(method);
  };

  return (
    <div>
      <h2>契約方法選択サンプル</h2>
      <ContractSelector selectedMethod={selectedMethod} onMethodChange={handleMethodChange} />
      <p>選択された方法: {selectedMethod}</p>
    </div>
  );
};

export default ContractSelector;