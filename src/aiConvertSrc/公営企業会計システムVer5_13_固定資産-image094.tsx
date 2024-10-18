import React from 'react';
import styled from '@emotion/styled';

// 資産番号の型定義
type AssetNumberProps = {
  value: string;
};

// 資産番号コンポーネント
const AssetNumber: React.FC<AssetNumberProps> = ({ value }) => {
  return <AssetNumberWrapper>{value}</AssetNumberWrapper>;
};

// 資産番号のスタイル
const AssetNumberWrapper = styled.span`
  display: inline-block;
  padding: 4px 8px;
  background-color: #f0f0f0;
  border-radius: 4px;
  font-size: 14px;
`;

// 会計区分コードの型定義
type AccountCodeProps = {
  code: string;
  name: string;
};

// 会計区分コードコンポーネント
const AccountCode: React.FC<AccountCodeProps> = ({ code, name }) => {
  return (
    <AccountCodeWrapper>
      <AccountCodeValue>{code}</AccountCodeValue>
      <AccountCodeName>{name}</AccountCodeName>
    </AccountCodeWrapper>
  );
};

// 会計区分コードのスタイル
const AccountCodeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const AccountCodeValue = styled.span`
  font-size: 14px;
`;

const AccountCodeName = styled.span`
  font-size: 12px;
  color: #666;
`;

// 日付の型定義
type DateProps = {
  value: string;
};

// 日付コンポーネント
const Date: React.FC<DateProps> = ({ value }) => {
  return <DateWrapper>{value}</DateWrapper>;
};

// 日付のスタイル
const DateWrapper = styled.span`
  font-size: 14px;
`;

// 予測固定資産照会条件の型定義
type PredictedFixedAssetSearchProps = {
  assetNumber: string;
  accountCode: string;
  accountName: string;
  acquisitionDate: string;
  depreciationRule: string;
  area: string;
  department: string;
  costCenter: string;
};

// 予測固定資産照会条件コンポーネント
const PredictedFixedAssetSearch: React.FC<PredictedFixedAssetSearchProps> = ({
  assetNumber,
  accountCode,
  accountName,
  acquisitionDate,
  depreciationRule,
  area,
  department,
  costCenter,
}) => {
  return (
    <Wrapper>
      <Row>
        <Label>資産番号</Label>
        <Value>
          <AssetNumber value={assetNumber} />
        </Value>
      </Row>
      <Row>
        <Label>会計区分コード</Label>
        <Value>
          <AccountCode code={accountCode} name={accountName} />
        </Value>
      </Row>
      <Row>
        <Label>取得年月</Label>
        <Value>
          <Date value={acquisitionDate} />
        </Value>
      </Row>
      <Row>
        <Label>減価償却法</Label>
        <Value>{depreciationRule}</Value>
      </Row>
      <Row>
        <Label>地区</Label>
        <Value>{area}</Value>
      </Row>
      <Row>
        <Label>部門</Label>
        <Value>{department}</Value>
      </Row>
      <Row>
        <Label>原価センター(予測用)</Label>
        <Value>{costCenter}</Value>
      </Row>
    </Wrapper>
  );
};

// 予測固定資産照会条件のスタイル
const Wrapper = styled.div`
  padding: 16px;
  background-color: #f5f5f5;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Label = styled.div`
  width: 150px;
  font-weight: bold;
`;

const Value = styled.div`
  flex: 1;
`;

// 使用例
const UsageExample: React.FC = () => {
  return (
    <PredictedFixedAssetSearch
      assetNumber="9999999999"
      accountCode="予測"
      accountName="予測(名)"
      acquisitionDate="年_月"
      depreciationRule="定額"
      area="地区1"
      department="部門"
      costCenter="005"
    />
  );
};

export default UsageExample;