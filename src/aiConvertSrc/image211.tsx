import React from 'react';
import styled from '@emotion/styled';

type ContractDetailProps = {
  contractNumber: string;
  decisionNumber: string;
  gsb: string;
  supportProgram: string;
  usage: string;
  startDate: string;
  endDate: string;
  numberOfDays: number;
  tenantNumber: string;
  companyId: string;
  subtotal: number;
  consumptionTax: number;
  totalAmount: number;
  supportItems: Array<{
    item: string;
    category: string;
    days: number;
    tax: number;
    amount: number;
  }>;
}

const ContractDetail: React.FC<ContractDetailProps> = ({
  contractNumber,
  decisionNumber,
  gsb,
  supportProgram,
  usage,
  startDate,
  endDate,
  numberOfDays,
  tenantNumber,
  companyId,
  subtotal,
  consumptionTax,
  totalAmount,
  supportItems
}) => {
  // 入力値のチェック
  if (!contractNumber || !decisionNumber || !gsb || !supportProgram || !usage || 
      !startDate || !endDate || !numberOfDays || !tenantNumber ||
      !companyId || !subtotal || !consumptionTax || !totalAmount || !supportItems) {
    return <div>入力データが不足しています。</div>;
  }

  return (
    <Wrapper>
      <Header>支出決定詳細</Header>
      <Table>
        <tbody>
          <tr>
            <th>令和06年度</th>
            <td>{decisionNumber}</td>
            <th>GSB</th>
            <td>{gsb}</td>
          </tr>
          <tr>
            <th>支払種別</th>
            <td>一般(負担金)</td>
            <th>負担番号</th>
            <td>{contractNumber}</td>
          </tr>
          <tr>
            <th>決定処理日</th>
            <td>{startDate}</td>
            <th>自由設定内容</th>
          </tr>
          <tr>
            <th>支払回数</th>
            <td>1/1</td>  
          </tr>
          <tr>
            <th>起案所属</th>
            <td>{supportProgram}</td>
          </tr>
          <tr>
            <th>起案者</th>
            <td>高橋 太郎</td>
            <th>工事名(場所)</th>
            <td></td>
          </tr>
          <tr>
            <th>摘要</th>
            <td colSpan={3}>一般参照用/施設用給水管 10{usage}</td>
          </tr>
          <tr>
            <th>支払日</th>
            <td>{endDate}</td>
            <td>口座情報</td>
          </tr>
          <tr>  
            <th>着手年月日</th>
            <td>{startDate}</td>
            <th>預金種別</th>
            <td>銀行名</td>
          </tr>
          <tr>
            <th>納期年月日</th>
            <td>{endDate}</td>
            <th>支払先</th>
            <td>{companyId}</td>
          </tr>
          <tr>
            <th>契約年月日</th>
            <td></td>
            <th>名義人</th>
            <td>{tenantNumber}</td>
          </tr>
          <tr>
            <th>期間</th>
            <td>{numberOfDays}日間</td>
            <th>口座番号</th>
            <td></td>
          </tr>
        </tbody> 
      </Table>

      <AmountTable>
        <tbody>
          <tr>
            <th>契約方法</th>
            <td>随意契約</td>
            <th>契約保証人</th>
            <td></td>
          </tr>
          <tr>
            <th>契約日</th>  
            <td></td>
            <th>請求書番号</th>
            <td></td>
          </tr>
          <tr>
            <th>請求日</th>  
            <td>高橋 太郎</td>
            <th>支払方法</th>
            <td>口座振込</td>
          </tr>
        </tbody>
      </AmountTable>

      <AmountWrapper>
        <AmountRow>
          <AmountItem>
            <AmountLabel>合計決定額</AmountLabel>
            <AmountValue>{formatYen(totalAmount)}</AmountValue>
          </AmountItem>
          <AmountItem>
            <AmountLabel>合計本体額</AmountLabel>
            <AmountValue>{formatYen(subtotal)}</AmountValue>  
          </AmountItem>
          <AmountItem>  
            <AmountLabel>合計消費税額</AmountLabel>
            <AmountValue>{formatYen(consumptionTax)}</AmountValue>
          </AmountItem>
        </AmountRow>
        <AmountRow>
          <AmountItem>
            <AmountLabel>支払済額</AmountLabel>  
            <AmountValue>0</AmountValue>
          </AmountItem>
        </AmountRow>
        <AmountRow>  
          <AmountItem>
            <AmountLabel>差引支払額</AmountLabel>
            <AmountValue>{formatYen(totalAmount)}</AmountValue>  
          </AmountItem>
        </AmountRow>
      </AmountWrapper>

      <ItemsTable>
        <thead>
          <tr>
            <th>節</th>
            <th>細節</th>
            <th>明細</th>
            <th>税</th>
            <th>税率</th>
            <th>決定額</th>
            <th>消費税額</th>  
          </tr>
        </thead>
        <tbody>
          {supportItems.map((item, index) => (
            <tr key={index}>
              <td>節{index + 1}</td>  
              <td>{item.item}</td>
              <td>{item.category}</td> 
              <td>課</td>
              <td>10%</td>
              <td>{formatYen(item.amount)}</td>
              <td>{formatYen(item.tax)}</td>
            </tr>
          ))}
        </tbody>
      </ItemsTable>

    </Wrapper>
  );
};

