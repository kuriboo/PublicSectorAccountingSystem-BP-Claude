import React from 'react';
import styled from 'styled-components';

// 予算管理表のプロパティの型定義
type BudgetTableProps = {
  period: string;
  targetAmount: number;
  startDate: string;
  endDate: string;
  tableData: {
    科目名称: string;
    前年度: number;
    本年度: number;
    比較: number;
  }[];
};

// 予算管理表のコンポーネント
const BudgetTable: React.FC<BudgetTableProps> = ({ period, targetAmount, startDate, endDate, tableData }) => {
  return (
    <Container>
      <Header>
        <Title>当初予算査定照会</Title>
        <Period>
          対象年度: 
          <PeriodSelect>
            <option value="過去">過去</option>
            <option value="当年">当年</option>
            <option value="来年">来年</option>
          </PeriodSelect>
        </Period>
        <AmountInput>
          予算科目: <input type="text" />
          ～ <input type="text" />
        </AmountInput>
        <Dates>
          科目レベル:
          <DateSelect>
            <option value="前">前</option>
            <option value="細節">細節</option>
            <option value="明細">明細</option>
          </DateSelect>
        </Dates>
      </Header>
      
      <TableInfo>
        {`見積要求から最終査定額までを照会できます。
査定回数は、最大5回までです。
[比較]は、[本年度-前年度]で表示します。`}
      </TableInfo>
      
      <AmountInfo>
        予算科目: <span>{`${startDate} ～ ${endDate}`}</span>
      </AmountInfo>
      
      <Table>
        <thead>
          <tr>
            <th>予算科目</th>
            <th>科目名称</th>
            <th>前年度</th>
            <th>本年度</th>
            <th>比較</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.科目名称}</td>
              <td>{row.前年度.toLocaleString()}</td>
              <td>{row.本年度.toLocaleString()}</td>
              <td>{row.比較.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      
      <Footer>
        <ClearButton>クリア</ClearButton>
        <EndButton>終了</EndButton>
      </Footer>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  font-family: 'Meiryo';
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
  font-size: 20px;
`;

const Period = styled.div`
  display: flex;
  align-items: center;
`;

const PeriodSelect = styled.select`
  margin-left: 10px;
`;

const AmountInput = styled.div`
  display: flex;
  align-items: center;

  input {
    margin: 0 5px;
  }
`;

const Dates = styled.div`
  display: flex;
  align-items: center;
`;

const DateSelect = styled.select`
  margin-left: 10px;  
`;

const TableInfo = styled.div`
  margin-bottom: 10px;
  white-space: pre-wrap;
`;

const AmountInfo = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: right;
  }

  th {
    background-color: #f0f0f0;
  }

  td:first-child {
    text-align: left;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ClearButton = styled.button`
  margin-right: 10px;
`;

const EndButton = styled.button``;

// サンプルデータ
const sampleData = {
  period: '平成29年06月09日',
  //targetAmount: 総務課予算・会計担当ぎょうせい太郎,
  startDate: '00000000000000',
  endDate: '99999999999999',
  tableData: [
    {
      科目名称: '水道料金',
      前年度: 5607664,
      本年度: 5484954,
      比較: -112800,
    },
    {
      科目名称: '冗費',
      前年度: 104326,
      本年度: 102829,
      比較: -2090,
    },
    {
      科目名称: '給水工事収益',
      前年度: 2429,
      本年度: 2380,
      比較: -49,
    },
    {
      科目名称: '給水工事収益',
      前年度: 13417,
      本年度: 13148,
      比較: -269,
    },
    {
      科目名称: '手数料',
      前年度: 340,
      本年度: 333,
      比較: -7,
    },
    {
      科目名称: '一般会計負担金',
      前年度: 2689,
      本年度: 2631,
      比較: -58,
    },
    {
      科目名称: '一般会計負担金',
      前年度: 383,
      本年度: 378,
      比較: -6,
    },
    {
      科目名称: '工事負担金',
      前年度: 6050,
      本年度: 5929,
      比較: -121,
    },
  ],
};

// 使用例
const App: React.FC = () => {
  return <BudgetTable {...sampleData} />;
};

export default App;