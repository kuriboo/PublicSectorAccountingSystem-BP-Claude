import React from 'react';
import styled from 'styled-components';

// 業者実績保守コンポーネントのプロパティ型定義
type VendorPerformanceMaintenanceProps = {
  companyCode: string;
  departmentCode: string;
  businessPartnerCode: string;
  businessPartnerName: string;
  contractStartDate: string;
  contractEndDate: string;
  contractAmount: number;
};

// スタイルコンポーネント定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  @media (max-width: 600px) {
    max-width: 300px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-right: 10px;
  min-width: 120px;
`;

const Input = styled.input`
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Select = styled.select`
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const VendorPerformanceMaintenance: React.FC<VendorPerformanceMaintenanceProps> = ({
  companyCode,
  departmentCode,
  businessPartnerCode,
  businessPartnerName,
  contractStartDate,
  contractEndDate,
  contractAmount,
}) => {
  // 業種区分のオプション
  const businessDivisionOptions = ['008:指名競争入札', '009:その他'];

  return (
    <Container>
      <Title>業者実績保守</Title>
      <InputGroup>
        <Label>業者</Label>
        <Input type="text" value={businessPartnerCode} readOnly />
        <Input type="text" value={businessPartnerName} readOnly />
      </InputGroup>
      <InputGroup>
        <Label>業種</Label>
        <Input type="text" value="001" readOnly />
        <Input type="text" value="土木一式工事" readOnly />
      </InputGroup>
      <InputGroup>
        <Label>契約区分</Label>
        <Select>
          {businessDivisionOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </Select>
      </InputGroup>
      <InputGroup>
        <Label>指名回数</Label>
        <Input type="number" defaultValue={3} min={0} />
        <span>回</span>
      </InputGroup>
      <InputGroup>
        <Label>落札回数</Label>
        <Input type="number" defaultValue={1} min={0} />
        <span>回</span>
      </InputGroup>
      <InputGroup>
        <Label>金額</Label>
        <Input type="number" value={contractAmount} readOnly />
        <span>円</span>
      </InputGroup>
    </Container>
  );
};

// サンプルデータを使用したコンポーネントの使用例
const SampleUsage: React.FC = () => {
  const sampleData: VendorPerformanceMaintenanceProps = {
    companyCode: '0000001111',
    departmentCode: '001',
    businessPartnerCode: '0000001111',
    businessPartnerName: 'ぎょうせい工務店',
    contractStartDate: '2023-04-01',
    contractEndDate: '2023-09-05',
    contractAmount: 123456,
  };

  return <VendorPerformanceMaintenance {...sampleData} />;
};

export default SampleUsage;