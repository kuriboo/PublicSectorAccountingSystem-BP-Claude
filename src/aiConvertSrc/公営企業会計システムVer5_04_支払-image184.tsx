import React from 'react';
import styled from '@emotion/styled';

// 予算の型定義
type BudgetProps = {
  initial: string;
  used: string;
  remaining: string;
};

// 明細の型定義
type DetailProps = {
  date: string;
  item: string;
  section: string;
  summary: string;
  amount: string;
};

// コンポーネントのPropsの型定義
type SupportAllowanceSystemProps = {
  applicationNumber: string;
  totalAmount: string;
  applicationDate: string;
  applicant: string;
  budget: BudgetProps;
  details: DetailProps[];
};

// スタイル定義
const Wrapper = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  margin: 0;
`;

const SummaryTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }
`;

const DetailsTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }
`;

const SupportAllowanceSystem: React.FC<SupportAllowanceSystemProps> = ({
  applicationNumber,
  totalAmount,
  applicationDate,
  applicant,
  budget,
  details,
}) => {
  return (
    <Wrapper>
      <Header>
        <Title>支出予算差引簿(予定額)照会</Title>
        <div>
          <div>行政市水道事業会計</div>
          <div>予算・会計担当 ぎょうせい太郎</div>
          <div>平成29年08月29日</div>
        </div>
      </Header>

      <SummaryTable>
        <tbody>
          <tr>
            <th>所属</th>
            <td>{budget.initial || '000000'}</td>
            <th>~</th>
            <td>{budget.used || '9999999'}</td>
          </tr>
          <tr>
            <th>節</th>
            <td colSpan={3}>0040 - 水道管布設工事</td>
          </tr>
          <tr>
            <th>細節</th>
            <td colSpan={3}>0001 - 水道管布設工事</td>
          </tr>
          <tr>
            <th>明細</th>
            <td colSpan={3}>0004 - 整備費</td>
          </tr>
        </tbody>
      </SummaryTable>

      <table>
        <tbody>
          <tr>
            <th>予算額</th>
            <td>{budget.initial || '0'}</td>
          </tr>
          <tr>
            <th>負担額</th>
            <td>{budget.used || '0'}</td>
          </tr>
          <tr>
            <th>負担残額</th>
            <td>{budget.remaining || '0'}</td>
          </tr>
        </tbody>
      </table>

      <DetailsTable>
        <thead>
          <tr>
            <th>日</th>
            <th>伝票</th>
            <th>摘要</th>
            <th>予定番号</th>
            <th>予定額</th>
            <th>負担番号</th>
            <th>負担額</th>
            <th>府単事業</th>
            <th>契約番号</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail, index) => (
            <tr key={index}>
              <td>{detail.date}</td>
              <td>{detail.item}</td>
              <td>{detail.summary}</td>
              <td>{detail.section}</td>
              <td>{detail.amount}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </DetailsTable>
    </Wrapper>
  );
};

// サンプルデータ
const sampleData: SupportAllowanceSystemProps = {
  applicationNumber: '000000',
  totalAmount: '890,000',
  applicationDate: '平成29年08月29日',
  applicant: '予算・会計担当 ぎょうせい太郎',
  budget: {
    initial: '000000',
    used: '9999999',
    remaining: '890,000',
  },
  details: [
    {
      date: '29',
      item: '予定支出負担',
      summary: '水道管布設工事事業者選定委員会',
      section: '79',
      amount: '690,000',
    },
    {
      date: '29',
      item: '予定支出負担',
      summary: '技定総合支援工事事業者選定委員会',
      section: '80', 
      amount: '10,000',
    },
    {
      date: '29',
      item: '予定支出負担',
      summary: '機器管理費',
      section: '81',
      amount: '100,000',
    },
    {
      date: '29',
      item: '予定支出負担',
      summary: '機器整備費',
      section: '82',
      amount: '100,000',
    },
  ],
};

// サンプルコンポーネント
const SampleComponent: React.FC = () => {
  return <SupportAllowanceSystem {...sampleData} />;
};

export default SampleComponent;