// 金額のフォーマット
const formatYen = (amount: number): string => {
  return `¥${amount.toLocaleString()}`;  
};

// スタイル定義
const Wrapper = styled.div`
  padding: 16px;

  @media (max-width: 600px) {
    padding: 8px;  
  }
`;

const Header = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;

  @media (max-width: 600px) {
    font-size: 20px;
    margin-bottom: 8px;
  }  
`;

const Table = styled.table`
  width: 100%;
  margin-bottom: 24px;
  border-collapse: collapse;

  th {
    width: 20%;
    padding: 8px;
    text-align: left;
    white-space: nowrap;
    background-color: #f0f0f0;
    border: 1px solid #ddd;
  }

  td {
    padding: 8px;  
    border: 1px solid #ddd;
  }

  @media (max-width: 600px) {
    margin-bottom: 16px;
    
    th, td {
      padding: 4px;
      font-size: 12px;  
    }
  }
`;

const AmountTable = styled.table`
  width: 100%;
  margin-bottom: 16px;
  border-collapse: collapse;

  th {  
    width: 20%;
    padding: 8px;
    text-align: left;
    white-space: nowrap;
    background-color: #f0f0f0;
    border: 1px solid #ddd;
  }
  
  td {
    width: 30%;
    padding: 8px;
    border: 1px solid #ddd;  
  }

  @media (max-width: 600px) {
    margin-bottom: 8px;
    
    th, td {
      padding: 4px;
      font-size: 12px;
    }  
  }
`;

const AmountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  @media (max-width: 600px) {
    margin-bottom: 16px;  
  }  
`;

const AmountRow = styled.div`
  display: flex;

  & + & {
    margin-top: 8px;
  }

  @media (max-width: 600px) {
    flex-direction: column;    
  }
`;

const AmountItem = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 8px;
  border: 1px solid #ddd;

  & + & {
    margin-left: 8px;
  }

  @media (max-width: 600px) {
    & + & {
      margin-left: 0;
      margin-top: 8px;
    }
  }  
`;

const AmountLabel = styled.div`
  width: 200px;
  font-weight: bold;

  @media (max-width: 600px) {
    width: 120px;
    font-size: 12px;  
  }
`;

const AmountValue = styled.div`
  flex: 1;  
  text-align: right;
`;

const ItemsTable = styled.table`
  width: 100%;

  th,
  td {
    padding: 8px;
    border: 1px solid #ddd;
  }

  th {
    background-color: #f0f0f0;  
  }

  @media (max-width: 600px) {
    th,
    td {
      padding: 4px;
      font-size: 12px;
    }  
  }
`;

// サンプルデータ
const sampleData: ContractDetailProps = {
  contractNumber: '549',
  decisionNumber: 'R03第4578号',
  gsb: 'G58',  
  supportProgram: '令和06年度',
  usage: '負担金',
  startDate: '令和06年04月01日',
  endDate: '令和07年03月31日',
  numberOfDays: 10,
  tenantNumber: '0000000001',
  companyId: 'ぎょう',
  subtotal: 2000,
  consumptionTax: 200,
  totalAmount: 2200,
  supportItems: [
    {
      item: '節1',
      category: '消耗品費',
      days: 10,  
      tax: 100,
      amount: 1000,
    },
    {
      item: '節2',
      category: '消耗品費',
      days: 10,
      tax: 100,  
      amount: 1000,
    },
  ],
};

export default function App() {
  return (
    <div>
      <ContractDetail {...sampleData} />  
    </div>
  );
}