import React from 'react';
import styled from 'styled-components';

// 予定貸借対照表作成コンポーネントの型定義
type Props = {
  companyName?: string;
  accountingStandard?: '企業会計' | '連結会計';
  accountingPeriod?: number;
  fiscalYear?: string;
  header?: string;
  title?: string;
  subTitle?: string;
  reportName?: string;
  period?: number;
};

// スタイル定義
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 8px;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 8px;
`;

const CompanyName = styled.div`
  margin-bottom: 8px;
`;

const AccountingStandard = styled.div`
  margin-bottom: 8px;
`;

const FiscalYear = styled.div`
  margin-bottom: 16px;
`;

const FormGroup = styled.div`
  margin-bottom: 16px;

  label {
    display: block;
    margin-bottom: 4px;
  }

  input, select {
    width: 200px;
    padding: 4px;
  }
`;

const ExportButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const BalanceSheet: React.FC<Props> = ({
  companyName = '',
  accountingStandard = '企業会計',
  accountingPeriod = 3,
  fiscalYear = '',
  header = '',
  title = '',
  subTitle = '',
  reportName = '',
  period = 1,
}) => {
  return (
    <Container>
      <Title>予定貸借対照表作成</Title>
      <CompanyName>
        <label>会社名</label>
        <div>{companyName}</div>
      </CompanyName>

      <AccountingStandard>
        <label>予算制度分類</label>
        <div>{accountingStandard === '企業会計' ? '企業会計' : '連結会計'}</div>
      </AccountingStandard>

      <FiscalYear>
        <label>決算見込</label>
        <div>{fiscalYear || '令和03年11月30日'}</div>
      </FiscalYear>

      <FormGroup>
        <label>書式</label>
        <select defaultValue="A4 横">
          <option>A4 横</option>
          <option>A4 縦</option>
        </select>
      </FormGroup>

      <FormGroup>
        <label>タイトル</label>
        <input type="text" defaultValue={title} />
      </FormGroup>

      <FormGroup>
        <label>サブタイトル</label>
        <input type="text" defaultValue={subTitle} />
      </FormGroup>

      <FormGroup>
        <label>注タイトル</label>
        <input type="text" defaultValue={reportName} />
      </FormGroup>

      <FormGroup>
        <label>頁印字</label>
        <select defaultValue="する">
          <option>する</option>
          <option>しない</option>
        </select>
      </FormGroup>

      <FormGroup>
        <label>開始頁</label>
        <input type="number" defaultValue={period || 1} />
      </FormGroup>

      <ExportButton>Excel出力</ExportButton>
    </Container>
  );
};

// サンプルデータを用いた使用例
const SampleBalanceSheet = () => {
  return (
    <BalanceSheet
      companyName="令和02"
      accountingStandard="企業会計"
      accountingPeriod={3}
      fiscalYear="令和03年11月30日"
      title="貸借対照表"
      reportName="記載要求"
      period={1}
    />
  );
};

export default BalanceSheet;