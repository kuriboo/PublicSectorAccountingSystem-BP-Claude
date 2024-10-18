import React from 'react';
import styled from '@emotion/styled';

// 決算統計施設情報設定のプロパティ型定義
type SettlementStatisticsFacilitySettingsProps = {
  year: number; // 年度
  month: number; // 月
  facilityCode: string; // 施設コード
  facilityName: string; // 施設名
  businessCode: string; // 事業・事業
  accountTitle: string; // 科目
  accountTitleCode: string; // 科目コード
  onClickDelete: (code: string) => void; // 削除ボタンクリック時のイベントハンドラ
};

// 決算統計施設情報設定コンポーネント
const SettlementStatisticsFacilitySettings: React.FC<SettlementStatisticsFacilitySettingsProps> = ({
  year,
  month,
  facilityCode,
  facilityName,
  businessCode,
  accountTitle,
  accountTitleCode,
  onClickDelete,
}) => {
  // 施設コードが未指定の場合は何も表示しない
  if (!facilityCode) return null;

  return (
    <Container>
      <Title>決算統計施設情報設定</Title>
      <SettingsTable>
        <tbody>
          <tr>
            <HeaderCell>年月</HeaderCell>
            <DataCell>{`${year}年${month}月`}</DataCell>
          </tr>
          <tr>
            <HeaderCell>施設</HeaderCell>
            <DataCell>{facilityName}</DataCell>
          </tr>
          <tr>
            <HeaderCell>事業・事業</HeaderCell>
            <DataCell>{businessCode}</DataCell>
          </tr>
          <tr>
            <HeaderCell>科目</HeaderCell>
            <DataCell>{accountTitle}</DataCell>
          </tr>
        </tbody>     
      </SettingsTable>
      <DeleteButton onClick={() => onClickDelete(accountTitleCode)}>削除</DeleteButton>
    </Container>
  );
};

// サンプルデータ
const sampleData = {
  year: 2023,
  month: 11, 
  facilityCode: '001',
  facilityName: '上水道',
  businessCode: '010',
  accountTitle: '水道事業・簡易水道事業',
  accountTitleCode: '001',
};

// 使用例
const UsageExample: React.FC = () => {
  // 削除ボタンクリック時の処理
  const handleDelete = (code: string) => {
    console.log(`削除ボタンがクリックされました。科目コード: ${code}`);
  };

  return (
    <SettlementStatisticsFacilitySettings 
      year={sampleData.year}
      month={sampleData.month}
      facilityCode={sampleData.facilityCode} 
      facilityName={sampleData.facilityName}
      businessCode={sampleData.businessCode}
      accountTitle={sampleData.accountTitle}
      accountTitleCode={sampleData.accountTitleCode}
      onClickDelete={handleDelete}
    />
  );  
};

// スタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  @media (max-width: 600px) {
    padding: 8px;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 16px;
  @media (max-width: 600px) {
    font-size: 18px;
    margin-bottom: 8px;  
  }
`;

const SettingsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const HeaderCell = styled.td`
  background-color: #f0f0f0;
  padding: 8px;
  text-align: center;
  white-space: nowrap;
`;

const DataCell = styled.td`
  padding: 8px;
`;

const DeleteButton = styled.button`
  padding: 4px 8px;
  border: none;
  background-color: #ff4d4f;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export default SettlementStatisticsFacilitySettings;