// 振替処理状況一覧コンポーネント
import React from 'react';
import styled from '@emotion/styled';

// 明細テーブルのProps型定義
type DetailTableProps = {
  data: Array<{
    date: string;
    type: string;
    detail: string;
    amount: number;
    tax: number;
    fee: number;
    branch: string;
    account: string;
    number: number;
    total: number;
  }>;
};

// 明細テーブルコンポーネント
const DetailTable: React.FC<DetailTableProps> = ({ data }) => {
  return (
    <TableWrapper>
      <StyledTable>
        <thead>
          <tr>
            <th>所属</th>
            <th>振替日</th>
            <th>種別</th>
            <th>伝票区分</th>
            <th>伝票No</th>
            <th>摘要</th>
            <th>金額</th>
            <th>手数料</th>
            <th>入力額</th>
            <th>予算科目</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.branch}</td>
              <td>{row.date}</td>
              <td>{row.type}</td>
              <td>支払処理</td>
              <td>{row.number}</td>  
              <td>{row.detail}</td>
              <td>{row.amount.toLocaleString()}</td>
              <td>{row.fee}</td>
              <td>{row.tax}</td>
              <td>{row.account}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
};

// テーブルのスタイリング
const TableWrapper = styled.div`
  overflow-x: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }

  tr:nth-of-type(even) {
    background-color: #f9f9f9;
  }

  @media screen and (max-width: 600px) {
    th, td {
      display: block;
      width: 100%;
    }
    
    tr {
      border-bottom: 2px solid #ddd;
    }
  }
`;

// 振替処理状況一覧のProps型定義 
type TransferStatusProps = {
  accountNumber: string;
  fromDate: string;
  toDate: string;
  totalAmount: number;
  detailData: DetailTableProps['data'];
};

// 振替処理状況一覧コンポーネント
const TransferStatus: React.FC<TransferStatusProps> = ({
  accountNumber,
  fromDate,
  toDate,
  totalAmount,
  detailData,
}) => {
  return (
    <Wrapper>
      <Header>
        <p>
          振替口座：<span>{accountNumber}</span>
        </p>
        <p>
          期間：<span>{fromDate}</span>～<span>{toDate}</span>
        </p>
        <p>
          合計金額：<span>{totalAmount.toLocaleString()}</span>円
        </p>
      </Header>
      
      <DetailTable data={detailData} />
    </Wrapper>
  );  
};

const Wrapper = styled.div`
  padding: 16px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  
  p {
    margin: 0;
  }
  
  span {
    font-weight: bold;
  }
  
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

// サンプルデータ
const sampleData = [
  {
    date: "29/05/30", 
    type: "支払", 
    detail: "16 テスト登録",
    amount: 1000, 
    tax: 0,
    fee: 0, 
    branch: "済", 
    account: "未", 
    number: 1
  },
  {
    date: "29/05/31", 
    type: "支払", 
    detail: "17 月分手当等",
    amount: 100000, 
    tax: 1100,
    fee: 1000, 
    branch: "済", 
    account: "未",
    number: 2
  },
  // ...他のデータ
];

// 使用例
const TransferStatusSample = () => {
  return (
    <TransferStatus
      accountNumber="0000000"
      fromDate="平成29年04月01日"
      toDate="平成30年03月31日"
      totalAmount={999999999999}
      detailData={sampleData}
    />
  );
};

export default TransferStatusSample;