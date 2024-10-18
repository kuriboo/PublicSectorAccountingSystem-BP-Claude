import React from 'react';
import styled from 'styled-components';

// 予定貸借対照表作成コンポーネントの型定義
interface LoanBalanceSheetProps {
  year: number;
  month: number;
  day: number;
  branch: string;
  sequence: number;
  size: number;
  totalAmount: number;
  a4Type: '縦' | '横';
  a4Direction: 'なし' | 'あり';
  subTitle: string;
  endPage: number;
  openPage: number;
}

// スタイル定義
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
  font-size: 20px;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 30px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const CheckboxGroup = styled.div`
  margin-bottom: 10px;
`;

// 予定貸借対照表作成コンポーネント
const LoanBalanceSheet: React.FC<LoanBalanceSheetProps> = ({
  year = 2023,
  month = 11,
  day = 1,
  branch = '決算見込',
  sequence = 1,
  size = 1,
  totalAmount = 1,
  a4Type = '縦',
  a4Direction = 'あり',
  subTitle = '',
  endPage = 0,
  openPage = 0,
}) => {
  // データのバリデーションチェック
  if (sequence < 0) {
    console.warn('sequenceは0以上の値を指定してください。');
    sequence = 0;
  }

  if (size <= 0) {
    console.warn('sizeは1以上の値を指定してください。');
    size = 1;
  }

  return (
    <Container>
      <Title>予定貸借対照表作成</Title>
      <Table>
        <tbody>
          <tr>
            <th>年度</th>
            <td>{`令和${year - 2018}年`}</td>
            <th>予算種別</th>
            <td>{branch}</td>
          </tr>
          <tr>
            <th>回数</th>
            <td>{sequence}</td>
            <th>金額種別</th>
            <td>見積要求</td>
          </tr>
          <tr>
            <th>作成日</th>
            <td colSpan={3}>{`令和${year - 2018}年${month}月${day}日`}</td>
          </tr>
        </tbody>
      </Table>

      <CheckboxGroup>
        <label>
          <input type="radio" checked={a4Type === '縦'} readOnly /> A4 縦
        </label>
        <label>
          <input type="radio" checked={a4Type === '横'} readOnly /> A4 横  
        </label>
      </CheckboxGroup>
      <CheckboxGroup>
        <label>
          <input type="radio" checked={a4Direction === 'なし'} readOnly /> サブタイトル なし
        </label>   
        <label>
          <input type="radio" checked={a4Direction === 'あり'} readOnly /> サブタイトル あり
        </label>
      </CheckboxGroup>
      <Table>
        <tbody>
          <tr>
            <th>ページタイトル</th>
            <td>{subTitle}</td>
          </tr>
          <tr>
            <th>閉始頁</th>
            <td>{openPage}</td>
          </tr>
        </tbody>  
      </Table>
    </Container>
  );
};

// サンプルデータを用いたコンポーネントの使用例
const SampleLoanBalanceSheet: React.FC = () => {
  return (
    <LoanBalanceSheet
      year={2023}
      month={11}
      day={1}
      branch="決算見込"
      sequence={1}
      size={1}
      totalAmount={1}
      a4Type="縦"
      a4Direction="あり"
      subTitle=""
      endPage={0}
      openPage={1}
    />
  );
};

export default SampleLoanBalanceSheet;