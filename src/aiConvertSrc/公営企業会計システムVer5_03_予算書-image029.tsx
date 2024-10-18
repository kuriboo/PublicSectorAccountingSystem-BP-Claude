import React from 'react';
import styled from '@emotion/styled';

type SettlementOrderProps = {
  orders: Array<{
    id: string;
    name: string;
    amount: number;
    priceIncludingTax: number;
    priceExcludingTax: number;
  }>;
  onSave: () => void;
  onCheck: () => void;
  onEnd: () => void;
};

const SettlementOrder: React.FC<SettlementOrderProps> = ({
  orders,
  onSave,
  onCheck,
  onEnd,
}) => {
  return (
    <Container>
      <Header>
        <Title>説明欄訂正</Title>
        <DateText>令和4年7月20日</DateText>
      </Header>
      <Content>
        <Form>
          <FormRow>
            <Label>説明欄情報</Label>
            <Input defaultValue="1" />
            <Label>予算編成区分</Label>
            <Select>
              <option>当初予算</option>
            </Select>
            <Label>補正</Label>
            <RadioGroup>
              <RadioButton type="radio" />
              <RadioButtonLabel>見積要求額</RadioButtonLabel>
              <RadioButton type="radio" defaultChecked />
              <RadioButtonLabel>査定額</RadioButtonLabel>
            </RadioGroup>
          </FormRow>
          <FormRow>
            <Label>予算科目</Label>
            <Input defaultValue="00101001 他会計補助金" />
            <RadioGroup>
              <RadioButton type="radio" defaultChecked />
              <RadioButtonLabel>全体</RadioButtonLabel>
              <RadioButton type="radio" />
              <RadioButtonLabel>セグメント</RadioButtonLabel>
            </RadioGroup>
          </FormRow>
          <ButtonsContainer>
            <Button onClick={onSave}>明細編集</Button>
            <Button onClick={onCheck}>行削除</Button>
          </ButtonsContainer>
        </Form>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>行番号</TableHeaderCell>
              <TableHeaderCell>説明</TableHeaderCell>
              <TableHeaderCell>説明欄</TableHeaderCell>
              <TableHeaderCell>金額(千円)</TableHeaderCell>
              <TableHeaderCell>金額(円)</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.name}</TableCell>
                <TableCell>{order.name}</TableCell>
                <TableCell>{order.priceIncludingTax}</TableCell>
                <TableCell>{order.priceExcludingTax}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Content>
      <Footer>
        <FooterButton onClick={onEnd}>終了</FooterButton>
        <FooterButton primary onClick={onCheck}>
          OK
        </FooterButton>
        <FooterButton>クリア</FooterButton>
      </Footer>
    </Container>
  );
};

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  margin: 0;
`;

const DateText = styled.p`
  margin: 0;
`;

const Content = styled.div`
  flex: 1;
  padding: 10px;
`;

const Form = styled.div`
  margin-bottom: 20px;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Input = styled.input`
  margin-right: 10px;
  padding: 5px;
`;

const Select = styled.select`
  margin-right: 10px;
  padding: 5px;
`;

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
`;

const RadioButton = styled.input`
  margin-right: 5px;
`;

const RadioButtonLabel = styled.label`
  margin-right: 10px;
`;

const ButtonsContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  margin-right: 10px;
  padding: 5px 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead``;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableHeaderCell = styled.th`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ccc;
`;

const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  background-color: #f0f0f0;
`;

const FooterButton = styled.button<{ primary?: boolean }>`
  margin-left: 10px;
  padding: 5px 10px;
  background-color: ${({ primary }) => (primary ? '#007bff' : '#fff')};
  color: ${({ primary }) => (primary ? '#fff' : '#000')};
  border: none;
  cursor: pointer;
`;

// Sample usage
const App: React.FC = () => {
  const sampleOrders = [
    {
      id: '10',
      name: '一般会計補助金',
      amount: 20,
      priceIncludingTax: 10001,
      priceExcludingTax: 0,
    },
    {
      id: '20',
      name: '一般会計補助金',
      amount: 30,
      priceIncludingTax: 20001,
      priceExcludingTax: 0,
    },
  ];

  const handleSave = () => {
    // Handle save logic
  };

  const handleCheck = () => {
    // Handle check logic
  };

  const handleEnd = () => {
    // Handle end logic
  };

  return (
    <SettlementOrder
      orders={sampleOrders}
      onSave={handleSave}
      onCheck={handleCheck}
      onEnd={handleEnd}
    />
  );
};

export default App;