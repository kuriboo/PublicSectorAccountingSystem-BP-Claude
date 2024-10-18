import React from 'react';
import styled from 'styled-components';

// 団体情報のプロパティ型定義
type OrganizationInfoProps = {
  code: string;
  name: string;
  isSelected?: boolean;
};

// 対象事業情報のプロパティ型定義
type TargetBusinessInfoProps = {
  code: string;
  name: string;
  isSelected?: boolean;
};

// 決算統計事業情報設定コンポーネント
const SettlementStatisticsBusinessInfoSetting: React.FC = () => {
  // ダミーデータ
  const organizationInfo: OrganizationInfoProps = {
    code: '123456',
    name: '行政市',
  };

  const targetBusinessInfoList: TargetBusinessInfoProps[] = [
    { code: '010', name: '水道事業・簡易水道事業' },
    { code: '020', name: '工業用水道事業' },
    { code: '060', name: '病院事業' },
    { code: '171', name: '下水道事業（公共下水道）', isSelected: true },
    { code: '172', name: '下水道事業（特定公共下水道）' },
    { code: '173', name: '下水道事業（流域下水道）' },
    { code: '174', name: '下水道事業（特定環境下水道）', isSelected: true },
    { code: '175', name: '下水道事業（農業集落排水施設）' },
    { code: '176', name: '下水道事業（漁業集落排水施設）' },
    { code: '177', name: '下水道事業（林業集落排水施設）' },
    { code: '178', name: '下水道事業（簡易排水施設）' },
    { code: '179', name: '下水道事業（小規模排水処理施設）' },
    { code: '180', name: '下水道事業（特定地域排水処理施設）' },
    { code: '181', name: '下水道事業（個別排水処理施設）' },
  ];

  return (
    <Container>
      <Title>決算統計事業情報設定</Title>
      <Subtitle>令和02年度</Subtitle>
      <SectionTitle>団体情報</SectionTitle>
      <OrganizationInfoWrapper>
        <Label>団体コード</Label>
        <Text>{organizationInfo.code}</Text>
        <Label>団体名</Label>
        <Text>{organizationInfo.name}</Text>
      </OrganizationInfoWrapper>
      <SectionTitle>対象事業情報</SectionTitle>
      <TargetBusinessInfoWrapper>
        <Label>対象事業を選択してください。</Label>
        <Table>
          <thead>
            <tr>
              <TableHeader>選択</TableHeader>
              <TableHeader>事業・事業</TableHeader>
              <TableHeader>名称</TableHeader>
            </tr>
          </thead>
          <tbody>
            {targetBusinessInfoList.map((info) => (
              <tr key={info.code}>
                <TableData>
                  <input type="checkbox" defaultChecked={info.isSelected} />
                </TableData>
                <TableData>{info.code}</TableData>
                <TableData>{info.name}</TableData>
              </tr>
            ))}
          </tbody>
        </Table>
      </TargetBusinessInfoWrapper>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const OrganizationInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Label = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const Text = styled.span`
  margin-right: 20px;
`;

const TargetBusinessInfoWrapper = styled.div`
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 10px;
  text-align: left;
`;

const TableData = styled.td`
  padding: 10px;
`;

export default SettlementStatisticsBusinessInfoSetting;