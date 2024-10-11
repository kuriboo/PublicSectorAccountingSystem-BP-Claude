import React from 'react';
import styled from 'styled-components';

// 資産番号の型定義
type AssetNumberProps = {
  value: number;
};

// 資産番号コンポーネント
const AssetNumber: React.FC<AssetNumberProps> = ({ value }) => {
  return <AssetNumberWrapper>{value}</AssetNumberWrapper>;
};

// 資産番号のスタイル
const AssetNumberWrapper = styled.div`
  font-weight: bold;
`;

// 資産名称の型定義
type AssetNameProps = {
  value: string;
};

// 資産名称コンポーネント
const AssetName: React.FC<AssetNameProps> = ({ value }) => {
  return <AssetNameWrapper>{value}</AssetNameWrapper>;
};

// 資産名称のスタイル
const AssetNameWrapper = styled.div`
  font-weight: bold;
`;

// 資産情報の型定義
type AssetInfoProps = {
  assetNumber: number;
  assetName: string;
  acquisitionDate: string;
  managementDepartmentCode: string;
  disposeDate?: string;
  acquisitionAmount: number;
  currentBookValue: number;
};

// 資産情報コンポーネント
const AssetInfo: React.FC<AssetInfoProps> = ({
  assetNumber,
  assetName,
  acquisitionDate,
  managementDepartmentCode,
  disposeDate,
  acquisitionAmount,
  currentBookValue,
}) => {
  return (
    <AssetInfoWrapper>
      <AssetInfoRow>
        <AssetInfoLabel>資産番号</AssetInfoLabel>
        <AssetNumber value={assetNumber} />
      </AssetInfoRow>
      <AssetInfoRow>
        <AssetInfoLabel>資産名称</AssetInfoLabel>
        <AssetName value={assetName} />
      </AssetInfoRow>
      <AssetInfoRow>
        <AssetInfoLabel>軽微判断基準</AssetInfoLabel>
        <div>999</div>
      </AssetInfoRow>
      <AssetInfoRow>
        <AssetInfoLabel>更正後帳簿原価</AssetInfoLabel>
        <div>150,000</div>
      </AssetInfoRow>
      <Table>
        <thead>
          <tr>
            <TableHeader>管理名称</TableHeader>
            <TableHeader>管理規格名称</TableHeader>
            <TableHeader>規定数量</TableHeader>
            <TableHeader>更正後数量</TableHeader>
            <TableHeader>単位</TableHeader>
            <TableHeader>規定金額</TableHeader>
            <TableHeader>更正後金額</TableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableCell>スズキ エブリタープ</TableCell>
            <TableCell></TableCell>
            <TableCell>1.00</TableCell>
            <TableCell>0.00 台</TableCell>
            <TableCell>1,300,000</TableCell>
            <TableCell>0</TableCell>
          </tr>
        </tbody>
      </Table>
      <AssetInfoRow>
        <AssetInfoLabel>管理明細コード</AssetInfoLabel>
        <div>001069 スズキ エブリタープ</div>
      </AssetInfoRow>
      <AssetInfoRow>
        <AssetInfoLabel>管理規格コード</AssetInfoLabel>
        <div>999991</div>
      </AssetInfoRow>
      <AssetInfoRow>
        <AssetInfoLabel>規定数量</AssetInfoLabel>
        <div>1.00</div>
      </AssetInfoRow>
      <AssetInfoRow>
        <AssetInfoLabel>単位</AssetInfoLabel>
        <div>台</div>
      </AssetInfoRow>
      <AssetInfoRow>
        <AssetInfoLabel>規定金額</AssetInfoLabel>
        <div>1,300,000</div>
      </AssetInfoRow>
      <AssetInfoRow>
        <AssetInfoLabel>更正後数量</AssetInfoLabel>
        <div>0</div>
      </AssetInfoRow>
      <AssetInfoRow>
        <AssetInfoLabel>更正後金額</AssetInfoLabel>
        <div>0</div>
      </AssetInfoRow>
    </AssetInfoWrapper>
  );
};

// 資産情報のスタイル
const AssetInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const AssetInfoRow = styled.div`
  display: flex;
  gap: 8px;
`;

const AssetInfoLabel = styled.div`
  width: 150px;
  font-weight: bold;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 4px;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
`;

const TableCell = styled.td`
  padding: 4px;
  border: 1px solid #ccc;
`;

// サンプルデータ
const sampleData: AssetInfoProps = {
  assetNumber: 7480700,
  assetName: 'スズキ エブリタープ',
  acquisitionDate: '2023/04/01',
  managementDepartmentCode: '999',
  acquisitionAmount: 150000,
  currentBookValue: 0,
};

// 使用例
const AssetInfoSample: React.FC = () => {
  return <AssetInfo {...sampleData} />;
};

export default AssetInfoSample;