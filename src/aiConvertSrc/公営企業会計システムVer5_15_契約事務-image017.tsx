import React from 'react';
import styled from '@emotion/styled';

// 業種コードと業種名のインターフェース
interface IndustryCode {
  code: string;
  name: string;
}

// 物品業種登録コンポーネントのプロパティ
interface ProductIndustryRegistrationProps {
  industryCodes: IndustryCode[]; // 業種コードと業種名の配列
  onSubmit: (selectedCodes: string[]) => void; // 登録ボタン押下時のイベントハンドラ
}

// 物品業種登録コンポーネント
const ProductIndustryRegistration: React.FC<ProductIndustryRegistrationProps> = ({
  industryCodes,
  onSubmit,
}) => {
  const [selectedCodes, setSelectedCodes] = React.useState<string[]>([]); // 選択された業種コード

  // 業種選択時の処理
  const handleSelectCode = (code: string) => {
    const newSelectedCodes = [...selectedCodes];
    const index = newSelectedCodes.indexOf(code);
    if (index > -1) {
      newSelectedCodes.splice(index, 1); // 既に選択されていれば削除
    } else {
      newSelectedCodes.push(code); // 選択されていなければ追加
    }
    setSelectedCodes(newSelectedCodes);
  };

  return (
    <Container>
      <Title>物品業種登録</Title>
      <Table>
        <thead>
          <tr>
            <TableHeader>業種コード</TableHeader>
            <TableHeader>業種名称</TableHeader>
            <TableHeader>選択</TableHeader>
          </tr>
        </thead>
        <tbody>
          {industryCodes.map((industry) => (
            <TableRow key={industry.code}>
              <TableData>{industry.code}</TableData>
              <TableData>{industry.name}</TableData>
              <TableData>
                <input
                  type="checkbox"
                  checked={selectedCodes.includes(industry.code)}
                  onChange={() => handleSelectCode(industry.code)}
                />
              </TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>
      <SubmitButton onClick={() => onSubmit(selectedCodes)}>登録</SubmitButton>
    </Container>
  );
};

// サンプルデータ
const sampleIndustryCodes: IndustryCode[] = [
  { code: '020', name: '事務用品' },
  { code: '030', name: 'OA機器' },
  { code: '040', name: '教材・保育用品' },
  { code: '050', name: '運動用具・果器' },
  { code: '060', name: '印刷' },
  { code: '070', name: '印刷' },
  { code: '080', name: '被服・身装品' },
  { code: '170', name: '記念品・賞品用品' },
  { code: '250', name: '家電販売' },
  { code: '260', name: '業務用電機・電子機器販売' },
];

// サンプル使用コンポーネント
const SampleUsage: React.FC = () => {
  const handleSubmit = (selectedCodes: string[]) => {
    console.log(selectedCodes);
  };

  return (
    <ProductIndustryRegistration
      industryCodes={sampleIndustryCodes}
      onSubmit={handleSubmit}
    />
  );
};

// スタイリング
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.th`
  background-color: #f0f0f0;
  padding: 10px;
  text-align: left;
  border: 1px solid #ccc;
`;

const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f9f9f9;
  }
`;

const TableData = styled.td`
  padding: 10px;
  border: 1px solid #ccc;
`;

const SubmitButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 18px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export default ProductIndustryRegistration;