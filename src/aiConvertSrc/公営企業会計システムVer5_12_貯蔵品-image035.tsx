import React from 'react';
import styled from 'styled-components';

// 伝票情報のプロパティ型定義
interface SlipProps {
  date: string;
  slipNumber: string;
  customer: string;
  subject: string;
  paymentDate: string;
  deliveryDate: string;
  location: string;
  paymentMethod: string;
  memo?: string;
}

// 明細情報のプロパティ型定義
interface DetailProps {
  id: string;
  subject: string;
  quantity: string;
  unit: string;
  unitPrice: number;
  amount: number;
}

// 仮予定有出庫入力コンポーネント
const SlipEntry: React.FC<SlipProps> = ({
  date,
  slipNumber,
  customer,
  subject,
  paymentDate,
  deliveryDate,
  location,
  paymentMethod,
  memo = ''
}) => {
  return (
    <Container>
      <Header>
        <Title>仮予定有出庫入力(移動平均)</Title>
        <Date>{date}</Date>
      </Header>
      <Table>
        <tbody>
          <tr>
            <th>伝票番号</th>
            <td>{slipNumber}</td>
          </tr>
          <tr>
            <th>得意先</th>
            <td>{customer}</td>
          </tr>
          <tr>
            <th>件名</th>
            <td>{subject}</td>
          </tr>
          <tr>
            <th>入出庫日</th>
            <td>{deliveryDate}</td>
          </tr>
          <tr>
            <th>出庫番号</th>
            <td>25</td>
          </tr>
          <tr>
            <th>分類区分</th>
            <td>
              <input type="radio" name="category" value="普通" defaultChecked />
              普通 
              <input type="radio" name="category" value="立替" />
              立替 
              <input type="radio" name="category" value="社内" />
              社内 
            </td>
          </tr>
          <tr>
            <th>所属</th>
            <td>{location}</td>
          </tr>
          <tr>
            <th>伝票番号</th>
            <td>10</td>
          </tr>
          <tr>
            <th>備考</th>
            <td>{memo}</td>
          </tr>
        </tbody>
      </Table>
      <AccountingTable>
        <tbody>
          <tr>
            <th>予算現額</th>
            <td>0</td>
          </tr>
          <tr>
            <th>負担累計</th>
            <td>1,381,160</td>
          </tr>
          <tr>
            <th>負担残額</th>
            <td>-1,381,160</td>
          </tr>
          <tr>
            <th>予定累計</th>
            <td>0</td>
          </tr>
          <tr>
            <th>予定残額</th>
            <td>-1,381,160</td>
          </tr>
        </tbody>
      </AccountingTable>
      <DetailTable>
        <thead>
          <tr>
            <th>品番</th>
            <th>品名</th>
            <th>規格</th>
            <th>数量</th>
            <th>単位</th>
            <th>単価</th>
            <th>金額</th>
          </tr>
        </thead>
        <tbody>
          <DetailRow
            id="0000701015"
            subject="灰圧桶"
            quantity="φ200㎜"
            unit="1.000m"
            unitPrice={1.00}
            amount={2205960.00}
          />
        </tbody>
      </DetailTable>
      <Total>
        <div>金額合計</div>
        <div>2,205,960</div>
      </Total>
    </Container>
  );
};

// 明細行コンポーネント 
const DetailRow: React.FC<DetailProps> = ({ id, subject, quantity, unit, unitPrice, amount }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{subject}</td>
      <td>{quantity}</td>
      <td>{unit}</td>
      <td>{unitPrice.toLocaleString()}</td>
      <td>{amount.toLocaleString()}</td>
    </tr>
  );
};

// スタイリング
const Container = styled.div`
  font-family: sans-serif;
`;

const Header = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  margin-right: 1rem;
`;

const Date = styled.div`
  font-size: 0.8rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;

  th {
    background: #eee;
    border: 1px solid #ccc;
    padding: 0.5rem;
    text-align: left;
    white-space: nowrap;
  }

  td {
    border: 1px solid #ccc;
    padding: 0.5rem;
  }
`;

const AccountingTable = styled(Table)`
  float: right;
  width: auto; 
  margin-left: 2rem;
`;

const DetailTable = styled(Table)`
  clear: both;

  th {
    text-align: center;
  }

  td {
    text-align: right;
  }
`;

const Total = styled.div`
  text-align: right;
  > div {
    display: inline-block;
    margin-left: 1rem;
  }
`;

// サンプルデータを用いた表示例
const App: React.FC = () => {
  return (
    <SlipEntry
      date="平成29年09月05日"
      slipNumber="000001"
      customer="㈱得意先A"
      subject="平成29年度 ○○工事"
      deliveryDate="平成29年09月05日"
      paymentDate="平成30年06月25日"
      location="保管場所"
      paymentMethod="振込"
    />
  );
};

export default App;