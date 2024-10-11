import React from 'react';
import styled from '@emotion/styled';

// 固定資産異動情報の型定義
type AssetTransferInfo = {
  assetNumber: string;
  assetName: string;
  assetType: string;
  location: string;
  movementDate: string;
  reason: string;
  department: string;
  person: string;
};

// 経費異動の型定義
type ExpenseMovement = {
  creditLimit: number;
  interestRate: number;
  percentageCommission: number;
  flatCommission: number;
  monthlyFee: number;
  changeDate: Date | null;
  expirationMonth: number | null;
};

// 固定資産情報コンポーネントのPropsの型定義
type AssetInfoProps = {
  info: AssetTransferInfo;
  expenseMovement: ExpenseMovement;
};

// スタイル定義
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.span`
  font-weight: bold;
  margin-right: 8px;
`;

const Value = styled.span`
  flex: 1;
`;

// 固定資産情報コンポーネント
const AssetInfo: React.FC<AssetInfoProps> = ({ info, expenseMovement }) => {
  // 日付をフォーマットする関数
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
  };

  return (
    <Container>
      <Title>固定資産異動情報</Title>
      <InfoGrid>
        <InfoItem>
          <Label>資産番号:</Label>
          <Value>{info.assetNumber}</Value>
        </InfoItem>
        <InfoItem>
          <Label>資産名称:</Label>
          <Value>{info.assetName}</Value>
        </InfoItem>
        <InfoItem>
          <Label>所在地:</Label>
          <Value>{info.location}</Value>
        </InfoItem>
        <InfoItem>
          <Label>取得年月日:</Label>
          <Value>{formatDate(info.movementDate)}</Value>
        </InfoItem>
        <InfoItem>
          <Label>備考:</Label>
          <Value>{info.reason}</Value>
        </InfoItem>
        {/* その他の情報項目を追加 */}
      </InfoGrid>

      <Title>経費異動</Title>
      <InfoGrid>
        <InfoItem>
          <Label>限度額:</Label>
          <Value>{expenseMovement.creditLimit.toLocaleString()}円</Value>
        </InfoItem>
        <InfoItem>
          <Label>経過年数:</Label>
          <Value>{expenseMovement.interestRate}年</Value>
        </InfoItem>
        <InfoItem>
          <Label>償却完了率:</Label>
          <Value>{expenseMovement.percentageCommission}%</Value>
        </InfoItem>
        <InfoItem>
          <Label>期間:</Label>
          <Value>
            {expenseMovement.changeDate
              ? `${expenseMovement.changeDate.getFullYear()}年${expenseMovement.changeDate.getMonth() + 1}月${expenseMovement.changeDate.getDate()}日`
              : '-'}{' '}
            〜{' '}
            {expenseMovement.expirationMonth
              ? `${expenseMovement.expirationMonth}ヶ月`
              : '-'}
          </Value>
        </InfoItem>
        {/* その他の経費異動項目を追加 */}
      </InfoGrid>
    </Container>
  );
};

// サンプルデータ
const sampleData: AssetInfoProps = {
  info: {
    assetNumber: '3630401-000',
    assetName: '固定資産',
    assetType: '機械',
    location: '本社',
    movementDate: '2023-04-30',
    reason: '記帳済み 定額法',
    department: '会計区分',
    person: '水道事業会計',
  },
  expenseMovement: {
    creditLimit: 446000,
    interestRate: 28,
    percentageCommission: 50,
    flatCommission: 220380,
    monthlyFee: 55097,
    changeDate: new Date('2023-04-01'),
    expirationMonth: 12,
  },
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>固定資産情報</h1>
      <AssetInfo {...sampleData} />
    </div>
  );
};

export default App;