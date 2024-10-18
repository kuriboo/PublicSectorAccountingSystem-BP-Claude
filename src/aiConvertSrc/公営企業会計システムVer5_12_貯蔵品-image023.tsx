import React from 'react';
import styled from '@emotion/styled';

type OrderEntryProps = {
  date: string;
  customerName: string;
  customerAddress: string;
  orderNumber: string;
  productCode: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  scheduledDate: string;
  totalAmount: number;
  tableData: {
    id: string;
    itemName: string;
    specification: string;
    quantity: number;
    unit: string;
    unitPrice: number;
    price: number;
  }[];
}

const OrderEntry: React.FC<OrderEntryProps> = ({
  date,
  customerName, 
  customerAddress,
  orderNumber,
  productCode,
  quantity,
  unitPrice,
  totalPrice,
  scheduledDate,
  totalAmount,
  tableData,
}) => {
  return (
    <Container>
      <Title>新規出庫入力(移動平均)</Title>
      <DateBlock>
        <Label>出庫年月日</Label>
        <span>{date}</span>
      </DateBlock>
      <Row>
        <TextInput>
          <Label>出庫番号</Label>
          <span>{orderNumber}</span>
        </TextInput>
        <TextInput>
          <Label>入出庫番号</Label>
          <span>{productCode}</span>
        </TextInput>
      </Row>
      <RadioRow>
        <Label>予定・計上</Label>
        <RadioButton type="radio" name="status" />
        <RadioLabel>予定</RadioLabel>
        <RadioButton type="radio" name="status" />
        <RadioLabel>計上</RadioLabel>
        <RadioButton type="radio" name="status" />
        <RadioLabel>削除</RadioLabel>
      </RadioRow>
      <Row>
        <TextInput>
          <Label>所属部所</Label>
          <span>{customerName}</span>
        </TextInput>
      </Row>
      <SectionLabel>出庫区分</SectionLabel>
      <Row>
        <TextInput>
          <Label>工事名場所</Label>
          <span>{customerAddress}</span>
        </TextInput>
      </Row>
      <SummaryBlock>
        <div>
          <Label>予算現額</Label>
          <span>0</span>
        </div>
        <div>
          <Label>負担累計</Label> 
          <span>-104,800</span>
        </div>
        <div>
          <Label>負担残額</Label>
          <span>104,800</span>
        </div>
        <div>
          <Label>予定累計</Label>
          <span>0</span>
        </div>
        <div>
          <Label>予定残額</Label>
          <span>104,800</span>
        </div>
      </SummaryBlock>
      <Table>
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
          {tableData.map(row => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.itemName}</td>
              <td>{row.specification}</td>
              <td>{row.quantity}</td>
              <td>{row.unit}</td>
              <td>{row.unitPrice.toLocaleString()}</td>
              <td>{row.price.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={6}>
              <Label>金額合計</Label>
            </td>
            <td>{totalAmount.toLocaleString()}</td>
          </tr>
        </tfoot>
      </Table>
      <ButtonRow>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonRow>
    </Container>
  );
};

const Container = styled.div`
  font-size: 14px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

const DateBlock = styled.div`
  margin-bottom: 10px;
`;

const Row = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

const TextInput = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Label = styled.label`
  width: 100px;
`;

const RadioRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

const RadioButton = styled.input`
  margin-left: 10px;
`;

const RadioLabel = styled.label`
  margin-right: 10px;
`;

const SectionLabel = styled.h3`
  margin-bottom: 10px;
`;

const SummaryBlock = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  > div {
    width: 100px;
  }
`;

const Table = styled.table`
  width: 100%;
  margin-bottom: 20px;
  border-collapse: collapse;
  th, td {
    border: 1px solid #ccc;
    padding: 5px;
    text-align: center; 
  }
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
`;

// サンプルデータ
const sampleData: OrderEntryProps = {
  date: "令和30年06月25日",
  customerName: "予算編成係高橋良",
  customerAddress: "会計1課予算出庫ほほ",
  orderNumber: "041008",  
  productCode: "9999999",
  quantity: 1.0,
  unitPrice: 104800,
  totalPrice: 104800,
  scheduledDate: "令和30年06月25日",
  totalAmount: 2205950,
  tableData: [
    {
      id: "0000701015", 
      itemName: "瀝青樽",
      specification: "φ200㎜",
      quantity: 1.00,
      unit: "m",
      unitPrice: 2205950,
      price: 2205950,
    },
  ],
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <OrderEntry {...sampleData} />
    </div>
  );  
};

export default App;