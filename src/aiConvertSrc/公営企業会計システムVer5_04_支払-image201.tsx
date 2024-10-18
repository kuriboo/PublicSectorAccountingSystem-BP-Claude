import React from 'react';
import styled from 'styled-components';

// 伝票照会画面のプロパティ型定義
type InquiryProps = {
  slipNo?: string; // 伝票番号
  startDate?: string; // 検索開始日
  endDate?: string; // 検索終了日
  receivableMethod?: string; // 入金予定日の指定方法（確定済 or 未確定）
  receivableStartDate?: string; // 入金予定開始日
  receivableEndDate?: string; // 入金予定終了日
  taxRate?: number; // 税込金額
  keyword?: string; // 摘要検索キーワード
};

// 明細行のプロパティ型定義
type DetailProps = {
  date: string; // 日付
  slipNo: string; // 伝票番号
  lineNo: number; // 行番号
  amount: number; // 金額
  summary: string; // 摘要
  tax: number; // 消費税
  accountTitle: string; // 科目
  subAccountTitle: string; // 補助科目
  dept: string; // 部門
  taxEntry: string; // 税区分
};

// スタイルコンポーネント
const Container = styled.div`
  font-size: 14px;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const FieldSet = styled.fieldset`
  border: none;
  margin-bottom: 20px;
`;

const Legend = styled.legend`
  font-weight: bold;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    border: 1px solid #ccc;
    padding: 5px;
  }

  th {
    background-color: #f0f0f0;
  }
`;

/**
 * 伝票照会画面コンポーネント
 */
const SlipInquiry: React.FC<InquiryProps> = ({
  slipNo = '',
  startDate = '',
  endDate = '',
  receivableMethod = '確定済',
  receivableStartDate = '',  
  receivableEndDate = '',
  taxRate = 0,
  keyword = ''
}) => {
  // 明細データのサンプル
  const detailData: DetailProps[] = [
    {
      date: '05/04/06',
      slipNo: '個別007',
      lineNo: 1,
      amount: 129700,
      summary: '土地賃貸料',
      tax: 0,
      accountTitle: '地代家賃',
      subAccountTitle: '賃貸料',
      dept: '管理部',
      taxEntry: '課税'
    },
    // 他のデータは省略
  ];

  return (
    <Container>
      <h2>伝票照会</h2>
      
      <FieldSet>
        <Legend>検索条件指定</Legend>
        {/* 検索条件入力フォームはここに記述 */}
      </FieldSet>
      
      <Table>
        <thead>
          <tr>
            <th>記帳日</th>
            <th>伝票</th>
            <th>行</th>  
            <th>金額</th>
            <th>摘要</th>
            <th>消費税</th>
            <th>科目</th>
            <th>補助</th>
            <th>部門</th>
            <th>税区分</th>
          </tr>
        </thead>
        <tbody>
          {detailData.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row.slipNo}</td>
              <td>{row.lineNo}</td>
              <td>{row.amount.toLocaleString()}</td>
              <td>{row.summary}</td>
              <td>{row.tax}</td>
              <td>{row.accountTitle}</td>
              <td>{row.subAccountTitle}</td>
              <td>{row.dept}</td>
              <td>{row.taxEntry}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default SlipInquiry;