import React from 'react';
import styled from '@emotion/styled';

type AssetManagementProps = {
  assetNumber: string;
  assetName: string;
  acquisitionDate: string;
  acquisitionAmount: number;
  currentAmount: number;
  accumulatedDepreciation: number;
  depreciationMonths: number;
  assetDetails: AssetDetail[];
};

type AssetDetail = {
  accountCode: string;
  subAccountCode: string;
  assetName: string;
  managementDepartmentName: string;
  userId: string;
  quantity: number;
  amount: number;
};

const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const Label = styled.span`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  margin-left: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin-left: 10px;
`;

const AssetManagement: React.FC<AssetManagementProps> = ({
  assetNumber,
  assetName,
  acquisitionDate,
  acquisitionAmount,
  currentAmount,
  accumulatedDepreciation,
  depreciationMonths,
  assetDetails,
}) => {
  return (
    <Container>
      <Title>固定資産明細・内訳</Title>
      <div>
        <Label>資産番号:</Label> {assetNumber}
        <Label>資産名称:</Label> {assetName}
      </div>
      <Table>
        <thead>
          <tr>
            <TableHeader>異動年月日</TableHeader>
            <TableHeader>異動区分</TableHeader>
            <TableHeader>異動摘要</TableHeader>
            <TableHeader>異動金額(資産)</TableHeader>
            <TableHeader>異動金額(明細合計)</TableHeader>
            <TableHeader>異動金額帳簿原価</TableHeader>
          </tr>
        </thead>
        <tbody>
          {/* Render rows for asset movement */}
        </tbody>
      </Table>
      <Table>
        <thead>
          <tr>
            <TableHeader>名称コード</TableHeader>
            <TableHeader>現場コード</TableHeader>
            <TableHeader>管理名称</TableHeader>
            <TableHeader>管理規格名称</TableHeader>
            <TableHeader>異動数量</TableHeader>
            <TableHeader>単位</TableHeader>
            <TableHeader>異動金額</TableHeader>
          </tr>
        </thead>
        <tbody>
          {assetDetails.map((detail, index) => (
            <tr key={index}>
              <TableCell>{detail.accountCode}</TableCell>
              <TableCell>{detail.subAccountCode}</TableCell>
              <TableCell>{detail.assetName}</TableCell>
              <TableCell>{detail.managementDepartmentName}</TableCell>
              <TableCell>{detail.quantity}</TableCell>
              <TableCell></TableCell>
              <TableCell>{detail.amount}</TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        <Label>異動管理明細編集</Label>
      </div>
      <div>
        <Label>異動年月日</Label>
        <Input type="date" />
      </div>
      <div>
        <Label>管理名称</Label>
        <Input type="text" />
        <Label>異動数量</Label>
        <Input type="number" step="0.01" />
      </div>
      <div>
        <Label>単位</Label>
        <Input type="text" />
        <Label>異動金額</Label>
        <Input type="number" />
      </div>
      <div>
        <Button>確定</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </div>
    </Container>
  );
};

// Sample usage
const SampleAssetManagement: React.FC = () => {
  const sampleData: AssetManagementProps = {
    assetNumber: '4444446844',
    assetName: '管理資産_678901234567898',
    acquisitionDate: '2016-06-30',
    acquisitionAmount: 400000000,
    currentAmount: 123456789.012,
    accumulatedDepreciation: 276543210.988,
    depreciationMonths: 60,
    assetDetails: [
      {
        accountCode: '000066',
        subAccountCode: '000066',
        assetName: 'エフテスト車輌名称',
        managementDepartmentName: 'エフテスト現場名称',
        userId: '999999999',
        quantity: 1,
        amount: 123456789.012,
      },
      {
        accountCode: '000110',
        subAccountCode: '000000',
        assetName: '□',
        managementDepartmentName: '□',
        userId: '999999999',
        quantity: 1,
        amount: 123456789.012,
      },
      {
        accountCode: '000145',
        subAccountCode: '000200',
        assetName: '□',
        managementDepartmentName: '□',
        userId: '100000000',
        quantity: 1,
        amount: 2000000,
      },
    ],
  };

  return <AssetManagement {...sampleData} />;
};

export default SampleAssetManagement;