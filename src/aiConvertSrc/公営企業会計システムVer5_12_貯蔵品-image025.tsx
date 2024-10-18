import React from 'react';
import styled from '@emotion/styled';

interface OrderEntryProps {
  documentNumber: string;
  year: number;
  registrationDiv: string;
  workingStatus: string;
  preauditStatus: string;
  remarks: string;
  detailsItems: DetailItem[];
  onOK: () => void;
  onCancel: () => void;
  onEnd: () => void;
}

interface DetailItem {
  itemNumber: string;
  divA1: string;
  unitPrice: number;
  quantity: number;
  unit: string;
  amount: number;
  schedule: string;
  scheduleNumber: number;
}

const Container = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  margin: 0;
`;

const CompanyName = styled.div`
  font-size: 14px;
`;

const Content = styled.div`
  background-color: white;
  padding: 16px;
  border-radius: 4px;
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
`;

const TableHeader = styled.thead`
  background-color: #f0f0f0;
`;

const TableHeaderCell = styled.th`
  padding: 8px;
  text-align: left;
  font-size: 14px;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableCell = styled.td`
  padding: 8px;
  border-top: 1px solid #ccc;
  font-size: 14px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const OrderEntry: React.FC<OrderEntryProps> = ({
  documentNumber,
  year,
  registrationDiv,
  workingStatus,
  preauditStatus,
  remarks,
  detailsItems,
  onOK,
  onCancel,
  onEnd,
}) => {
  return (
    <Container>
      <Header>
        <Title>売上伝票入力(先入先出)</Title>
        <CompanyName>行政市水道事業会計</CompanyName>
      </Header>
      <Content>
        <FormGroup>
          <Label>伝票番号</Label>
          <Input type="text" value={documentNumber} readOnly />
        </FormGroup>
        <FormGroup>
          <Label>年度</Label>
          <Input type="number" value={year} readOnly />
        </FormGroup>
        <FormGroup>
          <Label>登録区分</Label>
          <Select value={registrationDiv} disabled>
            <option value="新規">新規</option>
            <option value="訂正">訂正</option>
            <option value="削除">削除</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>起票区分</Label>
          <Input type="text" value="∞∞町∞丁目" readOnly />
        </FormGroup>
        <FormGroup>
          <Label>工事名称</Label>
          <Input type="text" value="∞∞市町区の出庫戸し" readOnly />
        </FormGroup>
        <Table>
          <TableHeader>
            <tr>
              <TableHeaderCell>品番</TableHeaderCell>
              <TableHeaderCell>品名</TableHeaderCell>
              <TableHeaderCell>規格</TableHeaderCell>
              <TableHeaderCell>数量</TableHeaderCell>
              <TableHeaderCell>単位</TableHeaderCell>
              <TableHeaderCell>金額</TableHeaderCell>
              <TableHeaderCell>予定</TableHeaderCell>
              <TableHeaderCell>当初出庫年度</TableHeaderCell>
              <TableHeaderCell>当初出庫番号</TableHeaderCell>
            </tr>
          </TableHeader>
          <TableBody>
            {detailsItems.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.itemNumber}</TableCell>
                <TableCell>{item.divA1}</TableCell>
                <TableCell>{item.unitPrice}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.unit}</TableCell>
                <TableCell>{item.amount}</TableCell>
                <TableCell>{item.schedule}</TableCell>
                <TableCell>{item.scheduleNumber}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Content>
      <Footer>
        <Button onClick={onOK}>OK</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onEnd}>終了</Button>
      </Footer>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const sampleData: OrderEntryProps = {
    documentNumber: '9999999',
    year: 30,
    registrationDiv: '新規',
    workingStatus: '予算',
    preauditStatus: '訂正',
    remarks: '貯蔵品の出庫戸し',
    detailsItems: [
      {
        itemNumber: '000099000',
        divA1: 'DIP(A1)',
        unitPrice: 75,
        quantity: 1,
        unit: '本',
        amount: 10000,
        schedule: '30年06月25日',
        scheduleNumber: 15,
      },
    ],
    onOK: () => alert('OK clicked'),
    onCancel: () => alert('Cancel clicked'), 
    onEnd: () => alert('End clicked'),
  };

  return <OrderEntry {...sampleData} />;
};

export default App;