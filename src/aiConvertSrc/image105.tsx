import React from 'react';
import styled from 'styled-components';

// 契約管理区分を表す型定義
type ContractManagementType = '001' | '002' | '003' | '004' | '005';

// 契約管理区分の名称を表す型定義
type ContractManagementTypeName = '契約保証金' | '契約保証金に代わる担保の納付' | '金銭保証' | '履行保証保険' | '公共工事履行保証証券';

// 契約管理区分のコードと名称のマッピングを表す型定義
type ContractManagementTypeDictionary = {
  [key in ContractManagementType]: ContractManagementTypeName;
};

// コンポーネントのプロパティを表す型定義
interface ContractManagementSectionProps {
  contractManagementType: ContractManagementType;
  onContractManagementTypeChange: (type: ContractManagementType) => void;
  contractManagementNote: string;
  onContractManagementNoteChange: (note: string) => void;
}

// 契約管理区分のコードと名称のマッピング
const CONTRACT_MANAGEMENT_TYPE_DICTIONARY: ContractManagementTypeDictionary = {
  '001': '契約保証金',
  '002': '契約保証金に代わる担保の納付',
  '003': '金銭保証',
  '004': '履行保証保険',
  '005': '公共工事履行保証証券',
};

// スタイルコンポーネント
const Section = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const Radio = styled.input`
  margin-right: 5px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px;
  margin-top: 5px;
`;

const ContractManagementSection: React.FC<ContractManagementSectionProps> = ({
  contractManagementType,
  onContractManagementTypeChange,
  contractManagementNote,
  onContractManagementNoteChange,
}) => {
  return (
    <Section>
      <Title>契約管理区分種別名称</Title>
      {Object.entries(CONTRACT_MANAGEMENT_TYPE_DICTIONARY).map(([key, value]) => (
        <Label key={key}>
          <Radio
            type="radio"
            checked={contractManagementType === key}
            onChange={() => onContractManagementTypeChange(key as ContractManagementType)}
          />
          {value}
        </Label>
      ))}
      <Title>契約管理区分名称</Title>
      <Input
        type="text"
        value={contractManagementNote}
        onChange={(e) => onContractManagementNoteChange(e.target.value)}
      />
    </Section>
  );
};

// サンプルデータを用いたコンポーネントの使用例
const SampleContractManagementSection: React.FC = () => {
  const [contractManagementType, setContractManagementType] = React.useState<ContractManagementType>('001');
  const [contractManagementNote, setContractManagementNote] = React.useState<string>('契約の方法');

  return (
    <ContractManagementSection
      contractManagementType={contractManagementType}
      onContractManagementTypeChange={setContractManagementType}
      contractManagementNote={contractManagementNote}
      onContractManagementNoteChange={setContractManagementNote}
    />
  );
};

export default SampleContractManagementSection;