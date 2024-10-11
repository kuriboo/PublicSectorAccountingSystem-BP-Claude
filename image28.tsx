import React from 'react';
import styled from 'styled-components';

// 振替伝票コンポーネントの型定義
interface TransferSlipProps {
  transferDate?: string;
  transferAmount?: number;
  accountingDate1?: string;
  accountingDate2?: string;
  accountingYear?: number;
  accountingMonth?: number;
  accountingDay?: number;
  detailsOfTransfer1?: string[];
  detailsOfTransfer2?: string[];
  totalAmount?: number;
}

// 振替伝票コンポーネント
const TransferSlip: React.FC<TransferSlipProps> = ({
  transferDate = '',
  transferAmount = 0,
  accountingDate1 = '',
  accountingDate2 = '',
  accountingYear = 0,
  accountingMonth = 0, 
  accountingDay = 0,
  detailsOfTransfer1 = [],
  detailsOfTransfer2 = [],
  totalAmount = 0,
}) => {
  return (
    <SlipContainer>
      <SlipHeader>
        <SlipTitle>振替伝票（単票）</SlipTitle>
        <SlipNumber>伝票No. 27-000043</SlipNumber>
      </SlipHeader>
      <SlipTable>
        <thead>
          <tr>
            <th>所属</th>
            <th>検証用</th>
            <th colSpan={3}>自由日1名</th>
            <th colSpan={3}>自由日2名</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>債主</td>
            <td>{transferDate}</td>
            <td colSpan={3}>平成28年 3月27日</td>
            <td>平成</td>
            <td>{accountingYear}</td>
            <td>年{accountingMonth}月{accountingDay}日</td>
            <td>起案者</td>
          </tr>
          <tr><td colSpan={9}></td></tr>
          <tr>
            <td rowSpan={6}>会計</td>
            <td colSpan={4}>借方科目<br />細部<br />明細</td>
            <td colSpan={4}>貸方科目<br />細部<br />明細</td>
            <td rowSpan={6}>金額</td>
          </tr>
          <tr><td colSpan={9}></td></tr>
          <tr>
            <td rowSpan={4} colSpan={4}>
              {detailsOfTransfer1.map((detail, index) => (
                <React.Fragment key={index}>
                  {detail}<br />
                </React.Fragment>
              ))}
            </td>
            <td rowSpan={4} colSpan={4}>
              {detailsOfTransfer2.map((detail, index) => (
                <React.Fragment key={index}>  
                  {detail}<br />
                </React.Fragment>
              ))}
            </td>
            <td rowSpan={4}>{totalAmount.toLocaleString()}円</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2}>仕訳1</td>
            <td colSpan={3}>税区分</td>
            <td colSpan={2}>仕訳2</td>
            <td colSpan={2}>資金予算区分 無</td>
          </tr>
        </tfoot>
      </SlipTable>
    </SlipContainer>
  );
};

// スタイリング
const SlipContainer = styled.div`
  width: 100%;
  padding: 16px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const SlipHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const SlipTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const SlipNumber = styled.p`
  font-size: 16px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const SlipTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
    
    @media (max-width: 768px) {
      padding: 4px;
      font-size: 12px;
    }
  }

  th {
    background-color: #f0f0f0;
  }
`;

// サンプルデータ
const sampleData: TransferSlipProps = {
  transferDate: '債証用',
  transferAmount: 80000,
  accountingDate1: '平成28年 3月27日',  
  accountingDate2: '平成27年4月1日',
  accountingYear: 27,
  accountingMonth: 4,
  accountingDay: 1,
  detailsOfTransfer1: [
    '流動資源',
    'その他流動資源',
    '仮払消費税及び地方消費税',
    '仮払消費税及び地方消費税',
    '仮払消費税及び地方消費税',   
  ],
  detailsOfTransfer2: [
    '流動負債',
    'その他流動負債',
    '仮受消費税及び地方消費税',
    '仮受消費税及び地方消費税',
    '仮受消費税及び地方消費税',
  ],
  totalAmount: 80000,
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>振替伝票サンプル</h1>
      <TransferSlip {...sampleData} />
    </div>
  );
};

export default App;