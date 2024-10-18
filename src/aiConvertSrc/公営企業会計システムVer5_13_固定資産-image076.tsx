import React from 'react';
import styled from 'styled-components';

// 施設別固定資産一覧表作成画面のプロパティ型定義
type AssetReportProps = {
  date: string;
  facilityCode: string;
  facilityName: string;
  divisionCode: string;
  divisionName: string;
  subjectCode: string;
  subjectName: string;
  resourceNumber: number;
};

// 施設別固定資産一覧表作成画面のコンポーネント
const AssetReportScreen: React.FC<AssetReportProps> = ({
  date,
  facilityCode,
  facilityName,
  divisionCode,
  divisionName,
  subjectCode,
  subjectName,
  resourceNumber,
}) => {
  return (
    <ScreenWrapper>
      <Title>施設別固定資産一覧表作成</Title>
      <DateContainer>
        <DateLabel>作表年月日</DateLabel>
        <DateValue>{date}</DateValue>
      </DateContainer>
      <TableContainer>
        <TableHeader>
          <HeaderItem />
          <HeaderItem>固定資産科目</HeaderItem>
          <HeaderItem>固定資産科目B</HeaderItem>
        </TableHeader>
        <TableBody>
          <RowContainer>
            <RowTitle>コード</RowTitle>
            <RowValue>{facilityCode || '-'}</RowValue>
            <RowValue>{divisionCode || '-'}</RowValue>
          </RowContainer>
          <RowContainer>
            <RowTitle>名称</RowTitle>
            <RowValue>{facilityName || '-'}</RowValue>
            <RowValue>{divisionName || '-'}</RowValue>
          </RowContainer>
          <RowContainer>
            <RowTitle>施設</RowTitle>
            <RowValue>{subjectCode || '0'}</RowValue>
            <RowValue>{subjectCode || '999999'}</RowValue>
          </RowContainer>
          <RowContainer>
            <RowTitle>地区</RowTitle>
            <RowValue>{subjectName || '-'}</RowValue>
            <RowValue>{subjectName || '999999'}</RowValue>
          </RowContainer>
          <RowContainer>
            <RowTitle>資産番号</RowTitle>
            <RowValue>{resourceNumber || 0}</RowValue>
            <RowValue>{resourceNumber || 9999999999}</RowValue>
          </RowContainer>
        </TableBody>
      </TableContainer>
    </ScreenWrapper>
  );
};

// サンプルデータを用いた使用例
const SampleAssetReport = () => {
  const sampleData: AssetReportProps = {
    date: '平成29年09月12日',
    facilityCode: '00000000',
    facilityName: '施設別',
    divisionCode: '999999999',
    divisionName: '地区別',
    subjectCode: '0000',
    subjectName: '地区',
    resourceNumber: 9999999999,
  };

  return <AssetReportScreen {...sampleData} />;
};

// styled-componentsを用いたスタイリング
const ScreenWrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
`;

const DateContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

const DateLabel = styled.span`
  margin-right: 10px;
`;

const DateValue = styled.span`
  font-weight: bold;
`;

const TableContainer = styled.div`
  border: 1px solid #ccc;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr 1fr;
  font-weight: bold;
  background-color: #f0f0f0;
  border-bottom: 1px solid #ccc;
`;

const HeaderItem = styled.div`
  padding: 10px;
  text-align: center;
`;

const TableBody = styled.div`
  display: grid;
  grid-row-gap: 10px;
  padding: 10px;
`;

const RowContainer = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr 1fr;
  align-items: center;
`;

const RowTitle = styled.div`
  font-weight: bold;
`;

const RowValue = styled.div`
  padding: 5px;
  text-align: right;
`;

export default AssetReportScreen;