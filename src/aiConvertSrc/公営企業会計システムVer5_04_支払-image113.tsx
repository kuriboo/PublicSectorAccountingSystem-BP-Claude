以下はNext.js + TypeScriptで実装した公益企業登録システムのコンポーネントです。

import React from 'react';
import styled from 'styled-components';

// 受取人力のプロパティ型定義
interface RecipientProps {
  name: string;
  postalCode1: string;
  postalCode2: string;
  address: string;
  tel1: string;
  tel2: string;
  tel3: string;
  isCopyResidence?: boolean;
}

// 所得のプロパティ型定義 
interface IncomeProps {
  from: string;
  to: string;
  type: '給与' | '年金' | 'その他';
  amount: number;
}

// 勤務先のプロパティ型定義
interface WorkplaceProps {
  name: string;
  postalCode1: string; 
  postalCode2: string;
  address: string;
  tel1: string;
  tel2: string;
  tel3: string;
  isCopyResidence?: boolean;
}

// 明細テーブルのプロパティ型定義
interface DetailTableProps {
  items: {
    id: number;
    date: string;
    hospital: string;
    amount: number;
    breakdown1: string;
    breakdown2: string;
  }[];
}

// 受取人力コンポーネント
const Recipient: React.FC<RecipientProps> = ({
  name,
  postalCode1,
  postalCode2,
  address,
  tel1,
  tel2, 
  tel3,
  isCopyResidence = false,
}) => {
  return (
    <div>
      <label>
        氏名:
        <input type="text" value={name} />  
      </label>
      <label>
        郵便番号:
        <input type="text" value={postalCode1} /> - <input type="text" value={postalCode2} />
      </label>
      <label>
        住所:
        <input type="text" value={address} />
      </label>
      <label>
        電話番号:
        <input type="text" value={tel1} /> - <input type="text" value={tel2} /> - <input type="text" value={tel3} />  
      </label>
      {/* 居住地をコピーするかのチェックボックス */}
      <label>
        <input type="checkbox" checked={isCopyResidence} />
        居住地をコピー
      </label>
    </div>
  );
};

// 所得コンポーネント
const Income: React.FC<IncomeProps> = ({ from, to, type, amount }) => {
  return (
    <div>
      <label>
        期間: 
        <input type="text" value={from} /> 〜 <input type="text" value={to} />
      </label>
      <label>
        区分:
        <select value={type}>
          <option value="給与">給与</option>
          <option value="年金">年金</option>
          <option value="その他">その他</option>
        </select>
      </label>
      <label>
        金額:
        <input type="number" value={amount} />  
      </label>
    </div>
  );
};

// 勤務先コンポーネント
const Workplace: React.FC<WorkplaceProps> = ({
  name,
  postalCode1,
  postalCode2,
  address,
  tel1,
  tel2,
  tel3,
  isCopyResidence = false,  
}) => {
  return (
    <div>
      <label>
        名称:
        <input type="text" value={name} />
      </label>
      <label>
        郵便番号:
        <input type="text" value={postalCode1} /> - <input type="text" value={postalCode2} />
      </label> 
      <label>
        所在地:
        <input type="text" value={address} />
      </label>
      <label>  
        電話番号:
        <input type="text" value={tel1} /> - <input type="text" value={tel2} /> - <input type="text" value={tel3} />
      </label>
      {/* 本人住所に同じかのチェックボックス */}
      <label>
        <input type="checkbox" checked={isCopyResidence} />
        本人住所に同じ  
      </label>
    </div>
  );  
};

// 明細テーブルコンポーネント 
const DetailTable: React.FC<DetailTableProps> = ({ items }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>選定</th>
          <th>適用区分</th>
          <th>決裁</th>
          <th>受払先</th>
          <th>摘要</th>
          <th>決定額</th> 
          <th>支払確定月</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td><input type="checkbox" /></td>
            <td>{item.id}</td>
            <td>0</td>
            <td>{item.hospital}</td>
            <td>{item.breakdown1}<br />{item.breakdown2}</td>
            <td>{item.amount.toLocaleString()}円</td>
            <td>{item.date}</td>
          </tr>
        ))}
      </tbody>  
    </table>
  );
};

// サンプルデータ
const sampleData = {
  recipient: {
    name: '令和04年03月01日',
    postalCode1: '000',
    postalCode2: '0000',
    address: '東京都新宿区西新宿1-1-1',
    tel1: '03',
    tel2: '1234',
    tel3: '5678',
  },
  income: {
    from: '令和04年03月01日',
    to: '令和04年03月31日',
    type: '給与',
    amount: 300000,
  },
  workplace: {
    name: '株式会社サンプル',
    postalCode1: '123', 
    postalCode2: '4567',
    address: '東京都渋谷区1-2-3', 
    tel1: '03',
    tel2: '9876', 
    tel3: '5432',
  },
  details: [
    {
      id: 7,
      date: '04/03/30',
      hospital: '農業集落排水事業 テストシナリオ15',
      amount: 15000,  
      breakdown1: '下水道施設特別会計',
      breakdown2: 'テストシナリオ20',
    },
    {
      id: 11,
      date: '04/03/30', 
      hospital: '農業集落排水施設 テストシナリオ73',  
      amount: 30000,
      breakdown1: 'せよう臼い',
      breakdown2: '出納院返済テストシナリオ73',
    },
  ],
};

// サンプルコンポーネント
const SampleComponent = () => {
  return (
    <div>
      <h2>受取人力</h2>
      <Recipient {...sampleData.recipient} />
      <h2>所得</h2>  
      <Income {...sampleData.income} />
      <h2>勤務先</h2>
      <Workplace {...sampleData.workplace} />
      <h2>決定調書</h2>
      <DetailTable items={sampleData.details} />
    </div>
  );
};

export default SampleComponent;

// スタイリング
const Input = styled.input`
  padding: 5px;
  margin-bottom: 10px;
`;

const Select = styled.select` 
  padding: 5px;
  margin-bottom: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ccc;  
    padding: 5px;
  }

  th {
    background: #f0f0f0; 
  }

  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
`;