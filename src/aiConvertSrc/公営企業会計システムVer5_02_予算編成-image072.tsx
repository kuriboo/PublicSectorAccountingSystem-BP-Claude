import React from 'react';
import styled from 'styled-components';

// 消費税処理マスタの型定義
type TaxMasterProps = {
  accountYear: string; // 会計年度
  taxRate: number; // 消費税率
  roundingMethod: '四捨五入' | '切り上げ' | '切り捨て'; // 端数処理方法
  startDate: string; // 適用開始日
  taxExemptSales: boolean; // 課税売上返還
  taxableExpenses: boolean; // 貸倒回収
  nonTaxableTransfer: boolean; // 非課税売上返還
  individualExemption: boolean; // 有価証券売上
  nationalExemption: boolean; // 国債現先取引譲渡
  exportExemption: boolean; // 免税売上返還
  taxExemptPurchases: boolean; // 課税仕入返還
  taxed: boolean; // 貸倒
  taxRateForReportSubmission: number; // 課税売上割合に準ずる割合
};

// スタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  max-width: 600px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 8px;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

const Label = styled.label`
  font-weight: bold;
  min-width: 150px;
`;

const Select = styled.select`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-width: 200px;
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-width: 100px;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 8px;
`;

// 消費税処理マスタコンポーネント
const TaxMaster: React.FC<TaxMasterProps> = ({
  accountYear,
  taxRate,
  roundingMethod,
  startDate,
  taxExemptSales,
  taxableExpenses,
  nonTaxableTransfer,
  individualExemption,
  nationalExemption,
  exportExemption,
  taxExemptPurchases,
  taxed,
  taxRateForReportSubmission,
}) => {
  return (
    <Container>
      <Row>
        <Label>会計年度</Label>
        <Input type="text" value={accountYear} readOnly />
      </Row>
      <Row>
        <Label>消費税率区分</Label>
        <Select value={taxRate} disabled>
          <option value={0}>標準税率</option>
          <option value={1}>軽減税率</option>
          <option value={2}>非課税</option>
        </Select>
      </Row>
      <Row>
        <Label>端数処理方法</Label>
        <Select value={roundingMethod} disabled>
          <option value="四捨五入">四捨五入</option>
          <option value="切り上げ">切り上げ</option>
          <option value="切り捨て">切り捨て</option>
        </Select>
      </Row>
      <Row>
        <Label>適用開始日</Label>
        <Input type="date" value={startDate} readOnly />
      </Row>
      <Row>
        <Checkbox checked={taxExemptSales} disabled /> 課税売上返還
      </Row>
      <Row>
        <Checkbox checked={taxableExpenses} disabled /> 貸倒回収 
      </Row>
      <Row>
        <Checkbox checked={nonTaxableTransfer} disabled /> 非課税売上返還
      </Row>
      <Row>  
        <Checkbox checked={individualExemption} disabled /> 有価証券売上
      </Row>
      <Row>
        <Checkbox checked={nationalExemption} disabled /> 国債現先取引譲渡
      </Row>
      <Row>
        <Checkbox checked={exportExemption} disabled /> 免税売上返還  
      </Row>
      <Row>
        <Checkbox checked={taxExemptPurchases} disabled /> 課税仕入返還
      </Row>
      <Row>
        <Checkbox checked={taxed} disabled /> 貸倒
      </Row>
      <Row>
        <Label>課税売上割合に準ずる割合</Label>
        <Input
          type="number"
          min={0}
          max={100}
          step={0.01}
          value={taxRateForReportSubmission}
          readOnly
        />
        %
      </Row>
    </Container>
  );
};

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  const sampleData: TaxMasterProps = {
    accountYear: '令和2年11月25日',
    taxRate: 2,
    roundingMethod: '四捨五入',
    startDate: '2022-04-01',
    taxExemptSales: true,
    taxableExpenses: true,
    nonTaxableTransfer: true,
    individualExemption: true,
    nationalExemption: true,
    exportExemption: true,
    taxExemptPurchases: true,
    taxed: true,
    taxRateForReportSubmission: 95,
  };

  return <TaxMaster {...sampleData} />;
};

export default SampleUsage;