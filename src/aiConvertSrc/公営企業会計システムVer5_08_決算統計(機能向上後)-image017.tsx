import React from 'react';
import styled from 'styled-components';

// 企業情報の型定義
type CompanyInfo = {
  name: string;
  address: string;
  business: string;
};

// 決算統計施設情報設定コンポーネントのプロパティ型定義
type SettlementStatisticsProps = {
  companyInfo: CompanyInfo;
  fiscalYear: string;
  startDate: string;
  endDate: string;
  industry: string;
  industrialClassification: string;
  accountingStandard: string;
  company: string;
};

// スタイリング定義
const Container = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;

  @media screen and (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Select = styled.select`
  width: 200px;
  height: 30px;
  font-size: 1rem;
`;

const Option = styled.option``;

const CompanyTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;

  th, td {
    border: 1px solid #ccc;
    padding: 5px;
  }
`;

/**
 * 決算統計施設情報設定コンポーネント
 */
const SettlementStatistics: React.FC<SettlementStatisticsProps> = ({
  companyInfo,
  fiscalYear,
  startDate,
  endDate,
  industry,
  industrialClassification,
  accountingStandard,
  company,
}) => {
  return (
    <Container>
      <Title>決算統計施設情報設定</Title>
      <FormGroup>
        <Label>会計</Label>
        <Select>
          <Option>{fiscalYear}</Option>
        </Select>
        <Label>訂正</Label>
        <Select>
          <Option>{startDate}</Option>
        </Select>
        <Label>削除</Label>
        <Select>
          <Option>{endDate}</Option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>決算統計処理年度</Label>
        <Select>
          <Option>{fiscalYear}</Option>
        </Select>
        <Label>業種・事業</Label>
        <Select>
          <Option>{industry}</Option>
        </Select>
        <Label>水道事業・簡易水道事業</Label>
        <Select>
          <Option>{industrialClassification}</Option>
        </Select>
      </FormGroup>
      <CompanyTable>
        <thead>
          <tr>
            <th>施設コード</th>
            <th>名称</th>
            <th>略名</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>001</td>
            <td>{companyInfo.name}</td>
            <td>{companyInfo.address}</td>
          </tr>
        </tbody>
      </CompanyTable>
    </Container>
  );
};

export default SettlementStatistics;

// 使用例
const App: React.FC = () => {
  const companyInfo: CompanyInfo = {
    name: '上水道',
    address: '上水道',
    business: '上水道事業',
  };

  return (
    <SettlementStatistics
      companyInfo={companyInfo}
      fiscalYear="令和03年11月23日"
      startDate="令和02年"
      endDate="令和02年"
      industry="水道事業"
      industrialClassification="簡易水道事業"
      accountingStandard="企業"
      company="上水道"
    />
  );
};