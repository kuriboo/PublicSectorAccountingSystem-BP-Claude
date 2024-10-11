import React from 'react';
import styled from '@emotion/styled';

// 負担行為伺兼命令書のプロパティ型定義
type KatanGyoIToiKenMeiReishoProps = {
  fiscalYear: number; // 年度
  documentNo: string; // 文書番号
  publishDate: Date; // 決定年月日
  effectiveDate: Date; // 支払予定日
  expirationDate: Date; // 支払期限日
  businessType: string; // 事務種類
  businessContent: string; // 業務内容
  expenses: { // 費用明細
    category: string; // 費目
    code: string; // 節・細節・細々節
    detail: string; // 内訳
    amount: number; // 金額
  }[];
  totalAmount: number; // 負担累計
  balance: number; // 予算残額
  contractor: string; // 予算所属
  requester: string; // 検証用
};

// 負担行為伺兼命令書のコンポーネント
const KatanGyoIToiKenMeiReisho: React.FC<KatanGyoIToiKenMeiReishoProps> = ({
  fiscalYear,
  documentNo,
  publishDate,
  effectiveDate,
  expirationDate,
  businessType,
  businessContent,
  expenses,
  totalAmount,
  balance,
  contractor,
  requester,
}) => {
  // 日付のフォーマット
  const formatDate = (date: Date) => `${date.getFullYear()}年 ${date.getMonth() + 1}月${date.getDate()}日`;

  return (
    <Container>
      <Header>
        <Title>負担行為伺兼命令書</Title>
        <DocumentNo>決定№. {documentNo}</DocumentNo>
        <FiscalYear>負担№. {fiscalYear}-000413</FiscalYear>
      </Header>
      <Table>
        <thead>
          <tr>
            <th>所属</th>
            <th>所属</th>
            <th>起案者</th>
            <th colSpan={2}>決定処理日</th>
            <th colSpan={2}>支払予定日</th>
            <th colSpan={2}>支払期限日</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>管理者</td>
            <td>課長</td>
            <td>業務係長</td>
            <td colSpan={2}>{formatDate(publishDate)}</td>
            <td colSpan={2}>{formatDate(effectiveDate)}</td>
            <td colSpan={2}>{formatDate(expirationDate)}</td>
          </tr>
          <tr>
            <td colSpan={3}>以下のとおり支出してよろしいか。</td>
            <td>検</td>
            <td>収</td>
            <td>日</td>
            <td>平成</td>
            <td>年</td>
            <td>月</td>
            <td>日</td>
          </tr>
        </tbody>
      </Table>
      <ExpenseDetails>
        <div>款 002 事業費用</div>
        <div>項 01 営業費用</div>
        <div>目 01 ○○事業</div>
        <div>節 13 印刷製本費</div>
        <div>細節 0001 印刷製本費</div>
        <div>細々節 0001 電子書籍費</div>
      </ExpenseDetails>
      <BusinessTypeContent>
        <div>事 業 所 属 {businessType}</div>
        <div>摘要 {businessContent}</div>
      </BusinessTypeContent>
      <ExpenseTable>
        <thead>
          <tr>
            <th>決 裁 金 額</th>
            <td>{totalAmount}円</td>
          </tr>
          <tr>
            <th>本 体 金 額</th>
            <td>{totalAmount}円</td>
          </tr>
          <tr>
            <th>消 費 税 額 等</th>
            <td>0円</td>
          </tr>
          <tr>
            <th>予 算 現 額</th>
            <td>{totalAmount + balance}円</td>
          </tr>
          <tr>
            <th>負 担 累 計</th>
            <td>{totalAmount}円</td>
          </tr>
          <tr>
            <th>予 算 残 額</th>
            <td>{balance}円</td>
          </tr>
          <tr>
            <th>税 区 分 課税</th>
            <td></td>
          </tr>
        </thead>
      </ExpenseTable>
      <Footer>
        <div>{contractor}</div>
        <div>電子書籍購入費</div>
      </Footer>
      <RequesterSection>予算所属 {requester}</RequesterSection>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  font-family: sans-serif;
  max-width: 800px;
  margin: 0 auto;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const DocumentNo = styled.div`
  font-size: 16px;
`;

const FiscalYear = styled.div`
  font-size: 16px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }
`;

const ExpenseDetails = styled.div`
  margin-bottom: 10px;
`;

const BusinessTypeContent = styled.div`
  margin-bottom: 10px;
`;

const ExpenseTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    width: 200px;
  }
`;

const Footer = styled.footer`
  text-align: right;
  margin-bottom: 20px;
`;

const RequesterSection = styled.div`
  text-align: right;
`;

// サンプルデータを用いた使用例
const App: React.FC = () => {
  const sampleData: KatanGyoIToiKenMeiReishoProps = {
    fiscalYear: 27,
    documentNo: '27-000451-07',
    publishDate: new Date('2016-03-27'),
    effectiveDate: new Date('2016-03-27'),
    expirationDate: new Date('2016-03-27'),
    businessType: '002事業費用',
    businessContent: '電子書籍購入費',
    expenses: [
      {
        category: '002事業費用',
        code: '01営業費用01○○事業',
        detail: '13印刷製本費0001印刷製本費0001電子書籍費',
        amount: 98999000,
      },
    ],
    totalAmount: 1001000,
    balance: 98999000,
    contractor: '検証用',
    requester: '電子書籍購入費',
  };

  return <KatanGyoIToiKenMeiReisho {...sampleData} />;
};

export default App;