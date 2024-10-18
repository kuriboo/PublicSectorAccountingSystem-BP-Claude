import React from 'react';
import styled from '@emotion/styled';

// 型定義
interface TaxPaymentData {
  date: string;
  principal: number;
  balance: number;
}

interface TaxPaymentProps {
  year: number;
  name: string;
  code: string;
  payment: string;
  guaranteeRatio: number;
  guaranteeAmount: number;
  taxPaymentData: TaxPaymentData[];
  executionRate: number;
}

// スタイル定義
const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const InfoRow = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const InfoLabel = styled.div`
  width: 100px;
  font-weight: bold;
`;

const InfoValue = styled.div`
  flex: 1;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  background-color: #f0f0f0;
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ccc;
`;

const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #eee;
`;

const TaxPayment: React.FC<TaxPaymentProps> = ({
  year,
  name,
  code,
  payment,
  guaranteeRatio,
  guaranteeAmount,
  taxPaymentData,
  executionRate,
}) => {
  return (
    <Container>
      <Title>年度 平成{year}</Title>
      <InfoRow>
        <InfoLabel>節</InfoLabel>
        <InfoValue>{code.substring(0, 4)}</InfoValue>
      </InfoRow>
      <InfoRow>
        <InfoLabel>細節</InfoLabel>
        <InfoValue>{code.substring(4, 7)}</InfoValue>
      </InfoRow>
      <InfoRow>
        <InfoLabel>明細</InfoLabel>
        <InfoValue>{code.substring(7)}</InfoValue>
      </InfoRow>
      <InfoRow>
        <InfoLabel>執行計画準備項目</InfoLabel>
        <InfoValue>
          均等区分 個別設定
          <br />
          保留率 {guaranteeRatio}%
        </InfoValue>
      </InfoRow>
      <InfoRow>
        <InfoLabel>保留額</InfoLabel>
        <InfoValue>{guaranteeAmount.toLocaleString()}円</InfoValue>
      </InfoRow>

      <Table>
        <thead>
          <tr>
            <TableHeader>予定月</TableHeader>
            <TableHeader>予定率</TableHeader>
            <TableHeader>金額</TableHeader>
          </tr>
        </thead>
        <tbody>
          {taxPaymentData.map((data, index) => (
            <tr key={index}>
              <TableCell>{data.date}</TableCell>
              <TableCell>{data.principal}</TableCell>
              <TableCell>{data.balance.toLocaleString()}</TableCell>
            </tr>
          ))}
        </tbody>
      </Table>

      <InfoRow>
        <InfoLabel>執行予定率</InfoLabel>
        <InfoValue>{executionRate}%</InfoValue>
      </InfoRow>
    </Container>
  );
};

// サンプルデータ
const sampleData: TaxPaymentProps = {
  year: 29,
  name: '町税・委託料',
  code: '0020101',
  payment: '町税管理業務委託',
  guaranteeRatio: 100.0,
  guaranteeAmount: 1689329000,
  taxPaymentData: [
    { date: '2017/04', principal: 7.50, balance: 12624225 },
    { date: '2017/05', principal: 7.50, balance: 12624225 },
    { date: '2017/06', principal: 7.50, balance: 12624225 },
    { date: '2017/07', principal: 7.50, balance: 12624225 },
    { date: '2017/08', principal: 7.50, balance: 12624225 },
    { date: '2017/09', principal: 7.50, balance: 12624225 },
    { date: '2017/10', principal: 7.50, balance: 12624225 },
    { date: '2017/11', principal: 7.50, balance: 12624225 },
    { date: '2017/12', principal: 7.50, balance: 12624225 },
    { date: '2018/01', principal: 7.50, balance: 12624225 },
    { date: '2018/02', principal: 7.50, balance: 12624225 },
    { date: '2018/03', principal: 7.50, balance: 12624226 },
  ],
  executionRate: 190.00,
};

// 使用例
const TaxPaymentExample: React.FC = () => {
  return <TaxPayment {...sampleData} />;
};

export default TaxPaymentExample;