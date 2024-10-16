import React from 'react';
import styled from 'styled-components';

// 負担行為伺兼命令書のプロパティ型定義
type FinancialOrderProps = {
  fiscalYear: number;
  documentNo: string;
  publishedDate: string;
  paymentDeadline: string;
  sectionName: string;
  amount: number;
  taxAmount: number;
  totalAmount: number;
  footerText: string;
}

// スタイル定義
const Container = styled.div`
  width: 100%;
  padding: 16px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    max-width: 800px;
    margin: 0 auto;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 24px;
`;

const Title = styled.h2`
  font-size: 24px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 24px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }

  th {
    background: #eee;
  }
`;

const AmountTable = styled.table`
  margin-left: auto;

  th, td {
    padding: 4px 8px;
  }
`;

const Footer = styled.div`
  text-align: right;
`;

// 負担行為伺兼命令書コンポーネント
const FinancialOrder: React.FC<FinancialOrderProps> = ({
  fiscalYear,
  documentNo,
  publishedDate,
  paymentDeadline,
  sectionName,
  amount,
  taxAmount,
  totalAmount,
  footerText
}) => {
  // 表示用の日付フォーマットに変換
  const formatDate = (dateStr: string) => {
    const [year, month, day] = dateStr.split('-');
    return `${year}年${month}月${day}日`;
  };

  return (
    <Container>
      <Header>
        <Title>負担行為伺兼命令書</Title>
      </Header>
      <p>平成{fiscalYear}年度　行政市事業会計</p>
      <Table>
        <tbody>
          <tr>
            <th>所属</th>
            <th>所属</th>
            <th>起案者</th>
            <th colSpan={2}>決定期日</th>
            <th>支払予定日</th>
          </tr>
          <tr>
            <td rowSpan={3}>{sectionName}</td>
            <td>課長</td>
            <td rowSpan={3}>{publishedDate}</td>
            <td>施設係長</td>
            <td rowSpan={3}>保</td>
            <td rowSpan={3}>{paymentDeadline}</td>
          </tr>
          <tr>
            <td>専決</td>
            <td> </td>
          </tr>
          <tr>
            <td> </td>
            <td> </td>
          </tr>
        </tbody>
      </Table>

      <p>以下のとおり支出してよろしいか。</p>
      <AmountTable>
        <tbody>
          <tr>
            <th>決裁金額</th>
            <td>{amount.toLocaleString()}円</td>
          </tr>
          <tr>
            <th>本体金額</th>
            <td>{amount.toLocaleString()}円</td>
          </tr>
          <tr>
            <th>消費税額等</th>
            <td>{taxAmount.toLocaleString()}円</td>
          </tr>
          <tr>
            <th>予算現額</th>
            <td>100,000,000円</td>
          </tr>
          <tr>
            <th>負担累計</th>
            <td>1,001,000円</td>
          </tr>
          <tr>
            <th>予算残額</th>
            <td>{(100000000 - totalAmount).toLocaleString()}円</td>
          </tr>
        </tbody>
      </AmountTable>

      <Footer>{footerText}</Footer>
    </Container>
  );
};

export default FinancialOrder;

// サンプルデータを使用した表示用コンポーネント
const SampleFinancialOrder = () => {
  const sampleData: FinancialOrderProps = {
    fiscalYear: 27,
    documentNo: '27-000451-07',
    publishedDate: '平成28年 3月27日',
    paymentDeadline: '平成28年 3月27日',
    sectionName: '002事業費用',
    amount: 1000000,
    taxAmount: 100000,
    totalAmount: 1100000,
    footerText: '電子書籍購入費'
  };

  return <FinancialOrder {...sampleData} />;
};