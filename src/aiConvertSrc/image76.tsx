import React from 'react';
import styled from 'styled-components';

// 業者データの型定義
type Vendor = {
  code: string;
  name: string;
};

// プロパティの型定義
type VendorSelectionProps = {
  fiscalYear: string;
  vendorList: Vendor[];
  onSelect: (vendor: Vendor) => void;
};

// スタイルドコンポーネント
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const VendorSelect = styled.select`
  font-size: 18px;
  padding: 10px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const FiscalYearText = styled.p`
  font-size: 18px;
`;

// 業者別指名一覧表コンポーネント
const VendorSelection: React.FC<VendorSelectionProps> = ({
  fiscalYear,
  vendorList,
  onSelect,
}) => {
  // 業者選択時のハンドラ
  const handleVendorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedVendor = vendorList.find(
      (vendor) => vendor.code === event.target.value
    );
    if (selectedVendor) {
      onSelect(selectedVendor);
    }
  };

  return (
    <Container>
      <Title>業者別指名一覧表</Title>
      <FiscalYearText>年度: {fiscalYear}</FiscalYearText>
      <VendorSelect onChange={handleVendorChange}>
        <option value="">業者を選択してください</option>
        {vendorList.map((vendor) => (
          <option key={vendor.code} value={vendor.code}>
            {vendor.name}
          </option>
        ))}
      </VendorSelect>
    </Container>
  );
};

// サンプルデータ
const sampleVendorList: Vendor[] = [
  { code: '001', name: '土木一式工事' },
  { code: '002', name: '建築一式工事' },
  { code: '003', name: '大工工事' },
  { code: '004', name: '左官工事' },
  { code: '005', name: 'とび・土工・コンクリート工事' },
];

// 使用例
const App: React.FC = () => {
  const handleVendorSelect = (vendor: Vendor) => {
    console.log('選択された業者:', vendor);
  };

  return (
    <VendorSelection
      fiscalYear="令和29年09月05日"
      vendorList={sampleVendorList}
      onSelect={handleVendorSelect}
    />
  );
};

export default App;