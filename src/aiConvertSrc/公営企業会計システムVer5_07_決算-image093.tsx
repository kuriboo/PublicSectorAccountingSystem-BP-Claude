// 決算報告書コンポーネント
import React from 'react';
import styled from 'styled-components';

// 型定義
interface FinancialStatementProps {
  fiscalYear: number;
  reportType: '3月末' | '4月末' | '両方';
  reportItems: {
    q1Sales: string;
    q1SalesBudget: string;
    q1Profit: string;
    q2Sales: string;
    q2SalesBudget: string;
    q2Profit: string;
  };
  note: string;
  submissionDate: string;
  block: string;
  submissionPerson: string;
}

// スタイリング
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const RowTitle = styled.div`
  width: 200px;
  font-weight: bold;

  @media (max-width: 600px) {
    width: 100px;
  }
`;

const RowContent = styled.div`
  flex: 1;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 20px;
`;

const Table = styled.table`
  width: 100%;
  margin-bottom: 20px;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ccc;
    padding: 5px;
  }
`;

const ButtonGroup = styled.div`
  margin-top: 20px;
  text-align: center;
`;

// コンポーネント実装
const FinancialStatement: React.FC<FinancialStatementProps> = ({
  fiscalYear,
  reportType,
  reportItems,
  note,
  submissionDate,
  block,
  submissionPerson,
}) => {
  return (
    <Container>
      <Title>決算報告書</Title>
      <Row>
        <RowTitle>年度</RowTitle>
        <RowContent>平成{fiscalYear}年度</RowContent>
      </Row>
      <Row>
        <RowTitle>作表区分</RowTitle>
        <RowContent>
          <RadioGroup>
            <label>
              <input type="radio" checked={reportType === '3月末'} />
              3月末
            </label>
            <label>
              <input type="radio" checked={reportType === '4月末'} />
              4月末  
            </label>
            <label>
              <input type="radio" checked={reportType === '両方'} />
              両方
            </label>
          </RadioGroup>
        </RowContent>
      </Row>
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>1.収益的収入および支出</th>
            <th>収益</th>
            <th>費用</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>3月末サブタイトル</td>
            <td>{reportItems.q1Sales}</td>
            <td>{reportItems.q1SalesBudget}</td>
            <td>{reportItems.q1Profit}</td>
          </tr>
          <tr>
            <td>4月末サブタイトル</td>
            <td>{reportItems.q2Sales}</td>
            <td>{reportItems.q2SalesBudget}</td>
            <td>{reportItems.q2Profit}</td>
          </tr>
        </tbody>
      </Table>
      <Row>
        <RowTitle>処理概要</RowTitle>
        <RowContent>{note}</RowContent>
      </Row>
      <Row>
        <RowTitle>集計日時</RowTitle>
        <RowContent>平成{fiscalYear}年04月06日 15時29分</RowContent>
      </Row>
      <Row>
        <RowTitle>集計対象</RowTitle>
        <RowContent>ブロック</RowContent>
      </Row>
      <Row>  
        <RowTitle>集計対象団体</RowTitle>
        <RowContent>地東ブロック</RowContent>
      </Row>
      <ButtonGroup>
        <button>OK</button>
        <button>クリア</button>
        <button>終了</button>
      </ButtonGroup>
    </Container>
  );
};

export default FinancialStatement;

// 使用例
const sampleData: FinancialStatementProps = {
  fiscalYear: 29,
  reportType: '両方', 
  reportItems: {
    q1Sales: '1.収益的収入および支出',
    q1SalesBudget: '収益',
    q1Profit: '費用',
    q2Sales: '2.投資的収入および支出', 
    q2SalesBudget: '収入',
    q2Profit: '支出',
  },
  note: '指定した年度の決算報告書を各款別に作成します。',
  submissionDate: '平成30年04月06日',
  block: 'ブロック',  
  submissionPerson: '地東ブロック',
};

const App: React.FC = () => {
  return (
    <div>
      <h1>決算報告書サンプル</h1>
      <FinancialStatement {...sampleData} />
    </div>
  );  
};