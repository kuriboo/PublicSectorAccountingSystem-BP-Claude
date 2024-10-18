import React from 'react';
import styled from '@emotion/styled';

type CompanyInfo = {
  companyName: string;
  representativeName: string;
  companyAddress: string;
};

type IndividualInfo = {
  fullName: string;
  dateOfBirth: string;
  gender: '男' | '女' | '';
};

type TaxCalculationInfo = {
  taxableIncome: number;
  incomeTaxAmount: number;
  municipalTaxAmount: number;
  totalTaxAmount: number;
};

type TaxWithholdingSlipProps = {
  companyInfo: CompanyInfo;
  individualInfo: IndividualInfo;
  taxCalculationInfo: TaxCalculationInfo;
  submissionDate: string;
  slipNumber: string;
};

const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  margin-bottom: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }
`;

const TaxWithholdingSlip: React.FC<TaxWithholdingSlipProps> = ({
  companyInfo,
  individualInfo,
  taxCalculationInfo,
  submissionDate,
  slipNumber,
}) => {
  // 例外処理: 必須情報が入っていない場合は"-"を表示
  const formatInfo = (info: string) => info || '-';

  return (
    <Container>
      <Title>給与所得の源泉徴収票</Title>
      <Section>
        <SectionTitle>提出日・整理番号</SectionTitle>
        <p>提出日: {formatInfo(submissionDate)}</p>
        <p>整理番号: {formatInfo(slipNumber)}</p>
      </Section>
      <Section>
        <SectionTitle>会社情報</SectionTitle>
        <p>会社名: {formatInfo(companyInfo.companyName)}</p>
        <p>代表者名: {formatInfo(companyInfo.representativeName)}</p>
        <p>会社住所: {formatInfo(companyInfo.companyAddress)}</p>
      </Section>
      <Section>
        <SectionTitle>個人情報</SectionTitle>
        <p>氏名: {formatInfo(individualInfo.fullName)}</p>
        <p>生年月日: {formatInfo(individualInfo.dateOfBirth)}</p>
        <p>性別: {formatInfo(individualInfo.gender)}</p>
      </Section>
      <Section>
        <SectionTitle>源泉徴収税額計算</SectionTitle>
        <Table>
          <thead>
            <tr>
              <th>項目</th>
              <th>金額</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>課税対象額</td>
              <td>{taxCalculationInfo.taxableIncome.toLocaleString()}円</td>
            </tr>
            <tr>
              <td>所得税額</td>
              <td>{taxCalculationInfo.incomeTaxAmount.toLocaleString()}円</td>
            </tr>
            <tr>
              <td>住民税額</td>
              <td>{taxCalculationInfo.municipalTaxAmount.toLocaleString()}円</td>
            </tr>
            <tr>
              <td>合計税額</td>
              <td>{taxCalculationInfo.totalTaxAmount.toLocaleString()}円</td>
            </tr>
          </tbody>
        </Table>
      </Section>
    </Container>
  );
};

// サンプルデータを用いた使用例
const SampleTaxWithholdingSlip: React.FC = () => {
  const sampleData: TaxWithholdingSlipProps = {
    companyInfo: {
      companyName: '株式会社ABC',
      representativeName: '山田太郎',
      companyAddress: '東京都新宿区西新宿1-1-1',
    },
    individualInfo: {
      fullName: '佐藤花子',
      dateOfBirth: '1990-01-01',
      gender: '女',
    },
    taxCalculationInfo: {
      taxableIncome: 5000000,
      incomeTaxAmount: 1000000,
      municipalTaxAmount: 500000,
      totalTaxAmount: 1500000,
    },
    submissionDate: '令和5年10月23日',
    slipNumber: '999908',
  };

  return <TaxWithholdingSlip {...sampleData} />;
};

export default TaxWithholdingSlip;