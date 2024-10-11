import React from 'react';
import styled from '@emotion/styled';

// 資産新規取得の型定義
interface AssetAcquisitionProps {
  date: string;
  subjectCode: string;
  name: string;
  purchasePrice: number;
  extraDepreciation: number;
  currentTerm: number;
  nextTerm: number;
}

// スタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  padding: 10px;
  text-align: center;
  background-color: #d0d0d0;
  border: 1px solid #c0c0c0;
`;

const TableData = styled.td`
  padding: 10px;
  text-align: right;
  border: 1px solid #c0c0c0;
`;

const Button = styled.button`
  margin: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

// AssetAcquisitionコンポーネント
const AssetAcquisition: React.FC<AssetAcquisitionProps> = ({
  date,
  subjectCode,
  name,
  purchasePrice,
  extraDepreciation,
  currentTerm,
  nextTerm,
}) => {
  return (
    <Container>
      <h2>資産新規取得</h2>
      <Table>
        <tbody>
          <tr>
            <TableHeader>日付</TableHeader>
            <TableData>{date || '-'}</TableData>
          </tr>
          <tr>
            <TableHeader>科目コード</TableHeader>
            <TableData>{subjectCode || '-'}</TableData>
          </tr>
          <tr>
            <TableHeader>科目名称</TableHeader>  
            <TableData>{name || '-'}</TableData>
          </tr>
        </tbody>
      </Table>
      <Table>
        <thead>
          <tr>
            <TableHeader>購入原価</TableHeader>
            <TableHeader>追加除却額</TableHeader>
            <TableHeader>当期除却額</TableHeader>
            <TableHeader>翌期除却額</TableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableData>{purchasePrice.toLocaleString() || 0}</TableData>
            <TableData>{extraDepreciation.toLocaleString() || 0}</TableData>
            <TableData>{currentTerm.toLocaleString() || 0}</TableData>
            <TableData>{nextTerm.toLocaleString() || 0}</TableData>
          </tr>
        </tbody>
      </Table>
      <Button>行確定</Button>
      <Button>行キャンセル</Button>
    </Container>
  );
};

// サンプルデータを用いた使用例
const SampleAssetAcquisition: React.FC = () => {
  const sampleData: AssetAcquisitionProps = {
    date: '2023-04-01',
    subjectCode: '01',
    name: '土地', 
    purchasePrice: 50000000,
    extraDepreciation: 5000000,
    currentTerm: 0,
    nextTerm: 0,
  };

  return <AssetAcquisition {...sampleData} />;
};

export default SampleAssetAcquisition;