import React from 'react';
import styled from 'styled-components';

// 管理者情報の型定義
type AdminInfo = {
  currentNumber: number;
  totalNumber: number;
};

// 管理データの型定義
type ManagementData = {
  name: string;
  managementUnit: string;
  currentValue: number;
  allowableValue: number;
  unit: string;
  currentAmount: number;
  allowableAmount: number;
};

// プロパティの型定義
type Props = {
  adminInfo: AdminInfo;
  managementData: ManagementData;
};

// スタイル定義
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 8px;
  }
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const AdminInfoArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const AdminInfoItem = styled.div`
  font-size: 16px;
`;

const TableContainer = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 24px;
`;

const TableHeader = styled.th`
  padding: 8px;
  text-align: center;
  background-color: #d0d0d0;
  border: 1px solid #c0c0c0;
  white-space: nowrap;
`;

const TableData = styled.td`
  padding: 8px;
  text-align: right;
  border: 1px solid #c0c0c0;
  white-space: nowrap;
`;

const ManagementDataArea = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ManagementDataItem = styled.div`
  flex: 1;
  padding: 8px;
  box-sizing: border-box;
`;

const ManagementDataLabel = styled.div`
  font-weight: bold;
  margin-bottom: 4px;
`;

const ManagementDataValue = styled.div`
  font-size: 18px;
`;

const ButtonArea = styled.div`
  text-align: center;
  margin-top: 24px;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
`;

// 単勝予想管理入力コンポーネント
const RaceManagementInput: React.FC<Props> = ({ adminInfo, managementData }) => {
  // 管理者情報が存在しない場合は代替テキストを表示
  const renderAdminInfo = () => {
    if (!adminInfo) {
      return <div>管理者情報がありません</div>;
    }

    return (
      <>
        <AdminInfoItem>
          現在番号: {adminInfo.currentNumber.toLocaleString()}
        </AdminInfoItem>
        <AdminInfoItem>
          異動額: {adminInfo.totalNumber.toLocaleString()}
        </AdminInfoItem>
      </>
    );
  };

  // 管理データが存在しない場合は代替テキストを表示
  const renderManagementData = () => {
    if (!managementData) {
      return <div>管理データがありません</div>;
    }

    return (
      <>
        <ManagementDataItem>
          <ManagementDataLabel>管理名称</ManagementDataLabel>
          <ManagementDataValue>{managementData.name}</ManagementDataValue>
        </ManagementDataItem>
        <ManagementDataItem>
          <ManagementDataLabel>管理規格名称</ManagementDataLabel>
          <ManagementDataValue>
            {managementData.managementUnit}
          </ManagementDataValue>
        </ManagementDataItem>
        <ManagementDataItem>
          <ManagementDataLabel>現在数量</ManagementDataLabel>
          <ManagementDataValue>
            {managementData.currentValue.toLocaleString()}
          </ManagementDataValue>
        </ManagementDataItem>
        <ManagementDataItem>
          <ManagementDataLabel>異動数量</ManagementDataLabel>
          <ManagementDataValue>
            {managementData.allowableValue}
          </ManagementDataValue>
        </ManagementDataItem>
        <ManagementDataItem>
          <ManagementDataLabel>単位</ManagementDataLabel>
          <ManagementDataValue>{managementData.unit}</ManagementDataValue>
        </ManagementDataItem>
        <ManagementDataItem>
          <ManagementDataLabel>現在金額</ManagementDataLabel>
          <ManagementDataValue>
            {managementData.currentAmount.toLocaleString()}
          </ManagementDataValue>
        </ManagementDataItem>
        <ManagementDataItem>
          <ManagementDataLabel>異動金額</ManagementDataLabel>
          <ManagementDataValue>
            {managementData.allowableAmount.toLocaleString()}
          </ManagementDataValue>
        </ManagementDataItem>
      </>
    );
  };

  return (
    <Container>
      <Title>単勝予想管理入力</Title>
      <AdminInfoArea>{renderAdminInfo()}</AdminInfoArea>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <TableHeader>管理名称</TableHeader>
              <TableHeader>管理規格名称</TableHeader>
              <TableHeader>現在数量</TableHeader>
              <TableHeader>異動数量</TableHeader>
              <TableHeader>単位</TableHeader>
              <TableHeader>現在金額</TableHeader>
              <TableHeader>異動金額</TableHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableData>{managementData.name}</TableData>
              <TableData>{managementData.managementUnit}</TableData>
              <TableData>{managementData.currentValue.toLocaleString()}</TableData>
              <TableData>{managementData.allowableValue}</TableData>
              <TableData>{managementData.unit}</TableData>
              <TableData>{managementData.currentAmount.toLocaleString()}</TableData>
              <TableData>{managementData.allowableAmount.toLocaleString()}</TableData>
            </tr>
          </tbody>
        </Table>
      </TableContainer>
      <ManagementDataArea>{renderManagementData()}</ManagementDataArea>
      <ButtonArea>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonArea>
    </Container>
  );
};

export default RaceManagementInput;

// 使用例
const sampleAdminInfo: AdminInfo = {
  currentNumber: 7365600,
  totalNumber: 235610,
};

const sampleManagementData: ManagementData = {
  name: '掲付単水器',
  managementUnit: 'φ1.3㎜',
  currentValue: 502.00,
  allowableValue: 70.00,
  unit: 'm',
  currentAmount: 1689600,
  allowableAmount: 235610,
};

const App: React.FC = () => {
  return (
    <RaceManagementInput
      adminInfo={sampleAdminInfo}
      managementData={sampleManagementData}
    />
  );
};