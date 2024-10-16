import React from 'react';
import styled from 'styled-components';

// 特定収入科目設定画面のプロパティ型定義
type IncomeItemSettingProps = {
  companyYear: string; // 会計年度
  startingDate: string; // 予算編成開始日
  fiscalArea: string; // 予算編成区分
  isIncludeTax: boolean; // 特例的未収(税区分:不課税)に特定収入が含まれるかどうか
  isIncludeInternalSales: boolean; // 特例的未収金に借入金の増減に充てられた補助金が含まれるかどうか
};

// 特定収入科目設定画面コンポーネント
const IncomeItemSetting: React.FC<IncomeItemSettingProps> = ({
  companyYear,
  startingDate,
  fiscalArea,
  isIncludeTax,
  isIncludeInternalSales,
}) => {
  return (
    <Container>
      <Title>特定収入科目設定</Title>
      <InfoText>
        前回設定した、特定収入が含まれる科目をそのまま引き継いで設定します。
        変更が必要な場合は、特定収入科目設定科目別修正から変更してください。
      </InfoText>
      <ItemArea>
        <ItemLabel>会計年度</ItemLabel>
        <ItemValue>{companyYear || '-'}</ItemValue>
      </ItemArea>
      <ItemArea>
        <ItemLabel>予算編成区分</ItemLabel>
        <ItemValue>{fiscalArea || '-'}</ItemValue>
      </ItemArea>
      <CheckboxArea>
        <CheckboxLabel>
          <Checkbox type="checkbox" checked={isIncludeTax} readOnly />
          特例的未収(税区分:不課税)に特定収入が含まれる
        </CheckboxLabel>
        <CheckboxLabel>
          <Checkbox type="checkbox" checked={isIncludeInternalSales} readOnly />
          特例的未収金に借入金の増減に充てられた補助金が含まれる
        </CheckboxLabel>
      </CheckboxArea>
    </Container>
  );
};

// サンプルデータ
const sampleData: IncomeItemSettingProps = {
  companyYear: '令和03年度',
  startingDate: '令和02年11月25日',
  fiscalArea: '当初予算',
  isIncludeTax: true,
  isIncludeInternalSales: true,
};

// サンプル表示用コンポーネント
const SampleIncomeItemSetting: React.FC = () => {
  return <IncomeItemSetting {...sampleData} />;
};

// スタイル用コンポーネント
const Container = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  @media screen and (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const InfoText = styled.p`
  margin-bottom: 20px;
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

const ItemArea = styled.div`
  display: flex;
  margin-bottom: 10px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const ItemLabel = styled.div`
  width: 120px;
  font-weight: bold;
  @media screen and (max-width: 600px) {
    width: 100%;
    margin-bottom: 5px;
  }
`;

const ItemValue = styled.div`
  flex: 1;
`;

const CheckboxArea = styled.div`
  margin-top: 20px;
`;

const CheckboxLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

export default IncomeItemSetting;