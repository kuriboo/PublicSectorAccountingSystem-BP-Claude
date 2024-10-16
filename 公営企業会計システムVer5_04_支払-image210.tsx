import React from 'react';
import styled from '@emotion/styled';

type Props = {
  data: {
    jyouken: string;
    motouke: string;
    kessan: number;
    riyuu: string;
    borrowing: [
      {
        date: string;
        borrowingAmt: number;
        repayDate: string;
        repayAmt: number;
        outstandingBal: number;
        repayPct: number;
        delay: number;
      }
    ];
    yotei: {
      materialCost: number;
      laborCost: number;
      grossProfit: number;
      grossProfitRatio: number; 
    },
    jisseki: {
      materialCost: number;
      laborCost: number;
      grossProfit: number;
      grossProfitRatio: number;
    }
  }
}

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f2f2f2;
  }

  tr:nth-of-type(even) {
    background-color: #f9f9f9;
  }
`;

const ProjectInfo: React.FC<Props> = ({ data }) => {
  return (
    <TableWrapper>
      <Table>
        <thead>
          <tr>
            <th colSpan={2}>決定年度</th>
            <th colSpan={2}>決定番号</th>
            <th>計</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={2}>令和{data.jyouken === '令和' ? data.jyouken.replace('令和', '') : data.jyouken.replace('平成', '')}年度</td>
            <td colSpan={2}>{data.motouke}</td>
            <td>{data.kessan}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>借入科目</th>
            <th>借入細節・明細</th>
            <th>戻り科目</th>
            <th>戻り金細節・明細</th>
            <th>納入金額</th>
            <th>戻り金額</th>
            <th>残高積算</th>
          </tr>
        </thead>
        <tbody>
          {data.borrowing.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.borrowingAmt}</td>
              <td>{item.repayDate}</td>
              <td>{item.repayAmt}</td>
              <td>{item.outstandingBal}</td>
              <td>{item.repayPct}</td>
              <td>{item.delay}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>振替内容</td>
            <td colSpan={6}>{data.riyuu}</td>
          </tr>
        </tfoot>
        <thead>
          <tr>
            <th colSpan={3}>予算</th>
            <th colSpan={3}>実績</th>
            <th rowSpan={2}>消費税額</th>
          </tr>
          <tr>
            <th>借方科目</th>
            <th>借方細節・明細</th>
            <th>貸し方科目</th>
            <th>貸し方細節・明細</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>材料費</td>
            <td>{data.yotei.materialCost}</td>
            <td>取り除証</td>
            <td>{data.jisseki.materialCost}</td>
            <td rowSpan={3}>{data.kessan * 0.1}</td>
          </tr>
          <tr>
            <td>人件費</td>
            <td>{data.yotei.laborCost}</td>
            <td>消費税等</td>
            <td>{data.jisseki.laborCost}</td>
          </tr>
          <tr>
            <td>粗利益</td>
            <td>{data.yotei.grossProfit}</td>
            <td>粗利益</td>
            <td>{data.jisseki.grossProfit}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>消費税率</td>
            <td>{(data.kessan / (data.yotei.materialCost + data.yotei.laborCost) * 100).toFixed(2)}%</td>
            <td>戻り金額</td>
            <td>{data.kessan}</td>
            <td>戻り金額</td>
            <td>{data.kessan}</td>
            <td>消費税額</td>
            <td>{data.kessan * 0.1}</td>
          </tr>
        </tfoot>
      </Table>
    </TableWrapper>
  )
}

// サンプルデータ
const sampleData = {
  jyouken: '令和03年度', 
  motouke: 'MADO170テスト_負担振込MADO170テスト_負担振込_摘要2',
  kessan: 100,
  riyuu: '',
  borrowing: [
    {
      date: '振替科目',
      borrowingAmt: 100,
      repayDate: '戻り保証金',  
      repayAmt: 100,
      outstandingBal: 100, 
      repayPct: 100,
      delay: 0,
    },
    {
      date: '控除通知1',
      borrowingAmt: 100,
      repayDate: '控除通知2',
      repayAmt: 100,
      outstandingBal: 0,
      repayPct: 100,
      delay: 100,
    }
  ],
  yotei: {
    materialCost: 100, 
    laborCost: 100,
    grossProfit: 0,
    grossProfitRatio: 0,
  },
  jisseki: {  
    materialCost: 100,
    laborCost: 100, 
    grossProfit: 0,
    grossProfitRatio: 0,
  }
}

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>プロジェクト情報</h1>
      <ProjectInfo data={sampleData} />
    </div>
  );
}

export default App;